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
                    <div className="col-12 headertext abouHead">Privacy Policy</div>
                    <div className="col-12 abu-text HeaderPara"><p>At eAthlete, we respect your privacy and are committed to protecting your personal information.</p></div>
                 </div>

                 <div className="row">
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">1. Information We Collect</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>Personal Data: Name, email, contact details, role (Learner, Coach, Seller).</li>
                                <li>Profile Data: Training preferences, coach selection, posted content.</li>
                                <li>Usage Data: Login history, activity on the platform.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">2. How We Use Your Information</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>To provide and improve our services.</li>
                                <li>To personalize training plans and content.</li>
                                <li>To communicate important updates and notifications.</li>
                                <li>For security, system monitoring, and fraud prevention.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">3. Sharing & Disclosure</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>We do not sell your personal information.</li>
                                <li>Data is only shared with relevant coaches or sellers when required for platform functionality.</li>
                                <li>We may disclose data if legally required or to protect user safety.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">4. Data Security</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>We implement reasonable security measures to protect your data.</li>
                                <li>However, no online system is 100% secure; use the platform at your discretion.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">5. Your Rights</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>You may access, update, or delete your personal data by contacting us.</li>
                                <li>You can opt-out of communications anytime.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">6. Cookies & Tracking</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>We may use cookies for authentication and user experience improvements.</li>
                                <li>By using the site, you consent to our use of cookies.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">7. Changes to This Policy</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>We may update this Privacy Policy. We will notify users of significant changes.</li>
                            </ul>
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