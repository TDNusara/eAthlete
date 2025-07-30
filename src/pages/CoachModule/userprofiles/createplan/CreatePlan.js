import React, { useState } from "react";
import "./CreatePlan.css";
import NavbarManager from "../../../../components/NavbarManager";
import Footer from "../../../../components/Footer";
import DaySelectionTab from "./DaySelectionTab";
import LessonForm from "./LessonForm";

import ProfilePhoto from "./createplanimages/profilephoto.jpg"

function CreatePlan() {
  const [activeDay, setActiveDay] = useState("DAY 01");

  return (
    <div>
      <NavbarManager />

      <div className="CreatePlanPageTop">
        <div className="PlayerInfo">
          <img src={ProfilePhoto} alt="Cristiano Ronaldo" className="PlayerPhoto" />
          <div className="PlayerData">
            <h1>Cristiano Ronaldo</h1>
            <h5>Player Information.</h5>
            <div className="PlayerDataShow">
              <p>Date of Birth: 2000-09-29</p>
              <p>Phone Number: +94-769225564</p>
            </div>
          </div>
        </div>
      </div>

      <div className="PlanForm">
        <h2 className="PageTitle">Create a Plan</h2>

        <DaySelectionTab activeDay={activeDay} setActiveDay={setActiveDay} />

        <LessonForm activeDay={activeDay} />

        <button className="SubmitButton">Create Plan</button>
      </div>

      <Footer />
    </div>
  );
}

export default CreatePlan;