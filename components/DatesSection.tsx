'use client'

import { useState } from 'react'
import JoinModal from './JoinModal'

const dates = [
  { id: 'july',    month: 'Mid-July',     label: 'Mid-July 2025' },
  { id: 'august',  month: 'Early August', label: 'Early August 2025' },
  { id: 'october', month: 'Mid-October',  label: 'Mid-October 2025' },
]

export default function DatesSection() {
  const [activeDate, setActiveDate] = useState<string | null>(null)
  const selected = dates.find((d) => d.id === activeDate)

  return (
    <section id="dates" className="bg-ivory-mid py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
          Upcoming dates
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-ocean mb-4 leading-tight">
          Reserve your spot.
        </h2>
        <p className="text-text-soft text-sm leading-relaxed mb-12 max-w-md">
          These buttons lead directly to the invitation list. Spots are limited.
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
                Request Your Invitation →
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
