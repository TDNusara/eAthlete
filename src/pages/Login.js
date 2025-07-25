import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import LoginImg from '../assets/Login.png';
import TextField from '../components/LoginComponents/TextField';
import PasswordField from '../components/LoginComponents/PasswordField';
import "../css/LoginRegistration.css"

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

        const userType = res.data.user.UserType;
        if (userType === 'Learner') {
          navigate('/LearnerHome');
        } else if (userType === 'Coach') {
          navigate('/CoachHomePage');
        } else if (userType === 'Seller') {
          navigate('/SellerHome');
        } else if (userType === 'Admin') {
          navigate('/AdminPanelUrl');
        } else {
          navigate('/');
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

  return (
    <div className="Login-container">
      <div className="FLEmpty">
        <div className="form-columns">
          <div className="Form-left">
            <img src={LoginImg} alt="login img" />
          </div>
          <div className="Form-right">
            <br />
            <h2 className="HLogin">Log in</h2>
            <br />
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
            />
            <br />
            <PasswordField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <p className='LoginParagraph'>
              <Link to="/HomePage" className="linkB">Forgot Password?</Link>
            </p>
            <br />
            <button className="btnL" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
            <br />
            <p>Don't have an account? <Link to="/SignUp" className="linkR">Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
