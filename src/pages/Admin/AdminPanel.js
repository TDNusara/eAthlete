
import SNavbar from "../../components/SNavbar";
import React from 'react';
import AdminLearnerCard from "../../components/AdminComponents/AdminPanelCardL";
import AdminCoachCard from "../../components/AdminComponents/AdminPanelCardC";
import AdminStoreCard from "../../components/AdminComponents/AdminPanelCardS";
import Footer from "../../components/Footer";



function AdminPanel() {
  

  return (
    <div>
        <SNavbar/>
          <div className="Amid" style={{ gap: '20px',margin:'30px'}}>

              <h2 className = 'A'> Users</h2>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px',margin:'30px'}}>

                      <AdminLearnerCard/>
                      <AdminCoachCard/>
                      < AdminStoreCard/>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center', gap: '0px',margin:'50px'}}>
                      <button className="AB1">Article</button>
                      <button className ="AB1">Store</button>
                      <button className ="AB1">User Profiles</button>
                  </div>   
            
          </div> 
          <br/>
          <br/>
          <br/>
          <br/>
          
          

        <Footer/>

      </div>
 );
}




export default AdminPanel;

