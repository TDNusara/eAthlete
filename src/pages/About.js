import React from "react";
import Footer1 from "../components/Footer";
import HNavbar from "../components/HNavbar";

function About() {
    return(
        <div>
           <HNavbar/>
           <img className="above-cover" src="/volleyball.png" alt="..."/>
           <section className="about">
              <div className="container-fluid abu-frame">
                 <div className="row">
                    <div className="col-12 headertext">About Us</div>
                 </div>
                 <div className="row">
                    <div className="col-sm-6 abu-text">
                        <p>hjxvbxc c bdvsd vcsdcwdcdcs ducuds dssd sd sdv sd dc sdc hsd sd cdsg csdcdsbdscudsv sdbc ds cusd dbsuyvu ddsvsdvds vds vgcuyds cdsbids sd</p>
                    </div>
                    <div className="col-sm-6">
                        <img src="" alt="..."/>
                    </div>
                 </div>
              </div>
           </section>
           <Footer1/>
        </div>
    );
}

export default About;