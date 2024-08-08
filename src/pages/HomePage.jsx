import Hero from "../Components/Hero";
import Projects from "../Components/ProjectSlider";
import About from "../Components/About";
import SandboxVid from "../Components/SandboxVid";

function HomePage() {
  return (
    <section className="home-page">
      <Hero />
      {/* <SandboxVid /> */}
      <About />
      <hr className="divider" />
      <Projects />
    </section>
  );
}

export default HomePage;
