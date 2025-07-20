
import SNavbar from "../../components/SNavbar";
import React from 'react';
import AdminCard from "../../components/AdminComponents/AdminPanelCard";

import AStoreCardImg from "../../assets/AdminStoreCard.png";
import ACoachCardImg from "../../assets/AdminCoachCard.png";
import ALearnerCardImg from "../../assets/AdminLearnerCard.png";

import Footer from "../../components/Footer";



function AdminPanel() {


  return (
    <div>
      <SNavbar />
      <div className="Amid">

        <h2 className='A'> Users</h2>

        <div className="ACards">
      <AdminCard image={ALearnerCardImg} count={41} topic="Players" />
      <AdminCard image={ACoachCardImg} count={25} topic="Coaches" />
      <AdminCard image={AStoreCardImg} count={8} topic="Sellers" />
    </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0px', margin: '50px' }}>
          <button className="AB1">Article</button>
          <button className="AB1">Store</button>
          <button className="AB1">User Profiles</button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>



      <Footer />

    </div>
  );
}




export default AdminPanel;

