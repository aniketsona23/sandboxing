import React from "react";
import github from "../Assets/github.png";
import "../styles/full-project-card.css";
function FullProjectCard({ img, title, desc, points, links }) {
  return (
    <div className="full-project-card">
      <div className="project-img">
        <img src={img} alt="" />
      </div>
      <div className="project-details">
        <header>
          <h1 className="project-title">{title}</h1>
          <div className="project-links">
            {links.github && (
              <a href={links.github}>
                <img src={github} alt="" />
              </a>
            )}
          </div>
        </header>
        <p className="project-desc">{desc}</p>
        <ul className="project-points">
          {points.map((elemn, i) => {
            return <li key={i}>{elemn}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default FullProjectCard;
