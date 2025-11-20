import './Education.css'
import { certifications, education } from '../../data/content'

function Education() {
  return (
    <section className="education panel" id="education">
      <div className="section-title">
        <h2>Education & Certifications</h2>
        <span className="muted mono">Foundations and continuous learning.</span>
      </div>

      <div className="education__grid">
        <div className="education__list">
          {education.map((item) => (
            <article key={item.title} className="education__row">
              <div className="education__period">{item.period}</div>
              <div className="education__content">
                <div className="education__heading">
                  <h3>{item.title}</h3>
                  <span className="education__badge">{item.institution}</span>
                </div>
                <p className="muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="education__certs">
          <div className="education__certs-title mono">Certifications & Courses</div>
          <div className="education__certs-list">
            {certifications.map((cert) => (
              <article key={cert.title} className="education__cert">
                <h4>{cert.title}</h4>
                <p className="muted">{cert.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
