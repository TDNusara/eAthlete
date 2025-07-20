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
                        <a href="/CoachHomePage/UserProfiles" className="coach-btn"><b>USER PROFILES</b></a>
                        <a href="/CoachHomePage/AddLessons" className="coach-btn"><b>LESSONS</b></a>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default CoachHomePage;