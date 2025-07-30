import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import ProfilePhoto from "../../assets/LoginForm.png";
import TextField from "../../components/LoginComponents/TextField";
import PhoneNum from "../../components/LoginComponents/PhoneNum";
import EmailL from "../../components/LoginComponents/EmailL";
import PasswordField from "../../components/LoginComponents/PasswordField";
import CheckBoxAgree from '../../components/LoginComponents/CheckBoxAgree';
import RedButton from '../../components/LoginComponents/RedButton';
import DropdownField from '../../components/LoginComponents/DropdownField';
import TextAreaField from "../../components/LoginComponents/TextAreaField";
import CoachCheckBox from '../../components/LoginComponents/CoachCheckBox';
import BackButton from '../../components/LoginComponents/BackButton';
import CloseButton from '../../components/LoginComponents/CloseButton';
import Footer2 from "../../components/Footer2";
import Navbar from "../../components/NavbarManager";

function CKarateCreateAcc() {
 

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
    sportID: '1', // Karate
    karateStyle: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      sportID: '1',
      karateStyle: ''
    });
    setConfirmPassword('');
    console.log("Form has been reset!");
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
                <TextField label="First Name" value={formData.firstName} onChange={handleChange} name="firstName" placeholder="Enter your First Name" />
              </div>
              <div className="Cform-group">
                <TextField label="Last Name" value={formData.lastName} onChange={handleChange} name="lastName" placeholder="Enter your Last Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="Cform-group">
                <DropdownField label="Gender" value={formData.gender} onChange={handleChange} name="gender" options={["Female", "Male"]} />
              </div>
              <div className="Cform-group">
                <PhoneNum label="Phone Number" value={formData.phone} onChange={handleChange} name="phone" placeholder="Enter your Phone Number" />
              </div>
            </div>

            <div className="form-row">
              <div className="Cform-group">
                <TextField label="Achievement" value={formData.qualification} onChange={handleChange} name="qualification" placeholder="Enter your Achievements" />
              </div>
              <div className="Cform-group">
                <DropdownField label="Years of Experience" value={formData.experience} onChange={handleChange} name="experience" options={["1", "2", "3", "or more"]} />
              </div>
            </div>

            <div className="form-row">
              <div className="Cform-group">
                <TextField label="Location" value={formData.district} onChange={handleChange} name="district" placeholder="Enter your District" />
              </div>
              <div className="Cform-group">
                <TextField label="Profile Photo" value={formData.dplink} onChange={handleChange} name="dplink" placeholder="Enter your photo drive link" />
              </div>
            </div>

            <div className="form-row">
              <div className="Cform-group">
                <TextAreaField label="Bio" value={formData.bio} onChange={handleChange} name="bio" placeholder="Tell us about yourself" rows={2} />
              </div>
            </div>

            <div className="form-row" style={{ justifyContent: 'center' }}>
              <div className="Cform-group" style={{ flex: '0 0 auto', maxWidth: '500px' }}>
                <CoachCheckBox
                  selectedStyle={formData.karateStyle}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      karateStyle: e.target.value
                    }))
                  }
                />
              </div>
            </div>
            <br />

            <div className="form-row">
              <div className="Cform-group">
                <EmailL label="Email" value={formData.email} onChange={handleChange} name="email" placeholder="Example@gmail.com" />
              </div>
              <div className="Cform-group">
                <TextField label="User Name" value={formData.username} onChange={handleChange} name="username" placeholder="Create a User Name" />
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
                  <RedButton type="submit" title="Create New Account"/>            
                  <button className="btnL" type="button" onClick={handleReset}>Reset</button>
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

export default CKarateCreateAcc;
