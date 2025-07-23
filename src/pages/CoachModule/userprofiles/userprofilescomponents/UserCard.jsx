import React from "react";
import "./UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {
    return (
        <div className="UserCard">
            <img src={props.image} alt={props.name} className="cardImage" />
            <h3 className="cardName">{props.name}</h3>
            <div className="cardButtons">
                <Link to={"/CreatePlan"} className="cardButton" >Create Plans</Link>
                <Link to={"/ProfilePage"} className="cardButton" >View Profile</Link>
            </div>
        </div>
    );
}

export default UserCard;
