import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../../../components/NavbarManager';
import Footer from '../../../components/Footer';
import '../store.css';

export function AddAdvertisement({ onAddAd }) {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !description || !price) {
      alert('Please fill out all fields.');
      return;
    }

    const newAd = {
      id: Date.now(),
      name: itemName,
      description: description,
      sizes: 'XL, L, M, S, XS',
      price: price,
      imageUrl: `https://placehold.co/600x400/222/fff?text=${itemName.replace(/\s/g, '+')}`,
    };

    onAddAd(newAd);
    alert('Advertisement created successfully!');
    navigate('/MyAdvertisements');
  };

  return (
    <div className="add-ad-container">
      <div className="add-ad-content-wrapper">
        <div className="add-ad-header">
          <h2 className="add-ad-title">ADD ADVERTISEMENT</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <div className="input-wrapper">
              <input type="text" id="itemName" className="form-input" placeholder="Enter Title" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <div className="input-wrapper">
              <textarea id="description" className="form-textarea" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price (in LKR)</label>
            <div className="input-wrapper">
              <input type="number" id="price" className="form-input" placeholder="e.g., 4500.00" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="images">Add Images</label>
            <div className="input-wrapper">
              <div className="file-drop-area">
                <p>Drag and Drop files here</p>
                <p>or</p>
                <button type="button" className="browse-button">Browse Files</button>
              </div>
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '2rem', marginBottom: '0' }}>
            <label />
            <div className="input-wrapper">
              <div className="form-actions">
                <button type="submit" className="submit-button">Create Listing</button>
                <button type="button" className="cancel-button" onClick={() => navigate('/SellerHome')}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AddAdvertisementPage({ onAddAd }) {
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 150px)',
        paddingBottom: '200px'
    };

    return (
        <>
            <Navbar />
            <div style={pageStyle}>
                <AddAdvertisement onAddAd={onAddAd} />
            </div>
            <Footer />
        </>
    );
}
