import React from "react";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";
import GNavbar from "../components/GNavbar";

function GHome() {

    return(
        <div className="Gbody">
            <GNavbar />
            <div className="section hero">
                <div className="container-fluid frame1">
                    <div className="row regframe">
                        <div className="col-sm-12 herocol">
                            <h1 className="headertext">ZERO TO <span className="redtext">HERO</span></h1>
                            <p className="paratext">Your Ultimate Learning Journey Starts Here</p>
                            <button className="regbtn"><Link to="/Login" className="rf_link">REGISTER NOW</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section sec1 ">
                <div className="container-fluid frame2">
                    <div className="row wkoutframe">
                        <div className="col-sm workoutcol">
                            <h1 className="headertext workouttxt">WORK<span className="redtext">OUT</span></h1>
                            <h1 className="headertext planstxt">PLANS</h1>
                            <button className="sptbtn"><Link to="/Login" className="rf_link">LET'S GO</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section sec2 ">
                <div className="container-fluid frame3">
                    <div className="row volbllframe">
                        <div className="col-sm volecol">
                            <h1 className="headertext">VOLLEYBALL</h1>
                            <button className="sptbtn"><Link to="/Login" className="rf_link">LET'S PLAY</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section sec3 ">
                <div className="container-fluid frame4">
                    <div className="row karateframe">
                        <div className="col-sm karatecol">
                            <h1 className="headertext karatetxt">KARATE</h1>
                            <button className="sptbtn"><Link to="/Login" className="rf_link">LET'S FIGHT</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
}

export default GHome;