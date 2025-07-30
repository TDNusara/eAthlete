import React from "react";
import "./CreatePlan.css";

const LessonForm = ({ activeDay }) => {
  const lessons = Array.from({ length: 8 }, (_, i) => `Lesson ${i + 1}`);

  return (
    <div className="LessonForm">
      <div className="LessonFormDashBox">
        <h3>{activeDay}</h3>
        {lessons.map((lesson, idx) => (
          <div className="LessonRow" key={idx}>
            <div className="LessonCheckbox">
              <input type="checkbox" />
              <label>{lesson}</label>
            </div>
            <div className="LessonCheckbox">
              <span>No of Sets:</span>
              <select>
                <option>None</option>
                {[1, 2, 3, 4, 5, 6].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div className="LessonCheckbox">
              <span>No reps:</span>
              <select>
                <option>None</option>
                {[10, 15, 20, 25, 30, 35, 40, 45].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div className="LessonCheckbox">
              <span>Duration:</span>
              <select>
                <option>None</option>
                {["20s", "40s", "1min", "1.5min", "2min", "3min", "5min", "10min", "15min", "20min"].map(d => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonForm;