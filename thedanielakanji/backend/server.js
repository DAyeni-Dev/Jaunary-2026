const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');
const Booking = require('./models/Booking');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File System Paths
const bookingsFile = path.join(__dirname, 'data', 'bookings.json');
const contactsFile = path.join(__dirname, 'data', 'contacts.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// MongoDB Connection
let dbConnected = false;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    dbConnected = true;
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.log('Falling back to File System storage...');
    dbConnected = false;
  });

// Validation Helper
const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name || name.trim().length < 3) return 'Name must be at least 3 characters';
  if (!nameRegex.test(name.trim())) return 'Name must contain only letters';
  return null;
};

// Helper functions for File System operations
const readData = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
};

const writeData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing to file ${filePath}:`, error);
    return false;
  }
};

// Routes
app.get('/', (req, res) => {
  res.send(`API is running (${dbConnected ? 'MongoDB' : 'File System'} Mode)...`);
});

// Admin Authentication Middleware
const authenticateAdmin = (req, res, next) => {
  const { authorization } = req.headers;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'DanielAkanji';
  
  if (authorization === `Bearer ${ADMIN_PASSWORD}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Admin Login Endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'The Daniel Akanji';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'DanielAkanji';
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ token: ADMIN_PASSWORD, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Get all bookings (Protected)
app.get('/api/bookings', authenticateAdmin, async (req, res) => {
  try {
    if (dbConnected) {
      const bookings = await Booking.find().sort({ createdAt: -1 });
      res.json(bookings);
    } else {
      const bookings = readData(bookingsFile);
      // Sort by createdAt desc if possible, or just reverse
      res.json(bookings.reverse());
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Get all contacts (Protected)
app.get('/api/contacts', authenticateAdmin, async (req, res) => {
  try {
    if (dbConnected) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json(contacts);
    } else {
      const contacts = readData(contactsFile);
      res.json(contacts.reverse());
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Booking Endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, category, categoryOther, service, serviceOther, message } = req.body;

    console.log('Received booking data:', req.body);

    if (!name || !email || !category || !service || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    const nameError = validateName(name);
    if (nameError) {
      return res.status(400).json({ error: nameError });
    }

    const bookingData = {
      name,
      email,
      category,
      categoryOther,
      service,
      serviceOther,
      message,
      createdAt: new Date()
    };

    if (dbConnected) {
      const newBooking = new Booking(bookingData);
      await newBooking.save();
      console.log('Booking saved to database:', newBooking._id);
      res.status(201).json({ message: 'Booking request received successfully', booking: newBooking });
    } else {
      const bookings = readData(bookingsFile);
      const newBooking = { _id: Date.now().toString(), ...bookingData };
      bookings.push(newBooking);
      writeData(bookingsFile, bookings);
      console.log('Booking saved to file:', newBooking._id);
      res.status(201).json({ message: 'Booking request received successfully', booking: newBooking });
    }
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log('Received contact message:', req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }

    const nameError = validateName(name);
    if (nameError) {
      return res.status(400).json({ error: nameError });
    }

    const contactData = {
      name,
      email,
      subject: subject || 'No Subject',
      message,
      createdAt: new Date()
    };

    if (dbConnected) {
      const newContact = new Contact(contactData);
      await newContact.save();
      console.log('Contact message saved to database:', newContact._id);
      res.status(201).json({ message: 'Message sent successfully', contact: newContact });
    } else {
      const contacts = readData(contactsFile);
      const newContact = { _id: Date.now().toString(), ...contactData };
      contacts.push(newContact);
      writeData(contactsFile, contacts);
      console.log('Contact message saved to file:', newContact._id);
      res.status(201).json({ message: 'Message sent successfully', contact: newContact });
    }
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
