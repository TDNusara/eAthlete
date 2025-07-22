import React, { useState } from "react";
import "./CreatePlan.css";
import DNavbar from "../../../../components/DNavbar";
import Footer from "../../../../components/Footer";
import DaySelectionTab from "./DaySelectionTab";
import LessonForm from "./LessonForm";

import ProfilePhoto from "./createplanimages/profilephoto.jpg";

function CreatePlan() {
  const [activeDay, setActiveDay] = useState("DAY 01");

  return (
    <div>
      <DNavbar />

      <div className="pageTop">
        <div className="playerInfo">
          <img src={ProfilePhoto} alt="Cristiano Ronaldo" className="playerPhoto" />
          <div className="playerData">
            <h1>Cristiano Ronaldo</h1>
            <h5>Player Information.</h5>
            <div className="playerDataShow">
              <p>Date of Birth: 2000-09-29</p>
              <p>Phone Number: +94-769225564</p>
            </div>
          </div>
        </div>
      </div>

      <div className="planForm">
        <h2 className="pageTitle">Create a Plan</h2>

        <DaySelectionTab activeDay={activeDay} setActiveDay={setActiveDay} />

        <LessonForm activeDay={activeDay} />

        <button className="submitButton">Create Plan</button>
      </div>

      <Footer />
    </div>
  );
}

export default CreatePlan;
