
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import LoginImg from "../assets/Login.png";
import TextField from '../components/LoginComponents/TextField';
import PasswordField from '../components/LoginComponents/PasswordField';
import { Link } from 'react-router-dom';
import Footer2 from "../components/Footer2";
import Navbar from "../components/NavbarManager";


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost/eAthlete/backend/api/login.php', {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        if (onLogin) onLogin(res.data.user);

        // Role-based redirect
        const userType = res.data.user.UserType;
        if (userType === 'Learner') {
          navigate('/LearnerHome');
        } else if (userType === 'Coach') {
          navigate('/CoachHomePage');
        } else if (userType === 'Seller') {
          navigate('/SellerHome');
        } else if (userType === 'Admin') {
          navigate('/AdminDashboard');
        } else {
          navigate('/'); // fallback
        }
      } else {
        setError(res.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const [Uname, setUName] = useState('');
  const [Pword, setPWord] = useState('');


  return (
    <>
    <div>
    <Navbar/>
    
    
      <div className="Login-container">
        
        <div className="FLEmpty">
          <div className="form-columns">
            <div class="Form-left">
              <img src={LoginImg} alt="login img" />
            </div>
            <div className="Form-right">
              <br/>
              <h2 className="HLogin">Log in</h2>
              <br/>
              <TextField label="Username" value={Uname} onChange={(e) => setUName(e.target.value)} placeholder="Enter your Username" /><br/>
              <PasswordField label="Password" value={Pword} onChange={(e) => setPWord(e.target.value)} placeholder="Enter your Password" />
              <p className='LoginParagraph'><Link to="/HomePage" className="linkB">Forgot Password?</Link></p><br/>
              
              <button className="btnL" onClick={handleSubmit}>Login</button>
              
            <br/>
              <p>Don't have an account?<Link to="/SignUp" className="linkR">Signup</Link></p>
            </div>
          </div>
        </div>
      </div>
      
   </div>
   
   <Footer2/>
   </>
  );
}

export default Login;
