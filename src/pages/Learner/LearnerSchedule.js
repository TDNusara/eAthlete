import Footer1 from "../../components/Footer";
import Navbar from "../../components/NavbarManager";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Schedule({ onLogin }) {
  return (
    <div>
      <Navbar/>
      <div>
        <img className="scheduleMainImg" src="../../assets/volybllLesnCovr.png" alt="..."/>
      </div>
      <Footer1 />
    </div>
  );
}

export default Schedule;