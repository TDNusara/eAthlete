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
import Footer2 from "../../components/Footer2";
import Navbar from "../../components/NavbarManager";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [years, setYears] = useState('');
  const [bcolour, setBColour] = useState('');

  const handleReset = () => {
  setFirstName('');
  setLastName('');
  setPhoneNumber('');
  setEmail('');
  setUserName('');
  setnewPassword('');
  setconfirmPassword('');
  setGenderr('');
  setAchieves('');
  setLocationn('');
  setSelectedFile('');
  setYears('');
  console.log("Form has been reset!");
};


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log("Selected file:", e.target.files[0]);
  };

  return (
    <>
      <div>
        <Navbar />
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
                  <DropdownField
                    label="Gender"
                    value={Genderr}
                    onChange={(e) => setGenderr(e.target.value)}
                    options={["Female", "Male"]}
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
                  <TextField
                    label="Achievement"
                    value={Achieves}
                    onChange={(e) => setAchieves(e.target.value)}
                    placeholder="Enter your Achievements"
                  />
                </div>
                <div className="Cform-group">
                  <DropdownField
                    label="Years of Experience"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    options={["1", "2", "3", "or more"]}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="Cform-group">
                  <TextField
                    label="Location"
                    value={Locationn}
                    onChange={(e) => setLocationn(e.target.value)}
                    placeholder="Enter your District"
                  />
                </div>
                <div className="Cform-group">
                  <FileUpload
                    label="Upload Your Certificate"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                  />
                </div>
              </div>

              <div className="form-row" style={{ justifyContent: 'center' }}>
                <div className="Cform-group" style={{ flex: '0 0 auto' }}>
                  <DropdownField
                    label="Select Belt Colour"
                    value={bcolour}
                    onChange={(e) => setBColour(e.target.value)}
                    options={["Black", "White", "Red"]}
                  />
                </div>
              </div>

              <div className="form-row" style={{ justifyContent: 'center' }}>
                <div className="Cform-group" style={{ flex: '0 0 auto', maxWidth: '500px' }}>
                  <CoachCheckBox />
                </div>
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
                
                {/* <button className="btnL"><Link to="/CoachSportCategoryLogin">Back</Link></button> */}
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

        <Footer2 />
      </div>
    </>
  );
}

export default CKarateCreateAcc;
