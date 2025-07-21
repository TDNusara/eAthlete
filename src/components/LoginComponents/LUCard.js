import React from "react";


function LUCard({ image }) {
  return (
    <div className="LCEmpty">
      <h2 className="Lh"><b>Choose Your Category</b></h2>
      <div className="SingleCard">
        {image.map((item, index) => (
          <div key={index} className="CardSection">
            <img src={item.src} alt={item.title} className="CardImage" />
            <h3 className={`Categoryheading ${item.position2}`}>I AM {item.title}</h3>
            <button className={`CategoryBtn ${item.position1}`}>START</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LUCard;
