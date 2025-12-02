import './Projects.css'
import { useEffect, useState } from 'react'
import { projects } from '../../data/content'
import Carousel, { sleep } from './Carousel'
import type { Project } from './Carousel'

const duplicatedProjects = [...projects, ...projects]
const length = projects.length
const totalLength = duplicatedProjects.length

function Projects() {
  const [order, setOrder] = useState(() => Array.from({ length: totalLength }, (_, idx) => idx))
  const [isTicking, setIsTicking] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const bigLength = order.length

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setOrder((prev) => prev.map((_, i) => prev[(i + jump) % bigLength]))
    }
  }

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true)
      setOrder((prev) => prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]))
    }
  }

  const handleDotClick = (idx: number) => {
    if (idx < activeIdx) prevClick(activeIdx - idx)
    if (idx > activeIdx) nextClick(idx - activeIdx)
  }

  useEffect(() => {
    if (isTicking) sleep(350).then(() => setIsTicking(false))
  }, [isTicking])

  useEffect(() => {
    setActiveIdx((length - (order[0] % length)) % length)
  }, [order])

  return (
    <section className="projects panel" id="projects">
      <div className="section-title">
        <h2>Selected projects</h2>
        <span className="muted mono">Outcome-driven builds with speed and polish.</span>
      </div>

      <Carousel
        items={projects as Project[]}
        duplicatedItems={duplicatedProjects}
        order={order}
        activeIdx={activeIdx}
        onPrev={() => prevClick()}
        onNext={() => nextClick()}
        onDotClick={handleDotClick}
      />
    </section>
  )
}

export default Projects
