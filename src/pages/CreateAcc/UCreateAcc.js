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
    <div class="FLearner">
      <div class="FCEmpty">
        <h2 className='FLh'>Create an Account</h2>
        <div class="PP"><img src={ProfilePhoto} alt="PPhoto" /></div>

        <div className="Uform-columns">

          <div class="Form-left">

            <TextField label="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your First Name" />
            <DatePicker label="Date Of Birth" value={Date} onChange={(e) => setDate(e.target.value)} placeholder="YYYY-MM-DD" />
            <EmailL label="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Example@gmail.com" />
            <PasswordField label="New Password" value={newpassword} onChange={(e) => setnewPassword(e.target.value)} placeholder="Enter new Password" />


          </div>

          <div class="Form-right">


            <TextField label="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your Last Name" />
            <PhoneNum label="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your PhoneNumber " />
            <TextField label="User Name" value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder="Create a User Name" />
            <PasswordField label="Cofirm Password" value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder="Re-enter Password" />

          </div>

        </div>

        
          <CheckBoxAgree/>
          <RedButton/>
          <div class="Fbottom">
          <p class="Q1">Already have an account?<Link to="/Login" className="linkR">Login</Link></p>


          </div>

      </div>
    </div>
  );
}



export default UCreateAcc;

