import React from "react";
import "./CoachHome.css";
import HNavbar from "../../components/HNavbar";
import Footer from "../../components/Footer";

function CoachHomePage() {
    return (
        <div>
            <HNavbar />

            <div className="topCoachHome">
                <div>
                    <div className="coachHome-text">
                        <h1><b>ZERO TO <span className="highlight">HERO</span></b></h1>
                        <p>Your Ultimate Learning Journey Starts Here</p>
                    </div>
                    <div className="coach-buttons">
                        <a href="/coach-home-page/user-profiles" className="coach-btn" target="_blank"><b>USER PROFILES</b></a>
                        <a href="/coach-home-page/add-lessons" className="coach-btn" target="_blank"><b>LESSONS</b></a>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default CoachHomePage;