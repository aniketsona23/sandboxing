import Hero from "../Components/Hero"
import Projects from "../Components/ProjectSlider"
import About from "../Components/About"

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <hr className="divider" />
      <Projects />
    </>
  );
}

export default HomePage;
