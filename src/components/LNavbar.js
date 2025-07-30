import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileIcon from '../assets/person-circle.png';

function LNavbar({onLogout}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const [sportName, setSportName] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.SportName) {
      setSportName(user.SportName);
    } else {
      setSportName(null);
    }
  }, []);

  useEffect(() => {
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserType(user.UserType || null);
      } catch {
        setUserType(null);
      }
    } else {
      setUserType(null);
    }
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  function toggleProfile() {
    setProfileOpen(!profileOpen);
  }

  function handleLogout() {
    localStorage.removeItem('user');
    setProfileOpen(false);
    setUserType(null);
    if (onLogout) onLogout();  
    navigate('/');
  }


  const homeLink = (() => {
    switch (userType) {
      case 'Coach':
        return '/CoachHomePage';
      case 'Seller':
        return '/SellerHome';
      case 'Learner':
        return '/LearnerHome';
      case 'Admin':
        return '/AdminDashboard';
      default:
        return '/';
    }
  })();

  
  const homeLabel = 'Home';

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
            <Link to={homeLink}>
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="right">
            <div
              ref={profileRef}
              className="profile-dropdown-wrapper"
              onClick={toggleProfile}
            >
              <img src={profileIcon} alt="Profile" className="profile-icon" />
              {profileOpen && (
                <div className="profile-dropdown">
                    {(() => {
                      if (userType === 'Learner') {
                        return (
                          <Link to="/ProfilePage" onClick={() => setProfileOpen(false)}>
                            Profile
                          </Link>
                        );
                      } else if (userType === 'Coach') {
                        return (
                          <Link to="/CoachProfilePage" onClick={() => setProfileOpen(false)}>
                            Profile
                          </Link>
                        );
                      } else if (userType === 'Seller') {
                        return (
                          <Link to="/SellerProfilePage" onClick={() => setProfileOpen(false)}>
                            Profile
                          </Link>
                        );
                      } else {
                        return null;
                      }
                    })()}

                    <button onClick={handleLogout}>Logout</button>
                  </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="mobile-links">
            <Link to={homeLink} onClick={toggleMenu}>{homeLabel}</Link>
            <Link to="/About" onClick={toggleMenu}>About Us</Link>
            {(() => {
              if (userType === 'Learner' && sportName === 'Karate') {
                return (
                  <Link to="/KarateLessonMenu" onClick={toggleMenu}>My Plan</Link>
                );
              } else if (userType === 'Learner') {
                return (
                  <Link to="/LearnerSchedule" onClick={toggleMenu}>My Plan</Link>
                );
              }
            })()}
            <Link to="/Articles" onClick={toggleMenu}>Articles</Link>
            <Link to="/Store" onClick={toggleMenu}>Grab Your Gears</Link>
            <Link to="/Contact" onClick={toggleMenu}>Contact Us</Link>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="container-fluid">
        <div className="row deskNavbar">
          <div className="col-md-2 logo">
            <Link to={homeLink} className="navbar-brand">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-md-10 nav_items">
            <ul className="nav justify-content-center align align-items-center">
              <li className="nav-item">
                <Link to={homeLink} className="nav-link active">{homeLabel}</Link>
              </li>
              {(() => {
                if (userType === 'Learner' && sportName=== 'Karate') {
                  return (
                    <Link to="/KarateLessonMenu" className="nav-link" onClick={toggleMenu}>My Plan</Link>
                  );
                } else if (userType === 'Learner') {
                  return (
                    <Link to="/LearnerSchedule" className="nav-link" onClick={toggleMenu}>My Plan</Link>
                  );
                }
              })()}
              <li className="nav-item">
                <Link to="/About" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/Articles" className="nav-link">Articles</Link>
              </li>
              <li className="nav-item">
                <Link to="/Store" className="nav-link">Grab Your Gears</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact Us</Link>
              </li>
              <li
                ref={profileRef}
                className="nav-item profile-dropdown-wrapper"
                onClick={toggleProfile}
              >
                <img src={profileIcon} alt="Profile" className="profile-icon" />
                {profileOpen && (
                  <div className="profile-dropdown">
                    {(() => {
                      if (userType === 'Learner') {
                        return (
                          <Link to="/ProfilePage" onClick={() => setProfileOpen(false)}>
                            Profile
                          </Link>
                        );
                      } else if (userType === 'Coach') {
                        return (
                          <Link to="/CoachProfilePage" onClick={() => setProfileOpen(false)}>
                            Profile
                          </Link>
                        );
                      } else if (userType === 'Seller') {
                        return (
                          <Link to="/SellerProfilePage" onClick={() => setProfileOpen(false)}>
                            Profile
                          </Link>
                        );
                      } else {
                        return null;
                      }
                    })()}

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

export default LNavbar;
