import React from "react";
import "./LessonCard.css";

function LessonCard({ lessonNo, title, videolink, description }) {
    return (
        <div className="LessonCard">
            <div className="LessonBox">
                <div className="LessonHeader">LESSON {lessonNo}</div>
                <div className="LessonHeader">{title}</div>
                <div className="LessonDescription">{description}</div>
                <div className="LessonLink">{videolink}</div>
            </div>
        </div>
    );
}

export default LessonCard;