import Card from "./ProjectSliderCard";
import { Projects } from "../utils/projects";
import "../styles/projects.css"

function CardTicker() {
  console.log(Projects);
  return (
    <div className="project-section">
      <h1 className="section-header">PROJECTS SO FAR</h1>
      <div className="card-ticker">
        <div className="ticker">
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
      </div>
    </div>
  );
}

export default CardTicker;
