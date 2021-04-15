import React from "react";
import "../../style/Footer.css";

const services = [
  "DB Managemen",
  "IOS/MacOS",
  "Android Apps",
  "Windows Apps",
  "UX/UI Apps",
];

function WhatWeOffer() {
  return (
    <section className="what-we-offer">
      <h1>What We Offer</h1>
      <div className="what-we-offer-container">
        {services.map((service) => (
          <figure className="what-we-offer-item">
            <p>{service}</p>
            <figure className="triangle"></figure>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default WhatWeOffer;
