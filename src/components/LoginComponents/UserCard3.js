import React from "react";
import { Link } from 'react-router-dom';


function UserCard3({ image3 }) {
  return (
    <div className="LCEmpty">
     
      <div className="SingleCard">
        {image3.map((item, index) => (
          <div key={index} className="CardSection">
            <img src={item.src} alt={item.title} className="CardImage" />
            <h3 className={`Categoryheading ${item.position2}`}>I AM {item.title}</h3>
            <Link to="/SellerCreateAcc"><button className={`CategoryBtn ${item.position1}`}>START</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard3;
