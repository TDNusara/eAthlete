import React from "react";
import ACoachCardImg from "../../assets/AdminCoachCard.png";


function AdminPanelCardC(){  
   return(
    
        
    <>
      {/* <!-- Component: Empty card --> */}
      <div className="card-empty">
        
            <img src={ACoachCardImg} alt="card-img" className="cardImageAll"/>
            <h2 className="AcardCount">14</h2>
            <p className="AcardLabel">Coaches</p>
        </div>
      
      {/* <!-- End Empty card --> */}
    </>
  );
      
   
}


    export default AdminPanelCardC;