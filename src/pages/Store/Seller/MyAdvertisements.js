import React, { useRef } from 'react';
import Navbar from '../../../components/NavbarManager';
import Footer from '../../../components/Footer';
import '../store.css';
import { Link } from 'react-router-dom'; 

function MyAdvertisementsCarousel({ ads, onDeleteAd }) {
    const scrollRef = useRef(null); 

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollRef.current.offsetWidth; 
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
        }
    };

    return (
        <div className="my-ads-container">
            <h2 className="my-ads-title">MY ADVERTISEMENTS</h2>
            <div className="carousel-container">
                <div className="nav-arrow arrow-left" onClick={scrollLeft}>&lt;</div>
                
                <div className="carousel-viewport" ref={scrollRef}>
                    <div className="carousel-slider">
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
                                        <button className="delete-button" onClick={() => onDeleteAd(ad.id)}>Delete Listing</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="nav-arrow arrow-right" onClick={scrollRight}>&gt;</div>
            </div>
        </div>
    );
}

export default function MyAdvertisementsPage({ ads, onDeleteAd }) {
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 2rem',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 150px)',
        paddingBottom: '200px'
    };

    const renderContent = () => {
        if (!ads) {
            return <div style={{color: 'white'}}>Loading advertisements...</div>;
        }
        if (ads.length === 0) {
            return (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2 className="my-ads-title">You have no advertisements yet.</h2>
                    <Link to="/addadvertisement" className="home-action-button">Create Your First One</Link>
                </div>
            );
        }
        return <MyAdvertisementsCarousel ads={ads} onDeleteAd={onDeleteAd} />;
    };

    return (
        <>
            <Navbar />
            <div style={pageStyle}>
                {renderContent()}
            </div>
            <Footer />
        </>
    );
}