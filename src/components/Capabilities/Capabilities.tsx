import './Capabilities.css'
import { capabilities } from '../../data/content'

function Capabilities() {
  return (
    <section className="capabilities panel" id="capabilities">
      <div className="section-title">
        <h2>Core capabilities</h2>
        <span className="muted mono">Designing the rails, then shipping on them.</span>
      </div>
      <div className="capabilities__grid">
        {capabilities.map((item) => (
          <article key={item.title} className="capabilities__card">
            <div className="capabilities__pulse" aria-hidden />
            <div className="capabilities__header">
              <div className="capabilities__dot" />
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </div>
            </div>
            <div className="capabilities__tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Capabilities
