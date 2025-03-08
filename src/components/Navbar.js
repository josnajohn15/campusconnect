import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Campus Connect</h2>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><Link to="/home" className="navbar-link">Home</Link></li>
        <li><Link to="/announcements" className="navbar-link">Announcements</Link></li>
        <li><Link to="/groupchats" className="navbar-link">Group Chats</Link></li>
        <li><Link to="/events" className="navbar-link">Events</Link></li>
        <li><Link to="/resources" className="navbar-link">Resources</Link></li>
        <li><Link to="/chatbot" className="navbar-link">ChatBot</Link></li>
        <li><Link to="/logout" className="navbar-link logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
