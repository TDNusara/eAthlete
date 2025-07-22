import React from "react";
import "./LessonBar.css";
import { useNavigate } from "react-router-dom";

function LessonBar(props) {
  const { day, lessons } = props;
  const navigate = useNavigate();

  const handleStartClick = (lessonNumber) => {
    navigate(`/lesson/${day.toLowerCase().replace(" ", "-")}/lesson-${lessonNumber}`);
  };

  return (
    <div className="lessonBar">
      <h3 className="lessonDay">{day}</h3>
      {lessons.map((lesson, index) => (
        <div
          key={index}
          className={`lessonBarRow ${lesson.completed ? "completed" : "notStarted"}`}
        >
          <span className="lessonName">{`Lesson ${lesson.number}`}</span>
          <span className="lessonAction">
            {lesson.completed ? (
              <span className="completedText">Completed</span>
            ) : (
              <button
                className="startButton"
                onClick={() => handleStartClick(lesson.number)}
              >
                Start now
              </button>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LessonBar;
