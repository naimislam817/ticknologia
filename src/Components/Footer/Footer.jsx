import React from "react";
import picture from "../../assets/brandname.png";
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footerimg">
        <img src={picture} alt="" className="fi" />
        <p className="footerpara">
          Ticknologia – Where Time Meets Technology. Luxury watches that blend
          elegance with innovation. Explore premium timepieces, fast delivery,
          and expert support. Elevate your style. Own your time.
        </p>
        <div className="Socialmedia">
          <button className="social">
            <FaInstagramSquare />
          </button>
          <button className="social">
            <FaFacebook />
          </button>
          <button className="social">
            <FaTiktok />
          </button>
          <button className="social">
            <FaWhatsapp />
          </button>
        </div>
        <p className="ftbt">
          © 2025 Ticknologia All rights reserved. Designed by Naim
        </p>
      </div>
      <div className="Support">
        <h3>Customer Support</h3>
        <div className="supportpara">
          <p>Our Story</p>
          <p>Mission & Values</p>
          <p>Meet The Team</p>
          <p>Brand Partnership</p>
          <p>Influencer Collaboration</p>
        </div>
        
    </div>
    <div className="Support2">
          <div><h3>Let’s get in touch</h3>
          <p>
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          </div>
          <div className="lgbtn">
            <input type="text" placeholder="Enter your email" className="inputemail" />
            <button className="arrowbtn"> <FaArrowAltCircleRight /></button>
          </div>
        </div>
    </div>
  );
}

export default Footer;
