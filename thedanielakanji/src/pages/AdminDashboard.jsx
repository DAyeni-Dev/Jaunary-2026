import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  DashboardIcon, 
  CalendarIcon, 
  MessageIcon, 
  LogOutIcon, 
  UserIcon, 
  HomeIcon, 
  AboutIcon, 
  ContactIcon, 
  BookIcon, 
  MenuIcon, 
  XIcon,
  BriefcaseIcon,
  SearchIcon
} from '../components/Icons';
import logo from '../assets/hero-bg.jpeg';
import userAvatar from '../assets/The-daniel-Akanji.jpeg';
import API_URL from '../config';

const StatCard = ({ title, count, icon: Icon, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4"
  >
    <div className={`p-3 rounded-lg ${color} text-white`}>
      <Icon />
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{count}</h3>
    </div>
  </motion.div>
);

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredBookings = bookings.filter(booking => 
    booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (booking.category === 'Other' ? booking.categoryOther : booking.category)?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (booking.service === 'Other' ? booking.serviceOther : booking.service)?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contacts.filter(contact => 
    contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setSearchTerm('');
  }, [activeTab]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const [bookingsRes, contactsRes] = await Promise.all([
          fetch(`${API_URL}/api/bookings`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_URL}/api/contacts`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (bookingsRes.ok && contactsRes.ok) {
          const bookingsData = await bookingsRes.json();
          const contactsData = await contactsRes.json();
          setBookings(bookingsData);
          setContacts(contactsData);
        } else {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#132347]"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#132347] text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-14 w-16 object-cover rounded-md" />
            <div>
              <h1 className="text-xl font-bold tracking-wider">ADMIN</h1>
              <p className="text-gray-400 text-xs mt-1">THE DANIEL AKANJI</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-300 hover:text-white">
            <XIcon />
          </button>
        </div>
        
        <nav className="flex-1 py-6 space-y-2 px-4">
          <button
            onClick={() => { setActiveTab('overview'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-[#FF9A4A] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <DashboardIcon />
            <span>Overview</span>
          </button>
          <button
            onClick={() => { setActiveTab('bookings'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'bookings' ? 'bg-[#FF9A4A] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <CalendarIcon />
            <span>Bookings</span>
          </button>
          <button
            onClick={() => { setActiveTab('contacts'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'contacts' ? 'bg-[#FF9A4A] text-white shadow-lg' : 'text-gray-300 hover:bg-white/10'
            }`}
          >
            <MessageIcon />
            <span>Messages</span>
          </button>
          
          <div className="pt-4 border-t border-gray-700 mt-2">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Website</p>
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <HomeIcon />
              <span>Home</span>
            </button>
            <button
              onClick={() => navigate('/about')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <AboutIcon />
              <span>About</span>
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <BriefcaseIcon />
              <span>Portfolio</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <ContactIcon />
              <span>Contact</span>
            </button>
            <button
              onClick={() => navigate('/book')}
              className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition-colors text-sm"
            >
              <BookIcon />
              <span>Book</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-300 hover:bg-red-500/10 transition-colors"
          >
            <LogOutIcon />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <header className="bg-white shadow-sm p-4 md:p-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden mr-4 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <MenuIcon />
            </button>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 capitalize">
              {activeTab === 'overview' ? 'Dashboard Overview' : activeTab}
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <img 
              src={userAvatar} 
              alt="User Avatar" 
              className="h-8 w-8 rounded-full object-cover border border-gray-200"
            />
            <span className="hidden md:inline text-sm font-medium text-gray-600">Daniel Akanjii</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                  title="Total Bookings" 
                  count={bookings.length} 
                  icon={CalendarIcon} 
                  color="bg-blue-600"
                />
                <StatCard 
                  title="Total Messages" 
                  count={contacts.length} 
                  icon={MessageIcon} 
                  color="bg-purple-600"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Bookings</h3>
                  {bookings.length === 0 ? (
                    <p className="text-gray-500">No bookings yet.</p>
                  ) : (
                    <ul className="space-y-3">
                      {bookings.slice(0, 5).map((booking, idx) => (
                        <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="min-w-0 flex-1 mr-4">
                            <p className="font-medium text-gray-800 truncate">{booking.name}</p>
                            <p className="text-xs text-gray-500 truncate">{booking.email}</p>
                          </div>
                          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                            {new Date(booking.createdAt || Date.now()).toLocaleDateString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Messages</h3>
                  {contacts.length === 0 ? (
                    <p className="text-gray-500">No messages yet.</p>
                  ) : (
                    <ul className="space-y-3">
                      {contacts.slice(0, 5).map((contact, idx) => (
                        <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="min-w-0 flex-1 mr-4">
                            <p className="font-medium text-gray-800 truncate">{contact.name}</p>
                            <p className="text-xs text-gray-500 truncate">{contact.message || 'No message content'}</p>
                          </div>
                          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                            {new Date(contact.createdAt || Date.now()).toLocaleDateString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">All Bookings</h3>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9A4A] focus:border-transparent"
                  />
                </div>
              </div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
             >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Enquiring As</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredBookings.map((booking, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-sm font-medium text-gray-900">{booking.name}</td>
                        <td className="p-4 text-sm text-gray-600">{booking.email}</td>
                        <td className="p-4 text-sm text-gray-600">
                          {booking.category === 'Other' ? booking.categoryOther : booking.category}
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {booking.service === 'Other' ? booking.serviceOther : booking.service}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {new Date(booking.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 text-sm text-gray-600 max-w-xs truncate" title={booking.message}>
                          {booking.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredBookings.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No bookings found matching your search.' : 'No bookings found.'}
                  </div>
                )}
              </div>
            </motion.div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">All Messages</h3>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9A4A] focus:border-transparent"
                  />
                </div>
              </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredContacts.map((contact, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-sm font-medium text-gray-900">{contact.name}</td>
                        <td className="p-4 text-sm text-gray-600">{contact.email}</td>
                        <td className="p-4 text-sm text-gray-600">{contact.subject}</td>
                        <td className="p-4 text-sm text-gray-600 max-w-md">
                          <div className="bg-gray-50 p-3 rounded-lg text-gray-700">
                            {contact.message}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                 {filteredContacts.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'No messages found matching your search.' : 'No messages found.'}
                  </div>
                )}
              </div>
            </motion.div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
