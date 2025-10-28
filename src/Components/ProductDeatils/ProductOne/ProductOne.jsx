import React, { useState } from "react";
import "./ProductOne.css"; // optional for styling

// Example images (import from assets or use URLs)
import mainImageDefault from "../../../assets/1.jpeg";
import img1 from "../../../assets/products/p1.jpg";
import img2 from "../../../assets/products/p2.jpg";
import img3 from "../../../assets/products/p3.jpg";
import img4 from "../../../assets/products/p4.jpg";

function ProductOne() {
  // Store all images in an array
  const images = [img1, img2, img3, img4];

  // State for the main image (initially first image)
  const [mainImage, setMainImage] = useState(images[0]);

  return (
  
    <div className="product-gallery">
      {/* Main Image */}
      <div className="ThumbnailandMainImage">
      <div className="main-image">
        <img src={mainImage} alt="Product" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-row">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${mainImage === image ? "active" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
     
      </div>
      </div>
      <div className="ProductDescription"> 
        <h3 className="LimitedEdition">Limited Edition</h3>
        <h2>2,450.00৳</h2>
        <h3>Colours</h3>
        <button>Buy Now</button>
        <h3>Free shipping on orders over 5000 TAKA!
        <ol> &#10003; No-Risk Money Back Guarantee!</ol>
        <ol>&#10003;No Hassle Refunds</ol>
        <ol>&#10003; Secure Payments</ol>
        </h3>
 </div>
      </div>
      
  );
}

export default ProductOne;
