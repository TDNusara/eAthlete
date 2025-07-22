import React from "react";


function SportCard({ image }) {
  return (
    <div className="LCEmpty">
      <h2 className="Lh"><b>Choose Your Category</b></h2>
      <div className="SingleCard">
        {image.map((item, index) => (
          <div key={index} className="CardSection">
            <img src={item.src} alt={item.title} className="CardImage" />
            <button className={`CategoryBtn ${item.position}`}>{item.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportCard;
