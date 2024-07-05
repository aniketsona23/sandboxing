import "../styles/hero.css"
function Hero() {
    return (
        <section className="hero">
            <h1>Sandbox Innovations Lab</h1>
            <p>BITS Pilani, K.K. Birla Goa Campus's Incubation Centre</p>
            <div className="hero-btn">
                <button className="about-btn">About Us</button>
                <button className="projects-btn">Our Facilities</button>
            </div>
        </section>
    );
}

export default Hero;
