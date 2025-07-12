import React from "react";
import ALearnerCardImg from "../../assets/AdminLearnerCard.png";


function AdminPanelCardL(){  
   return(
    
        
    <>
      {/* <!-- Component: Empty card --> */}
      <div className="card-empty">
        
            <img src={ALearnerCardImg} alt="card-img" className="cardImageL"/>
            <h2 className="cardCount">41</h2>
            <p className="cardLabel">Player</p>
            
        </div>
      
      {/* <!-- End Empty card --> */}
    </>
  );
      
   
}


    export default AdminPanelCardL;

    
        
        
        
        
        







