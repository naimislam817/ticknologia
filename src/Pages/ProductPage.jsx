import React from 'react';
import picture from '../assets/producthomebanner.png';
import './ProductPage.css';
import { FaSearch } from "react-icons/fa";

function ProductPage() {
  return (
    <div>
   <div className='productbanner'>
      <img src={picture} alt="" />
    </div> 
     <div className='producthomesearch'><input type="search" name="Search " placeholder='Search Product here'/>
     <button className='searchbuttonproduct'><FaSearch /></button>
     <div className='filtercategory'>
     <label htmlFor="Category">  Category  </label> 
      <select name="Category" id="CategorySelect">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="All">All</option>
    </select>
    </div>
  </div>
    <div>
   </div>  
   </div>   
  )
}

export default ProductPage;