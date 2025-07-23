import React from 'react';
import Footer1 from "../../components/Footer";
import Navbar from "../../components/NavbarManager";
import Cover from "../../components/cover";
import lessonInetface from "../../assets/lessonInetface.png";

function LessonView({ onLogin }) {
  
  return (
    <div>
      <Navbar/>
      <Cover />
      <div>
        <section className='lonview'>
            <div className='container-container-fluid SM-frame main-frame'>
                <div className='row'>
                    <div className='col-12 dayNum'>DAY 04</div>
                </div>
                <div className='Mframe'>
                    <div className='row'>
                        <div className='col-12 lesNum'>LESSON 01</div>
                    </div>
                    <div className='lesFrame1'>
                        <div className='row'>
                            <div className='col-12 lesTitle'>LESSON TITLE</div>
                        </div>
                        <div className='row lesFrame2'>
                            <div className='col-sm preview'>
                                <img className='previewImg' src={lessonInetface} alt='...'/>
                            </div>
                            <div className='col-sm lesFrame3'>
                                <div className='row'>
                                    <div className='col-12 lesDis'>Description</div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 lesDisCon'>
                                        480p is a type of video resolution. The "p" in 480p stands for "progressive scan," which means that the image is displayed all rather than being int. The number "480" refers to the vertical resolution, meaning there are 480 lines of pixels from the top to the bottom 
                                    </div>
                                    <div className='col-12 lesDis'>Tips</div>
                                    <div className='col-12 lesDisCon'>15 reps x 3 sets or 10 min</div>
                                </div>
                                <div className='row cmpt-btn'>
                                <button className='c-btn'>Complete</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    <Footer1 />
    </div>
  );
}

export default LessonView;