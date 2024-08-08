import "../styles/about.css";

function About() {
  return (
    <div id="about-section">
      <h1 className="section-header">
        About <span>SANDBOX</span>
      </h1>
      <div className="about-cards">
        <div className="about-card">
          <h1 className="about-header">Industry Level Facilities</h1>
          <p>
            Sandbox offers top-tier industry-level facilities including 3D
            printers, laser cutters, PCB printers, and more. These resources are
            managed by students under the guidance of faculty, ensuring you have
            the support and expertise needed to bring your projects to life.
          </p>
        </div>
        <div className="about-card">
          <h1 className="about-header">24x7 Availability</h1>
          <p>
            Our lab is open 24x7, providing you the flexibility to work on your
            projects at any time that suits you. Whether you're an early bird or
            a night owl, Sandbox is here to support your innovation journey
            around the clock.
          </p>
        </div>
        <div className="about-card">
          <h1 className="about-header">Order Components</h1>
          <p>
            Sandbox registered projects benefit from our materials ordering
            service. Simply apply through Sandbox to access our machines and get
            the components you need for your project, ensuring you have all the
            resources to succeed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
