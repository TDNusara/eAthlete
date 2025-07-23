import React from "react";
import "./CreatePlan.css";

const DaySelectionTab = ({ activeDay, setActiveDay }) => {
  const days = ["DAY 01", "DAY 02", "DAY 03", "DAY 04", "DAY 05", "DAY 06", "DAY 07"];

  return (
    <div className="dayTabs">
      {days.map(day => (
        <button
          key={day}
          className={`dayTab ${activeDay === day ? "active" : ""}`}
          onClick={() => setActiveDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelectionTab;
