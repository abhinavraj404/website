import { motion } from 'framer-motion'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
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
  { label: 'Email', href: 'mailto:hi@abhinavraj.me' }
]

function Header() {
  const location = useLocation()
  const isCoursework = location.pathname === '/coursework'

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-base tracking-tight text-slate-100">
          <span className="font-semibold">Abhinav</span>{' '}
          <span className="font-light text-slate-400">Raj</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 sm:flex">
            <Link
              to="/"
              className={isCoursework ? 'transition hover:text-slate-200' : 'text-slate-100'}
            >
              Home
            </Link>
            <Link
              to="/coursework"
              className={isCoursework ? 'text-slate-100' : 'transition hover:text-slate-200'}
            >
              Coursework
            </Link>
          </nav>
          <div className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-200">
            Work in Progress
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Socials</p>
          <p className="mt-2 text-sm text-slate-300">Let’s connect while the rebuild ships.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-200">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/20 hover:text-white"
            >
              {social.label}
            </a>
          ))}
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
          </motion.div>
          <motion.div variants={fadeUp}>
            <img src="/profile.jpg" alt="Abhinav Raj" className="w-96 h-96 rounded-full object-cover shadow-lg shadow-white/10" />
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
                    I am a passionate and driven Computer Science and Linguistics student at the University of Illinois at Urbana Champaign. My interests lie at the intersection of technology, language, and human-computer interaction. I am always eager to learn new things and apply my knowledge to solve real-world problems.
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
                    {['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Git', 'Python', 'Java'].map(skill => (
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
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: 'Project One', description: 'A brief description of the first amazing project.', technologies: ['React', 'Node.js'] },
                        { title: 'Project Two', description: 'A brief description of the second amazing project.', technologies: ['Python', 'TensorFlow'] },
                        { title: 'Project Three', description: 'A brief description of the third amazing project.', technologies: ['Java', 'Spring Boot'] }
                    ].map((project) => (
                        <div key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
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
