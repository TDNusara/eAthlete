import React, { useState } from "react";
import "./ProfilePage.css";
import NavbarManager from "../../components/NavbarManager";
import Footer from "../../components/Footer";
import LessonBar from "./profilepagecomponents/LessonBar";
import DaySelectionTab from "../CoachModule/userprofiles/createplan/DaySelectionTab";

import ProfilePhoto from "../CoachModule/userprofiles/createplan/createplanimages/profilephoto.jpg";

function ProfilePage() {
  const [activeDay, setActiveDay] = useState("DAY 01");

  const weeklyLessons = {
    "DAY 01": [
      { number: 1, completed: true },
      { number: 2, completed: true },
      { number: 3, completed: true },
      { number: 4, completed: true },
    ],
    "DAY 02": [
      { number: 1, completed: true },
      { number: 2, completed: true },
      { number: 3, completed: false },
      { number: 4, completed: false },
    ],
    "DAY 03": [
      { number: 1, completed: false },
      { number: 2, completed: false },
      { number: 3, completed: false },
    ],
    "DAY 04": [
      { number: 1, completed: false },
      { number: 2, completed: false },
    ],
    "DAY 05": [
      { number: 1, completed: false },
      { number: 2, completed: false },
      { number: 3, completed: false },
    ],
    "DAY 06": [
      { number: 1, completed: false },
      { number: 2, completed: false },
      { number: 3, completed: false },
    ],
    "DAY 07": [
      { number: 1, completed: false },
      { number: 2, completed: false },
      { number: 3, completed: false },
    ],
  };

  const currentLessons = weeklyLessons[activeDay] || [];

  const allLessons = Object.values(weeklyLessons).flat();
  const totalLessons = allLessons.length;
  const completedLessons = allLessons.filter((l) => l.completed).length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div>
      <NavbarManager />

      <div className="profileTop">
        <div className="profileInfo">
          <div className="profilePhoto">
            <img src={ProfilePhoto} alt="Cristiano Ronaldo" />
          </div>
          <div className="profileData">
            <h1>Cristiano Ronaldo</h1>
            <h5>Player Information.</h5>
            <div>
              <div className="profileDataShow">
                <p>Date of Birth: 2000-09-29</p>
                <p>Phone Number: +94-769225564</p>
              </div>
              <div className="profileDataShow">
                <p>Your Sport: volleyball</p>
              </div>
              <div className="profileDataShow">
                <p>Your Coach: Nisal Perera</p>
              </div>
            </div>
          </div>
          <div className="progressBarTab">
            <div className="progressBar">
              <div className="progressFill" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="progressLabel">
              Completed: {completedLessons}/{totalLessons} ({progressPercent}%)
            </div>
          </div>
        </div>
      </div>



      <div className="ProfileMiddle">
        <DaySelectionTab activeDay={activeDay} setActiveDay={setActiveDay} />
      </div>

      <div className="LessonMiddleData">
        <h1>Weekly Lesson Plan</h1>
        <LessonBar day={activeDay} lessons={currentLessons} />
      </div>

      <Footer />
    </div>
  );
}

export default ProfilePage;
