import './About.css';

function About({ resumeLink, socialLinks }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <h1 className="section-title"><h1>About Me</h1></h1>
            <h2>Designing and developing impactful digital experiences that combine creativity and functionality.</h2>
            <p>
              I am a third-year Software Engineering undergraduate with a passion for web development, business analysis, and UI/UX design. 
            </p>
            <p>I enjoy creating modern, user-centered digital solutions that combine functionality, visual design, and business value. I am continuously developing my technical and analytical skills to build efficient, impactful, and user-friendly applications.
            </p>
          
            <div className="about-actions">
              
              <a className="btn-primary" href="https://www.linkedin.com/in/adhithyajayawardhana" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
              <a className="btn-primary" href="https://github.com/adhithya-21" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="about-stats card">
            <div className="stat-item">
              <span className="stat-value">2+ Year</span>
              <span className="stat-label">Development Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">4+ </span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">4+ </span>
              <span className="stat-label">Blog Articles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
