import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Coursework() {
  const terms = useMemo(() => ([
    {
      id: 'spring-2026',
      label: 'Spring 2026 - Urbana-Champaign',
      title: 'Spring 2026',
      courses: [
        { name: 'Discrete Structures', code: 'CS 173 BL1 (50094)', hours: '3', grade: 'Grade Pending', pending: true },
        { name: 'Writing and Research', code: 'RHET 105 V2 (58797)', hours: '4', grade: 'Grade Pending', pending: true },
        { name: 'Calculus III', code: 'MATH 241 CL1 (46075)', hours: '4', grade: 'Grade Pending', pending: true },
        { name: 'Intro to Computer Science II', code: 'CS 128 AL1 (71594)', hours: '3', grade: 'Grade Pending', pending: true },
        { name: 'Statistics and Probability I', code: 'STAT 400 UL1 (36134)', hours: '4', grade: 'Grade Pending', pending: true },
        { name: 'Supplementary Project for CS 128', code: 'CS 199 128 (56371)', hours: '0', grade: 'Grade Pending', pending: true }
      ]
    },
    {
      id: 'fall-2025',
      label: 'Fall 2025 - Urbana-Champaign',
      title: 'Fall 2025',
      courses: [
        { name: 'Data Science Discovery', code: 'STAT 107 L1 (71476)', hours: '4', grade: 'A+' },
        { name: 'Intro to Language Science', code: 'LING 100 AD5 (64514)', hours: '3', grade: 'A' },
        { name: 'Design First Year Experience', code: 'LAS 101 6 (56599)', hours: '1', grade: 'A' },
        { name: 'Honors Uncommon Reads', code: 'LEAD 116 3 (78632)', hours: '1', grade: 'A+H' },
        { name: 'Intro to Computer Science I', code: 'CS 124 AL1 (74477)', hours: '3', grade: 'A' },
        { name: 'Intro to Popular TV & Movies', code: 'MACS 100 AD3 (66226)', hours: '3', grade: 'A+' },
        { name: 'Success in LAS - IntlStudents', code: 'LAS 100 OL1 (69341)', hours: '2', grade: 'A+' }
      ]
    }
  ]), [])

  const [selectedTermId, setSelectedTermId] = useState(terms[0]?.id ?? '')
  const selectedTerm = terms.find(term => term.id === selectedTermId)

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

            <div className="term-selector">
              <label className="term-label" htmlFor="term-select">Change term:</label>
              <select
                id="term-select"
                className="term-select"
                value={selectedTermId}
                onChange={(e) => setSelectedTermId(e.target.value)}
              >
                {terms.map(term => (
                  <option key={term.id} value={term.id}>
                    {term.label}
                  </option>
                ))}
              </select>
            </div>

            {selectedTerm && (
              <div className="semester">
                <h3 className="semester-title">{selectedTerm.title}</h3>
                <div className="courses-list">
                  {selectedTerm.courses.map((course) => (
                    <div className="course-item" key={`${selectedTerm.id}-${course.code}`}>
                      <div className="course-header">
                        <span className="course-name">{course.name}</span>
                        <span className={`course-grade${course.pending ? ' pending' : ''}`}>
                          {course.grade}
                        </span>
                      </div>
                      <div className="course-details">
                        {course.code} - {course.hours} hrs
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Coursework
