'use client'

import { useState } from 'react'
import JoinModal from './JoinModal'

const dates = [
  { id: 'july',    month: 'Mid-July',     label: 'Mid-July 2026' },
  { id: 'august',  month: 'Early August', label: 'Early August 2026' },
  { id: 'october', month: 'Mid-October',  label: 'Mid-October 2026' },
]

export default function DatesSection() {
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
            Your seat at the table is waiting.
          </h2>
          <div className="w-12 h-px bg-gold mb-7" />
          <div className="space-y-4 text-text-soft text-base leading-relaxed font-light">
            <p>
              The best things are discovered organically. Because this is a small-group experience in a private villa, we keep the circle intentionally intimate to ensure the energy is always just right.
            </p>
            <p>
              Join the invitation list to be the first to hear about our confirmed dates, new coastal discoveries, and when the next few spots open up.
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
              <span className="font-heading text-3xl text-ocean">{d.month}</span>
              <p className="text-xs tracking-[0.12em] text-text-soft uppercase">
                Puerto Escondido, Oaxaca Coast
              </p>
              <button
                onClick={() => setActiveDate(d.id)}
                className="mt-2 text-left text-sm font-medium text-coral hover:text-ocean transition-colors tracking-wide"
              >
                Join the Invitation List →
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[0.8rem] text-text-soft italic">
          To inquire: 1-847-208-0419 · @VistasandVibesco
        </p>
      </div>

      {selected && (
        <JoinModal date={selected.label} onClose={() => setActiveDate(null)} />
      )}
    </section>
  )
}
