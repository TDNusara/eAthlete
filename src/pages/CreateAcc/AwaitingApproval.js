import React from 'react';
import "./waitingPage.css";
import { useNavigate } from 'react-router-dom';

function AwaitingApproval() {

  const navigate = useNavigate();

  const goToGuestHome = () => {
    navigate('/GuestHome');
  };

  return (
    <div className="text-center p-8">
      <h2 className="header text-2xl font-bold text-gray-800 mb-4 ">Awaiting Admin Approval</h2>
      <p className="text-gray-600">
        Your account has been created successfully and is pending approval by an administrator.
        <br />
        You will be able to log in once your account is approved.
      </p>
      <button
        onClick={goToGuestHome}
        className="Gohomebtn"
      >
        Go to Guest Home
      </button>
    </div>
  );
}

export default AwaitingApproval;
