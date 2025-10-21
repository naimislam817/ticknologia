import React from "react";
import picture from "../../assets/brandname.jpg";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../../Pages/Cart";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_image">
        <img src={picture} alt="" className="headerimage" />
      </div>
      <div className="HomeMenu">
        <Link to="/">
          <a href="">Home</a>
        </Link>
        <a href="">Products</a>
        <Link to="/Contactus">
        <a href="">Contact Us</a>
          
        </Link>
      </div>
      <div className="item">
        <button className="searchbar">
          <FaSearch />
        </button>
        <Link to="/Signup">
        <button className="userlogo">
          <FaRegUser />
        </button> 
        </Link>
        
        
      
        <Link to="/Cart">
          <button className="cartlogo">
            <FaCartPlus />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
