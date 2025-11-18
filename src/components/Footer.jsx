import React from 'react'

const Footer = ({ social }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} Hadeem Secka. Built with React & Vite.
      </p>
      <div className="footer-links">
        {social.github && (
          <a href={social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </footer>
  )
}

export default Footer

