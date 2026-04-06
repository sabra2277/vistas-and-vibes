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
          <p className="font-heading text-xl md:text-3xl text-white/80 leading-snug max-w-2xl mb-10 font-light italic">
            Elevated, indulgent, and thoughtfully designed for you.
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

      {/* ── THE EXPERIENCE ─────────────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6" id="experience">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              The Experience
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-3">
              An elevated, five-night escape
            </h2>
            <p className="font-heading italic text-ocean/60 text-xl md:text-2xl font-light">
              for women fully immersed in their lives.
            </p>
          </div>

          {/* Two-column: image + copy */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative h-[420px] md:h-[520px] overflow-hidden">
              <Image
                src="/images/puerto_hero.jpg"
                alt="Puerto Escondido, Oaxaca Coast"
                fill
                className="object-cover"
              />
              <p className="absolute bottom-0 left-0 text-[0.6rem] tracking-[0.16em] uppercase text-white/60 bg-ocean/40 backdrop-blur-sm px-4 py-2">
                Puerto Escondido, Oaxaca Coast
              </p>
            </div>

            <div>
              <div className="w-12 h-px bg-gold mb-7" />
              <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
                <p>
                  Escape the ordinary with an elevated, five-night journey for women fully immersed in their lives. This is a bespoke escape for those who want more space, more quiet adventure, and more moments to simply pause. Imagine mornings spent trying something new — perhaps a surf lesson with peers your own age or a horseback ride along the shore — where the only person you have to consider is yourself. There are no children to coordinate, no schedules to manage; just the freedom to tap into your most uninhibited self.
                </p>
                <p>
                  Between authentic cooking classes and sunset mezcal tastings, you&apos;ll explore the hidden soul of the Oaxaca coast organically, as if you&apos;re being shown the secret spots of a best friend. Whether you are dancing under the stars or retreating to the sophisticated luxury of your villa, this is your time to rediscover the world on your own terms. It is an invitation to wander, to taste, and to finally exhale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE UN-RETREAT ─────────────────────────────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
                The Un-Retreat
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-6">
                Have fun. Feel free.<br />
                <em>Everything else is handled.</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-7" />
              <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
                <p>
                  We invite you to come exactly as you are — which means no sunrise workouts, no &ldquo;finding yourself&rdquo; in a drum circle, and zero expectation to return as a &ldquo;better version&rdquo; of you. We think you&apos;re actually great as you are.
                </p>
                <p>
                  Here, there is no &ldquo;too old&rdquo; nor &ldquo;fit enough.&rdquo; There is only a beautiful villa, a small group of peers, and the rarest luxury of all: the freedom to exist without an audience.
                </p>
                <p>
                  Whether you are seeking a new adventure or a quiet afternoon by the pool, this is your safe harbor — a place with no one to care for, no one to answer to, and the effortless ease of a life lived entirely for you.
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
                    <span className="shrink-0 text-[0.6rem] tracking-[0.12em] uppercase font-semibold text-coral/70 mt-1">
                      No
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE STAY ───────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6" id="stay">
        <div className="max-w-[1100px] mx-auto">
          {/* Header + first image */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
                The stay: a private sanctuary
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-3">
                The kind of place
              </h2>
              <p className="font-heading italic text-ocean/60 text-xl md:text-2xl font-light mb-6">
                you don&apos;t want to leave.
              </p>
              <div className="w-12 h-px bg-gold mb-7" />
              <p className="text-text-soft text-base leading-relaxed font-light">
                Our oceanfront villa on the Oaxaca coast is the kind of place you never want to leave. Featuring private king suites — each with its own ensuite bathroom — it&apos;s designed for you to fully unwind in total privacy.
              </p>
            </div>
            <div className="relative h-[360px] md:h-[440px] overflow-hidden">
              <Image
                src="/images/stay_pool.jpg"
                alt="Villa pool with ocean view"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Second image + details */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[360px] md:h-[440px] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/stay_night.jpg"
                alt="Villa at night"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-text-soft text-base leading-relaxed font-light mb-8">
                It&apos;s the kind of place where you wake up slowly, moving between sun and shade without ever feeling crowded. With open-air living spaces, a shimmering pool, and a jacuzzi, it&apos;s social when you want it and peaceful when you don&apos;t.
              </p>
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

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6" id="about">
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
            <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              About me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean mb-5">Hi, I&apos;m Alex.</h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
              <p>
                I&apos;ve spent my life creating experiences — for students, for communities, and for the people I love. Over time, I have found myself drawn deeper and deeper into the raw, alluring energy of the Oaxaca coast, uncovering the soul of a place that feels both wild and welcoming.
              </p>
              <p>
                People kept telling me, &ldquo;You should host something here.&rdquo;
              </p>
              <p>
                So, I am. I&apos;m bringing together the most beautiful hidden spots and the most delicious experiences to create something you will actually remember. I&apos;ll be there with you — making sure the mezcal is cold, the plans are easy, and the vibe is always just right.
              </p>
            </div>
            <div className="mt-8">
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

      {/* ── COMMON CURIOSITIES ─────────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-10">
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
