import './Projects.css';
import SectionTitle from '../Common/SectionTitle.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../../data/projects.js';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1 className="section-title"><h1>Projects</h1></h1>
        <h2>Technical skills I use to build fast and polished websites.</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
