'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = `text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-colors duration-250 ${
    scrolled ? 'text-text-soft hover:text-coral' : 'text-white/70 hover:text-coral'
  }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[300] flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? 'bg-ivory/96 backdrop-blur-lg shadow-[0_1px_0_rgba(30,58,82,0.07)] px-[2.8rem] py-4'
          : 'bg-transparent px-[2.8rem] py-6'
      }`}
    >
      {/* Brand */}
      <a href="#" className="flex items-center gap-3 no-underline">
        {/* mix-blend-mode removes the grey/white PNG background against both dark and light nav */}
        <span
          className="relative rounded-full overflow-hidden shrink-0 block transition-all duration-300"
          style={{ width: scrolled ? '68px' : '88px', height: scrolled ? '68px' : '88px' }}
        >
          <Image
            src="/images/image_2.png"
            alt="Vistas & Vibes"
            fill
            className="object-cover scale-[0.96]"
            style={{ mixBlendMode: 'multiply' }}
          />
        </span>
        <span
          className={`font-heading tracking-wide transition-all duration-400 hidden sm:block ${
            scrolled ? 'text-ocean text-2xl' : 'text-white text-3xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]'
          }`}
        >
          Vistas &amp; Vibes
        </span>
      </a>

      {/* Nav links — hidden on mobile */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {[
          { label: 'Experience', href: '#experience' },
          { label: 'The Stay',   href: '#stay' },
          { label: 'About',      href: '#about' },
          { label: 'Inquire',    href: '#dates' },
        ].map((l) => (
          <li key={l.label}>
            <a href={l.href} className={linkClass}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#dates"
        className={`text-[0.68rem] tracking-[0.16em] uppercase font-medium px-5 py-2 border rounded-full transition-all duration-300 ${
          scrolled
            ? 'border-gold text-gold hover:bg-gold hover:text-ocean'
            : 'border-gold/70 text-gold hover:bg-gold hover:text-ocean'
        }`}
      >
        Join the Invitation List
      </a>
    </nav>
  )
}
