'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to be "good" at yoga or surfing to join?',
    a: 'Absolutely not. There is no performance energy here. Whether you\'ve been surfing for years or are venturing onto a board for the first time, you\'ll find your rhythm. The goal isn\'t to be "good"—it\'s to feel the salt on your skin and the joy of a new discovery. If you\'d rather spend that hour with a book by the pool, that\'s your adventure, too.',
  },
  {
    q: 'I\'m traveling solo. Will I feel out of place?',
    a: 'Most of our guests come on their own. Our philosophy is "travel solo, never alone." You\'ll have the privacy of your own suite when you need a moment of quiet, and a small, curated group of peers to share a sunset with when you want connection.',
  },
  {
    q: 'How "safe" is the experience?',
    a: 'Your safety is my priority. From the moment you land at the airport, you are taken care of. We use trusted, private transportation for all outings, and our villa is a secure, private sanctuary. I\'m on the ground with you, ensuring that whether we\'re at a local market or a beach club, you feel entirely at ease.',
  },
  {
    q: 'Is there a strict schedule?',
    a: 'None. This is the opposite of a rigid retreat. I provide a menu of delicious possibilities—horseback riding, mezcal tastings, beach clubs—and you choose what speaks to you in the moment. There are no mandatory wake-up calls or required bonding exercises.',
  },
  {
    q: 'Will I have my own space?',
    a: 'Always. We don\'t do shared rooms or single supplements. Every guest has their own private King Suite with an ensuite bathroom. You\'ve earned the luxury of your own space to unwind at the end of the day.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-ivory-deep">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-base font-medium text-ocean leading-snug">{faq.q}</span>
            <span
              className={`faq-icon shrink-0 w-7 h-7 rounded-full border border-ocean/30 flex items-center justify-center text-ocean text-lg leading-none transition-transform duration-300 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-350 ease-in-out ${
              open === i ? 'max-h-72 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-text-soft text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
