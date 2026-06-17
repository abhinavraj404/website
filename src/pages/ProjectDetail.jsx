import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'

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

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project || !project.detail) {
    return (
      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-16">
        <h1 className="text-3xl font-semibold text-white">Project not found</h1>
        <p className="text-slate-300">
          This project doesn&apos;t have a detail page yet.
        </p>
        <Link to="/" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
          ← Back to home
        </Link>
      </main>
    )
  }

  const { detail } = project

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-12 px-6 pb-24 pt-12">
      <motion.section initial="hidden" animate="visible" variants={stagger} className="space-y-6">
        <motion.div variants={fadeUp}>
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 hover:text-cyan-200">
            ← Projects
          </Link>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">{project.title}</h1>
          <p className="text-sm font-medium text-cyan-300">{project.period}</p>
        </motion.div>
        {detail.tagline && (
          <motion.p variants={fadeUp} className="text-lg text-slate-300">
            {detail.tagline}
          </motion.p>
        )}
        {detail.links?.length > 0 && (
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {detail.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="space-y-10"
      >
        {detail.sections.map((section) => (
          <motion.article key={section.heading} variants={fadeUp} className="space-y-3">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
            {section.table && (
              <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      {section.table.columns.map((column) => (
                        <th key={column} className="px-4 py-3 font-semibold text-slate-200">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-white/5 last:border-0">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={cellIndex === 0 ? 'px-4 py-3 font-medium text-slate-100' : 'px-4 py-3 text-slate-300'}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.article>
        ))}
      </motion.section>

      {detail.stack?.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-white sm:text-2xl">Stack &amp; methods</h2>
          <div className="flex flex-wrap gap-2">
            {detail.stack.map((item) => (
              <span key={item} className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                {item}
              </span>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  )
}

export default ProjectDetail
