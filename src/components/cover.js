import React, { useEffect, useState } from "react";

import karateImg from '../assets/karate.png';
import volleyballImg from '../assets/volleyball.png';
import workoutImg from '../assets/workout.png';

const sportImages = {
  Karate: karateImg,
  Volleyball: volleyballImg,
  Workout: workoutImg,
};

function Cover() {
  const [sportName, setSportName] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.SportName) {
      setSportName(user.SportName);
    } else {
      setSportName(null);
    }
  }, []);

  const image = sportImages[sportName] || volleyballImg; 

  return (
    <div>
      <div className="cover">
        <div className="row">
          <div className="col imgText">
            <img className="cover-img" src={image} alt={sportName || "Sport"} />
            <div className="row coverText">
              <div className="col-12 coverHText">{sportName || "Welcome"}</div>
              <div className="col-12 coverPText">
                Let's <span style={{ color: 'red' }}>Do</span> this.!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
