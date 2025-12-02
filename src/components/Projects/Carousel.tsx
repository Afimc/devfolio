import './Carousel.css'
import type { CSSProperties } from 'react'

export type Project = {
  title: string
  category: string
  description: string
  stack: string[]
  result: string
  gitHubLink?: string
}

const slideWidth = 32 // rem
export const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

type CarouselProps = {
  items: Project[]
  duplicatedItems: Project[]
  order: number[]
  activeIdx: number
  onPrev: () => void
  onNext: () => void
  onDotClick: (idx: number) => void
}

const CarouselSlideItem = ({
  pos,
  idx,
  activeIdx,
  length,
  duplicatedProjects,
}: {
  pos: number
  idx: number
  activeIdx: number
  length: number
  duplicatedProjects: Project[]
}) => {
  const isActive = pos === length
  const isNeighbor = pos === length - 1 || pos === length + 1
  const scale = isActive ? 1.05 : 0.75

  let styles: CSSProperties = {
    transform: `translateX(calc(${(pos - length) * slideWidth}rem - 50%)) scale(${scale})`,
  }

  if (isNeighbor) {
    styles = { ...styles, filter: 'grayscale(1)' }
  } else if (!isActive) {
    styles = { ...styles, opacity: 0 }
  }

  const project = duplicatedProjects[idx % duplicatedProjects.length]

  return (
    <li className="carousel__slide-item" style={styles} aria-hidden={idx % length !== activeIdx}>
      <article className={`projects__card${isActive ? ' projects__card--active' : ''}`}>
        <div className="projects__meta">
          <span className="eyebrow">{project.category}</span>
          <h3>{project.title}</h3>
          <p className="muted">{project.description}</p>
        </div>
        <div className="projects__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
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
    </li>
  )
}

function Carousel({ items, duplicatedItems, order, activeIdx, onPrev, onNext, onDotClick }: CarouselProps) {
  const length = items.length

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button className="carousel__btn carousel__btn--prev" aria-label="Previous project" onClick={onPrev}>
          <span className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>

        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {order.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
                length={length}
                duplicatedProjects={duplicatedItems}
              />
            ))}
          </ul>
        </div>

        <button className="carousel__btn carousel__btn--next" aria-label="Next project" onClick={onNext}>
          <span className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>

        <div className="carousel__dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onDotClick(i)}
              className={`carousel__dot${i === activeIdx ? ' is-active' : ''}`}
              aria-label={`Go to project ${i + 1}`}
              aria-pressed={i === activeIdx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
