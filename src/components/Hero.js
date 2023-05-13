const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>Bryce Fleck</h1>
            <h3>Senior Full Stack Developer</h3>
            <p>
              I'm a dedicated and efficient full-stack developer experienced in
              React and Node and have a background in Laravel.
              As a full-stack developer, I can create complete End to End
              applications from the database to the UI. My strong stacks include
              React.js, Next.js for the front end, Node/Express and Laravel for the
              back end, AWS for the cloud platform, and MySQL, PostgreSQL,
              and MongoDB for the database.
            </p>
            <div className="hero-btn-container">
              <a href="images/CV.pdf" download className="btn primary-btn">
                Download CV
              </a>
              {/* <a href="img/cv/CV.pdf" download>
                  Download CV
                </a> */}
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src="images/profile.jpg" alt="dora_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
