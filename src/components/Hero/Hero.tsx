import './Hero.css'
import { heroContent, stats } from '../../data/content'

function Hero() {
  const { title, headline, summary, tags } = heroContent

  return (
    <section className="hero panel">
      <div className="hero__content">
        <div className="eyebrow">Design + Engineering</div>
        <h1 className="hero__title">{headline}</h1>
        <p className="hero__subtitle">{summary}</p>
        <div className="hero__tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="hero__actions">
          <a className="btn" href="mailto:hello@miro.dev">
            Work with me
          </a>
          <a className="btn btn-ghost" href="#projects">
            See projects
          </a>
        </div>
      </div>

      <div className="hero__panel">
        <div className="hero__badge">
          <span className="hero__signal" />
          <div>
            <div className="hero__name">{title}</div>
            <div className="hero__role">Product design engineer</div>
          </div>
        </div>
        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
              <div className="hero__stat-hint">{stat.hint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
