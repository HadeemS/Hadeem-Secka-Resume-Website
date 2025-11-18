import React from 'react'

const Certifications = ({ certifications }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">
        Professional certifications and training programs completed.
      </p>
      <div className="certifications-list">
        {certifications.map((cert, idx) => (
          <div key={idx} className="certification-item">
            <h3 className="certification-name">{cert.name}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications

