import './Experience.css';
import { experience, education } from '../../data/experience.js';

function Experience() {
  return (
    <section id="education" className="experience-section">
      <div className="container">
         {/* Fixed nested h1 tag here */}
         <h1 className="section-title"><h1>Education</h1></h1>
         <h2>My academic background and professional qualifications.</h2>
         
        <div className="timeline-grid">

          {/* Education Block */}
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

          {/* Certification Block */}
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