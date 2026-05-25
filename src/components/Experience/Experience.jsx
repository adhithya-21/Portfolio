import './Experience.css';
import { experience, education } from '../../data/experience.js';
import { Paperclip } from 'lucide-react';

function Experience() {
  return (
    <section id="education" className="experience-section">
      <div className="container">
         <h1 className="section-title"><h>Educational Background</h></h1>
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
                  <div className="timeline-header">
                    <h4>{item.title}</h4>
                    {item.certificateLink && (
                      <a 
                        href={item.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="certificate-link"
                        title="View Certificate"
                        aria-label={`View ${item.title} Certificate`}
                      >
                        <Paperclip size={18} />
                      </a>
                    )}
                  </div>
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