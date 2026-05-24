import './Skills.css';
import { skills } from '../../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h1 className="section-title"><h1>Skills</h1></h1>
        <h2>Technical skills for creating modern web applications and interactive data visualizations.</h2>
        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-card card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
