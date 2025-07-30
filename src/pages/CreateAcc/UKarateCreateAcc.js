import React, { useState } from 'react';
import ProfilePhoto from "../../assets/LoginForm.png";
import TextField from "../../components/LoginComponents/TextField";
import DatePicker from "../../components/LoginComponents/DatePicker";
import PhoneNum from "../../components/LoginComponents/PhoneNum";
import EmailL from "../../components/LoginComponents/EmailL";
import PasswordField from "../../components/LoginComponents/PasswordField";
import CheckBoxAgree from '../../components/LoginComponents/CheckBoxAgree';
import RedButton from '../../components/LoginComponents/RedButton';
import DropdownField from '../../components/LoginComponents/DropdownField';
import CheckBox from '../../components/LoginComponents/CheckBox';

import { Link } from 'react-router-dom';

function UKarateCreateAcc() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Date, setDate] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Genderr, setGenderr] = useState('');
  const [Email, setEmail] = useState('');
  const [BodyType, setBodyType] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [UserName, setUserName] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  const handleReset = () => {
  setFirstName('');
  setLastName('');
  setDate('');
  setPhoneNumber('');
  setEmail('');
  setGenderr('');
  setUserName('');
  setnewPassword('');
  setconfirmPassword('');
  setBodyType('');
  setHeight('');
  setWeight('');
  console.log("Form reset");
};


  return (
    <>
      <div>
      <div className="FLearner">
        <div className="FCVEmpty">

          <form className="form-container">

            <h2 className='FLh'>Create An Account</h2><br />
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
                <DropdownField
                  label="Gender"
                  value={Genderr}
                  onChange={(e) => setGenderr(e.target.value)}
                  options={["Female", "Male"]}
                />
              </div>
              <div className="Cform-group">
                <DropdownField
                  label="Body Type"
                  value={BodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                  options={[
                    "Ectomorph (Slim build)",
                    "Mesomorph (Muscular/athletic)",
                    "Endomorph (Rounder/heavier build)",
                    "Lean (Generally slim but not skinny)",
                    "Muscular (Noticeably built)"
                  ]}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="Cform-group">
                <TextField
                  label="Height (cm)"
                  value={Height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your Height in cm"
                />
              </div>
              <div className="Cform-group">
                <TextField
                  label="Weight (Kg)"
                  value={Weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight in kg"
                />
              </div>
            </div>

            <div className="form-footer">
              <CheckBox />
            </div>

            <br />

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
                
                <Link to="/LearnerSportCategoryLogin"><button className="btnL">Back</button></Link>
                <RedButton type="submit" title="Create New Account"/>
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
      </div>
    </>
  );
}

export default UKarateCreateAcc;