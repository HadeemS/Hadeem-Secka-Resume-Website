import React from 'react'

const Hero = ({ data, onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className="hero-inner">
      <div className="hero-content">
        <p className="hero-kicker">Available for internships & early-career roles</p>
        <h1 className="hero-title">
          <span className="hero-name">{data.name}</span>
        </h1>
        <p className="hero-tagline">{data.tagline}</p>
        <p className="hero-description">{data.description}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={onPrimaryClick}>
            {data.primaryCta}
          </button>
          <button type="button" className="btn btn-ghost" onClick={onSecondaryClick}>
            {data.secondaryCta}
          </button>
        </div>
        <div className="hero-subtle-note">
          <span className="dot online" /> Open to opportunities in software engineering, 
          full-stack development, AI/ML, data science, cybersecurity, and related technology roles.
        </div>
      </div>
    </div>
  )
}

export default Hero

