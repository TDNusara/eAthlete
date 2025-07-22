import React, { useState } from 'react';
import ProfilePhoto from "../../assets/LoginForm.png";
import TextField from "../../components/LoginComponents/TextField";
import PhoneNum from "../../components/LoginComponents/PhoneNum";
import EmailL from "../../components/LoginComponents/EmailL";
import PasswordField from "../../components/LoginComponents/PasswordField";
import CheckBoxAgree from '../../components/LoginComponents/CheckBoxAgree';
import RedButton from '../../components/LoginComponents/RedButton';
import { Link } from 'react-router-dom';
import DropdownField from '../../components/LoginComponents/DropdownField';
import FileUpload from '../../components/LoginComponents/FileUpload';
import CoachCheckBox from '../../components/LoginComponents/CoachCheckBox';
import SNavbar from '../../components/SNavbar';
import Footer from '../../components/Footer';

function CKarateCreateAcc() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [UserName, setUserName] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const [Genderr, setGenderr] = useState('');
  const [Achieves, setAchieves] = useState('');
  const [Locationn, setLocationn] = useState('');
 const [Qualification, setQualification] = useState('');
  const [years, setYears] = useState('');
  const [bcolour, setBColour] = useState('');


 

  return (
    <>
      <div>
        <SNavbar/>
      <div class="FLearner">
        <div class="FCVEmpty">
          <h2 className='FLh'>Create An Account</h2>
          <div class="PP"><img src={ProfilePhoto} alt="PPhoto" /></div>

          <div className="CVform-columns">

            <div class="Form-left">

              <TextField label="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your First Name" />
              <DropdownField label="Gender" value={Genderr} onChange={(e) => setGenderr(e.target.value)} options={["Female", "Male",]} />
              <TextField label="Achievement" value={Achieves} onChange={(e) => setAchieves(e.target.value)} placeholder="Enter your Achievements" />
              <DropdownField label="Years of Experience" value={years} onChange={(e) => setYears(e.target.value)} options={["1", "2", "3", "or more"]} />

            </div>

            <div class="Form-right">
              <TextField label="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your Last Name" />
              <PhoneNum label="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your PhoneNumber " />
              <TextField label="Add Qualification" value={Qualification} onChange={(e) => setQualification(e.target.value)} placeholder="Add Qualification" />
              <TextField label="Location" value={Locationn} onChange={(e) => setLocationn(e.target.value)} placeholder="Enter your District" />

            </div>


          </div>

          <div class="BeltDdf">
            <DropdownField label="select Belt Colour" value={bcolour} onChange={(e) => setBColour(e.target.value)} options={["Black", "White", "Red"]} />
          </div>

          <div className='KCheckbox'>
            <CoachCheckBox />
          </div>
          <br />
          
          <div className="CVform-columns">

            <div class="Form-left">


              <EmailL label="Email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Example@gmail.com" />
              <PasswordField label="New Password" value={newpassword} onChange={(e) => setnewPassword(e.target.value)} placeholder="Enter new Password" />

            </div>

            <div class="Form-right">

              <TextField label="User Name" value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder="Create a User Name" />
              <PasswordField label="Cofirm Password" value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder="Re-enter Password" />

            </div>

          </div>
          <div class="CoachkACheckBox">
          <CheckBoxAgree />
          </div>
          <div class="CoachKRedbutton">
          <RedButton />
          </div>

          <div class="CoachFbottom">
            <p class="Q1">Already have an account?<Link to="/Login" className="linkR">Login</Link></p>


          </div>


        </div>
      </div>
      <br/> <br /><br /><br />
      <Footer />
      </div>
    </>
  )
}



export default CKarateCreateAcc;


