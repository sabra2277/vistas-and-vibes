'use client'

import { useState } from 'react'
import JoinModal from './JoinModal'

const dates = [
  {
    id: 'july',
    month: 'July',
    label: 'Mid July 2025',
    tagline: 'Peak summer. The coast at its wildest.',
    spots: '6 spots',
  },
  {
    id: 'august',
    month: 'August',
    label: 'Early August 2025',
    tagline: 'Long days, warm water, zero regrets.',
    spots: '6 spots',
  },
  {
    id: 'october',
    month: 'October',
    label: 'Mid October 2025',
    tagline: 'Shoulder season — quieter beaches, perfect weather.',
    spots: '6 spots',
  },
]

export default function DatesSection() {
  const [activeDate, setActiveDate] = useState<string | null>(null)
  const selected = dates.find((d) => d.id === activeDate)

  return (
    <section id="dates" className="bg-warm py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4">
          Upcoming Dates
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-5">
          Spaces are limited.
        </h2>
        <p className="text-text-soft text-base leading-relaxed max-w-xl mx-auto">
          Each trip is kept intentionally small — just enough people to make it feel social,
          never overwhelming. Reserve your spot early.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-5 md:grid-cols-3">
        {dates.map((d) => (
          <div
            key={d.id}
            className="bg-white border border-sand rounded-sm px-6 py-7 flex flex-col items-start shadow-sm"
          >
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-terracotta mb-2">
              {d.spots} remaining
            </span>
            <p className="font-serif text-2xl text-bark mb-1">{d.label}</p>
            <p className="text-sm text-text-soft leading-relaxed mb-6 flex-1">{d.tagline}</p>
            <button
              onClick={() => setActiveDate(d.id)}
              className="w-full text-xs font-medium tracking-[0.12em] uppercase py-2.5 bg-terracotta text-white rounded-sm hover:bg-bark transition-colors"
            >
              Join the List
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-text-soft text-xs mt-8">
        Questions? Reach Alex directly:{' '}
        <a
          href="tel:18472080419"
          className="text-terracotta hover:underline"
        >
          1-847-208-0419
        </a>
        {' '}·{' '}
        <a
          href="https://instagram.com/VistasandVibesco"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terracotta hover:underline"
        >
          @VistasandVibesco
        </a>
      </p>

      {selected && (
        <JoinModal date={selected.label} onClose={() => setActiveDate(null)} />
      )}
    </section>
  )
}
