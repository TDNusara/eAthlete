import React from "react";
import "./UserProfiles.css";
import Navbar from "../../../components/NavbarManager";
import PageTop from "../coachcomponents/PageTop";
import Footer from "../../../components/Footer";
import UserCard from "./userprofilescomponents/UserCard";
import userdp from "./createplan/createplanimages/profilephoto.jpg";

function UserProfiles() {
    const existingPlayers = [
        { name: "C.Ronaldo", image: userdp },
        { name: "L.Messi", image: userdp },
        { name: "K.Mbappe", image: userdp },
        { name: "Neymar JR", image: userdp },
        { name: "C.Ronaldo", image: userdp },
        { name: "L.Messi", image: userdp },
    ];

    const newPlayers = [
        { name: "K.Mbappe", image: userdp },
        { name: "Neymar JR", image: userdp },
        { name: "Rocky de Man", image: userdp },
    ];

    return (
        <div className="UserProfilesFullPage">
            <Navbar />
            <div>
                <div className="UserProfilesPageTop">
                    <PageTop title="PLAYERS" topic="Under Your Coaching." />
                </div>
                
                <h2 className="UserProfilesType">New Players</h2>
                <div className="PlayerCardsContainer">
                    {newPlayers.map((player, index) => (
                        <UserCard key={`new-${index}`} name={player.name} image={player.image} />
                    ))}
                </div>

                <h2 className="UserProfilesType">Existing Players</h2>
                <div className="PlayerCardsContainer">
                    {existingPlayers.map((player, index) => (
                        <UserCard key={index} name={player.name} image={player.image} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default UserProfiles;