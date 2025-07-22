
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import LoginImg from "../assets/Login.png";
import TextField from '../components/LoginComponents/TextField';
import PasswordField from '../components/LoginComponents/PasswordField';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    onLogin();               // update isLoggedIn in App
    navigate('/LearnerHome'); // redirect to LearnerHome
  };
  const [Uname, setUName] = useState('');
  const [Pword, setPWord] = useState('');


  return (
    <>
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

    </>
  );
}

export default Login;

