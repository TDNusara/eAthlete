import React from "react";
import "./UserProfiles.css"
import HNavbar from "../../../components/HNavbar";
import PageTop from "../coachcomponents/PageTop";
import Footer from "../../../components/Footer";

function UserProfiles() {
    return (
        <div>
            <HNavbar />
            <div className="PageTop">
                <PageTop 
                title="PLAYERS"
                topic="Under Your Coach"
                />
            </div>
            <div>
                
            </div>
            <Footer />
        
        </div>
    );
}

export default UserProfiles;