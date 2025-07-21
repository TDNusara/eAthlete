import React from "react";
import "./UserProfiles.css"
import DNavbar from "../../../components/DNavbar";
import PageTop from "../coachcomponents/PageTop";
import Footer from "../../../components/Footer";

function UserProfiles() {
    return (
        <div>
            <DNavbar />
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