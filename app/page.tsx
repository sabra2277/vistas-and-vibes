import Image from 'next/image'
import Nav from '@/components/Nav'
import Marquee from '@/components/Marquee'
import FAQ from '@/components/FAQ'
import DatesSection from '@/components/DatesSection'

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image_1.png"
            alt="Private oceanfront villa on the Oaxaca coast"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/40 to-ocean/10" />
        </div>

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-10 pb-24 md:pb-32">
          <h1 className="font-heading text-5xl md:text-7xl text-white font-light leading-tight mb-5 tracking-wide">
            Not a retreat.<br />
            A curated adventure.
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-light">
            Elevated, indulgent, and thoughtfully designed for you. A private oceanfront villa, private king suites, a small group, and a few unforgettable days built around what you actually want to do.
          </p>
          <a
            href="#dates"
            className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-8 py-3.5 bg-gold text-ocean hover:bg-ocean hover:text-white transition-colors rounded-full"
          >
            Join the Invitation List
          </a>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── A TRIP DESIGNED FOR YOU ────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6" id="experience">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[420px] md:h-[560px] overflow-hidden">
              <Image
                src="/images/puerto_hero.jpg"
                alt="Puerto Escondido, Oaxaca Coast"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="bg-ocean py-3 px-5 inline-block mt-0">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/70">
                Puerto Escondido, Oaxaca Coast
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              A trip designed for you
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-ocean leading-tight mb-2">
              An adult, elevated escape
            </h2>
            <p className="font-heading italic text-ocean/60 text-xl md:text-2xl mb-6 font-light">
              for women fully in their lives.
            </p>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
              <p>
                <span className="font-medium text-ocean">Come exactly as you are</span> — There&apos;s no mandatory schedule to follow, no sunrise &ldquo;strength building,&rdquo; and zero transformational drum circles. This is an adult, elevated escape for women who are fully in their lives—not escaping them.
              </p>
              <p>
                Whether you&apos;re a lifelong explorer or venturing onto a surfboard for the first time, you&apos;ll find your rhythm here. There is no &ldquo;too old&rdquo; or &ldquo;not fit enough&rdquo;—there is only the joy of trying something new in a place that feels entirely safe. Just a beautiful villa, a small group of peers, and the freedom to do what feels right in the moment—without pressure, without noise, and without anybody to take care of but yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE EXPERIENCE ─────────────────────────────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-5">
              The Experience
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-6">
              Have fun. Feel free.<br />
              <em>Everything else is handled.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
              <p>
                This isn&apos;t a guru-led workshop, and we won&apos;t ask you to find your life purpose in a yoga pose. You won&apos;t be sitting in a circle sharing your life story with strangers—unless, of course, that happens naturally over a third glass of wine.
              </p>
              <p>
                You aren&apos;t here to &ldquo;do the work&rdquo; or &ldquo;detox.&rdquo; You&apos;re here because you&apos;ve earned something better: the space to simply be.
              </p>
            </div>
          </div>

          <div>
            <ul className="space-y-5">
              {[
                'Required bonding exercises',
                '"Wellness" performance energy',
                'Fitness requirements',
                'Schedule anxiety',
                'Shared rooms or single supplements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-text-soft text-base font-light border-b border-ivory-deep pb-5 last:border-0 last:pb-0">
                  <span className="shrink-0 text-[0.6rem] tracking-[0.12em] uppercase font-semibold text-ocean/40 border border-ocean/20 px-2 py-0.5 mt-0.5">
                    No
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── THE STAY ───────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-0" id="stay">
        <div className="grid md:grid-cols-2">
          {/* Images — stacked */}
          <div className="grid grid-rows-2 h-[500px] md:h-auto md:min-h-[600px]">
            <div className="relative overflow-hidden">
              <Image
                src="/images/stay_pool.jpg"
                alt="Villa pool with ocean view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/images/stay_night.jpg"
                alt="Villa at night"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-10 md:px-16 py-20 flex flex-col justify-center">
            <p className="text-base tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              The stay: a private sanctuary
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-ocean leading-tight mb-5 font-light italic">
              The kind of place you don&apos;t want to leave.
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-4 text-text-soft text-base leading-relaxed font-light mb-8">
              <p>
                Our oceanfront villa on the Oaxaca coast is the kind of place you never want to leave. Featuring private king suites—each with its own ensuite bathroom—it&apos;s designed for you to fully unwind in total privacy.
              </p>
              <p>
                It&apos;s the kind of place where you wake up slowly, moving between sun and shade without ever feeling crowded. With open-air living spaces, a shimmering pool, and a jacuzzi, it&apos;s social when you want it and peaceful when you don&apos;t.
              </p>
            </div>
            <ul className="space-y-3 mb-10">
              {[
                'Private King Suite + Ensuite Bath',
                'Ocean Views from Every Room',
                'Chef-Prepared Fresh Breakfast & Lunch',
                'Pool, Jacuzzi & Private Bar',
                'Intimate Small Group Setting',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#dates"
                className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-8 py-3.5 bg-gold text-ocean hover:bg-ocean hover:text-white transition-colors rounded-full"
              >
                Join the Invitation List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ────────────────────────────────────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-5">
              Service
            </p>
            <p className="font-heading text-3xl md:text-4xl text-ocean leading-snug mb-6">
              Go out. Stay out.<br />Say yes to the plans you didn&apos;t overthink.
            </p>
            <p className="text-text-soft text-base leading-relaxed font-light">
              You&apos;re not doing this alone. I&apos;m always nearby ensuring everything runs smoothly—whether it&apos;s arranging a private driver, helping you navigate the local scene, or making sure you get back to the villa safely after a night of dancing.
            </p>
          </div>
          <div>
            <blockquote className="font-heading italic text-ocean text-2xl md:text-3xl leading-snug border-l-2 border-gold pl-7">
              Have the adventure. Feel the warmth. Everything else is handled.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6" id="about">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] md:h-[560px] overflow-hidden">
            <Image
              src="/images/image_5.png"
              alt="Alex on the Oaxaca coast"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-5">
              About the host
            </p>
            <h2 className="font-heading text-4xl text-ocean mb-5">Hi, I&apos;m Alex.</h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
              <p>
                I&apos;ve spent my life creating experiences—for students, for communities, and for the people I love. A couple of years ago, I took a leap, moved to Mexico, and fell in love with the raw, alluring energy of the Oaxaca coast.
              </p>
              <p>
                People kept telling me, &ldquo;You should host something here.&rdquo;
              </p>
            </div>
            <blockquote className="my-7 border-l-2 border-gold pl-6 font-heading italic text-ocean text-lg leading-snug">
              So, I am. I&apos;m bringing together the most beautiful hidden spots and the most delicious experiences to create something you will actually remember. I&apos;ll be there with you—making sure the mezcal is cold, the plans are easy, and the vibe is always just right.
            </blockquote>
            <a
              href="#dates"
              className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-8 py-3.5 bg-gold text-ocean hover:bg-ocean hover:text-white transition-colors rounded-full"
            >
              Join the Invitation List
            </a>
          </div>
        </div>
      </section>

      {/* ── COMMON CURIOSITIES ─────────────────────────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-base tracking-[0.14em] uppercase font-semibold text-gold mb-10">
            Common curiosities
          </p>
          <FAQ />
        </div>
      </section>

      {/* ── UPCOMING DATES ─────────────────────────────────────────────────── */}
      <DatesSection />

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-ocean py-12 px-6 text-center">
        <div className="flex justify-center mb-5">
          <span className="relative w-12 h-12 block">
            <Image
              src="/images/image_2.png"
              alt="Vistas & Vibes"
              fill
              className="object-contain"
            />
          </span>
        </div>
        <p className="font-heading text-ivory text-xl mb-6 tracking-wide">Vistas &amp; Vibes</p>
        <nav className="flex flex-wrap justify-center gap-8 text-[0.68rem] tracking-[0.18em] uppercase font-medium text-ivory/40 mb-6">
          {[
            { label: 'Experience', href: '#experience' },
            { label: 'The Stay',   href: '#stay' },
            { label: 'About',      href: '#about' },
            { label: 'Inquire',    href: '#dates' },
          ].map((l) => (
            <a key={l.label} href={l.href} className="hover:text-ivory/70 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-ivory/25 text-xs">&copy; 2026 Vistas &amp; Vibes &middot; Oaxaca Coast, Mexico</p>
      </footer>
    </>
  )
}
