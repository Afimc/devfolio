import './Projects.css'
import { projects } from '../../data/content'

function Projects() {
  return (
    <section className="projects panel" id="projects">
      <div className="section-title">
        <h2>Selected projects</h2>
        <span className="muted mono">Outcome-driven builds with speed and polish.</span>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="projects__card">
            <div className="projects__meta">
              <span className="eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
            </div>
            <div className="projects__stack">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="projects__result">
              <span className="mono">Result</span>
              <p>{project.result}</p>
            </div>
            {project.gitHubLink && (
              <a className="projects__repo" href={project.gitHubLink} target="_blank" rel="noreferrer">
                View
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
