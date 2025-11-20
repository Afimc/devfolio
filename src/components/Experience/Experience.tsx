import './Experience.css'
import { timeline } from '../../data/content'

function Experience() {
  return (
    <section className="experience panel" id="experience">
      <div className="section-title">
        <h2>Experience</h2>
        <span className="muted mono">Hybrids squads, systems thinking, fast feedback loops.</span>
      </div>
      <div className="experience__list">
        {timeline.map((item) => (
          <article key={item.period} className="experience__row">
            <div className="experience__period">{item.period}</div>
            <div className="experience__content">
              <div className="experience__heading">
                <h3>
                  {item.title} · <span className="muted">{item.company}</span>
                </h3>
                <span className="experience__dot" aria-hidden />
              </div>
              <p className="muted">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
