import React from "react";
import Footer1 from "../components/Footer";
import Navbar from "../components/NavbarManager";

function About() {
    return(
        <div>
           <Navbar/>
           <img className="about-cover" src="/volleyball.png" alt="..."/>
           <section className="about">
              <div className="container-fluid abu-frame">
                 <div className="row">
                    <div className="col-12 headertext abouHead">About Us</div>
                 </div>

                 <div className="row Aframe1">
                    <div className="col-12 Subheadertext1">eAthlete — Your Online Sports Learning and Training Hub</div>
                 </div>

                 <div className="row Aframe2">
                    <div className="col-sm-6">
                        <div className="row">
                           <div className="col-12 Subheadertext2 " style={{marginTop: 15}} >At eAthlete,</div>
                        </div>
                        <div className="row">
                           <div className="col-12 abu-text">
                              <p>We believe that every aspiring athlete deserves access to quality training, expert guidance, and the right equipment — no matter where they are.</p>
                              <p>Born out of the challenges faced by Sri Lankan students and athletes, eAthlete is a web-based platform designed to bring together learners, professional coaches, and sports equipment sellers in a single, user-friendly environment.</p>
                           </div>  
                        </div> 
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                           <div className="col-12 Subheadertext2 " style={{marginTop: 15}} >Why eAthlete?</div>
                        </div>
                        <div className="row">
                           <div className="col-12 abu-text">
                                 <p>Unlike many global sports platforms, eAthlete is built for Sri Lanka, understanding the local culture, challenges, and the need for accessible training solutions.</p>
                                 <p>Our project was inspired by athletes like you — students struggling to find good coaches and proper training support.</p>
                                 <p>We aim to solve real problems with a free-to-use platform that connects the right people and resources.</p>
                           </div>
                        </div>
                    </div>
                 </div>

                 <div className="row">
                     <div className="col-12 Subheadertext2">We offer:</div>
                 </div>
                 <div className="row Aframe3">
                     <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">Sports Training with Professional Coaches</div>
                        <div className="col-12 abu-text">Learn workouts, volleyball, karate, and more under expert supervision.</div>
                     </div>
                     <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">Personalized Training Plans</div>
                        <div className="col-12 abu-text">Get tailored plans based on your goals, fitness level, and preferences.</div>
                     </div>
                     <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">Online Sports Equipment Marketplace</div>
                        <div className="col-12 abu-text">Connect with verified sellers for your sports gear needs.</div>
                     </div>
                     <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">Community Articles & Knowledge Sharing</div>
                        <div className="col-12 abu-text">Learn, write, and share your sports journey with others.</div>
                     </div>
                 </div>

                 <div className="row ">
                    <div className="col-sm-6">
                        <div className="row">
                           <div className="col-12 Subheadertext2 " style={{marginTop: 15}} >Our Vision</div>
                        </div>
                        <div className="row">
                           <div className="col-12 abu-text">
                              <p>To empower the next generation of athletes by providing a complete digital ecosystem for sports education, training, and commerce in Sri Lanka.</p>                              
                           </div>  
                        </div> 
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                           <div className="col-12 Subheadertext2 " style={{marginTop: 15}} >Our Mission</div>
                        </div>
                        <div className="row">
                           <div className="col-12 abu-text">
                                 <ul>
                                    <li>To connect learners with professional coaches online</li>
                                    <li>To provide personalized training solutions</li>
                                    <li>To create an active community for sports knowledge sharing</li>
                                    <li>To support athletes by making quality sports equipment accessible</li>
                                 </ul>
                           </div>
                        </div>
                    </div>
                 </div>
              </div>
           </section>
           <Footer1/>
        </div>
    );
}

export default About;