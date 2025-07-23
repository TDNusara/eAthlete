import React from "react";
import "./LessonCard.css";

function AddButton({ onClick }) {
    return (
        <div className="lesson-card">
            <div className="lesson-box add-button" onClick={onClick}>
                + ADD LESSON +
            </div>
        </div>
    );
}

export default AddButton;
