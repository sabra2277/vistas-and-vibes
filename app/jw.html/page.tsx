import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Marquee from '@/components/Marquee'
import FAQ from '@/components/FAQ'
import JWDatesSection from '@/components/JWDatesSection'

export const metadata: Metadata = {
  title: "Vistas & Vibes — A Jewish Women's Gathering, Oaxaca Coast",
  description:
    "Not a retreat. A curated Jewish women's gathering on the Oaxaca Coast — five days, a Friday night at the local Chabad, and a touch of heimish. Elevated, indulgent, thoughtfully designed for you.",
  // Hidden page — reachable only by direct link, kept out of search engines.
  robots: { index: false, follow: false },
}

const tickerItems = [
  'Travel solo, never alone',
  'Not a retreat. Your kind of trip',
  'A touch of heimish, zero pressure',
  'Away from the noise, close to your people',
  'Curated freedom for adventurous women',
]

const pillars = [
  {
    tag: 'Erev Shabbat',
    title: 'Candles at the local Chabad',
    body: 'One evening, we head to the Chabad here in Puerto — the same one the young Israeli backpackers passing through have found for years. Just candles, a table, good noise, and a Friday night that doesn’t need translating.',
  },
  {
    tag: 'Open Table',
    title: 'Say the thing. All of it.',
    body: 'Conversation here goes wherever it goes — funny, blunt, occasionally a little sacred, usually somewhere in between. You get to be as loud, as quiet, as certain, or as unresolved as you actually are.',
  },
  {
    tag: 'Yours to Take or Leave',
    title: 'Mornings with a little more soul',
    body: 'Optional yoga on the sand most mornings — not a lesson in enlightenment, just movement, quiet, and coffee after. Want more meaning in the schedule? There’s room for it. Want to sleep in? The king suite is waiting.',
  },
  {
    tag: 'The Tribe',
    title: 'Family, without the sermon',
    body: 'This week isn’t about religion. It’s about the specific, hard-to-explain ease of being around your people — the shared references, the humor, the history you don’t have to summarize.',
  },
]

const jwFaqs = [
  {
    q: 'Do I need to be religious or observant to come?',
    a: 'Not at all. This isn’t affiliated with any movement or organization, and nobody’s checking your credentials. Observant, unaffiliated, somewhere in between, or just curious about the Friday night — all correct. Show up however you show up.',
  },
  {
    q: 'Is there a religious or wellness agenda I should know about?',
    a: 'No. Friday night at the Chabad and morning yoga are both entirely optional, and neither comes with a lesson attached. There’s no curriculum, no required reflection, and nobody teaching you anything — just good company and a little more meaning built in for those who want it.',
  },
  {
    q: 'I’m traveling solo. Will I feel out of place?',
    a: 'Most of our guests come on their own. Our philosophy is “travel solo, never alone.” You’ll have the privacy of your own suite when you need a moment of quiet, and a small, curated group of women who get it when you want connection.',
  },
  {
    q: 'Is there a strict schedule?',
    a: 'None. I provide a menu of delicious possibilities — Friday night, morning yoga, horseback riding, mezcal tastings — and you choose what speaks to you in the moment. There are no mandatory wake-up calls and no required bonding exercises.',
  },
  {
    q: 'Can this be customized for my group?',
    a: 'Yes. Five days is the standard experience, but if you’re bringing a group — a milestone birthday, a tight-knit friend circle, a synagogue sisterhood — I’ll happily talk through timing, length, and details that fit you.',
  },
  {
    q: 'Will I have my own space?',
    a: 'Always. We don’t do shared rooms or single supplements. Every guest has her own private king suite with an ensuite bathroom — you’ve earned the luxury of your own space to unwind at the end of the day.',
  },
]

export default function JewishWomensGathering() {
  return (
    <>
      <Nav sublabel="A Jewish Women's Gathering" mainSiteHref="/" />

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

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-10 pt-40 pb-16 md:pb-24">
          <h1 className="font-heading text-5xl md:text-7xl text-white font-light leading-tight mb-5 tracking-wide">
            Come exactly as you are.<br />
            Be among <em>your people.</em>
          </h1>
          <p className="font-heading text-lg md:text-2xl text-white/80 leading-snug max-w-xl mb-10 font-light italic">
            A small-group, five-day gathering on the Oaxaca Coast for Jewish women who want ease, real adventure, and the freedom to just be you.
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
      <Marquee items={tickerItems} />

      {/* ── THE EXPERIENCE ─────────────────────────────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6" id="experience">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              The Experience
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-3">
              An elevated, five-day gathering
            </h2>
            <p className="font-heading italic text-ocean/60 text-xl md:text-2xl font-light">
              for your people.
            </p>
          </div>

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
                  Five days on the Pacific coast, built for Jewish women who want ease, real adventure, and the freedom to just be you — with a touch of heimish woven in. This isn&apos;t a learning trip, and Alex isn&apos;t your coach. She&apos;s the friend who planned an incredible experience: mornings spent trying something new, whether that&apos;s a surf lesson or a horseback ride along the shore, and evenings that end however you want them to.
                </p>
                <p>
                  One of those evenings is Friday night at the local Chabad — the same one the young Israeli backpackers passing through have found for years. No performance, no pressure to observe a certain way, nobody checking how Jewish you are. Just candles, a table, good noise, and a Friday night a lot of us have missed since our Birthright trip — minus the bus, minus the itinerary, plus a villa with your name on the door.
                </p>
                <p>
                  Whether you&apos;re dancing under the stars, deep in conversation on the patio, or retreating to the sophisticated luxury of your own suite, this is your time to exhale — away from the group chats, the headlines, and the daily chaos schedule waiting for you at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LET'S BE CLEAR (UN-RETREAT) ────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
                Let&apos;s Be Clear
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-6">
                Not a retreat. Not a class.<br />
                <em>Not a coach.</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-7" />
              <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
                <p>
                  There&apos;s no workshop here, no life-purpose-finding, no promise that you&apos;ll come home &ldquo;fixed.&rdquo; We think you&apos;re already great as you are. If you want a genuinely interesting conversation, you&apos;ll find plenty — but nobody&apos;s here to teach you anything, and nobody&apos;s monitoring how put-together, how spiritual, or how Jewish you are.
                </p>
                <p>
                  This is also five days away from politics, the news cycle, and whatever&apos;s blowing up your group chat. What happens here is real conversation, real rest, and real adventure — on your terms, at your pace.
                </p>
              </div>
            </div>

            <div>
              <ul className="space-y-5">
                {[
                  'Required bonding exercises',
                  '"Wellness" performance energy',
                  'Politics or world events on the agenda',
                  'Schedule anxiety',
                  'Explaining your relationship to religion',
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

      {/* ── WHAT ACTUALLY HAPPENS (FOUR PILLARS) ───────────────────────────── */}
      <section className="bg-ivory-mid py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-2xl mb-4">
            <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              What Actually Happens
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-4">
              Four things make this experience <em>what it is.</em>
            </h2>
            <p className="text-text-soft text-base leading-relaxed font-light">
              None of them are mandatory. All of them are why women keep coming back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12 mt-14">
            {pillars.map((p) => (
              <div key={p.tag} className="border-t border-ivory-deep pt-6">
                <span className="block text-[0.62rem] tracking-[0.18em] uppercase font-semibold text-sage mb-3">
                  {p.tag}
                </span>
                <h3 className="font-heading text-2xl md:text-[1.7rem] text-ocean mb-3">
                  {p.title}
                </h3>
                <p className="text-text-soft text-[0.95rem] leading-relaxed font-light">
                  {p.body}
                </p>
              </div>
            ))}
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
                Our oceanfront villa on the Oaxaca coast is the kind of place you never want to leave. Featuring private king suites — each with its own ensuite bathroom — it&apos;s designed for you to fully unwind in total privacy, with room enough to disappear when you want to.
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
                It&apos;s the kind of place where you wake up slowly, moving between sun and shade without ever feeling crowded. With open-air living spaces, a shimmering pool, and a private bar, it&apos;s social when you want it and peaceful when you don&apos;t — and five days is just enough time to actually settle into it.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Private King Suite + Ensuite Bath',
                  'Ocean Views from Every Room',
                  'Chef-Prepared Fresh Breakfast & Lunch',
                  'Pool, Jacuzzi & Private Bar',
                  'Friday Night at the Local Chabad',
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
              src="/images/about_alex.jpg"
              alt="Alex on the Oaxaca coast"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-5">
              About me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean mb-5">
              Hi, I&apos;m <em>Alex.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <p className="font-heading italic text-ocean/80 text-2xl leading-snug font-light mb-6">
              &ldquo;I&apos;ve spent a lot of time on this coast, and I kept meeting women who wanted a real break — and a Friday night that felt like home — without having to choose between them. So I built five days where they don&apos;t have to.&rdquo;
            </p>
            <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
              <p>
                I&apos;m not a coach, and this isn&apos;t a program. I&apos;m the friend who knows the coast, knows the villa, and knows exactly which Friday nights are worth showing up for. I&apos;ll be there with you the entire time — making sure the mezcal is cold, the candles are lit, and the vibe is always just right.
              </p>
            </div>
            <p className="font-heading text-xl text-ocean mt-7">Alex</p>
            <p className="text-[0.78rem] tracking-[0.1em] uppercase text-text-soft mt-1">
              Founder &amp; Host, Vistas &amp; Vibes
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMON CURIOSITIES ─────────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-sm tracking-[0.14em] uppercase font-semibold text-gold mb-3">
            Common curiosities
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-10">
            Questions worth answering <em>up front.</em>
          </h2>
          <FAQ items={jwFaqs} />
        </div>
      </section>

      {/* ── THE INVITATION / DATES ─────────────────────────────────────────── */}
      <JWDatesSection />

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-ocean py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(196,169,106,0.14)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl text-white font-light leading-tight mb-5">
            Travel solo. <em>Never alone.</em><br />
            Never apart from your people.
          </h2>
          <p className="font-heading italic text-white/60 text-lg md:text-xl font-light mb-10">
            Spots are kept small on purpose. Join the list and you&apos;ll hear about dates first.
          </p>
          <a
            href="#dates"
            className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-8 py-3.5 bg-gold text-ocean hover:bg-white hover:text-ocean transition-colors rounded-full"
          >
            Join the Invitation List
          </a>
          <p className="text-white/30 text-[0.72rem] tracking-[0.08em] uppercase mt-8">
            A Vistas &amp; Vibes Gathering · Puerto Escondido, Oaxaca Coast
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-ocean border-t border-white/10 py-12 px-6 text-center">
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
            { label: 'Main Site',  href: '/' },
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
