import React from 'react'
import "./ProductDetails.css"
import products from "../../data/productsData.jsx";
import { useParams } from 'react-router-dom';
    function ProductDetails() {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id));
    if (!product) {
      return <div>Product not found</div>;
    }
    return (
    <div> <h2>{ product.name }</h2> 
    <p>  Price :  { product.price } </p>
  
    </div>
   )
}

export default ProductDetails;