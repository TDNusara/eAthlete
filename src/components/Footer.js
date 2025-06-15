import React from "react";
import { Link } from 'react-router-dom';
import xapp from '../assets/X Logo.png';
import instr from '../assets/Logo Instagram.png';
import ytube from '../assets/Logo YouTube.png';
import linkedin from '../assets/LinkedIn.png';

function Footer() {
    return(
        <footer className="footer">
            <div className="containercontainer-fluid">
                <div className="row Ffirstrow">
                    <div className="col-sm-6 fHeading">
                        <h1 className="fHeadingtxt">READY FOR YOUR</h1>
                        <h1 className="fHeadingtxt"><span className="fredtext">NEXT</span> LESSON</h1>
                    </div>
                    <div className="col-sm-6 social-icons">
                        <ul className="social-items">
                            <li className="social-app">
                                <Link to="/" className="social-link">
                                    <img src={xapp} alt="Profile" className="social-icon" />
                                </Link>
                            </li>
                            <li className="social-app">
                                <Link to="/" className="social-link">
                                    <img src={instr} alt="Profile" className="social-icon" />
                                </Link>
                            </li>
                            <li className="social-app">
                                <Link to="/" className="social-link">
                                    <img src={ytube} alt="Profile" className="social-icon" />
                                </Link>
                            </li>
                            <li className="social-app">
                                <Link to="/" className="social-link">
                                    <img src={linkedin} alt="Profile" className="social-icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;