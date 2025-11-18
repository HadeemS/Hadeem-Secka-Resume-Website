import React from 'react'

const Navbar = ({ sections, activeSection, onNavClick }) => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Primary">
        <div
          className="navbar-logo"
          onClick={() => onNavClick('hero')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavClick('hero')}
        >
          <span className="logo-mark">HS</span>
          <span className="logo-text">Hadeem Secka</span>
        </div>
        <ul className="navbar-links">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className={
                  'nav-link' + (activeSection === section.id ? ' nav-link-active' : '')
                }
                onClick={() => onNavClick(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

