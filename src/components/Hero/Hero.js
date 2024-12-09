import React from "react";
import "./hero.css";
import resto from "../../assets/restauranfood.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={resto} alt="Featured dishes" />
      </div>
    </section>
  );
}

export default Hero;
