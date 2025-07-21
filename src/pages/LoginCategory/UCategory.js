import React from 'react';
import Learnerimg from "../../assets/LearnerCategory.png";
import coachimg from "../../assets/CKarate.png";
import Sellerimg from "../../assets/SellerCategory.png";
import LUCard from "../../components/LoginComponents/LUCard";

function UCategory() {
  const UCategories = [{ title: "LEARNER", src:Learnerimg, position1: "top-right",position2:"bottom-right2" },
  { title: "COACH", src: coachimg, position1: "top-left",position2:"bottom-left2" },
  { title: "SELLER", src: Sellerimg, position1: "bottom-right",position2:"bottom-right2" }
  ];

  return (
    <div class="UserC">
      <div class="Cblanck">
      <LUCard image={UCategories}/>
     </div>
    </div>
 );
}



export default UCategory;

