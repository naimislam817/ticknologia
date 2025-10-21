import React from "react";
import picture from "../../assets/background.jpg";
import "./Hero.css";
import BrandMarquee from "../BrandMarquee/BrandMarquee";
function Hero() {
  return (
   <section>
   <div className="Hero">
      <div className="bg-pic">
        <img src={picture} alt="" />
      </div>
      <button className="buttonhero" > 
        Discovery Now
      </button>
    </div>
    <div className="brandmarque"> <BrandMarquee/> </div>
    </section>
  );
}

export default Hero;
