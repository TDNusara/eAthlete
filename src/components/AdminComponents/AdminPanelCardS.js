import React from "react";
import AStoreCardImg from "../../assets/AdminStoreCard.png";

function AdminPanelCardS(){  
   return(
    
        
    <>
      {/* <!-- Component: Empty card --> */}
      <div className="card-empty">
        
            <img src={AStoreCardImg} alt="card-img" className="cardImage"/>
            <h2 className="cardCount">21</h2>
            <p className="cardLabel">Sellers</p>
        </div>
      
      {/* <!-- End Empty card --> */}
    </>
  );
      
   
}


    export default AdminPanelCardS;