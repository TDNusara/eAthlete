import React from "react";
import { Link } from 'react-router-dom';
import f_name from '../assets/f_name.png';
import f_email from '../assets/f_email.png';
import f_phone from '../assets/f_phone.png';
import call from '../assets/call icon.png';
import whtsp from '../assets/whatsapp icon.png';
import tel from '../assets/telegram icon.png';
import Footer2 from "../components/Footer2";
import Navbar from "../components/NavbarManager";


function Contact() {

  return (
    <div>
       <Navbar/>
       <section className="contact-Sec" id="contactsus">
            <div className="container contactsus">
                <div className="row">
                    <div className="col-12 title">CONTACT US</div>
                </div>
                <div className="row con_frame">
                    <div className="col-sm cont_box">
                        <div className="row">
                            <div className="col-12 con_icon"><img className="c_icon" src={call} alt="call"/></div>
                            <div className="col-12 con_item">
                                <Link to="/" className="con_link">0716756345</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm cont_box">
                        <div className="row">
                            <div className="col-12 con_icon"><img className="c_icon" src={whtsp} alt="whatsapp"/></div>
                            <div className="col-12 con_item">
                                <Link to="/" className="con_link">whatsapp</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm cont_box">
                        <div className="row">
                            <div className="col-12 con_icon"><img className="c_icon" src={tel} alt="telegram"/></div>
                            <div className="col-12 con_item">
                                <Link to="/" className="con_link">Telegram</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="row formframe">
                    <div className="col-12 f_text">MESSAGE US</div>
                        <div className="col-md-6">
                            <div className="row f_frame1">
                            <div className="col-12">
                                <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><img className="form_icon" src={f_name} alt="..."/></span>
                                <input type="text" className="form-control" placeholder="Name"  aria-describedby="addon-wrapping"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><img className="form_icon" src={f_email} alt="..."/></span>
                                <input type="email" className="form-control" placeholder="Email"  aria-describedby="addon-wrapping"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><img className="form_icon" src={f_phone} alt="..."/></span>
                                <input type="tel" className="form-control" placeholder="Phone Number"  aria-describedby="addon-wrapping"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row f_frame2">
                            <div className="col-12">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div className="col-sm-6">
                                <button type="submit" className="submit_btn1">SEND MESSAGE</button>
                                <button type="submit" className="submit_btn2">SEND</button>
                            </div>
                            <div className="col-sm-6">
                                <button type="reset" className="clear_btn">CLEAR</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <Footer2/>
    </div>
  );
}
export default Contact;

