import React from "react";
import "./LessonCard.css";

function LessonCard({ lessonNo, title, videolink, description }) {
    return (
        <div className="lesson-card">
            <div className="lesson-box">
                <div className="lesson-header">LESSON {lessonNo}</div>
                <div className="lesson-header">{title}</div>
                <div className="lesson-description">{description}</div>
                <div className="lesson-link">{videolink}</div>
            </div>
        </div>
    );
}

export default LessonCard;
