// Single source of truth for Featured Projects.
// Cards on the home page and the /projects/:slug detail pages both read from here.
// A project with a `detail` object gets its own page and a "Read more" link on the card.

export const projects = [
  {
    slug: 'slm-vs-llm-benchmark',
    title: 'SLM vs LLM Benchmark (SIGNLL)',
    period: '2025 - Present',
    description: 'Benchmarked local 3B models against Claude on financial reasoning tasks across quality, latency, and cost.',
    highlights: [
      'Measured a 22.4-point accuracy gap on FinQA between Claude Haiku 4.5 (80.0%) and the best local 3B model (57.6%), 95% CI [16.8, 28.0].',
      'Showed the gap collapses on FOMC stance classification, so the deficit is specific to multi-step arithmetic reasoning.'
    ],
    technologies: ['Python', 'Ollama', 'Anthropic API', 'Evaluation'],
    links: [{ label: 'GitHub', href: 'https://github.com/abhinav10raj/slm-vs-llm-benchmark' }],
    detail: {
      tagline: 'Can a 3B model running on a consumer GPU match Claude on financial reasoning? On arithmetic, no — on language understanding, nearly.',
      sections: [
        {
          heading: 'The question',
          body: [
            'Large language models are the default answer for almost every NLP task, but they cost money per call. Small models run locally for free — the question is what you give up in quality.',
            'This project, part of my work with SIGNLL at ACM@UIUC, measures that trade-off on financial tasks: where do small local models hold their own against hosted Claude models, and where do they fall short?'
          ]
        },
        {
          heading: 'Approach',
          body: [
            'I benchmarked Llama 3.2, Qwen 2.5, and Phi 3.5 locally through Ollama at 8-bit quantization on a single consumer GPU, at zero marginal API cost, against Claude Haiku 4.5 and Sonnet 4.6 through the Anthropic API.',
            'The pipeline is a config-driven harness that persists per-item outputs, so any run can be re-scored reproducibly without re-querying the models.'
          ]
        },
        {
          heading: 'Results',
          body: [
            'On FinQA financial numerical reasoning, Claude Haiku 4.5 scored 80.0% against 57.6% for the best local 3B model — a 22.4-point gap with a 95% bootstrap CI of [16.8, 28.0]. Sonnet 4.6 was highest at 85.2%.',
            'On FOMC monetary-policy stance classification the gap collapses: a 17.7-point macro-F1 spread versus 3.5 on numerical reasoning. The small-model deficit is specific to multi-step arithmetic reasoning, not general financial language understanding.'
          ]
        },
        {
          heading: 'Making the scores trustworthy',
          body: [
            'Small models format numeric answers inconsistently, so I built a unit-aware answer-extraction and dual-gold scoring layer that reaches 99.6% parse coverage.',
            'I audited scoring tolerance across 434 boundary cases to confirm small-model errors were reasoning failures rather than parsing artifacts, and reported quality with multi-tolerance accuracy, bootstrap confidence intervals, and paired-bootstrap significance tests alongside latency and cost.'
          ]
        }
      ],
      stack: ['Python', 'Ollama (Llama 3.2, Qwen 2.5, Phi 3.5)', 'Anthropic API', 'Bootstrap + paired-bootstrap statistics'],
      links: [{ label: 'View on GitHub', href: 'https://github.com/abhinav10raj/slm-vs-llm-benchmark' }]
    }
  },
  {
    slug: 'etf-trading-strategy-backtest',
    title: 'Time-Based vs Event-Based Trading Rules (FEC)',
    period: 'Feb 2026 - Aug 2026',
    description: 'A research pipeline comparing time-based and event-based trading rules on a multi-asset ETF universe, built with the Financial Engineering Club.',
    highlights: [
      'Backtested Buy & Hold, Time-Series Momentum, and two Directional Change strategies on SPY/QQQ/TLT/GLD daily data (2010-2026).',
      'Found no active rule beat Buy & Hold (649.70%, 1.01 Sharpe); both Directional Change variants lost money even before transaction costs.'
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
        { label: 'View on GitHub', href: 'https://github.com/filehunts/FEC_algo-trading-3' }
      ]
    }
  },
  {
    slug: 'silentsync',
    title: 'SilentSync',
    period: '2023 - 2025',
    description: 'A native Android app for workplace communication accessibility for deaf employees.',
    highlights: [
      'Supports speech-to-text conversation capture, quick-phrase shortcuts, and an ASL fingerspelling practice mode with live camera feedback.',
      'Runs all machine learning on-device with no backend, so it works fully offline and no user data leaves the phone; distributed to users and local business partners and iterated on their feedback.'
    ],
    technologies: ['Android', 'On-device ML', 'Accessibility'],
    links: []
  }
]

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
