import React from 'react'

const Contact = ({ social }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet – this is just UI. You can hook this up to an API or email service later.
    alert('Contact form is UI-only for now. Please use the direct links below or email directly.')
  }

  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Let&apos;s Connect</h2>
      <p className="section-subtitle">
        Reach out for roles, collabs, or just to talk tech.
      </p>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell me about what you're building..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Send (UI Only)
          </button>
        </form>

        <div className="contact-side">
          <h3>Direct links</h3>
          <p className="contact-text">
            Prefer email or socials? Feel free to reach out directly.
          </p>
          <div className="contact-links">
            {social.email && (
              <a className="contact-link" href={`mailto:${social.email}`}>
                <span className="contact-icon">✉️</span>
                <span>{social.email}</span>
              </a>
            )}
            {social.github && (
              <a
                className="contact-link"
                href={social.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">💻</span>
                <span>GitHub</span>
              </a>
            )}
            {social.linkedin && (
              <a
                className="contact-link"
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">🔗</span>
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

