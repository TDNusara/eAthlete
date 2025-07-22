import React from "react";
import "./UserProfiles.css"
import HNavbar from "../../../components/HNavbar";
import PageTop from "../coachcomponents/PageTop";
import Footer from "../../../components/Footer";

function UserProfiles() {
<<<<<<< Updated upstream
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
        
=======
    const players = [
        { name: "C.Ronaldo", image: userdp },
        { name: "L.Messi", image: userdp },
        { name: "K.Mbappe", image: userdp },
        { name: "Neymar JR", image: userdp },
        { name: "C.Ronaldo", image: userdp },
        { name: "L.Messi", image: userdp },
        { name: "K.Mbappe", image: userdp },
        { name: "Neymar JR", image: userdp },
        { name: "Rocky de Man", image: userdp },
    ];

    return (
        <div className="FullPage">
            <DNavbar />
            <div>
                <div className="PageTop">
                    <PageTop
                        title="PLAYERS"
                        topic="Under Your Coaching."
                    />
                </div>
                <div className="CardsContainer">
                    {players.map((player, index) => (
                        <UserCard key={index} name={player.name} image={player.image} />
                    ))}
                </div>
                <Footer />
            </div>
>>>>>>> Stashed changes
        </div>
    );
}

export default UserProfiles;