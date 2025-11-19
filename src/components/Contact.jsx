import React, { useState } from 'react'

const Contact = ({ social }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        form.reset()
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Let&apos;s Connect</h2>
      <p className="section-subtitle">
        Reach out for roles, collabs, or just to talk tech.
      </p>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="936454c9-06a3-4618-830b-1ac35f2f1620"
          />
          <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me about what you're building..."
              required
            />
          </div>
          {submitStatus && (
            <div
              className={`form-status ${
                submitStatus.type === 'success' ? 'form-status-success' : 'form-status-error'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
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

