import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

function Coursework() {
  const terms = useMemo(
    () => [
      {
        id: 'spring-2026',
        label: 'Spring 2026 - Urbana-Champaign',
        title: 'Spring 2026 Grades',
        courses: [
          { name: 'Discrete Structures', code: 'CS 173', hours: '3', grade: 'Grade Pending' },
          { name: 'Writing and Research', code: 'RHET 105', hours: '4', grade: 'Grade Pending' },
          { name: 'Calculus III', code: 'MATH 241', hours: '4', grade: 'Grade Pending' },
          { name: 'Intro to Computer Science II Honors', code: 'CS 128', hours: '3', grade: 'Grade Pending' },
          { name: 'Statistics and Probability I', code: 'STAT 400', hours: '4', grade: 'Grade Pending' }
        ]
      },
      {
        id: 'fall-2025',
        label: 'Fall 2025 - Urbana-Champaign',
        title: 'Fall 2025 Grades',
        courses: [
          { name: 'Data Science Discovery', code: 'STAT 107', hours: '4', grade: 'A+' },
          { name: 'Intro to Language Science', code: 'LING 100', hours: '3', grade: 'A' },
          { name: 'Design First Year Experience', code: 'LAS 101', hours: '1', grade: 'A' },
          { name: 'Honors Uncommon Reads', code: 'LEAD 116', hours: '1', grade: 'A+H' },
          { name: 'Intro to Computer Science I', code: 'CS 124', hours: '3', grade: 'A' },
          { name: 'Intro to Popular TV & Movies', code: 'MACS 100', hours: '3', grade: 'A+' },
          { name: 'Success in LAS - IntlStudents', code: 'LAS 100', hours: '2', grade: 'A+' }
        ]
      }
    ],
    []
  )

  const [selectedTermId, setSelectedTermId] = useState(terms[0]?.id ?? '')
  const selectedTerm = terms.find((term) => term.id === selectedTermId)

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-20 pt-12">
      <motion.section initial="hidden" animate="visible" variants={stagger} className="space-y-6">
        <motion.div variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Coursework</p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            University of Illinois Urbana-Champaign
          </h1>
          <p className="mt-4 text-base text-slate-300">
            Term-by-term view of my coursework and grades.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <label htmlFor="term" className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Change term
          </label>
          <select
            id="term"
            className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-slate-100 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            value={selectedTermId}
            onChange={(event) => setSelectedTermId(event.target.value)}
          >
            {terms.map((term) => (
              <option key={term.id} value={term.id} className="bg-slate-950">
                {term.label}
              </option>
            ))}
          </select>
        </motion.div>
      </motion.section>

      {selectedTerm && (
        <motion.section
          key={selectedTerm.id}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-lg text-amber-200">*</span>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">{selectedTerm.title}</h2>
          </motion.div>
          <div className="mt-8 divide-y divide-white/10">
            {selectedTerm.courses.map((course) => (
              <motion.div
                key={`${selectedTerm.id}-${course.code}`}
                variants={fadeUp}
                className="py-6 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {course.code}: {course.name}
                  </h3>
                  <span className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                    {course.grade}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {course.hours} hrs
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  )
}

export default Coursework

