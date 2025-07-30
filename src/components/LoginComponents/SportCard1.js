import React from "react";
import { Link } from 'react-router-dom';


function SportCard1({ image1 }) {
  return (
    <div className="LCEmpty">

      <div className="SingleCard">
        {image1.map((item, index) => (
          <div key={index} className="CardSection">
            <img src={item.src} alt={item.title} className="CardImage" />
            <div className="CardRow">
              <div className="CardHalf"></div>
              <div className="CardHalf">
                <Link to={`/UserCreateAcc?sport=${item.title}`}><button className="CategoryBtn">{item.title}</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportCard1;