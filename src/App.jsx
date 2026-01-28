import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Coursework from './pages/Coursework'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const revealTargets = document.querySelectorAll('.reveal')
    revealTargets.forEach(target => observer.observe(target))

    return () => {
      revealTargets.forEach(target => observer.unobserve(target))
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Routes>
      <Route path="/coursework" element={<Coursework />} />
      <Route path="/" element={<HomePage 
        theme={theme}
        toggleTheme={toggleTheme}
      />} />
    </Routes>
  )
}

function HomePage({
  theme,
  toggleTheme
}) {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <Link
            to="/"
            className="system-label"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Signal & Noise
          </Link>
          <nav className="header-nav">
            <Link to="/coursework" className="header-link">
              Coursework
            </Link>
          </nav>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero reveal">
          <div className="container">
            <h1 className="hero-title">
              Abhinav Raj
            </h1>
            <p className="hero-subtitle">Computer Science & Statistics</p>
            <p className="hero-description">
              CS & Linguistics student at University of Illinois at Urbana-Champaign transitioning to Statistics + CS. 
              Focused on NLP, low-latency systems, and quantitative strategies.
            </p>
            <div className="hero-buttons">
              <Link to="/coursework" className="btn btn-primary">View Coursework</Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="background reveal" id="about">
          <div className="container">
            <h2>About</h2>
            <p>
              Computer Science & Linguistics student at the University of Illinois at Urbana-Champaign ('29), pursuing Statistics + CS. 
              Building end-to-end products across NLP, low-latency systems, and quantitative strategies.
            </p>
            <p>
              Recent highlights: Harvard CS50 Web, Veritas AI (traffic safety & healthcare ML), and hands-on leadership roles launching
              accessibility-focused products.
            </p>
            <p>
              Interested in internships across quantitative research/engineering, ML systems, and product-minded engineering roles.
            </p>
          </div>
        </section>

        {/* Highlights / Experience */}
        <section className="interests reveal" id="highlights">
          <div className="container">
            <h2>Projects</h2>
            <p className="section-subtitle">
              A few highlights across product, research, and applied ML.
            </p>
            <div className="timeline">
              <article className="timeline-item reveal" style={{ '--reveal-delay': '0ms' }}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Project - SilentSync (Founder)</h3>
                  <p>
                    Accessibility app for deaf employees; 100+ interviews, 50+ users onboarded, 10+ retail partners, and 40% engagement uplift.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal" style={{ '--reveal-delay': '120ms' }}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Project - Traffic Mobility Risk Model</h3>
                  <p>
                    Built a NYC traffic risk model (74k+ records); 99.8% fatality prediction accuracy using one-hot encoding + SMOTE.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal" style={{ '--reveal-delay': '240ms' }}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Internship - Healthcare ML (Breast Cancer)</h3>
                  <p>
                    Developed a breast cancer prediction pipeline focused on data balance, feature selection, and high-sensitivity classification.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal" style={{ '--reveal-delay': '360ms' }}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Project - Supporting Janseva (Lead)</h3>
                  <p>
                    Community initiative supporting blue-collar workers with essential supplies during extreme weather. (Details updating soon.)
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="contact reveal">
          <div className="container">
            <h2>Let's Connect</h2>
            <p className="section-subtitle">
              I'm always interested in discussing new opportunities in quantitative finance, 
              NLP research, or hardware engineering.
            </p>
            <div className="contact-info">
              <a href="mailto:araj10@illinois.edu" className="contact-link">
                araj10@illinois.edu
              </a>
              <p className="contact-address">1012 W Illinois St, Urbana</p>
              <a 
                href="https://github.com/abhinav10raj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                Follow on GitHub
              </a>
            </div>
            <a href="mailto:araj10@illinois.edu" className="btn btn-primary">
              Email Me
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
