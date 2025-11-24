import './Projects.css'
import { useEffect, useRef } from 'react'
import { projects } from '../../data/content'

function Projects() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const hoverInterval = useRef<number | null>(null)

  const scrollTrack = (direction: 'prev' | 'next', step = 6) => {
    const track = trackRef.current
    if (!track) return
    const delta = step * (direction === 'next' ? 1 : -1)
    track.scrollBy({ left: delta, behavior: 'auto' })
  }

  const startHoverScroll = (direction: 'prev' | 'next') => {
    if (hoverInterval.current) window.clearInterval(hoverInterval.current)
    hoverInterval.current = window.setInterval(() => scrollTrack(direction), 16)
  }

  const stopHoverScroll = () => {
    if (hoverInterval.current) {
      window.clearInterval(hoverInterval.current)
      hoverInterval.current = null
    }
  }

  useEffect(() => stopHoverScroll, [])

  return (
    <section className="projects panel" id="projects">
      <div className="section-title">
        <h2>Selected projects</h2>
        <span className="muted mono">Outcome-driven builds with speed and polish.</span>
      </div>

      <div className="projects__carousel">
        <button
          className="projects__control"
          type="button"
          aria-label="Previous project"
          onMouseEnter={() => startHoverScroll('prev')}
          onMouseLeave={stopHoverScroll}
          onBlur={stopHoverScroll}
        >
          ‹
        </button>

        <div className="projects__track" ref={trackRef}>
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

        <button
          className="projects__control"
          type="button"
          aria-label="Next project"
          onMouseEnter={() => startHoverScroll('next')}
          onMouseLeave={stopHoverScroll}
          onBlur={stopHoverScroll}
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Projects
