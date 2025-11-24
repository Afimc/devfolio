import './Contact.css'
import { socials } from '../../data/content'

function Contact() {
  return (
    <section className="contact panel" id="contact">
      <div className="section-title">
        <h2>Let&apos;s build</h2>
        <span className="muted mono">New collaborations for Q1–Q2 2025.</span>
      </div>
      <div className="contact__grid">
        <div className="contact__summary">
          <p>
            I help teams release interfaces that feel inevitable: intentional motion, crisp typography, and dependable
            engineering. If you want a partner who can own design and delivery, let&apos;s talk.
          </p>
          <div className="contact__actions">
            <a className="btn" href="mailto:miroslavpeshev.dev@gmail.com">
              Email me
            </a>
            <a className="btn btn-ghost" href="https://calendly.com/miroslavpeshev-dev/30min" target="_blank" rel="noreferrer">
              Schedule a call
            </a>
          </div>
        </div>
        <div className="contact__cards">
          {socials.map((social) => (
            <a key={social.label} className="contact__card" href={social.href} target="_blank" rel="noreferrer">
              <div className="contact__label">{social.label}</div>
              {social.label === 'Phone' && social.secondary ? (
                <div className="contact__value contact__value--inline">
                  <span className="contact__badge">UK</span>
                  <span>{social.value}</span>
                  <span className="contact__divider">·</span>
                  <span className="contact__badge">BG</span>
                  <span>{social.secondary}</span>
                </div>
              ) : (
                <div className={`contact__value${social.secondary ? ' contact__value--inline' : ''}`}>
                  <span>{social.value}</span>
                  {social.secondary && <span>{social.secondary}</span>}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
