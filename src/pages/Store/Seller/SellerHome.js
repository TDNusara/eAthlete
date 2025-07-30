import React from "react";
import Navbar from '../../../components/NavbarManager';
import Footer from '../../../components/Footer';
import '../store.css';
import { Link } from "react-router-dom";


export default function SellerHome() {
  return (
    <div className="sellerhomebg">
      <Navbar />
      <div>
        <div className="seller-home-content">
          <h1 className="seller-home-title">
            Manage Your Products, Track Sales, and Power Up Your Store
            Performance.
          </h1>
          <div className="home-button-container">
           
            <Link to="/AddAdvertisement" className="home-action-button">
              Add Advertisements
            </Link>
           
            <Link to="/MyAdvertisements" className="home-action-button">
              My Advertisement
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
