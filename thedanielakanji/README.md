# The Daniel Akanji - Portfolio Website

A professional portfolio and booking website built with the MERN stack (MongoDB, Express, React, Node.js). This project showcases services, portfolio projects, and allows clients to book consultations or get in touch. It also features a secure Admin Dashboard for managing content.

## 🚀 Features

- **Modern UI/UX**: Built with React and Tailwind CSS for a responsive and beautiful design.
- **Portfolio Showcase**: Dynamic project gallery.
- **Service Booking**: Integrated booking forms for various services.
- **Contact System**: Contact forms powered by EmailJS for instant notifications.
- **Admin Dashboard**:
  - Secure login authentication.
  - Manage content and view submissions (extensible).
- **Backend API**: Node.js & Express server handling API requests.
- **Database**: MongoDB Atlas for data persistence.

## 🛠️ Tech Stack

### Frontend
- **React** (Vite)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **EmailJS** (Email notifications)
- **Lucide React** (Icons)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT** (Authentication)
- **Cors** & **Dotenv**

## 📂 Project Structure

```
thedanielakanji/
├── backend/             # Node.js/Express Backend
│   ├── models/          # MongoDB Models
│   ├── routes/          # API Routes
│   └── server.js        # Server Entry Point
├── src/                 # React Frontend
│   ├── components/      # Reusable Components
│   ├── hooks/           # Custom Hooks (useFormSubmit, etc.)
│   ├── pages/           # Page Components (Home, Book, Portfolio, etc.)
│   ├── utils/           # Utility functions (validation)
│   └── App.jsx          # Main App Component
└── ...
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the Repository
```bash
git clone https://github.com/DAyeni-Dev/The-Daniel-Akanji.git
cd The-Daniel-Akanji/thedanielakanji
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password
```

Start the backend server:
```bash
node server.js
# or
npm start
```

### 3. Frontend Setup
Open a new terminal, navigate to the project root (frontend), and install dependencies:
```bash
cd ..
npm install
```

Create a `.env` file in the `thedanielakanji/` (root) directory:
```env
VITE_API_URL=http://localhost:5000
```
*(Note: For production, this should point to your deployed backend URL)*

Start the development server:
```bash
npm run dev
```

## 🌍 Deployment

### Backend (Render)
1. Push code to GitHub.
2. Create a new Web Service on Render.
3. Set Root Directory to `thedanielakanji/backend`.
4. Set Build Command: `npm install`
5. Set Start Command: `node server.js`
6. Add Environment Variables from your backend `.env`.

### Frontend (Vercel)
1. Import project to Vercel.
2. Set Root Directory to `thedanielakanji`.
3. Add Environment Variable:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://your-app.onrender.com`)
4. Deploy!

## 🤝 Contributing
Feel free to submit issues and enhancement requests.

## 📄 License
This project is licensed under the MIT License.
