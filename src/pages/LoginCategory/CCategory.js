import React from 'react';
import CVimage from "../../assets/CVolleyball.png";
import CKimage from "../../assets/CKarate.png";
import CWImage from "../../assets/CWorkout.png";
import LCard from "../../components/LoginComponents/LCCard";

function CCategory() {

  const Categories = [{ title: "VolleyBall", src: CVimage, position: "top-right" },
  { title: "Karate", src: CKimage, position: "top-left" },
  { title: "Workout", src: CWImage, position: "bottom-right" }
  ];

  return (
    <div class="CoachC">
      <div class="CBlank">

        <LCard image={Categories} />

      </div>
    </div>
  );
}



export default CCategory;

