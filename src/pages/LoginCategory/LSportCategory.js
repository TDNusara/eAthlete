import React from 'react';
import CVimage from "../../assets/CVolleyball.png";
import CKimage from "../../assets/CKarate.png";
import CWImage from "../../assets/CWorkout.png";
import LCard1 from "../../components/LoginComponents/SportCard1";
import LCard2 from "../../components/LoginComponents/SportCard2";
import LCard3 from "../../components/LoginComponents/Sportcard3";
import Navbar from "../../components/NavbarManager";
import Footer2 from "../../components/Footer2";
import { Link } from 'react-router-dom';

function LSportCategory() {

  const Categories1 = [{ title: "VolleyBall", src: CVimage,}];
  const Categories2 =[{ title: "Karate", src: CKimage,}];
  const Categories3=[{ title: "Workout", src: CWImage,}];
  

  return (
    <>
    <div>
       <Navbar/>
    <div class="UserC">
      <div class="UEmpty">
          <h2 className="Lh"><b>Choose Your Sport</b></h2>
        <LCard1 image1={Categories1} />
         <LCard2 image2={Categories2} />
         <LCard3 image3={Categories3} />
         <div className='btnGroup'>
                  <button className="btnL"><Link to="/UserCategoryLogin">Back To Sign Up</Link></button>
         </div>

            {/* <button className="btnL"><Link to="#">Close</Link></button> */}
      </div>
    </div>
         <Footer2/>

    </div>
    </>
  );
}



export default LSportCategory;
