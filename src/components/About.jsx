import React from 'react'

const About = ({ about }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">{about.title}</h2>
      <p className="about-highlight">{about.highlight}</p>
      {about.paragraphs.map((p, idx) => (
        <p key={idx} className="about-paragraph">
          {p}
        </p>
      ))}
    </div>
  )
}

export default About

