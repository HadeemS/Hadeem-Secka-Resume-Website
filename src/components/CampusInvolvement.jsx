import React from 'react'

const CampusInvolvement = ({ involvement }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Campus Involvement</h2>
      <p className="section-subtitle">
        Student organizations and leadership roles.
      </p>
      <div className="involvement-list">
        {involvement.map((item, idx) => (
          <div key={idx} className="involvement-item">
            <h3 className="involvement-org">{item.organization}</h3>
            <p className="involvement-role">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CampusInvolvement

