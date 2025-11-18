import React, { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import CampusInvolvement from './components/CampusInvolvement.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTopButton from './components/BackToTopButton.jsx'

import {
  hero,
  about,
  skillCategories,
  projects,
  experience,
  education,
  coursework,
  certifications,
  campusInvolvement,
  socialLinks
} from './data/siteData.js'

const sectionsConfig = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'campus', label: 'Campus' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const App = () => {
  const [activeSection, setActiveSection] = useState('hero')

  // Smooth scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Active section highlighting in navbar
  useEffect(() => {
    const sectionIds = sectionsConfig.map((s) => s.id)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      let currentSection = 'hero'

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar
        sections={sectionsConfig}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
      <main>
        <section id="hero" className="section hero-section">
          <Hero
            data={hero}
            onPrimaryClick={() => scrollToSection('projects')}
            onSecondaryClick={() => scrollToSection('contact')}
          />
        </section>

        <section
          id="about"
          className="section section-spacing reveal-on-scroll"
          aria-label="About"
        >
          <About about={about} />
        </section>

        <section
          id="education"
          className="section section-spacing reveal-on-scroll"
          aria-label="Education"
        >
          <Education education={education} coursework={coursework} />
        </section>

        <section
          id="skills"
          className="section section-spacing reveal-on-scroll"
          aria-label="Skills"
        >
          <Skills categories={skillCategories} />
        </section>

        <section
          id="experience"
          className="section section-spacing reveal-on-scroll"
          aria-label="Experience and leadership"
        >
          <Experience items={experience} />
        </section>

        <section
          id="certifications"
          className="section section-spacing reveal-on-scroll"
          aria-label="Certifications"
        >
          <Certifications certifications={certifications} />
        </section>

        <section
          id="campus"
          className="section section-spacing reveal-on-scroll"
          aria-label="Campus Involvement"
        >
          <CampusInvolvement involvement={campusInvolvement} />
        </section>

        <section
          id="projects"
          className="section section-spacing reveal-on-scroll"
          aria-label="Projects"
        >
          <Projects projects={projects} />
        </section>

        <section
          id="contact"
          className="section section-spacing reveal-on-scroll"
          aria-label="Contact"
        >
          <Contact social={socialLinks} />
        </section>
      </main>

      <Footer social={socialLinks} />
      <BackToTopButton />
    </div>
  )
}

export default App

