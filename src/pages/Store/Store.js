import React, { useState, useRef } from "react";
import Navbar from "../../components/NavbarManager";
import Footer from "../../components/Footer";
import "./store.css";

// --- MOCK DATA for the Public Store Page ---
const storeProducts = [
  // --- Common Accessories ---
  {
    id: 1,
    category: "Common",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 2,
    category: "Common",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 3,
    category: "Common",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 4,
    category: "Common",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 5,
    category: "Common",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },

  // --- Gym Accessories ---
  {
    id: 6,
    category: "Gym",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 7,
    category: "Gym",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 8,
    category: "Gym",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 9,
    category: "Gym",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 10,
    category: "Gym",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },

  // --- Volleyball Accessories ---
  {
    id: 11,
    category: "Volleyball",
    name: "Pro Volleyball",
    description: "Official size and weight for matches.",
    contact: "0771234567",
    sizes: "Official Size",
    price: "3500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 12,
    category: "Volleyball",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 13,
    category: "Volleyball",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 14,
    category: "Volleyball",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 15,
    category: "Volleyball",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },

  // --- Karate Accessories ---
  {
    id: 16,
    category: "Karate",
    name: "Karate Gi",
    description: "100% Cotton, lightweight uniform.",
    contact: "0771234567",
    sizes: "M, L, XL",
    price: "6500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 17,
    category: "Karate",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 18,
    category: "Karate",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 19,
    category: "Karate",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
  {
    id: 20,
    category: "Karate",
    name: "GYM SHIRT",
    description: "New Arrivals Baggy Type Sports Wear",
    contact: "0771234567",
    sizes: "XL, L, M, S, XS",
    price: "4500",
    imageUrl: "https://placehold.co/600x400/f5f5dc/222?text=GYM+SHIRT",
  },
];

// --- REUSABLE COMPONENTS ---

const StoreProductCard = ({ product }) => {
  return (
    <div className="store-product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="store-product-image"
      />
      <div className="store-product-info">
        <h3 className="store-product-name">{product.name}</h3>
        <p className="store-product-desc">{product.description}</p>
        <p className="store-product-contact">
          <strong>Contact Seller:</strong> {product.contact}
        </p>
        <p className="store-product-sizes">
          <strong>Available Sizes:</strong> {product.sizes}
        </p>
        <p className="store-product-price">LKR {product.price}</p>
      </div>
    </div>
  );
};

const ProductCarousel = ({ title, products }) => {
  const scrollRef = useRef(null);

  // This function runs when the right arrow is clicked
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Scrolls 300 pixels to the right
    }
  };

  // This function runs when the left arrow is clicked
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Scrolls 300 pixels to the left
    }
  };

  return (
    <section className="product-carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        <div className="carousel-arrow left-arrow" onClick={scrollLeft}>
          &lt;
        </div>

        <div className="carousel-track" ref={scrollRef}>
          {products.map((product) => (
            <StoreProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="carousel-arrow right-arrow" onClick={scrollRight}>
          &gt;
        </div>
      </div>
    </section>
  );
};

// --- THE MAIN PAGE COMPONENT ---
export default function Store() {

  const [activeCategory, setActiveCategory] = useState("All");
  const commonAccessories = storeProducts.filter(
    (p) => p.category === "Common"
  );
  const gymAccessories = storeProducts.filter((p) => p.category === "Gym");
  const volleyballAccessories = storeProducts.filter(
    (p) => p.category === "Volleyball"
  );
  const karateAccessories = storeProducts.filter(
    (p) => p.category === "Karate"
  );

  return (
    <>
      <Navbar />
      <div className="store-home-page">
        <header className="store-hero-section">
          <h1>
            Your Ultimate{" "}
            <span className="highlight-red">Sports & Fitness</span> Store!
          </h1>
        </header>

        <div className="filter-bar-container">
          <div className="category-button-group">
            <button
              className={`category-button ${
                activeCategory === "All" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("All")}
            >
              All Listings
            </button>
            <button
              className={`category-button ${
                activeCategory === "Gym" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Gym")}
            >
              GYM
            </button>
            <button
              className={`category-button ${
                activeCategory === "Karate" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Karate")}
            >
              Karate
            </button>
            <button
              className={`category-button ${
                activeCategory === "Volleyball" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Volleyball")}
            >
              Volleyball
            </button>
          </div>
        </div>

        <main className="store-content">
          {(activeCategory === "All" || activeCategory === "Common") && (
            <ProductCarousel
              title="COMMON ACCESSORIES"
              products={commonAccessories}
            />
          )}
          {(activeCategory === "All" || activeCategory === "Gym") && (
            <ProductCarousel
              title="GYM ACCESSORIES"
              products={gymAccessories}
            />
          )}
          {(activeCategory === "All" || activeCategory === "Volleyball") && (
            <ProductCarousel
              title="VOLLEYBALL ACCESSORIES"
              products={volleyballAccessories}
            />
          )}
          {(activeCategory === "All" || activeCategory === "Karate") && (
            <ProductCarousel
              title="KARATE ACCESSORIES"
              products={karateAccessories}
            />
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
