import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct path to Navbar component
import Login from './pages/Login';  // Correct path to Login page
import Announcements from './pages/Announcements';  // Correct path to Announcements page  // Correct path to GroupChats page
import Events from './pages/Events';  // Correct path to Events page
import Resources from './pages/Resources';  // Correct path to Resources page
import ChatbotComponent from './pages/Chatbot'; // Ensure correct path
 // Correct path to Feedback page
import Home from './pages/Home';
import Register from './pages/Register';
import GroupChats from './pages/GroupChats'; // Adjust the path to the correct location
import Logout from './pages/Logout';

// Add these routes inside <Routes>




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/home" 
          element={<><Navbar /><Home/></>} 
        />

        <Route 
          path="/announcements" 
          element={<><Navbar /><Announcements /></>} 
        />
         <Route 
          path="/groupchats" 
          element={<><Navbar /><GroupChats /></>} 
        />
        
        <Route
          path="/events" 
          element={<><Navbar /><Events /></>} 
        />
        <Route 
          path="/resources" 
          element={<><Navbar /><Resources /></>} 
        />
        <Route 
          path="/chatbot" 
          element={<><Navbar /><ChatbotComponent /></>} 
        />
        
        <Route 
          path="/logout" 
          element={<><Navbar /><Logout /></>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
