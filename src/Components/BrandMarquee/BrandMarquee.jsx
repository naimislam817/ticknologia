import React from "react";

import "./BrandMarquee.css";

const brands = [
  { name: "Casio", logos: "/logos/Casio.png" },
  { name: "Omega", logos: "/logos/omega.png" },
  { name: "Rolex", logos: "/logos/rolex.png" },
  { name: "Seiko", logos: "/logos/seiko-logo.png" },
  { name: "Tag Heuer", logos: "/logos/tag-heuer.png" },
  { name: "Tissot", logos: "/logos/tissot-logo.png" },
];

export default function BrandMarquee() {
  return (
    <section className="brand-section">
      <h2 className="brand-heading">Shop By Brands</h2>

      <div className="brand-row">
        {brands.map((brand, index) => (
          <div key={index} className="brand-box">
            <img
              src={brand.logos}
              alt={`${brand.name} logos`}
              className="brand-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
