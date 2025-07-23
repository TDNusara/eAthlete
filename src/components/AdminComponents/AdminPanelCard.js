import React from "react";

function AdminPanelCard(props){  
   return(
    
        
    <>
      {/* <!-- Component: Empty card --> */}
      <div className="card-empty">
        
            <img src={props.image} alt={props.image} className="cardImage"/>
            <h2 className="cardCount">{props.count}</h2>
            <p className="cardLabel">{props.topic}</p>
        </div>
      
      {/* <!-- End Empty card --> */}
    </>
  );
      
   
}


export default AdminPanelCard;