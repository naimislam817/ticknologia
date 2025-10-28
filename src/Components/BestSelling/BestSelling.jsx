import React from 'react'
import Product1 from "../../assets/1.jpeg";
import Product2 from "../../assets/2.jpeg";
import Product3 from "../../assets/3.jpeg";
import Product4 from "../../assets/4.jpeg";
import "./BestSelling.css";

const newArrivals = [
  { id: 1, name: "Classic Leather Watch", image: Product1, price: "$120", description: "Elegant leather strap watch with timeless design." },
  { id: 2, name: "Modern Chronograph", image: Product2, price: "$180", description: "Stylish chronograph with stainless steel finish." },
  { id: 3, name: "Sport Edition", image: Product3, price: "$150", description: "Durable and waterproof design for active wear." },
  { id: 4, name: "Luxury Gold Watch", image: Product4, price: "$250", description: "Premium gold-plated case and sapphire glass." },
];


function BestSelling() {
  
  return (
 <section className="new-arrivals-section">
      <h2 className="section-heading">Best Seller</h2>

      <div className="product-grid">
        {newArrivals.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              loading="lazy"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSelling;