import './Projects.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-meta">
        {project.tech.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        
        {/* GitHub Link with Right Arrow */}
        <a className="secondary-link" href={project.github} target="_blank" rel="noreferrer">
          🔗 GitHub
          {/* SVG Right Arrow Icon */}
          <svg 
            className="link-arrow" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;