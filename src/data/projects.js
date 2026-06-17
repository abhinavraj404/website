// Single source of truth for Featured Projects.
// Cards on the home page and the /projects/:slug detail pages both read from here.
// A project with a `detail` object gets its own page and a "Read more" link on the card.

export const projects = [
  {
    slug: 'slm-vs-llm-benchmark',
    title: 'SLM vs LLM Benchmark (SIGNLL)',
    period: '2025 - Present',
    description: 'Benchmarked small language models against large language models for specialized tasks across quality, latency, and cost.',
    highlights: [
      'Designed domain-focused evaluation prompts and test cases, tracking task-level metrics with error analysis.',
      'Ran experiments across model variants and inference settings, summarizing findings for downstream use.'
    ],
    technologies: ['Python', 'LLMs', 'Evaluation', 'NLP'],
    links: [{ label: 'GitHub', href: 'https://github.com/abhinav10raj/slm-vs-llm-benchmark' }],
    detail: {
      tagline: 'Do you really need a frontier-scale model? A head-to-head look at small vs large language models on specialized tasks.',
      sections: [
        {
          heading: 'The question',
          body: [
            'Large language models are the default answer for almost every NLP task, but they are expensive to run and slow to respond. For narrow, specialized tasks, a much smaller model may get you most of the way there at a fraction of the cost and latency.',
            'This project, part of my research with SIGNLL at UIUC, puts that intuition to the test: where do small language models (SLMs) hold their own against large language models (LLMs), and where do they fall short?'
          ]
        },
        {
          heading: 'Approach',
          body: [
            'I built domain-focused evaluation prompts and a set of test cases for each task, then ran the same battery across multiple model variants and inference settings.',
            'Every run is measured on three axes — output quality, latency, and cost — so the comparison reflects the real trade-offs of deploying a model, not just a single accuracy number.'
          ]
        },
        {
          heading: 'What I measured',
          body: [
            'Quality is tracked at the task level with a manual error analysis, so failures are grouped by type rather than collapsed into one score.',
            'Latency and cost are recorded per run to show what you actually pay — in time and dollars — for each increment of quality.'
          ]
        },
        {
          heading: 'How it evolved',
          body: [
            'The experiment design is iterative: observed failure modes and team feedback feed directly back into the next round of prompts and test cases.',
            'Findings are summarized in a form meant to be reused downstream, so the benchmark is a reusable tool rather than a one-off report.'
          ]
        }
      ],
      stack: ['Python', 'Large & small language models', 'Prompt + test-case design', 'Quantitative + error analysis'],
      links: [{ label: 'View on GitHub', href: 'https://github.com/abhinav10raj/slm-vs-llm-benchmark' }]
    }
  },
  {
    slug: 'nyc-traffic-fatality-prediction',
    title: 'NYC Traffic Fatality Prediction',
    period: 'June 2024',
    description: 'Built ML models on 74,881 NYC traffic accident records.',
    highlights: [
      'Achieved 99.82% predictive accuracy for fatality outcomes.',
      'Applied feature engineering and imbalance handling (one-hot encoding, SMOTE) and documented error analysis.',
      'Evaluated classification quality with precision/recall/F1 and a confusion matrix; reviewed error slices by borough, time-of-day, and weather conditions.'
    ],
    technologies: ['Python', 'Machine Learning', 'SMOTE'],
    links: []
  },
  {
    slug: 'silentsync',
    title: 'SilentSync',
    period: '2023 - 2025',
    description: 'Launched an app to support deaf employees and improve workplace communication.',
    highlights: [
      'Conducted 100+ user interviews; iterated on product based on feedback from deaf users and retail partners.',
      'Secured partnerships with local businesses, increasing usage by 40% and reaching 150+ downloads in the first month.'
    ],
    technologies: ['Accessibility', 'User Research', 'Product Iteration'],
    links: []
  }
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
