import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import Coursework from './pages/Coursework'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinav10raj' },
  { label: 'GitHub', href: 'https://github.com/abhinav10raj' },
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'Email', href: 'mailto:hi@abhinavraj.me' }
]

const heroLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinav10raj' },
  { label: 'GitHub', href: 'https://github.com/abhinav10raj' }
]

const experiences = [
  {
    organization: 'Financial Engineering Club',
    role: 'Member',
    location: 'UIUC, Champaign, Illinois',
    period: 'Feb 2026 - Present',
    highlights: [
      'Implemented signals, backtests, and evaluation for an algorithmic trading replication project.',
      'Added execution and risk realism checks, including transaction costs, in-sample and out-of-sample splits, and parameter sweeps.',
      'Built reproducible reporting with side-by-side replication results and a motivated extension.',
      'Expanded performance reporting with Sharpe, drawdown, turnover, and regime-based stress tests.'
    ]
  },
  {
    organization: 'SIGNLL (Speech and Interdisciplinary Group for Natural Language Learning)',
    role: 'Research Member',
    location: 'UIUC, Champaign, Illinois',
    period: 'Aug 2025 - Present',
    highlights: [
      'Compared small language models (SLMs) and large language models (LLMs) for specialized tasks across quality, latency, and cost.',
      'Designed domain-focused evaluation prompts and test cases, then tracked task-level metrics with error analysis.',
      'Ran experiments across model variants and inference settings, and summarized findings for downstream use.',
      'Iterated on experiment design based on observed failure modes and team feedback.'
    ]
  },
  {
    organization: 'Solar Car Team Illinois',
    role: 'Strategy Team Member',
    location: 'UIUC, Champaign, Illinois',
    period: 'Aug 2025 - Dec 2025',
    highlights: [
      'Used Python and SQL to analyze more than 240,000 lines of telemetry on battery voltage, power, and current.',
      'Parsed JSON logs and visualized trends with Pandas, Polars, NumPy, and Matplotlib to support data-quality improvements.'
    ]
  }
]

const projects = [
  {
    title: 'SilentSync',
    period: '2023 - 2025',
    description: 'Built an app to support deaf employees and improve workplace communication.',
    highlights: [
      'Conducted 100+ user interviews and iterated the product based on feedback from deaf users and retail partners.',
      'Secured local business partnerships, increasing usage by 40% and reaching 150+ downloads in the first month.'
    ],
    technologies: ['Accessibility', 'User Research', 'Product Iteration']
  },
  {
    title: 'NYC Traffic Fatality Prediction',
    period: 'June 2024',
    description: 'Developed machine learning models on 74,881 NYC traffic accident records.',
    highlights: [
      'Achieved 99.82% predictive accuracy for fatality outcomes.',
      'Applied one-hot encoding, SMOTE-based imbalance handling, and documented error analysis.'
    ],
    technologies: ['Python', 'Machine Learning', 'SMOTE']
  }
]

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-base tracking-tight text-slate-100">
          <span className="font-semibold">Abhinav</span>{' '}
          <span className="font-light text-slate-400">Raj</span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Abhinav Raj</p>
          <p className="text-sm text-slate-300">I build practical products with software, language, and data.</p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Abhinav Raj</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          {socials.map((social) => {
            const opensNewTab = social.href.startsWith('http') || social.href.endsWith('.pdf')
            return (
              <a
                key={social.label}
                href={social.href}
                target={opensNewTab ? '_blank' : undefined}
                rel={opensNewTab ? 'noreferrer' : undefined}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {social.label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
        <motion.section
          className="flex items-center justify-center gap-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Abhinav Raj
            </h1>
            <p className="text-lg text-slate-300">
              Freshman at University of Illinois at Urbana Champaign
            </p>
            <p className="text-lg text-slate-300">
              Computer Science and Linguistics
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {heroLinks.map((link) => (
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
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <img src="/profile.jpg" alt="Abhinav Raj" className="h-96 w-96 rounded-full object-cover object-[50%_28%] shadow-lg shadow-white/10" />
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">About Me</h2>
                <p className="text-slate-300">
                    I am a passionate and driven Computer Science and Linguistics student at the University of Illinois at Urbana Champaign. My interests lie at the intersection of technology, language, and human-computer interaction. I am always eager to learn new things and apply my knowledge to solve real-world problems. I am also building practical products, validating ideas quickly with users, and turning early prototypes into tools people actually use.
                </p>
            </motion.div>
        </motion.section>

        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {['C++', 'Java', 'Rust', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'React.js', 'Git', 'HTML/CSS'].map(skill => (
                        <span key={skill} className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-widest text-slate-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.section>

        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Experience</h2>
                <div className="mt-4 grid gap-5">
                    {experiences.map((experience) => (
                        <article key={experience.organization} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{experience.organization}</h3>
                                    <p className="text-sm text-slate-300">{experience.role}</p>
                                    <p className="text-xs uppercase tracking-wider text-slate-400">{experience.location}</p>
                                </div>
                                <p className="text-sm font-medium text-cyan-300">{experience.period}</p>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                                {experience.highlights.map((item) => (
                                    <li key={item} className="leading-relaxed">- {item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </motion.div>
        </motion.section>

        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <div key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <p className="text-sm font-medium text-cyan-300">{project.period}</p>
                            </div>
                            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                                {project.highlights.map((item) => (
                                    <li key={item} className="leading-relaxed">- {item}</li>
                                ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
      </main>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,_rgba(14,116,144,0.16),_transparent_50%)]" />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursework" element={<Coursework />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
