import React from "react";
import "./UserProfiles.css"
import Navbar from "../../../components/NavbarManager";
import PageTop from "../coachcomponents/PageTop";
import Footer from "../../../components/Footer";

function UserProfiles() {
    return (
        <div>
            <Navbar />
            <div className="PageTop">
                <PageTop 
                title="PLAYERS"
                topic="Under Your Coaching."
                />
            </div>
            <div>
                
            </div>
            <Footer />
        
        </div>
    );
}

export default UserProfiles;