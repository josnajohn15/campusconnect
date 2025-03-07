import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for styling

const Navbar = () => {
  const blueColor = 'black'; // Consistent blue color

  return (
    <nav className="navbar" style={{ backgroundColor: blueColor }}>
      <div className="navbar-logo">
        <h2 style={{ color: 'white' }}></h2>
      </div>
      <ul className="navbar-links">
      <li><Link to="/home" className="navbar-link">Home</Link></li>
        <li><Link to="/announcements" className="navbar-link">Announcements</Link></li>
        <li><Link to="/groupchats" className="navbar-link">Group Chats</Link></li>
        <li><Link to="/events" className="navbar-link">Events</Link></li>
        <li><Link to="/resources" className="navbar-link">Resources</Link></li>
        <li><Link to="/chatbot" className="navbar-link">ChatBot</Link></li>
        <li><Link to="/logout" className="navbar-link">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
