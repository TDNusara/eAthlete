import React from "react";
import "./UserCard.css";
import CreatePlan from "../createplan/CreatePlan";
import ProfilePage from "../../../ProfilePage/ProfilePage";
import { Link } from "react-router-dom";

function UserCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} className="card-image" />
            <h3 className="card-name">{props.name}</h3>
            <div className="card-buttons">
                <Link to={"/CreatePlan"} className="card-button" >Create Plans</Link>
                <Link to={"/ProfilePage"} className="card-button" >View Profile</Link>
            </div>
        </div>
    );
}

export default UserCard;
