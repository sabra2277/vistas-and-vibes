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
          {/* layered veil matching the HTML */}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/40 to-ocean/10" />
        </div>

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-10 pb-24 md:pb-32">
          <p className="text-white/55 text-[0.68rem] tracking-[0.22em] uppercase font-medium mb-6">
            Oaxaca Coast, Mexico
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white font-light leading-none mb-5 tracking-wide">
            Vistas &amp; Vibes
          </h1>
          <p className="font-heading italic text-white/85 text-xl md:text-2xl mb-6 font-light leading-snug max-w-xl">
            Not a retreat. A curated adventure—elevated, indulgent, and thoughtfully designed for you.
          </p>
          <p className="text-white/65 text-base leading-relaxed max-w-xl mb-10 font-light">
            Escape the ordinary with a getaway that feels like it was curated by a close friend with impeccable taste. This is a bespoke journey for women who want more: more freedom, more discovery, and more unforgettable, sun-drenched moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#dates"
              className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-7 py-3.5 bg-coral text-white hover:bg-ocean transition-colors"
            >
              Join the Invitation List
            </a>
            <a
              href="#experience"
              className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-7 py-3.5 border border-white/40 text-white hover:border-white/70 hover:bg-white/10 transition-colors"
            >
              See What&apos;s Waiting
            </a>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── COME EXACTLY AS YOU ARE ────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6" id="experience">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[420px] md:h-[560px] overflow-hidden">
              <Image
                src="/images/image_3.png"
                alt="Puerto Escondido, Oaxaca Coast"
                fill
                className="object-cover"
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
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-5">
              Come exactly as you are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-5">
              An adult, elevated escape<br />
              <em>for women fully in their lives.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-5 text-text-soft text-base leading-relaxed font-light">
              <p>
                There&apos;s no mandatory schedule to follow, no sunrise &ldquo;strength building,&rdquo; and zero transformational drum circles. This is an adult, elevated escape for women who are fully in their lives—not escaping them.
              </p>
              <p>
                Whether you&apos;re a lifelong explorer or venturing onto a surfboard for the first time, you&apos;ll find your rhythm here. There is no &ldquo;too old&rdquo; or &ldquo;not fit enough&rdquo;—there is only the joy of trying something new in a place that feels entirely safe. Just a beautiful villa, a small group of peers, and the freedom to do what feels right in the moment—without pressure, without noise, and without anybody to take care of but yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUR DAYS, YOUR PACE ───────────────────────────────────────────── */}
      <section className="bg-sage-pale py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[720px] mb-14">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-sage mb-5">
              Not a retreat: your days, your pace
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-sage leading-tight mb-6">
              This is where the planning ends<br />
              <em>and the living begins.</em>
            </h2>
            <div className="space-y-4 text-text-soft text-base leading-relaxed font-light">
              <p>
                Imagine a morning spent gliding through the Pacific surf or horseback riding through the spray as the sun dips low. Maybe it&apos;s a deep-dive mezcal tasting, a spontaneous cooking class, or dancing until the stars come out at a beach club.
              </p>
              <p>
                Or perhaps your adventure is a quiet one: a slow morning with ocean-view coffee and a book you actually finish.
              </p>
              <p className="font-heading italic text-ocean text-lg">
                You don&apos;t have to plan it. You don&apos;t have to coordinate it. Every delicious detail is within reach. Follow the joy. Change your mind. Do everything, or do nothing at all.
              </p>
            </div>
          </div>

          {/* Day rows */}
          <div className="divide-y divide-sage/20 border-t border-sage/20 mb-12">
            {[
              {
                time: 'Mornings',
                h: 'Slow. Coffee. Ocean air.',
                body: 'Wake up to nothing urgent. Fresh breakfast is ready when you are. An optional movement session if it sounds good. Or just quiet, and the sound of the Pacific.',
              },
              {
                time: 'Days',
                h: 'Follow the joy. Change your mind.',
                body: 'A surfing lesson, horseback riding at sunset, mezcal tasting, a cooking class, dancing at a beach club. Or do absolutely nothing at all. Every delicious detail is within reach.',
              },
              {
                time: 'Evenings',
                h: 'Good food. Real conversation.',
                body: 'Dinner on the terrace, unhurried. The kind of evening where the conversation goes somewhere — and occasionally leads to dancing, a night swim, and a story worth telling.',
              },
            ].map((d) => (
              <div key={d.time} className="grid md:grid-cols-[200px_1fr] gap-6 py-8 items-start">
                <span className="font-heading text-2xl text-sage font-light">{d.time}</span>
                <div>
                  <h3 className="font-heading text-xl text-ocean mb-2">{d.h}</h3>
                  <p className="text-text-soft text-sm leading-relaxed font-light">{d.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <a
              href="#dates"
              className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-7 py-3.5 bg-coral text-white hover:bg-ocean transition-colors"
            >
              Join the Invitation List
            </a>
          </div>
        </div>
      </section>

      {/* ── THE LUXURY OF NO EXPECTATIONS ─────────────────────────────────── */}
      <section className="bg-ocean py-24 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-ocean-pale/60 mb-5">
              Experience
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ivory leading-tight mb-6">
              The luxury of<br />
              <em>no expectations.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-7" />
            <div className="space-y-5 text-ivory/70 text-base leading-relaxed font-light">
              <p>
                This isn&apos;t a guru-led workshop, and we won&apos;t ask you to find your life purpose in a yoga pose. You won&apos;t be sitting in a circle sharing your life story with strangers—unless, of course, that happens naturally over a third glass of wine.
              </p>
              <p>
                You aren&apos;t here to &ldquo;do the work&rdquo; or &ldquo;detox.&rdquo; You&apos;re here because you&apos;ve earned something better: the space to simply be.
              </p>
            </div>
            <div className="mt-8 border-t border-ivory/10 pt-6">
              <p className="text-ivory/60 text-sm leading-relaxed font-light">
                You might leave feeling lighter and a bit more open. But mostly, you&apos;ll leave with a new sense of wonder you didn&apos;t expect.
              </p>
            </div>
          </div>

          <div>
            <ul className="space-y-5 mb-10">
              {[
                'Required bonding exercises',
                '"Wellness" performance energy',
                'Fitness requirements',
                'Schedule anxiety',
                'Shared rooms or single supplements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-ivory/70 text-base font-light">
                  <span className="shrink-0 text-[0.6rem] tracking-[0.14em] uppercase font-semibold bg-coral/20 text-coral px-2 py-1 mt-0.5">
                    No
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-gold pl-6 font-heading italic text-ivory/85 text-xl leading-snug">
              &ldquo;Have fun. Feel free.<br />Everything else is handled.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── THE STAY ───────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-0" id="stay">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-[400px] md:h-auto min-h-[500px]">
            <Image
              src="/images/image_1.png"
              alt="The villa pool"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="px-10 md:px-16 py-20 flex flex-col justify-center">
            <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-5">
              The stay: a private sanctuary
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-5">
              The kind of place<br />
              <em>you don&apos;t want to leave.</em>
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
                className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-7 py-3.5 bg-coral text-white hover:bg-ocean transition-colors"
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

      {/* ── COMMON CURIOSITIES ─────────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
            Common curiosities
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-ocean leading-tight mb-12">
            The details.
          </h2>
          <FAQ />
        </div>
      </section>

      {/* ── CLOSING ────────────────────────────────────────────────────────── */}
      <section className="bg-ocean py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-gold mb-6">
            Join the next escape
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-ivory font-light leading-tight mb-6">
            The kind of trip you don&apos;t overthink—<em>you just go.</em>
          </h2>
          <p className="text-ivory/65 text-base leading-relaxed mb-5 font-light">
            A stunning location, a small group of like-minded women, and days designed entirely around ease and pleasure.
          </p>
          <p className="text-ivory/65 text-base leading-relaxed mb-10 font-light">
            Spots are limited, and these windows don&apos;t stay open for long. If you feel that pull toward the coast—that&apos;s your answer.
          </p>
          <p className="font-heading italic text-gold text-2xl mb-4">Why Wouldn&apos;t You?</p>
          <p className="text-ivory/55 text-sm leading-relaxed mb-10 font-light max-w-lg mx-auto">
            There&apos;s a point where it all just feels easy. You&apos;re in a beautiful place, with the right people, and everything just works. It&apos;s not about changing your life; it&apos;s about feeling really, really good for a few days.
          </p>
          <a
            href="#dates"
            className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-8 py-4 bg-coral text-white hover:bg-ivory hover:text-ocean transition-colors"
          >
            Join the Invitation List
          </a>
        </div>
      </section>

      {/* ── UPCOMING DATES ─────────────────────────────────────────────────── */}
      <DatesSection />

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
              className="inline-block text-[0.72rem] tracking-[0.16em] uppercase font-medium px-7 py-3.5 bg-coral text-white hover:bg-ocean transition-colors"
            >
              Join the Invitation List
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-ocean py-12 px-6 text-center">
        <div className="flex justify-center mb-5">
          <span className="relative w-12 h-12 rounded-full overflow-hidden block">
            <Image
              src="/images/image_2.png"
              alt="Vistas & Vibes"
              fill
              className="object-cover scale-[0.88]"
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
