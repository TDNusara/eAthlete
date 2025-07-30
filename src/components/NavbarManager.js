import React, { useEffect, useState } from 'react';
import LNavbar from './LNavbar';
import GNavbar from './GNavbar';

function NavbarManager() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  function checkLoginStatus() {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }

  return isLoggedIn ? <LNavbar onLogout={checkLoginStatus} /> : <GNavbar />;
}

export default NavbarManager;
