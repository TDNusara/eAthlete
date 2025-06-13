import React from "react";
import './App.css';
import SNavbar from "./components/SNavbar";
import GHome from "./pages/GuestHome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <SNavbar />
        <Routes>
          <Route path="/GuestHome" element={<GHome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
