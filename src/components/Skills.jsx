import React from 'react'

const Skills = ({ categories }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I&apos;m comfortable shipping with.
      </p>
      <div className="skills-grid">
        {categories.map((category) => (
          <div key={category.label} className="skill-card">
            <h3 className="skill-label">{category.label}</h3>
            <div className="skill-chips">
              {category.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

