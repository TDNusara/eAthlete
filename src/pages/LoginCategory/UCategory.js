import React from 'react';
import Learnerimg from "../../assets/LearnerCategory.png";
import coachimg from "../../assets/CKarate.png";
import Sellerimg from "../../assets/SellerCategory.png";
import LUCard1 from "../../components/LoginComponents/UserCard1.js";
import LUCard2 from "../../components/LoginComponents/UserCard2.js";
import LUCard3 from "../../components/LoginComponents/UserCard3.js";
import Navbar from "../../components/NavbarManager";
import Footer2 from "../../components/Footer2";
import { Link } from 'react-router-dom';

function UCategory() {


   const UCategories1 = [{ title: "LEARNER", src: Learnerimg}];
   const UCategories2 = [{ title: "COACH", src: coachimg }];
   const UCategories3 = [{ title: "SELLER", src: Sellerimg }];


   return (
      <>
         <div>
            <Navbar />
            <div className="UserC">

               <div className="UEmpty">
                  <h2 className="Lh"><b>Choose Your User Type</b></h2>
                  <LUCard1 image1={UCategories1} />
                  <LUCard2 image2={UCategories2} />
                  <LUCard3 image3={UCategories3} />
                  <div className='btnGroup'>
                     <button className="btnL"><Link to="/Login">Back To Sign In</Link></button>
                  </div>
               </div>
            </div>

            <Footer2 />
         </div>
      </>
   );
}



export default UCategory;
