import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS for styling
import { Link } from 'react-router-dom';
import './Home.css'; // External CSS for better management

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.5 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      
      {/* Hero section */}
      <div className="hero-container">
        <img
          src="http://alum.fisat.ac.in/img/fisat.jpeg"
          className="hero-image"
          alt="Campus Hero"
        />
        <h1 className="hero-title">Welcome to Campus Connect</h1>
      </div>

      {/* Main content */}
      <div className="main-container">
        <div className="content">
          <Section 
            heading="Stay Updated with Announcements & Notifications" 
            content="Receive real-time notifications about important announcements, academic schedules, and events." 
          />
          <Section 
            heading="Engage in Group Chats" 
            content="Join group chats for your courses, clubs, and student organizations to collaborate and stay connected." 
          />
          <Section 
            heading="Manage Events & Activities" 
            content="Keep track of campus events, workshops, sports activities, and seminars with our event management system." 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Section = ({ heading, content }) => {
  return (
    <div className="section scroll-animate">
      <h3 className="section-heading">{heading}</h3>
      <p className="section-paragraph">{content}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Campus Connect. All Rights Reserved.</p>
      <div>
        <Link to="/terms" className="footer-link">Terms of Service</Link> | 
        <Link to="/privacy" className="footer-link"> Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Home;