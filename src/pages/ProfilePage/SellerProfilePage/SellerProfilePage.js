import React, { useState } from "react";
import "./SellerProfilePage.css";
import "../../Store/store.css";
import NavbarManager from "../../../components/NavbarManager";
import Footer from "../../../components/Footer";
import ProfilePhoto from "../../CoachModule/userprofiles/createplan/createplanimages/profilephoto.jpg";

function SellerProfilePage() {
    const [ads, setAds] = useState([
        {
            id: 1,
            name: "Gym T-Shirt",
            description: "High-quality cotton gym shirt.",
            imageUrl: "https://via.placeholder.com/150",
            sizes: "S, M, L, XL",
            price: 2500
        },
        {
            id: 2,
            name: "Muscle Tank",
            description: "Breathable sleeveless gym top.",
            imageUrl: "https://via.placeholder.com/150",
            sizes: "M, L",
            price: 2200
        }
    ]);

    const handleDeleteAd = (adId) => {
        setAds(prevAds => prevAds.filter(ad => ad.id !== adId));
    };

    const renderAdCards = () => {
        return (
            <div className="carousel-viewport" style={{ marginTop: "2rem" }}>
                <div
                    className="carousel-slider"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'center'
                    }}
                >
                    {ads.map((ad) => (
                        <div key={ad.id} className="product-card-wrapper">
                            <div className="product-card">
                                <img
                                    src={ad.imageUrl}
                                    alt={ad.name}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/600x400/222/fff?text=Image+Error';
                                    }}
                                />
                                <div className="product-info">
                                    <h3>{ad.name}</h3>
                                    <p>{ad.description}</p>
                                    <p className="sizes"><strong>Available Sizes:</strong> {ad.sizes}</p>
                                    <div className="product-price">LKR {ad.price}</div>
                                    <button className="delete-button" onClick={() => handleDeleteAd(ad.id)}>Delete Listing</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="FullPage">
            <NavbarManager />

            <div className="profileTop">
                <div className="profileInfo">
                    <div className="profilePhoto">
                        <img src={ProfilePhoto} alt="Cristiano Ronaldo" />
                    </div>
                    <div className="profileData">
                        <h1>Lahiru Kumara</h1>
                        <h5>BIO</h5>
                        <p>I am a Proffesional GYM shirts provider, I have Sri Lanka's Largest gym shirt store.</p>
                        <div className="profileDataShow">
                            <p>YOUR STORE NAME : <b>GYM Sharks</b></p>
                            <p>BUSINESS REGISTRATION NO : <b>NBR3001n45a</b></p>
                            <p>DOB : <b>1989-09-11</b></p>
                            <p>LOCATION : <b>Kandy</b></p>
                            <p>EMAIL : <b>lahirukumara@gmail.com</b></p>
                            <p>PHONE NUMBER : <b>+94-770711960</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="adsSection">
                <h2 className="my-ads-title">My Product Listings</h2>
                {renderAdCards()}
            </div>

            <Footer />
        </div>
    );
}

export default SellerProfilePage;
