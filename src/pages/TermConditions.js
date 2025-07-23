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
                    <div className="col-12 headertext abouHead">Terms & Conditions</div>
                    <div className="col-12 abu-text HeaderPara"><p>Welcome to eAthlete – An Online Sports Learning and Training Hub. By accessing or using our platform, you agree to comply with and be bound by these Terms and Conditions.</p></div>
                 </div>

                 <div className="row">
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">1. User Accounts & Access</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>You must register for an account to access certain features.</li>
                                <li>You agree to provide accurate, complete information during registration.</li>
                                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">2. User Roles & Responsibilities</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>Learners : Use training plans responsibly and follow safety guidelines.</li>
                                <li>Coaches : Provide accurate, ethical guidance. Respect user data and privacy.</li>
                                <li>Sellers : Only list genuine sports equipment. Misleading ads may result in removal.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">3. Content Usage</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>All articles, training plans, and user-generated content remain the property of the original creator.</li>
                                <li>Users may not copy, reproduce, or distribute content without permission.</li>
                                <li>eAthlete reserves the right to moderate, edit, or remove inappropriate content.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">4. Prohibited Activities</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>Posting harmful, offensive, or misleading content.</li>
                                <li>Sharing false information or impersonating others.</li>
                                <li>Using the platform for illegal activities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">5. Limitation of Liability</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>eAthlete is a platform for connecting users; we do not guarantee results from training or purchases.</li>
                                <li>We are not liable for damages arising from misuse, third-party actions, or system errors.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col-12 Subheadertext3">6. Modifications</div>
                        <div className="col-12 abu-text">
                            <ul>
                                <li>We reserve the right to modify these Terms at any time. Continued use after changes implies acceptance.</li>
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