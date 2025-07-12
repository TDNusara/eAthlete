import Footer1 from "../../components/Footer";
import HNavbar from "../../components/HNavbar";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Schedule({ onLogin }) {
  return (
    <div>
      <HNavbar/>
      <div>
        <img className="scheduleMainImg" src="../../assets/volybllLesnCovr.png" alt="..."/>
      </div>
      <Footer1 />
    </div>
  );
}

export default Schedule;