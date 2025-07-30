import React from "react";
import "./LessonCard.css";

function AddButton({ onClick }) {
    return (
        <div className="LessonCard">
            <div className="LessonBox AddButton" onClick={onClick}>
                + ADD LESSON +
            </div>
        </div>
    );
}

export default AddButton;