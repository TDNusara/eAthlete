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
        
      </div>
      <div className='f-farme'>
        <Footer1 />
      </div>
    </div>
  );
}

export default KarateLessonMenu;