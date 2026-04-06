'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  date: string
  onClose: () => void
}

export default function JoinModal({ date, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-ocean/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="bg-ivory w-full max-w-md rounded-sm shadow-2xl px-8 py-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-soft hover:text-ocean text-2xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {status === 'done' ? (
          <div className="text-center py-4">
            <p className="font-heading text-2xl text-ocean mb-3">You&apos;re on the list.</p>
            <p className="text-text-soft text-sm leading-relaxed">
              Alex will reach out personally with details as spots open up.
              Can&apos;t wait to have you there.
            </p>
            <button
              onClick={onClose}
              className="mt-6 text-xs font-medium tracking-[0.12em] uppercase px-6 py-2.5 bg-coral text-white hover:bg-ocean transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-heading text-2xl text-ocean mb-1">Join the Invitation List</p>
            <p className="text-text-soft text-sm mb-6 leading-relaxed">
              <span className="font-medium text-coral">{date}</span>
              <br />
              Spaces are very limited. Alex will be in touch personally.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[0.65rem] font-semibold text-text-soft mb-1 tracking-[0.12em] uppercase">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name is fine"
                  className="w-full border border-ivory-deep rounded-sm px-4 py-2.5 text-sm text-ocean bg-white focus:outline-none focus:ring-1 focus:ring-ocean placeholder:text-text-soft/50"
                />
              </div>
              <div>
                <label className="block text-[0.65rem] font-semibold text-text-soft mb-1 tracking-[0.12em] uppercase">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-ivory-deep rounded-sm px-4 py-2.5 text-sm text-ocean bg-white focus:outline-none focus:ring-1 focus:ring-ocean placeholder:text-text-soft/50"
                />
              </div>
              {status === 'error' && (
                <p className="text-xs text-coral">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-coral text-white text-xs font-medium tracking-[0.14em] uppercase py-3 hover:bg-ocean transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Reserve My Spot'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
