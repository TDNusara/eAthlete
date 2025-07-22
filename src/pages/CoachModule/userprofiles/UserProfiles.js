import React from "react";
import "./UserProfiles.css"
import Navbar from "../../../components/NavbarManager";
import PageTop from "../coachcomponents/PageTop";
import Footer from "../../../components/Footer";
import UserCard from "./userprofilescomponents/UserCard";
import userdp from "../coachimages/userdp.png";

function UserProfiles() {
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
            <Navbar />
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
            <Footer />
        
        </div>
    );
}

export default UserProfiles;
