import React from 'react';
import Footer1 from "../../components/Footer";
import Navbar from "../../components/NavbarManager";
import Cover from "../../components/cover";

function KarateLessonMenu({ onLogin }) {
  
  return (
    <div>
      <Navbar/>
      <Cover />
      <div>
        <div className="section karateLesMenuSec">
          <div className='container-fluid KM-frame KarateMenu'>
            <div className='row'>
              <div className='col KMenu-btn'><button className='KM-btn'>Basic Techniques</button></div>
            </div>
            <div className='row'>
              <div className='col KMenu-btn'><button className='KM-btn'>Kata</button></div>
            </div>
            <div className='row'>
              <div className='col KMenu-btn'><button className='KM-btn'>Kumite</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className='f-farme'>
        <Footer1 />
      </div>
    </div>
  );
}

export default KarateLessonMenu;