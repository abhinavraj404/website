import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Coursework from './pages/Coursework'
import ProjectDetail from './pages/ProjectDetail'
import { projects } from './data/projects'

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
    organization: 'Disruption Lab — StratLab',
    role: 'Strategy Analyst',
    location: 'UIUC, Champaign, Illinois',
    period: 'Sep 2026 - Present',
    highlights: [
      'Evaluating the cost competitiveness of a DOE-backed direct lithium extraction technology that recovers battery-grade lithium from oilfield wastewater, benchmarked against hard-rock and brine mining.',
      'Contributing to a commercialization roadmap for scaling the technology within the U.S. clean-energy supply chain.'
    ]
  },
  {
    organization: 'Siebel School of Computing and Data Science — CS STARS',
    role: 'Undergraduate Research Scholar',
    location: 'UIUC, Champaign, Illinois',
    period: 'Aug 2026 - Present',
    highlights: [
      'Selected for the department’s undergraduate research scholars program, engaging in undergraduate research and supporting student recruitment for the Siebel School.'
    ]
  },
  {
    organization: 'ACM@UIUC — SIGNLL',
    role: 'Member',
    location: 'UIUC, Champaign, Illinois',
    period: 'Aug 2025 - Present',
    highlights: [
      'Measured a statistically robust 22.4-point accuracy gap between Claude Haiku 4.5 at 80.0% and the best local 3B model at 57.6% (95% CI [16.8, 28.0]) on FinQA financial numerical reasoning, with Sonnet 4.6 highest at 85.2%.',
      'Benchmarked Llama 3.2, Qwen 2.5, and Phi 3.5 locally through Ollama at 8-bit quantization on a single consumer GPU, at zero marginal API cost.',
      'Found the gap collapses on FOMC monetary-policy stance classification — a 17.7-point macro-F1 spread versus 3.5 on numerical reasoning — showing the deficit is specific to multi-step arithmetic reasoning rather than general financial language understanding.',
      'Built a unit-aware answer-extraction and dual-gold scoring layer reaching 99.6% parse coverage, and audited scoring tolerance across 434 boundary cases to confirm small-model errors were reasoning failures rather than parsing artifacts.',
      'Measured quality, latency, and cost using multi-tolerance accuracy, bootstrap confidence intervals, and paired-bootstrap significance tests; packaged the pipeline as a config-driven harness with persisted per-item outputs for reproducible re-scoring.'
    ],
    links: [
      { label: 'Project rundown', to: '/projects/slm-vs-llm-benchmark' },
      { label: 'GitHub', href: 'https://github.com/abhinav10raj/slm-vs-llm-benchmark' }
    ]
  },
  {
    organization: 'Financial Engineering Club',
    role: 'Member',
    location: 'UIUC, Champaign, Illinois',
    period: 'Feb 2026 - Aug 2026',
    highlights: [
      'Built a Python research pipeline comparing Buy and Hold, 252-day Time-Series Momentum, Directional Change, and Multi-Threshold Directional Change strategies on SPY, QQQ, TLT, and GLD daily ETF data from 2010 to 2026; implemented one-day-lagged backtests with normalized exposures and 0, 5, and 10 bps transaction-cost checks.',
      'Found no active rule beat passive exposure — Buy & Hold returned 649.70% (1.01 Sharpe) against momentum’s 76.62% (0.41) — and that both directional-change variants lost money before any transaction costs (−48.37% and −53.28%), isolating signal quality rather than trading friction as the cause of failure.',
      'Traced the failure to trading intensity: the event-based rules generated 1,540 and 1,849 position changes against momentum’s 308, at five to six times the turnover, producing maximum drawdowns of −69.27% and −74.50%.',
      'Showed the multi-threshold extension degraded rather than stabilized the signal, underperforming the single-threshold rule it was designed to make robust across every tested cost level.'
    ],
    links: [
      { label: 'Project rundown', to: '/projects/etf-trading-strategy-backtest' },
      { label: 'GitHub', href: 'https://github.com/filehunts/FEC_algo-trading-3' }
    ]
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
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="/#about" className="transition hover:text-cyan-200">About</a>
            <a href="/#experience" className="transition hover:text-cyan-200">Experience</a>
            <a href="/#projects" className="transition hover:text-cyan-200">Projects</a>
          </nav>
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
          className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-center md:gap-12 md:text-left"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 md:items-start">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Abhinav Raj
            </h1>
            <p className="text-lg text-slate-300">
              Sophomore at University of Illinois at Urbana Champaign
            </p>
            <p className="text-lg text-slate-300">
              Statistics &amp; Computer Science, Minor in Mathematics
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
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
            <img src="/profile.jpg" alt="Abhinav Raj" className="h-60 w-60 shrink-0 rounded-full object-cover object-[50%_28%] shadow-lg shadow-white/10 sm:h-72 sm:w-72 md:h-96 md:w-96" />
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          id="about"
          className="scroll-mt-24"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">About Me</h2>
                <p className="text-slate-300">
                    I am a passionate and driven Statistics &amp; Computer Science student, minoring in Mathematics, at the University of Illinois at Urbana Champaign. My interests lie at the intersection of data, software, and quantitative problem-solving. I am always eager to learn new things and apply my knowledge to solve real-world problems. I am also building practical products, validating ideas quickly with users, and turning early prototypes into tools people actually use.
                </p>
            </motion.div>
        </motion.section>

        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="scroll-mt-24"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {['C++', 'Java', 'Rust', 'Python', 'NumPy', 'Pandas', 'Matplotlib', 'React.js', 'Git', 'HTML/CSS', 'MySQL', 'Ollama', 'Anthropic API', 'Android Studio'].map(skill => (
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
            id="experience"
            className="scroll-mt-24"
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
                                <p className="text-sm font-medium text-amber-300">{experience.period}</p>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-slate-300">
                                {experience.highlights.map((item) => (
                                    <li key={item} className="leading-relaxed">- {item}</li>
                                ))}
                            </ul>
                            {experience.links?.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {experience.links.map((link) => (
                                        link.to ? (
                                            <Link
                                                key={link.label}
                                                to={link.to}
                                                className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                                            >
                                                {link.label}
                                            </a>
                                        )
                                    ))}
                                </div>
                            )}
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
            id="projects"
            className="scroll-mt-24"
        >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <div key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
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
                            {(project.detail || project.links?.length > 0) && (
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {project.detail && (
                                        <Link
                                            to={`/projects/${project.slug}`}
                                            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
                                        >
                                            Read more
                                        </Link>
                                    )}
                                    {project.links?.map(link => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
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
  useEffect(() => {
    // Fire-and-forget visit ping; failures must never affect the page.
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer
      }),
      keepalive: true
    }).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,_rgba(14,116,144,0.16),_transparent_50%)]" />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
