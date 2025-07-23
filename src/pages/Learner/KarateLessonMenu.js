import React from 'react';
import Footer1 from "../../components/Footer";
import Navbar from "../../components/NavbarManager";
import Cover from "../../components/cover";
import { useNavigate } from 'react-router-dom';

function KarateLessonMenu({ onLogin }) {
  const navigate = useNavigate();
  
  return (
    <div>
      <Navbar/>
      <Cover />
      <div>
        <div className="section karateLesMenuSec">
          <div className='container-fluid KM-frame KarateMenu'>
            <div className='row'>
              <div className='col KMenu-btn'><button className='KM-btn' onClick={() => navigate('/LearnerSchedule')}>Basic Techniques</button></div>
            </div>
            <div className='row'>
              <div className='col KMenu-btn'><button className='KM-btn' onClick={() => navigate('/LearnerSchedule')}>Kata</button></div>
            </div>
            <div className='row'>
              <div className='col KMenu-btn'><button className='KM-btn' onClick={() => navigate('/LearnerSchedule')}>Kumite</button></div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default KarateLessonMenu;