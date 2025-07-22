import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Learner.css';
import Footer1 from "../../components/Footer";
import Navbar from "../../components/NavbarManager";
import axios from 'axios';

function LessonListPage({ learnerID }) {
  const [sport, setSport] = useState({ SportName: '', SportID: null });
  const [lessons, setLessons] = useState([]);
  const [viewed, setViewed] = useState([]);
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost/eAthlete/backend/api/getLearnerSport.php?learnerID=${learnerID}`)
      .then(res => {
        setSport(res.data);
        loadLessons(learnerID, res.data.SportID);
      });
  }, [learnerID]);

  const loadLessons = (learnerID, sportID) => {
    axios.get(`http://localhost/eAthlete/backend/api/getLearnerSport.php?learnerID=${learnerID}&sportID=${sportID}`)
      .then(res => {
        setLessons(res.data.lessons);
        setViewed(res.data.viewedLessons);
      });
  };

  const getLessonsForDay = (day) => (lessons || []).filter(lesson => lesson.DayNo === day);

  const isDayCompleted = (day) => {
    const dayLessons = getLessonsForDay(day);
    return dayLessons.length > 0 && dayLessons.every(lesson => viewed.includes(lesson.LessonID));
  };

  const getCoverImage = () => {
    if (!sport.SportName) return "/default.jpg";
    return `/${sport.SportName.toLowerCase().replace(/\s+/g, '')}.png`;
  };

  return (
    <div>
      <Navbar/>
      <div className="lesson-list-page" style={{ backgroundImage: `url(${getCoverImage()})` }}>
        <div className="overlay">
          <h1>{sport.SportName?.toUpperCase()}</h1>
          <p>Let's <span className="text-danger">Do</span> this.!</p>
          <div className="btn-group my-3" role="group">
            {[...Array(7)].map((_, i) => {
              const dayNo = i + 1;
              return (
                <button
                  key={dayNo}
                  className={`btn ${isDayCompleted(dayNo) ? 'btn-success' : 'btn-dark'}`}
                  onClick={() => setActiveDay(dayNo)}
                >
                  DAY 0{dayNo}
                </button>
              );
            })}
          </div>
          <div className="lessons mt-3">
            {getLessonsForDay(activeDay).map((lesson, index) => (
              <div key={index} className="lesson-box">{lesson.Title}</div>
            ))}
          </div>
        </div>
      </div>
      <Footer1/>
    </div>
  );
}

export default LessonListPage;
