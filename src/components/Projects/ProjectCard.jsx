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
        <a className="secondary-link" href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="secondary-link" href={project.liveDemo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a className="secondary-link" href={project.videoDemo} target="_blank" rel="noreferrer">
          Video Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
