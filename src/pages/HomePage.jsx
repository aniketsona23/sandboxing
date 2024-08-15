import Hero from "../Components/Hero";
import Projects from "../Components/ProjectSlider";
import About from "../Components/About";

function HomePage() {
  return (
    <section className="home-page">
      <Hero />
      <About />
      <hr className="divider" />
      <Projects />
    </section>
  );
}

export default HomePage;
