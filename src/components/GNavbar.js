import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function GNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav>
      {/* Mobile Header */}
      <div className="container-fluid">
        <div className="navbar-mobile">
          <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
          <div className="logo-center">
            <Link to="/GuestHome"><img src={logo} alt="Logo" className="logo-img" /></Link>
          </div>
          <div className="signin">
            <Link to="/Login" className="nav-btn">Sign In</Link>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="mobile-links">
            <Link to="/GuestHome" onClick={toggleMenu}>Home</Link>
            <Link to="/About" onClick={toggleMenu}>About Us</Link>
            <Link to="/" onClick={toggleMenu}>Articles</Link>
            <Link to="/" onClick={toggleMenu}>Grab Your Gears</Link>
            <Link to="/Contact" onClick={toggleMenu}>Contact Us</Link>
          </div>
        )}
      </div>
      

      {/* Desktop Navbar */}
      <div className="container-fluid">
        <div className="row deskNavbar">
          <div className="col-md-2 logo">
            <Link to="/GuestHome" className="navbar-brand"><img className='logo' src={logo} alt='Logo' /></Link>
          </div>
          <div className="col-md-10 nav_items">
            <ul className="nav justify-content-center align align-items-center">
              <li className="nav-item">
                <Link to="/GuestHome" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Articles</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Grab Your Gears</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <button type="button" class="signin "><Link to="/Login" className="nav-btn">Sign In</Link></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default GNavbar;
