import React from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {
    return (
        <div className="PlayerProfileCard">
            <img src={props.image} alt={props.name} className="PlayerProfileCardImage" />
            <h3 className="PlayerProfileCardName">{props.name}</h3>
            <div className="PlayerProfileCardButtons">
                <Link to={"/CreatePlan"} className="PlayerProfileCardButton" >Create Plans</Link>
                <Link to={"/ProfilePage"} className="PlayerProfileCardButton" >View Profile</Link>
            </div>
        </div>
    );
}

export default UserCard;