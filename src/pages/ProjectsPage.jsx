import {Projects} from "../utils/projects"
import Card from "../Components/ProjectSliderCard";
import "../styles/projects-page.css"

function ProjectsPage(){
    return (
    <section className="project-page">
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
    </section>)
}

export default ProjectsPage

