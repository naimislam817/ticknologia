import React, { useState } from "react";
import picture from "../assets/producthomebanner.png";
import "./ProductPage.css";
import { FaSearch, FaStar, FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductGallery from "../Components/ProductDeatils/ProductOne/ProductOne.jsx";
// Product images
import Product1 from "../assets/1.jpeg";
import Product2 from "../assets/2.jpeg";
import Product3 from "../assets/3.jpeg";
import Product4 from "../assets/4.jpeg";
import Product5 from "../assets/5.jpeg";
import Product6 from "../assets/6.jpeg";
import Product7 from "../assets/7.jpeg";
import Product8 from "../assets/8.jpeg";
import Product9 from "../assets/9.jpeg";

const products = [
  { id: 1, name: "TuroGeme", price: 100, image: Product1 },
  { id: 2, name: "Elegance", price: 120, image: Product2 },
  { id: 3, name: "ClassicPro", price: 150, image: Product3 },
  { id: 4, name: "LuxuryEdge", price: 90, image: Product4 },
  { id: 5, name: "BoldDesign", price: 100, image: Product5 },
  { id: 6, name: "RoyalSilver", price: 80, image: Product6 },
  { id: 7, name: "TuroBlack", price: 95, image: Product7 },
  { id: 8, name: "TuroBlue", price: 105, image: Product8 },
  { id: 9, name: "TuroModern", price: 130, image: Product9 },
];

function ProductPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => setSearch(e.target.value);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-page-container">
      {/* Banner */}
      <div className="productbanner">
        <img src={picture} alt="banner" />
      </div>

      {/* Search & Filter */}
      <div className="producthomesearch">
        <input
          type="search"
          placeholder="Search Product here"
          value={search}
          onChange={handleOnChange}
        />
        <button className="searchbuttonproduct">
          <FaSearch />
        </button>

        <div className="filtercategory">
          <label htmlFor="CategorySelect">Category</label>
          <select id="CategorySelect">
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="ProductPage">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="productcard"
              onClick={() => {
                if (product.id === 1) navigate("/ProductOne");
              }}
              style={{ cursor: "pointer" }} // optional: make it clear it's clickable
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>

              {/* Rating */}
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Price + Cart */}
              <div className="priceandcart">
                <p>${product.price}</p>
                <button>
                  <FaCartPlus />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
