import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer2 from "../../components/Footer2";
import HNavbar from "../../components/HNavbar";

function LHome() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return null; 

  return (
    <div className="Lbody">
      <HNavbar />
      <div className="section hero">
        <div className="container-fluid frame1">
          <div className="row regframe">
            <div className="col-sm-12 herocol">
              <h1 className="headertext">ZERO TO <span className="redtext">HERO</span></h1>
              <p className="paratext">Your Ultimate Learning Journey Starts Here</p>
            </div>
          </div>
        </div>
      </div>

      {user.SportName === 'Workout' && (
        <div className="section sec1">
        <div className="container-fluid frame2">
          <div className="row wkoutframe">
            <div className="col-sm workoutcol">
              <h1 className="headertext workouttxt">WORK<span className="redtext">OUT</span></h1>
              <h1 className="headertext planstxt">PLANS</h1>
              <button className="sptbtn"><Link to="/Coachers" className="rf_link">LET’S GO</Link></button>
            </div>
          </div>
        </div>
      </div>
      )}
      

      {user.SportName === 'Volleyball' && (
        <div className="section sec2 Lpath">
          <div className="container-fluid Lframe3">
            <div className="row volbllframe">
              <div className="col-sm volecol">
                <h1 className="headertext">VOLLEYBALL</h1>
                <button className="sptbtn"><Link to="/Coachers" className="rf_link">LET'S PLAY</Link></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {user.SportName === 'Karate' && (
        <div className="section sec3">
          <div className="container-fluid frame4">
            <div className="row karateframe">
              <div className="col-sm karatecol">
                <h1 className="headertext karatetxt">KARATE</h1>
                <button className="sptbtn"><Link to="/Coachers" className="rf_link">LET'S FIGHT</Link></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer2 />
    </div>
  );
}

export default LHome;
