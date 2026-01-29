import { motion } from 'framer-motion'

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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,_rgba(14,116,144,0.16),_transparent_50%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Signal and Noise</div>
          <div className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-200">
            Work in Progress
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
        <motion.section
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">New build</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              A clean slate for the next version of my portfolio.
            </h1>
            <p className="text-lg text-slate-300">
              Built with React, Tailwind CSS, and Framer Motion. This is the early foundation for a
              faster, more intentional experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-slate-300">
                Design in progress
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-slate-300">
                Content in progress
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-slate-300">
                Launching soon
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-12 left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="flex h-full flex-col gap-8">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus</div>
              <div className="space-y-4 text-slate-200">
                <p>Quant systems, applied ML, and low-latency engineering.</p>
                <p>Exploring the intersection of statistics, linguistics, and product.</p>
                <p>Shipping faster, cleaner, and more useful work.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Now building</p>
            <h2 className="mt-4 text-2xl font-semibold">What is changing</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>New structure for projects and research.</li>
              <li>Story-driven timelines with measurable impact.</li>
              <li>Sharper visuals and smoother motion.</li>
              <li>Better way to share coursework and updates.</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Next milestones</p>
            <div className="mt-6 grid gap-6">
              {[
                { title: 'Rewrite project stories', note: 'Add clear outcomes and visual demos.' },
                { title: 'Coursework overhaul', note: 'Pull from updated transcript layout.' },
                { title: 'Public launch', note: 'Finalize content and ship when ready.' }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 p-10"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Status</p>
            <h2 className="text-2xl font-semibold">This site is being rebuilt.</h2>
            <p className="text-slate-300">
              For now, this page is a placeholder to signal progress. The full portfolio will be
              released after the content refresh.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
