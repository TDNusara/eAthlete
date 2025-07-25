import React from 'react';
import Learnerimg from "../../assets/LearnerCategory.png";
import coachimg from "../../assets/CKarate.png";
import Sellerimg from "../../assets/SellerCategory.png";
import LUCard1 from "../../components/LoginComponents/UserCard1";
import LUCard2 from "../../components/LoginComponents/UserCard2";
import LUCard3 from "../../components/LoginComponents/UserCard3.js";
import Navbar from "../../components/NavbarManager.js";
import Footer from "../../components/Footer";

function UCategory() {
    

  const UCategories1 = [{ title: "LEARNER", src:Learnerimg, position1: "top-right",position2:"bottom-right2" }];
  const UCategories2=[{ title: "COACH", src: coachimg, position1: "top-left",position2:"bottom-left2" }];
  const UCategories3=[{ title: "SELLER", src: Sellerimg, position1: "bottom-right",position2:"bottom-right2" }];
  

  return (
    <div>
      <Navbar/>
    <div class="UserC">
       
      <div class="UEmpty">
          <h2 class="Lh">Choose Your Category</h2>
        <LUCard1 class="user-container" image1={UCategories1}/>
        <LUCard2 class="user-container" image2={UCategories2}/>
        <LUCard3 class="user-container" image3={UCategories3}/>
      
      
      </div>
     </div>
     <br/>
     <Footer/>
    </div>
 );
}



export default UCategory;

