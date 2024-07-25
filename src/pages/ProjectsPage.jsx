import { Projects } from "../utils/projects";
import Card from "../Components/ProjectSliderCard";
import "../styles/projects-page.css";
import React, { memo } from "react";

const ProjectsPage = memo(() => {
  return (
    <section className="projects-page">
      <header>
        <div className="header-text">
          <h1>Projects</h1>
        </div>
      </header>
      <div className="projects">
        {Projects.map((element, i) => {
          return (
            <Card
              key={i}
              image={element.image}
              link=""
              title={element.title}
              desc={element.description}
            />
          );
        })}
      </div>
    </section>
  );
});

export default ProjectsPage;
