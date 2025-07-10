import Footer2 from "../components/Footer2";

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onLogin();               // update isLoggedIn in App
    navigate('/LearnerHome'); // redirect to LearnerHome
  };

  return (
    <div>
      <h2>Login</h2>
      <button className="btn" onClick={handleSubmit}>Login</button>
      <Footer2 />
    </div>
  );
}

export default Login;

