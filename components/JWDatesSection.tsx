'use client'

import { useState } from 'react'
import JoinModal from './JoinModal'

const dates = [
  { id: 'fall',    title: 'Fall',                sub: 'Puerto Escondido, Oaxaca Coast',        cta: 'Join the Invitation List →', label: 'Fall — Jewish Women\'s Gathering' },
  { id: 'winter',  title: 'Winter',              sub: 'Puerto Escondido, Oaxaca Coast',        cta: 'Join the Invitation List →', label: 'Winter — Jewish Women\'s Gathering' },
  { id: 'private', title: 'Private Group Dates', sub: 'Customized for your group, any season', cta: 'Inquire About Your Group →', label: 'Private Group — Jewish Women\'s Gathering' },
]

export default function JWDatesSection() {
  const [activeDate, setActiveDate] = useState<string | null>(null)
  const selected = dates.find((d) => d.id === activeDate)

  return (
    <section id="dates" className="bg-ivory-mid py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* The Invitation */}
        <div className="max-w-xl mb-16">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
            The Invitation
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ocean mb-4 leading-tight">
            Your seat at the table <em>is waiting.</em>
          </h2>
          <div className="w-12 h-px bg-gold mb-7" />
          <div className="space-y-4 text-text-soft text-base leading-relaxed font-light">
            <p>
              Because this is a small-group experience in a private villa, we keep the circle intentionally intimate. Five days is the standard gathering, and it can be shaped around your group — join the list to be the first to hear about confirmed dates.
            </p>
          </div>
        </div>

        {/* Date cards */}
        <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
          Upcoming dates
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {dates.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-ivory-deep rounded-sm px-7 py-8 flex flex-col gap-3 shadow-sm"
            >
              <span className="font-heading text-3xl text-ocean">{d.title}</span>
              <p className="text-xs tracking-[0.12em] text-text-soft uppercase">
                {d.sub}
              </p>
              <button
                onClick={() => setActiveDate(d.id)}
                className="mt-2 text-left text-sm font-medium text-coral hover:text-ocean transition-colors tracking-wide"
              >
                {d.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[0.8rem] text-text-soft italic">
          To inquire: 1-847-208-0419
        </p>
      </div>

      {selected && (
        <JoinModal date={selected.label} onClose={() => setActiveDate(null)} />
      )}
    </section>
  )
}
