import React from "react";
import "./LessonBar.css";

function LessonBar(props) {
  const { day, lessons } = props;

  return (
    <div className="LessonBar">
      <h3 className="LessonDay">{day}</h3>
      {lessons.map((lesson, index) => (
        <div
          key={index}
          className={`LessonBarRow ${lesson.completed ? "completed" : "notStarted"}`}
        >
          <span className="LessonName">{`Lesson ${lesson.number}`}</span>
          <span className="LessonAction">
            {lesson.completed ? (
              <span>Completed</span>
            ) : (
              <span>Incomplete</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LessonBar;