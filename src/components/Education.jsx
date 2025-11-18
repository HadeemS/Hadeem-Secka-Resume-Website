import React from 'react'

const Education = ({ education, coursework }) => {
  return (
    <div className="section-card reveal-on-scroll">
      <h2 className="section-title">Education</h2>
      <div className="education-content">
        <div className="education-main">
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-minor">Minor: {education.minor}</p>
          <p className="education-university">{education.university} - {education.location}</p>
          <p className="education-graduation">Expected Graduation: {education.expectedGraduation}</p>
          <p className="education-gpa">GPA: {education.gpa}</p>
          {education.honors && education.honors.length > 0 && (
            <div className="education-honors">
              <span className="honors-label">Honors & Awards: </span>
              {education.honors.join(', ')}
            </div>
          )}
        </div>
        {coursework && coursework.length > 0 && (
          <div className="coursework-section">
            <h4 className="coursework-title">Relevant Coursework</h4>
            <div className="coursework-grid">
              {coursework.map((course, idx) => (
                <span key={idx} className="chip">
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Education

