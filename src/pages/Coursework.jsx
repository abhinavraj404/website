import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Coursework() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="system-label" style={{ textDecoration: 'none', color: 'inherit' }}>
            Signal & Noise
          </Link>
          <nav className="header-nav">
            <Link to="/" className="header-link">
              Home
            </Link>
            <span className="header-link header-link-active">Coursework</span>
          </nav>
        </div>
      </header>

      <main>
        <section className="coursework reveal" style={{ paddingTop: '6rem' }}>
          <div className="container">
            <h2>Coursework at University of Illinois at Urbana-Champaign</h2>
            <p className="section-subtitle">
              A record of my academic journey at the University of Illinois Urbana-Champaign.
            </p>
            
            {/* Spring 2026 */}
            <div className="semester">
              <h3 className="semester-title">Spring 2026</h3>
              <div className="courses-list">
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Discrete Structures</span>
                    <span className="course-grade pending">Grade Pending</span>
                  </div>
                  <div className="course-details">CS 173 BL1 (50094) - 3 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Writing and Research</span>
                    <span className="course-grade pending">Grade Pending</span>
                  </div>
                  <div className="course-details">RHET 105 V2 (58797) - 4 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Calculus III</span>
                    <span className="course-grade pending">Grade Pending</span>
                  </div>
                  <div className="course-details">MATH 241 CL1 (46075) - 4 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Intro to Computer Science II</span>
                    <span className="course-grade pending">Grade Pending</span>
                  </div>
                  <div className="course-details">CS 128 AL1 (71594) - 3 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Statistics and Probability I</span>
                    <span className="course-grade pending">Grade Pending</span>
                  </div>
                  <div className="course-details">STAT 400 UL1 (36134) - 4 hrs</div>
                </div>
              </div>
            </div>

            {/* Fall 2025 */}
            <div className="semester">
              <h3 className="semester-title">Fall 2025</h3>
              <div className="courses-list">
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Data Science Discovery</span>
                    <span className="course-grade">A+</span>
                  </div>
                  <div className="course-details">STAT 107 L1 (71476) - 4 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Intro to Language Science</span>
                    <span className="course-grade">A</span>
                  </div>
                  <div className="course-details">LING 100 AD5 (64514) - 3 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Design First Year Experience</span>
                    <span className="course-grade">A</span>
                  </div>
                  <div className="course-details">LAS 101 6 (56599) - 1 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Honors Uncommon Reads</span>
                    <span className="course-grade">A+H</span>
                  </div>
                  <div className="course-details">LEAD 116 3 (78632) - 1 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Intro to Computer Science I</span>
                    <span className="course-grade">A</span>
                  </div>
                  <div className="course-details">CS 124 AL1 (74477) - 3 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Intro to Popular TV & Movies</span>
                    <span className="course-grade">A+</span>
                  </div>
                  <div className="course-details">MACS 100 AD3 (66226) - 3 hrs</div>
                </div>
                <div className="course-item">
                  <div className="course-header">
                    <span className="course-name">Success in LAS - IntlStudents</span>
                    <span className="course-grade">A+</span>
                  </div>
                  <div className="course-details">LAS 100 OL1 (69341) - 2 hrs</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Coursework
