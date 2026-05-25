import './Projects.css';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../../data/projects.js';
// Note: If you have a SectionTitle component, you can import it here too!

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Fixed the double <h1> bug here */}
        <h1 className="section-title"><h1>Projects</h1></h1>
        <h2>Technical skills I use to build fast and polished websites.</h2>
        
        {/* Changed class name to projects-slider */}
        <div className="projects-slider">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Projects;