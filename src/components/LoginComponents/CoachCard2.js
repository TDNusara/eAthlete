import React from "react";
import { Link } from 'react-router-dom';


function CoachCard2({ image2 }) {
  return (
    <div className="LCEmpty">

      <div className="SingleCard">
        {image2.map((item, index) => (
          <div key={index} className="CardSection">
            <img src={item.src} alt={item.title} className="CardImage" />
            <div className="CardRow">
              <div className="CardHalf">
                <Link to="/CoachKCreateACC"><button className="CategoryBtn">{item.title}</button></Link></div>
              <div className="CardHalf">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachCard2;
