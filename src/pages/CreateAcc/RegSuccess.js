import React from 'react';
import "./waitingPage.css";
import { useNavigate } from 'react-router-dom';

function RegSuccess() {

  const navigate = useNavigate();

  const goToGuestHome = () => {
    navigate('/GuestHome');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="text-center p-8">
      <h2 className="header text-2xl font-bold text-gray-800 mb-4 ">Registration is Success</h2>
      <p className="text-gray-600">
        Your account has been successfully created and you can now log in to our system.
        <br />
        Your training plan will be created within 24 hours.
      </p>
      <div className='row'>
        <div className='col-12'>
            <button
                onClick={goToLogin}
                className="loginbtn"
            >
                Login 
            </button>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
            <button
                onClick={goToGuestHome}
                className="Gohomebtn2"
            >
                Go to Guest Home
            </button>
        </div>
      </div>
      
      
    </div>
  );
}

export default RegSuccess;
