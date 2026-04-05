import Image from 'next/image'
import Nav from '@/components/Nav'
import DatesSection from '@/components/DatesSection'

const amenities = [
  'Pool', 'Jacuzzi', 'Bar', 'Gym', 'Open-air living',
  'Ocean views', '9 king suites', 'Private beach access',
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-svh flex items-end justify-start overflow-hidden pb-24 px-6 md:px-16">
        <div className="absolute inset-0">
          <Image
            src="/images/image_1.png"
            alt="Private oceanfront villa"
            fill
            className="object-cover object-center scale-105 animate-[kenBurns_20s_ease-in-out_infinite_alternate]"
            priority
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/30 to-transparent" />
        </div>

        <div className="relative max-w-3xl">
          <p className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase mb-5">
            Oaxaca Coast, Mexico &nbsp;·&nbsp; Small-Group Women&apos;s Travel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-6">
            Not a retreat.<br />
            <em>A curated adventure.</em>
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-light">
            Elevated, indulgent, and thoughtfully designed for you. A private oceanfront villa,
            private king suites, a small group, and a few unforgettable days built around
            what you actually want to do.
          </p>
          <a
            href="#dates"
            className="inline-block text-xs font-medium tracking-[0.14em] uppercase px-7 py-3.5 bg-terracotta text-white rounded-sm hover:bg-bark transition-colors"
          >
            See Upcoming Dates
          </a>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-[640px] mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-6">
            Meet Alex
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-7">
            Finally. A trip that feels like you.
          </h2>
          <div className="space-y-5 text-text leading-[1.75] text-base md:text-[1.05rem]">
            <p>
              This isn&apos;t a packed itinerary or a hands-off vacation where you&apos;re left
              to figure everything out. It&apos;s something in between — and better.
            </p>
            <p>
              Everything is thoughtfully planned, but nothing is forced. You&apos;ll have access
              to experiences you wouldn&apos;t easily set up on your own, without ever feeling
              like you&apos;re on someone else&apos;s schedule.
            </p>
            <p className="font-medium text-bark">
              Do as much or as little as you want. It&apos;s your time.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCATION BANNER ── */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image
          src="/images/image_3.png"
          alt="Puerto Escondido, Oaxaca coast"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-bark/50 flex items-center justify-center">
          <p className="font-serif text-white text-2xl md:text-4xl text-center px-4 leading-snug">
            Puerto Escondido, Oaxaca —<br className="hidden md:block" /> where the Pacific meets the jungle.
          </p>
        </div>
      </div>

      {/* ── DAYS ── */}
      <section className="bg-warm py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4 text-center">
            Your days, your pace
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-bark text-center leading-tight mb-4">
            You don&apos;t have to plan it.
          </h2>
          <p className="text-text-soft text-center text-base mb-14 max-w-lg mx-auto leading-relaxed">
            It&apos;s all within reach. Maybe it&apos;s a surfing lesson. Maybe it&apos;s horseback riding
            at sunset, a mezcal tasting, a cooking class, or dancing at a beach club.
            Maybe it&apos;s just a slow morning and a book you actually finish.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                time: 'Mornings',
                headline: 'Slow. Coffee. Ocean air.',
                body: 'Wake up to nothing urgent. Fresh breakfast is ready when you are. Some mornings there\'s an optional movement session — most mornings, there\'s just the view and nowhere you have to be.',
              },
              {
                time: 'Days',
                headline: 'Follow what feels fun.',
                body: 'A surf lesson, horseback riding at sunset, mezcal tasting, a cooking class, dancing at a beach club. Or do absolutely nothing at all. You don\'t have to coordinate it. Change your mind. That\'s allowed.',
              },
              {
                time: 'Evenings',
                headline: 'Good food. Real conversation.',
                body: 'Dinner on the terrace, unhurried. The kind of evening where the conversation actually goes somewhere. Occasionally a night swim. Always, good company.',
              },
            ].map((item) => (
              <div key={item.time} className="border-t-2 border-terracotta/30 pt-6">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta mb-3">
                  {item.time}
                </p>
                <p className="font-serif text-xl text-bark mb-3 leading-snug">{item.headline}</p>
                <p className="text-text-soft text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VILLA ── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4">
              Where you&apos;ll stay
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-6">
              The kind of place you don&apos;t want to leave.
            </h2>
            <p className="text-text leading-relaxed mb-8 text-base">
              A private oceanfront villa on the Oaxaca coast, with private king suites — each with
              its own bathroom and space to fully unwind. Wake up slowly, move between sun and shade,
              and never feel crowded or rushed.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {amenities.map((a) => (
                <span
                  key={a}
                  className="text-xs font-medium px-3 py-1.5 bg-sand text-bark-mid rounded-sm border border-stone/40"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="text-sm text-text-soft leading-relaxed border-l-2 border-terracotta/50 pl-4 italic font-lora">
              A private chef prepares fresh breakfasts and lunches daily — so everything feels easy,
              relaxed, and quietly indulgent.
            </p>
          </div>
          <div className="relative h-72 md:h-[480px] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/image_1.png"
              alt="Villa pool with ocean view"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT THIS ISN'T ── */}
      <section className="bg-bark py-24 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-6">
            Worth saying clearly
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
            What this isn&apos;t.
          </h2>
          <div className="space-y-5 text-white/75 leading-[1.8] text-base text-left">
            <p>
              This isn&apos;t a guru-led retreat. There are no workshops, no expectations,
              and no promises that you&apos;ll find your life purpose.
            </p>
            <p>
              You won&apos;t be sitting in a circle sharing your story with strangers —
              unless you want to.
            </p>
            <p className="text-white font-medium">
              But you might leave feeling lighter. More open. More like yourself.
              Maybe with a little more joy — or a new sense of adventure you didn&apos;t expect.
            </p>
          </div>
        </div>
      </section>

      {/* ── TAGLINE BAR ── */}
      <div className="bg-terracotta py-10 px-6 text-center">
        <p className="font-serif text-2xl md:text-4xl text-white leading-snug">
          Travel solo.&nbsp; <em>Never feel alone.</em>
        </p>
      </div>

      {/* ── TAKEN CARE OF ── */}
      <section className="bg-warm py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4 text-center">
            You&apos;re taken care of
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-bark text-center leading-tight mb-10">
            Go out. Stay out. Come back.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-text leading-relaxed text-base">
            <div className="space-y-4">
              <p>
                Dance at a beach club, try something new, say yes to plans you didn&apos;t overthink.
                And then come back to a place that feels calm, easy, and completely yours.
              </p>
              <p>
                You&apos;re not doing this alone. There&apos;s always someone nearby making sure
                everything runs smoothly — whether it&apos;s helping you plan your day or making
                sure you get back to the villa after a night out.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-medium text-bark border-l-2 border-terracotta/50 pl-4 italic font-lora">
                &ldquo;Just enough people to make it feel social — but never overwhelming.&rdquo;
              </p>
              <p className="text-text-soft">
                The Oaxaca coast is safe, and you&apos;ll never feel alone unless you want to be.
                Everything is taken care of — so you can actually be present for all of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAY YES ── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-8">
            You&apos;ll want to say yes to this.
          </h2>
          <div className="space-y-5 text-text leading-[1.8] text-base text-left">
            <p>
              There&apos;s a point where it just feels easy. You&apos;re doing things you&apos;ve been
              wanting to do. You&apos;re enjoying yourself without overthinking it.
            </p>
            <p>
              You&apos;re in a beautiful place, with the right people, and everything just works.
            </p>
            <p className="font-medium text-bark">
              It&apos;s not about changing your life. It&apos;s just about feeling really, really good
              for a few days. And honestly — why wouldn&apos;t you want that?
            </p>
          </div>
          <a
            href="#dates"
            className="inline-block mt-10 text-xs font-medium tracking-[0.14em] uppercase px-7 py-3.5 bg-terracotta text-white rounded-sm hover:bg-bark transition-colors"
          >
            See Upcoming Dates
          </a>
        </div>
      </section>

      {/* ── ALEX BIO ── */}
      <section id="about" className="bg-sand py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4">
              Your host
            </p>
            <h2 className="font-serif text-4xl text-bark leading-tight mb-6">
              Hi, I&apos;m Alex.
            </h2>
            <div className="space-y-4 text-text leading-relaxed text-base">
              <p>
                I&apos;ve spent most of my life creating experiences — for students, for communities,
                and for the people around me. A couple of years ago, I took a leap, moved to Mexico,
                and fell in love with the Oaxaca coast.
              </p>
              <p className="italic font-lora text-text-soft border-l-2 border-terracotta/50 pl-4">
                &ldquo;People kept saying, &apos;You should host something here.&apos; So this is me doing
                exactly that — bringing together beautiful places, fun experiences, and creating
                something people will actually remember.&rdquo;
              </p>
              <p>
                I&apos;ll be there with you — making sure everything runs smoothly, helping you plan
                what you want to do (or not do), and making sure it all feels easy from start to finish.
              </p>
            </div>
            <a
              href="#dates"
              className="inline-block mt-8 text-xs font-medium tracking-[0.14em] uppercase px-7 py-3.5 bg-terracotta text-white rounded-sm hover:bg-bark transition-colors"
            >
              See Upcoming Dates
            </a>
          </div>
          <div className="order-1 md:order-2 relative h-72 md:h-[500px] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/images/image_5.png"
              alt="Alex on the Oaxaca coast"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── DATES ── */}
      <DatesSection />

      {/* ── FOOTER ── */}
      <footer className="bg-bark py-12 px-6 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/image_2.png"
            alt="Vistas & Vibes"
            width={52}
            height={52}
            className="rounded-full opacity-90"
          />
        </div>
        <p className="font-serif text-white text-xl mb-2">Vistas &amp; Vibes</p>
        <p className="text-white/50 text-xs mb-6">Oaxaca Coast, Mexico</p>
        <nav className="flex flex-wrap justify-center gap-6 text-[0.7rem] font-medium tracking-[0.1em] uppercase text-white/50 mb-8">
          <a href="#" className="hover:text-white/80 transition-colors">The Experience</a>
          <a href="#" className="hover:text-white/80 transition-colors">The Villa</a>
          <a href="#about" className="hover:text-white/80 transition-colors">About Alex</a>
          <a href="#dates" className="hover:text-white/80 transition-colors">Upcoming Dates</a>
        </nav>
        <p className="text-white/30 text-xs">&copy; 2025 Vistas &amp; Vibes &middot; Oaxaca Coast, Mexico</p>
      </footer>
    </>
  )
}
