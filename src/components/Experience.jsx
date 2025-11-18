import React from 'react'

const Experience = ({ items }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Experience & Leadership</h2>
      <p className="section-subtitle">
        Roles where I learned to ship, lead, and collaborate.
      </p>
      <div className="timeline">
        {items.map((item, index) => (
          <div key={item.role + item.company} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.role}</h3>
                <span className="timeline-company">@ {item.company}</span>
              </div>
              <div className="timeline-meta">
                <span>{item.location}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
            {index !== items.length - 1 && <div className="timeline-connector" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience

