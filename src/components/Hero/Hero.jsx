import './Hero.css';
import { resumeLink } from '../../utils/constants.js';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><h2>Hello, I’m</h2></p>
          <h1>Adhithya Jayawardhana</h1>
          <p className="hero-description">
            A Software Engineering undergraduate passionate about building modern web experiences, responsive interfaces, and user-centered digital solutions. Skilled in web development, UI/UX design, and business analysis, with a focus on creating impactful applications that combine creativity, functionality, and business value.
          </p>
          <div className="hero-buttons">
            <a className="btn-primary" href="#projects">View Projects</a>
            <a className="btn-primary" href={resumeLink} download>Download CV </a>
            <a className="btn-primary" href="#contact">Get In Touch</a>
          </div>
        </div>
       
          <img 
            src="/images/DD.png" 
            alt="Adhithya Jayawardhana" 
            className="profile-image"
          />
         
      </div>
    </section>
  );
}

export default Hero;
