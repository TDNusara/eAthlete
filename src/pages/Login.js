
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import LoginImg from "../assets/Login.png";
import TextField from '../components/LoginComponents/TextField';
import PasswordField from '../components/LoginComponents/PasswordField';
import { Link } from 'react-router-dom';
import SNavbar from "../components/SNavbar";
import Footer from "../components/Footer";


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

   /* <>
    <div>
      <SNavbar/>
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
       <br/>
      <Footer />*/

    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <button type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

    </div>
   // </>
  );
}

export default Login;
