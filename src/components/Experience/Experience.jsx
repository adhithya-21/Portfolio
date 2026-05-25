import './Experience.css';
import { experience, education } from '../../data/experience.js';

function Experience() {
  return (
    <section id="education" className="experience-section">
      <div className="container">
         <h1 className="section-title">Education</h1>
         <h2>My academic background and professional qualifications.</h2>
         
        <div className="timeline-grid">

          {/* LEFT SIDE: Education Block (No scrolling) */}
          <div className="timeline-block" id="education-block">
            <h2>Education</h2>
            {education.map((item) => (
              <div key={item.title} className="timeline-item card">
                <h4>{item.title}</h4>
                <p className="timeline-company">{item.institution}</p>
                <p className="timeline-timeframe">{item.timeframe}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Certification Block (Scrolling Up to Down) */}
          <div className="timeline-block" id="certification-block">
            <h2>Certification</h2>
            <div className="scroll-container">
              {experience.map((item) => (
                <div key={item.title} className="timeline-item card">
                  <h4>{item.title}</h4>
                  <p className="timeline-company">{item.institution}</p>
                  <p className="timeline-timeframe">{item.timeframe}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;