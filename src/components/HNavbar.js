import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileIcon from '../assets/person-circle.png';

function HNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  function toggleProfile() {
    setProfileOpen(!profileOpen);
  }

  function handleLogout() {
    localStorage.removeItem('user');
    setProfileOpen(false);
    navigate('/');
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* Mobile Header */}
      <div className="container-fluid">
        <div className="navbar-mobile">
          <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
          <div className="logo-center">
            <Link to="/LearnerHome"><img src={logo} alt="Logo" className="logo-img" /></Link>
          </div>
          <div className="right">
            <div ref={profileRef}  className="profile-dropdown-wrapper" onClick={toggleProfile}>
              <img src={profileIcon} alt="Profile" className="profile-icon" />
              {profileOpen && (
                <div className="profile-dropdown">
                  <Link to="/profile" onClick={() => setProfileOpen(false)}>Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
           </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="mobile-links">
            <Link to="/LearnerHome" onClick={toggleMenu}>Home</Link>
            <Link to="/About" onClick={toggleMenu}>About Us</Link>
            <Link to="/Coachers" onClick={toggleMenu}>Coach Directory</Link>
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
            <Link to="/LearnerHome" className="navbar-brand"><img className='logo' src={logo} alt='Logo' /></Link>
          </div>
          <div className="col-md-10 nav_items">
            <ul className="nav justify-content-center align align-items-center">
              <li className="nav-item">
                <Link to="/LearnerHome" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Coachers" className="nav-link">Coach Directory</Link>
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
              <li ref={profileRef}  className="nav-item profile-dropdown-wrapper" onClick={toggleProfile}>
                <img src={profileIcon} alt="Profile" className="profile-icon" />
                {profileOpen && (
                  <div className="profile-dropdown">
                    <Link to="/profile" onClick={() => setProfileOpen(false)}>Profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HNavbar;
