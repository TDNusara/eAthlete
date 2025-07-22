import React from 'react';
import Footer1 from "../../components/Footer";
import Navbar from "../../components/NavbarManager";
import Cover from "../../components/cover";

function Schedule({ onLogin }) {
  
  return (
    <div>
      <Navbar/>
      <Cover />
      <div>
        <div className="section lessonSchedule">
          <div className="container-fluid SM-frame">
            <div className='row row-cols-auto days-btn'>
              <div className='col day-btn'><button className='D-btn' style={{backgroundColor:"green"}}>DAY 01</button></div>
              <div className='col day-btn'><button className='D-btn' style={{backgroundColor:"green"}}>DAY 02</button></div>
              <div className='col day-btn'><button className='D-btn' style={{backgroundColor:"black"}}>DAY 03</button></div>
              <div className='col day-btn'><button className='D-btn'>DAY 04</button></div>
              <div className='col day-btn'><button className='D-btn'>DAY 05</button></div>
              <div className='col day-btn'><button className='D-btn'>DAY 06</button></div>
              <div className='col day-btn'><button className='D-btn'>DAY 07</button></div>           
            </div>
          </div>

          <div className='container-fluid SM-frame lessonsLink'>
            <div className='row'>
              <div className='col lesson-btn'style={{backgroundColor:"green"}}><button className='les-btn'style={{backgroundColor:"green"}}>Lesson 01</button></div>
            </div>
            <div className='row'>
              <div className='col lesson-btn'><button className='les-btn'>Lesson 02</button></div>
            </div>
            <div className='row'>
              <div className='col lesson-btn'><button className='les-btn'>Lesson 03</button></div>
            </div>
            <div className='row'>
              <div className='col lesson-btn'><button className='les-btn'>Lesson 04</button></div>
            </div>
            <div className='row'>
              <div className='col lesson-btn'><button className='les-btn'>Lesson 05</button></div>
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

export default Schedule;