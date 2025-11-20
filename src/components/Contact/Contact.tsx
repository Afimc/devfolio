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
            <a className="btn" href="mailto:hello@miro.dev">
              Email me
            </a>
            <a className="btn btn-ghost" href="https://cal.com" target="_blank" rel="noreferrer">
              Schedule a call
            </a>
          </div>
        </div>
        <div className="contact__cards">
          {socials.map((social) => (
            <a key={social.label} className="contact__card" href={social.href} target="_blank" rel="noreferrer">
              <div className="contact__label">{social.label}</div>
              <div className="contact__value">{social.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
