import React, { useState } from 'react';
import './App.css';
import SNavbar from "./components/SNavbar";
import HNavbar from "./components/HNavbar";
import Footer from "./components/Footer";
import GHome from "./pages/GuestHome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import LHome from "./pages/Learner/LearnerHome";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  return (
    <Router>
      <div>
        {isLoggedIn ? <HNavbar onLogout={handleLogout} /> : <SNavbar />}
        <Routes>
          <Route path="/GuestHome" element={<GHome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/LearnerHome" element={<LHome />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </>
          ) : (
            <>
              <Route path="/LearnerHome" element={<Navigate to="/login" />} />
              <Route path="/About" element={<Navigate to="/login" />} />
              <Route path="/Contact" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
