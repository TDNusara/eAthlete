import React, { useState } from 'react';
import ProfilePhoto from "../../assets/LoginForm.png";
import TextField from "../../components/LoginComponents/TextField";
import DatePicker from "../../components/LoginComponents/DatePicker";
import PhoneNum from "../../components/LoginComponents/PhoneNum";
import EmailL from "../../components/LoginComponents/EmailL";
import PasswordField from "../../components/LoginComponents/PasswordField";
import CheckBoxAgree from '../../components/LoginComponents/CheckBoxAgree';
import RedButton from '../../components/LoginComponents/RedButton';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavbarManager';
import Footer from '../../components/Footer';

function UCreateAcc() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Date, setDate] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [UserName, setUserName] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  return (
    <>
      <Navbar />
      <div className="FLearner">
        <div className="FCVEmpty">

          <form className="form-container">

            <h2 className='FLh'>Create An Account</h2><br />
            <div className="PP"><img src={ProfilePhoto} alt="PPhoto" /></div>
            <br /><br />

            <div className="form-row">
              <div className="form-group">
                <TextField
                  label="First Name"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your First Name"
                />
              </div>
              <div className="form-group">
                <TextField
                  label="Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <DatePicker
                  label="Date Of Birth"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <div className="form-group">
                <PhoneNum
                  label="Phone Number"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your Phone Number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <EmailL
                  label="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="form-group">
                <TextField
                  label="User Name"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Create a User Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <PasswordField
                  label="New Password"
                  value={newpassword}
                  onChange={(e) => setnewPassword(e.target.value)}
                  placeholder="Enter new Password"
                />
              </div>
              <div className="form-group">
                <PasswordField
                  label="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  placeholder="Re-enter Password"
                />
              </div>
            </div>

            <div className="form-footer">
              <CheckBoxAgree />
            </div>

            <div className="form-row">
              <RedButton type="submit" />
            </div>

            <br />
            <div className="form-footer">
              <p>
                Already have an account? <Link to="/Login" className="linkR">Login</Link>
              </p>
            </div>

          </form>

        </div>
      </div>
      <br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default UCreateAcc;
