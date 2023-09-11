// import React from 'react'
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div className="hero-section">
      <h1>
        <span>100 Thousand Songs, ad-free</span>
        <br />
        <span>Over thousands podcast episodes</span>
      </h1>
      <img
        src={require("../../assets/hero-headphone.png")}
        alt="headphone"
        width={212}
        height={212}
      />
    </div>
  );
}
