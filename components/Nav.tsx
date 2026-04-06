'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'The Stay',   href: '#stay' },
  { label: 'About',      href: '#about' },
  { label: 'Inquire',    href: '#dates' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkClass = `text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-colors duration-250 ${
    scrolled ? 'text-text-soft hover:text-coral' : 'text-white/70 hover:text-coral'
  }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[300] flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? 'bg-ivory/96 backdrop-blur-lg shadow-[0_1px_0_rgba(30,58,82,0.07)] px-4 sm:px-[2.8rem] py-3'
            : 'bg-transparent px-4 sm:px-[2.8rem] py-4 sm:py-5'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 sm:gap-4 no-underline min-w-0">
          <span
            className={`relative shrink-0 block transition-all duration-300 ${
              scrolled ? 'w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]' : 'w-[80px] h-[80px] sm:w-[130px] sm:h-[130px]'
            }`}
          >
            <Image
              src="/images/image_2.png"
              alt="Vistas & Vibes"
              fill
              className="object-contain"
            />
          </span>
          <span
            className={`font-heading italic font-light tracking-wide transition-all duration-400 ${
              scrolled
                ? 'text-ocean text-2xl sm:text-3xl'
                : 'text-white text-2xl sm:text-4xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]'
            }`}
          >
            Vistas &amp; Vibes
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={linkClass}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* CTA — hidden on small mobile, visible sm+ */}
          <a
            href="#dates"
            className={`hidden sm:inline-block text-[0.68rem] tracking-[0.16em] uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
              scrolled
                ? 'bg-gold text-ocean border border-gold hover:bg-ocean hover:text-white hover:border-ocean'
                : 'bg-gold/90 text-ocean border border-gold/0 hover:bg-gold hover:text-ocean'
            }`}
          >
            Join the Invitation List
          </a>

          {/* Hamburger — visible on mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-sm transition-colors"
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${scrolled || menuOpen ? 'text-ocean' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[299] md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ivory/98 backdrop-blur-md" />

          {/* Menu content */}
          <div
            className="relative flex flex-col items-center justify-center h-full px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-5 p-2 text-ocean/50 hover:text-ocean transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-3xl text-ocean hover:text-coral transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4">
                <a
                  href="#dates"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-8 py-3.5 bg-gold text-ocean hover:bg-ocean hover:text-white transition-colors rounded-full"
                >
                  Join the Invitation List
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
