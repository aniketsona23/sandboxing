import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Sandbox Innovations Lab</h1>
        <p>BITS Pilani, K.K. Birla Goa Campus's Incubation Centre</p>
        <div className="hero-btn">
          <a className="about-btn" href="#about-section">
            About Us
          </a>
          <button
            className="access-btn"
            onClick={() => {
              navigate("/proposal");
            }}
          >
            Access to Sandbox
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
