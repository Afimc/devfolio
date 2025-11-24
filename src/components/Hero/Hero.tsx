import './Hero.css'
import { capabilities, heroContent, stats } from '../../data/content'

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
          <a className="btn" href="mailto:miroslavpeshev.dev@gmail.com">
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
        <div className="hero__highlights">
          <div className="hero__capabilities-col">
            {capabilities.map((item) => (
              <article key={item.title} className="hero__highlight hero__highlight--capability">
                <div className="hero__capability-dot" aria-hidden />
                <div>
                  <h3>{item.title}</h3>
                  <div className="hero__capability-tags">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hero__stats-col">
            {stats.map((stat) => (
              <article key={stat.label} className="hero__highlight hero__highlight--stat">
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
                <div className="hero__stat-hint">{stat.hint}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
