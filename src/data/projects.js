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
    slug: 'etf-trading-strategy-backtest',
    title: 'Time-Based vs Event-Based Trading Rules (FEC)',
    period: 'Feb 2026 - Present',
    description: 'A research pipeline comparing time-based and event-based trading rules on a multi-asset ETF universe, built with the Financial Engineering Club.',
    highlights: [
      'Backtested Buy & Hold, Time-Series Momentum, and two Directional Change strategies on SPY/QQQ/TLT/GLD daily data (2010-2026).',
      'Found Time-Series Momentum the only profitable active rule (76.62% return, 0.41 Sharpe); event-based rules lost money after costs.'
    ],
    technologies: ['Python', 'Pandas', 'Backtesting', 'Quant Finance'],
    links: [{ label: 'GitHub', href: 'https://github.com/filehunts/FEC_algo-trading-3' }],
    detail: {
      tagline: 'Do event-based trading strategies actually beat a simple time-based momentum rule? We tested it on a diversified ETF universe — the answer was no.',
      sections: [
        {
          heading: 'The question',
          body: [
            'Event-based strategies are often pitched as smarter and more adaptive than fixed-interval models because they only react when price moves a meaningful amount. But that adaptivity comes with more trading, and more trading means more cost.',
            'Working in Group 3 of the UIUC Financial Engineering Club, we asked one question directly: do event-based trading strategies outperform time-based momentum on a multi-asset ETF dataset?'
          ]
        },
        {
          heading: 'Data & universe',
          body: [
            'Daily adjusted-close prices from Yahoo Finance for four liquid ETFs spanning distinct macro exposures — SPY (broad US equity), QQQ (growth/tech), TLT (long-duration Treasuries), and GLD (gold).',
            'The sample runs from January 2010 through April 2026. Prices are forward-filled, cleaned of incomplete rows, and converted to simple daily returns.'
          ]
        },
        {
          heading: 'The four strategies',
          body: [
            'Buy & Hold — an equal-capital benchmark across the four ETFs, allowed to drift with no rebalancing or costs.',
            'Time-Series Momentum — a 252-day (≈1 year) lookback that goes long on positive trailing returns and short on negative ones.',
            'Directional Change (DC) — an event-based rule that flips trend state only when price moves at least 2% from a recent high or low.',
            'Multi-Threshold DC — combines 1%, 2%, and 3% DC models with weights 0.5/0.3/0.2, mapping the weighted vote back into a long or short signal.'
          ]
        },
        {
          heading: 'Backtesting framework',
          body: [
            'All active strategies use one-day-lagged signals to prevent look-ahead bias, and daily-normalized weights so absolute active exposure always sums to one.',
            'Turnover is the daily change in normalized weights; transaction costs scale with it. The baseline is 5 bps, with a robustness sweep at 0, 5, and 10 bps.'
          ]
        },
        {
          heading: 'Results',
          body: [
            'Buy & Hold dominated outright. Among active rules, Time-Series Momentum was the only one to turn its signal into positive net performance — and it stayed profitable at every cost level. Both Directional Change variants lost money and carried 69-75% drawdowns.'
          ],
          table: {
            columns: ['Strategy', 'Total Return', 'Sharpe', 'Max DD', 'Turnover', 'Trades'],
            rows: [
              ['Buy & Hold', '649.70%', '1.01', '-29.65%', '0.00%', '0'],
              ['Time-Series Momentum', '76.62%', '0.41', '-27.36%', '3.73%', '308'],
              ['Directional Change', '-64.92%', '-0.54', '-69.27%', '18.85%', '1,540'],
              ['Multi-Threshold DC', '-70.59%', '-0.63', '-74.50%', '22.56%', '1,849']
            ]
          }
        },
        {
          heading: 'Why event-based lost',
          body: [
            'Turnover tells the story: the DC rules traded roughly five to six times more than momentum, so transaction costs eroded returns. But the deeper issue is that DC was loss-making even at zero cost — on daily bars a 1-3% threshold reacts to ordinary noise rather than meaningful reversals.',
            'The takeaway: an idea is not better just because it looks more adaptive. Event-based methods are more plausible at higher frequencies or in more mean-reverting assets — not on smooth daily ETF trends. Signal design and implementation discipline matter as much as conceptual elegance.'
          ]
        }
      ],
      stack: ['Python', 'pandas / NumPy', 'yfinance', 'Vectorized backtesting', 'Turnover-based cost modeling'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/filehunts/FEC_algo-trading-3' },
        { label: 'Read the full writeup (PDF)', href: '/fec-writeup.pdf' }
      ]
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
