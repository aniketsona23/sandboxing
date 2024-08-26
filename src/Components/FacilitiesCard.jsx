import React from "react";
import "../styles/facilitiesCard.css";

export default function Card({ image, name }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="facility-card"
    >
      <footer className="card-overlay">
        <h3>{name}</h3>
      </footer>
    </div>
  );
}
