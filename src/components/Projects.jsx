import React from 'react'

const Projects = ({ projects }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A snapshot of things I&apos;ve built, shipped, and iterated on.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip chip-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  View Live
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  className="btn btn-sm btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  View on GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects

