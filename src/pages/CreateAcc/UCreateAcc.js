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
import Footer2 from "../../components/Footer2";
import Navbar from "../../components/NavbarManager";
import BackButton from '../../components/LoginComponents/BackButton';
import CloseButton from '../../components/LoginComponents/CloseButton';

function UCreateAcc() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Date, setDate] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [UserName, setUserName] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault(); // Prevent form refresh

  const formData = {
    firstName: FirstName,
    lastName: LastName,
    date:Date,
    phoneNumber: PhoneNumber,
    email: Email,
    userName: UserName,
    newPassword: newpassword,
    confirmPassword: confirmpassword,
    };

  console.log("Submitted Form Data from user create Account:", formData);
  }; 
  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setDate('');
    setPhoneNumber('');
    setEmail('');
    setUserName('');
    setnewPassword('');
    setconfirmPassword('');
    console.log("Form reset");
  };


  return (
    <>
      <div>
        <Navbar />
        <div className="FLearner">
          <div className="FCVEmpty">

            <form className="form-container" onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <Link to={"/LearnerSportCategoryLogin"}><BackButton /></Link>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <h2 className='FLh'>Create An Account</h2>
               
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <CloseButton />
                </div>
              </div>

              <div>
                <div></div>
                
                <div></div>
              </div>

              <div className="PP"><img src={ProfilePhoto} alt="PPhoto" /></div>
              <br /><br />

              <div className="form-row">
                <div className="Cform-group">
                  <TextField
                    label="First Name"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="Cform-group">
                  <TextField
                    label="Last Name"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="Cform-group">
                  <DatePicker
                    label="Date Of Birth"
                    value={Date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="Cform-group">
                  <PhoneNum
                    label="Phone Number"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your Phone Number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="Cform-group">
                  <EmailL
                    label="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example@gmail.com"
                  />
                </div>
                <div className="Cform-group">
                  <TextField
                    label="User Name"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Create a User Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="Cform-group">
                  <PasswordField
                    label="New Password"
                    value={newpassword}
                    onChange={(e) => setnewPassword(e.target.value)}
                    placeholder="Enter new Password"
                  />
                </div>
                <div className="Cform-group">
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


              <div className="btnGroup">

                {/* <Link to="/LearnerSportCategoryLogin"><button className="btnL">Back</button></Link> */}
                <RedButton type="submit" title="Create New Account" />
                <button className="btnL" type="button" onClick={handleReset}> Reset</button>
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
        <Footer2 />
      </div>
    </>
  );
}

export default UCreateAcc;
