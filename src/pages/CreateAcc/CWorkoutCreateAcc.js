import React, { useState } from 'react';
import ProfilePhoto from "../../assets/LoginForm.png";
import TextField from "../../components/LoginComponents/TextField";
import TextAreaField from "../../components/LoginComponents/TextAreaField";
import PhoneNum from "../../components/LoginComponents/PhoneNum";
import EmailL from "../../components/LoginComponents/EmailL";
import PasswordField from "../../components/LoginComponents/PasswordField";
import CheckBoxAgree from '../../components/LoginComponents/CheckBoxAgree';
import RedButton from '../../components/LoginComponents/RedButton';
import { Link } from 'react-router-dom';
import DropdownField from '../../components/LoginComponents/DropdownField';
import BackButton from '../../components/LoginComponents/BackButton';
import CloseButton from '../../components/LoginComponents/CloseButton';
import Footer2 from "../../components/Footer2";
import Navbar from "../../components/NavbarManager";
import axios from 'axios';

function CVolleyballCreateAcc() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    username: '',
    password: '',
    email: '',
    userType: 'Coach',
    bio: '',
    district: '',
    phone: '',
    dplink: '',
    qualification: '',
    experience: '',
    sportID: '2', // Volleyball
    karateStyle: '' 
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      username: '',
      password: '',
      email: '',
      userType: 'Coach',
      bio: '',
      district: '',
      phone: '',
      dplink: '',
      qualification: '',
      experience: '',
      sportID: '2',
      karateStyle: ''
    });
    setConfirmPassword('');
  };

  

  return (
    <div>
      <Navbar/>
      <div className="FLearner">
      
      <div className="FCVEmpty">
        <form className="form-container" >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <Link to={"/CoachSportCategoryLogin"}><BackButton /></Link>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h2 className='FLh'>Create An Account</h2>
              
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <CloseButton />
            </div>
          </div>
          
          <div className="PP"><img src={ProfilePhoto} alt="PPhoto" /></div>
          <br /><br />

          <div className="form-row">
            <div className="Cform-group">
              <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" />
            </div>
            <div className="Cform-group">
              <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="Cform-group">
              <DropdownField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Female", "Male"]} />
            </div>
            <div className="Cform-group">
              <PhoneNum label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your Phone Number" />
            </div>
          </div>

          <div className="form-row">
            <div className="Cform-group">
              <TextField label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Enter your Achievements" />
            </div>
            <div className="Cform-group">
              <DropdownField label="Years of Experience" name="experience" value={formData.experience} onChange={handleChange} options={["1", "2", "3", "or more"]} />
            </div>
          </div>

          <div className="form-row">
            <div className="Cform-group">
              <TextField label="Location" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your District" />
            </div>
            <div className="Cform-group">
              <TextField label="Profile Photo" name="dplink" value={formData.dplink} onChange={handleChange} placeholder="Enter your photo drive link" rows={2} />
            </div>
          </div>

          <div className="form-row">
            <div className="Cform-group">
              <TextAreaField label="Bio" name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us about yourself" rows={2} />
            </div>
          </div>

          <div className="form-row">
            <div className="Cform-group">
              <EmailL label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="Example@gmail.com" />
            </div>
            <div className="Cform-group">
              <TextField label="User Name" name="username" value={formData.username} onChange={handleChange} placeholder="Create a User Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="Cform-group">
              <PasswordField label="New Password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter new Password" />
            </div>
            <div className="Cform-group">
              <PasswordField label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter Password" />
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
    <Footer2/>
    </div>
  );
}

export default CVolleyballCreateAcc;
