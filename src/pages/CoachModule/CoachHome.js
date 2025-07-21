import React from "react";
import "./CoachHome.css";
import DNavbar from "../../components/DNavbar";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';

function CoachHomePage() {
    return (
        <div>
            <DNavbar />

            <div className="topCoachHome">
                <div>
                    <div className="coachHome-text">
                        <h1><b>ZERO TO <span className="highlight">HERO</span></b></h1>
                        <p>Your Ultimate Learning Journey Starts Here</p>
                    </div>
                    <div className="coach-buttons">
                        <Link to="/UserProfiles" className="coach-btn"><b>USER PROFILES</b></Link>
                        <Link to="/AddLessons" className="coach-btn"><b>LESSONS</b></Link>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default CoachHomePage;