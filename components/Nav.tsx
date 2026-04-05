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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-400 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <a href="#" className="flex items-center gap-3 no-underline">
        {/* Circular crop removes the grey square from the PNG */}
        <span className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 block">
          <Image
            src="/images/image_2.png"
            alt="Vistas & Vibes logo"
            fill
            className="object-cover scale-[0.88]"
          />
        </span>
        <span
          className={`font-serif text-2xl tracking-wide transition-colors duration-400 hidden sm:block ${
            scrolled ? 'text-bark' : 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]'
          }`}
        >
          Vistas &amp; Vibes
        </span>
      </a>

      <a
        href="#dates"
        className={`text-[0.7rem] font-medium tracking-[0.14em] uppercase px-5 py-2.5 border rounded-sm transition-all duration-250 ${
          scrolled
            ? 'bg-terracotta text-white border-terracotta hover:bg-bark hover:border-bark'
            : 'text-white border-white/60 hover:bg-white/15'
        }`}
      >
        See Upcoming Dates
      </a>
    </nav>
  )
}
