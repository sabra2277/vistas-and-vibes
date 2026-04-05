import Image from 'next/image'
import Nav from '@/components/Nav'
import DatesSection from '@/components/DatesSection'

// ── Reusable image-section with heading overlay ──────────────────────────────
function ImageHeading({
  src,
  alt,
  heading,
  quote,
  height = 'h-[55vh]',
}: {
  src: string
  alt: string
  heading: string
  quote: string
  height?: string
}) {
  return (
    <div>
      <div className={`relative ${height} overflow-hidden`}>
        <Image src={src} alt={alt} fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-bark/45 flex items-center justify-center px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-white text-center leading-tight drop-shadow-lg">
            {heading}
          </h2>
        </div>
      </div>
      <div className="bg-sand py-5 text-center px-6">
        <p className="font-lora italic text-terracotta text-base md:text-lg">{quote}</p>
      </div>
    </div>
  )
}

const pillars = [
  {
    icon: '✦',
    title: 'Play Without Pressure',
    body: 'Late-night dancing at a beach club, surf lessons, horseback riding on the beach, mezcal tasting, cooking classes, pool under the stars — or absolutely nothing at all. You choose your own pace.',
  },
  {
    icon: '✦',
    title: 'Curated, Not Crowded',
    body: 'Skip the noisy all-inclusive resorts and the 20-something crowd. Every element is handpicked for a boutique experience. A good time doesn\'t require staying out until 2 a.m. — though we\'ll absolutely visit a beach club if you\'d like.',
  },
  {
    icon: '✦',
    title: 'Belonging Without Pretending',
    body: 'Come exactly as you are. No one is trying to be 25. No one is competing. Wear the bikini or don\'t — the only vibe here is feeling good in your own skin.',
  },
  {
    icon: '✦',
    title: 'Adventure Without Anxiety',
    body: 'The Oaxaca coast is safe, and you\'ll never be alone unless you want to be. Your host is always nearby — from helping you plan your day to making sure you get back to the villa after a night out.',
  },
]

const whyLove = [
  'The freedom of solo travel without the lonely dinners.',
  'The comfort of a resort without the crowds or buffet lines.',
  'The excitement of trying new things in a space where you feel like you belong.',
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex items-end justify-start overflow-hidden pb-24 px-6 md:px-16">
        <div className="absolute inset-0">
          <Image
            src="/images/image_1.png"
            alt="Private oceanfront villa"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/35 to-transparent" />
        </div>

        <div className="relative max-w-3xl">
          <p className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase mb-5">
            Oaxaca Coast, Mexico &nbsp;·&nbsp; Small-Group Women&apos;s Travel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-5">
            Not a Retreat.<br />
            <em>Your Kind of Trip.</em>
          </h1>
          <p className="text-[#d4a96a] italic text-base md:text-xl leading-relaxed max-w-xl mb-8 font-lora">
            Escape the ordinary with a getaway that feels like it was planned just for you —
            golden light, ocean air, and every detail taken care of.
          </p>
          <a
            href="#dates"
            className="inline-block text-xs font-medium tracking-[0.14em] uppercase px-7 py-3.5 bg-terracotta text-white rounded-sm hover:bg-bark transition-colors"
          >
            See Upcoming Dates
          </a>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-5">
            Vistas &amp; Vibes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-7">
            Your Perfect Escape
          </h2>
          <div className="space-y-5 text-text leading-[1.8] text-base md:text-[1.05rem]">
            <p>
              This isn&apos;t a retreat or a tour — it&apos;s a bespoke journey for women who want more.
              More freedom. More adventure. More breathtaking moments.
            </p>
            <p>
              Think golden light, ocean air, and the ease of having every detail taken care of.
              You can come solo, but you&apos;ll never feel alone — you&apos;ll be surrounded by
              women who get you, in a space designed for ease, connection, and real fun.
            </p>
            <p className="font-lora italic text-bark-mid text-lg">
              The trip you&apos;ve been promising yourself, finally made real.
            </p>
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ──────────────────────────────────────────────────── */}
      <div className="bg-terracotta py-8 px-6 text-center">
        <p className="font-serif text-2xl md:text-3xl text-white">
          Travel solo.&nbsp; <em>Never feel alone.</em>
        </p>
      </div>

      {/* ── WHY IT'S DIFFERENT ─────────────────────────────────────────────── */}
      <section className="bg-warm py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4 text-center">
            Why It&apos;s Different
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-bark text-center leading-tight mb-4">
            Not a retreat. Not a tour.
          </h2>
          <p className="text-text-soft text-center text-base mb-14 max-w-xl mx-auto leading-relaxed">
            No mandatory sunrise yoga. No forced drum circles. No buffet lines. No one else&apos;s kids.
            Just you, the villa, and the freedom to say yes to what calls you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-terracotta/30 pt-6">
                <p className="font-serif text-xl text-bark mb-3">{p.title}</p>
                <p className="text-text-soft text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY YOU'LL LOVE IT ─────────────────────────────────────────────── */}
      <section className="bg-bark py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
            The best of both worlds.
          </h2>
          <ul className="space-y-4">
            {whyLove.map((item) => (
              <li
                key={item}
                className="text-white/80 text-base leading-relaxed flex items-start gap-3 text-left"
              >
                <span className="text-terracotta mt-0.5 shrink-0">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LOCATION — image with heading + caption ────────────────────────── */}
      <ImageHeading
        src="/images/image_3.png"
        alt="Puerto Escondido, Oaxaca coast"
        heading="Location"
        quote="Coastal Gem — Puerto Escondido, Oaxaca"
      />
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[680px] mx-auto space-y-5 text-text leading-[1.8] text-base">
          <p>
            Puerto Escondido is one of Mexico&apos;s most coveted coastal gems — regularly ranked
            among the best beaches in the world by <em>Condé Nast Traveler</em> and <em>Travel + Leisure</em>.
            Known for its golden sands, turquoise waters, and vibrant surf culture, it&apos;s where
            chic travelers and in-the-know locals come for laid-back luxury.
          </p>
          <p>
            Beyond the waves, you&apos;ll find world-class dining, mezcal straight from the source,
            colorful markets, and sunsets that look Photoshopped.
          </p>
        </div>
      </section>

      {/* ── VILLA — image with heading + caption ───────────────────────────── */}
      <ImageHeading
        src="/images/image_1.png"
        alt="Private oceanfront villa pool"
        heading="The Villa"
        quote="Private villa. Private chef. Private beach. Just 8 women."
      />
      <section className="bg-warm py-16 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-7">
            {['Pool','Jacuzzi','Bar','Gym','Open-air living','Ocean views','9 king suites','Private beach access'].map((a) => (
              <span key={a} className="text-xs font-medium px-3 py-1.5 bg-sand text-bark-mid rounded-sm border border-stone/40">
                {a}
              </span>
            ))}
          </div>
          <p className="text-text leading-[1.8] text-base mb-6">
            Beachfront on the Oaxaca coast, this private villa has nine king rooms — all with
            ocean views and their own bathrooms. No sharing required, except for the fun, the vibes,
            and the meals.
          </p>
          <p className="text-text leading-[1.8] text-base mb-6">
            A pool, jacuzzi, bar, gym, and expansive open-air living spaces set the scene. A private
            chef prepares fresh breakfasts and lunches daily. It&apos;s the kind of place where you
            fall in love with the setting, the people, and the version of yourself that shows up here.
          </p>
          <p className="font-lora italic text-bark-mid text-lg border-l-2 border-terracotta/50 pl-4">
            It&apos;s the kind of place where you fall in love with the scenery, the people,
            and the very best version of yourself.
          </p>
        </div>
      </section>

      {/* ── EXPERIENCE — image with heading + caption ──────────────────────── */}
      <ImageHeading
        src="/images/image_5.png"
        alt="The Oaxaca coast experience"
        heading="The Experience"
        quote="Curated freedom for adventurous women."
        height="h-[50vh]"
      />
      <section className="bg-cream py-16 px-6">
        <div className="max-w-[680px] mx-auto">
          <h3 className="font-serif text-2xl text-bark mb-5">
            The trip you&apos;ve been promising yourself.
          </h3>
          <p className="text-text leading-[1.8] text-base mb-6">
            Do the things you&apos;ve always wanted to try — a surf lesson, horseback riding on the beach,
            mezcal tasting, a cooking class, dancing under the stars, a night swim, or simply reading
            a book with ocean waves in the background — all without the worries or pressures of your
            family or kids.
          </p>
          <div className="flex flex-wrap gap-3 my-6">
            {['Beach club dancing','Surf lesson','Horseback riding','Pool under the stars','Cooking class','Mezcal tasting'].map((a) => (
              <span key={a} className="text-xs font-medium px-3 py-2 bg-warm text-bark rounded-sm border border-stone/40">
                {a}
              </span>
            ))}
          </div>
          <p className="text-text-soft text-sm leading-relaxed italic font-lora">
            &ldquo;For the life you keep saying you&apos;ll live&hellip; someday.&rdquo;
          </p>
        </div>
      </section>

      {/* ── HOST — image with heading + caption ────────────────────────────── */}
      <ImageHeading
        src="/images/image_5.png"
        alt="Alex, your host"
        heading="Meet Your Host"
        quote="I'm the friend who's been telling you to just go."
        height="h-[55vh]"
      />
      <section className="bg-sand py-16 px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-4">
            Hi, I&apos;m Alex
          </p>
          <div className="space-y-5 text-text leading-[1.8] text-base">
            <p>
              For most of my life, I was a teacher and school administrator, organizing events and
              creating experiences within the safe lane of my career and suburban mom life. Two years
              ago, I took a leap of faith: I quit, moved to Mexico, and fell head-over-heels for the
              Oaxaca coast.
            </p>
            <p>
              Over the years, so many of you have said, &ldquo;You should host retreats!&rdquo; So,
              here I am — blending what others have seen in me with what I truly love to do: bringing
              women together for connection, adventure, and a little bit of magic.
            </p>
            <p className="font-lora italic text-bark-mid text-lg border-l-2 border-terracotta/50 pl-4">
              &ldquo;This is my first official Vistas &amp; Vibes group, and I couldn&apos;t be more
              excited to share it with you. I&apos;m &lsquo;trying it out&rsquo; in the best way possible —
              with women who are ready to laugh, explore, and enjoy. It&apos;s casual, it&apos;s real,
              and I promise it will be unforgettable.&rdquo;
            </p>
            <p className="text-text-soft text-sm">
              I&apos;ll be there with you — from helping you plan your day to making sure you get back
              to the villa after a night out. Think of me as that friend who planned the perfect trip
              and finally made it happen.
            </p>
          </div>
        </div>
      </section>

      {/* ── TAGLINE BAR ────────────────────────────────────────────────────── */}
      <div className="bg-bark py-10 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="font-serif text-2xl md:text-3xl text-white">
            No drum circles. No buffet lines.
          </p>
          <p className="font-serif text-xl md:text-2xl text-terracotta italic">
            Just your kind of adventure.
          </p>
        </div>
      </div>

      {/* ── DATES ──────────────────────────────────────────────────────────── */}
      <DatesSection />

      {/* ── Q&A ────────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-cream py-24 px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-terracotta mb-5 text-center">
            Q&amp;A
          </p>
          <h2 className="font-serif text-4xl text-bark text-center leading-tight mb-12">
            Good questions, answered.
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'Do I have to come with someone?',
                a: 'Not at all. Most women come solo. That\'s kind of the whole point — you\'ll meet your people here.',
              },
              {
                q: 'How do I know if I\'ll fit in with the group?',
                a: 'We do a quick Zoom call before confirming your spot. It\'s casual — just a chance to make sure the timing and the group feel right for everyone.',
              },
              {
                q: 'Is it really safe?',
                a: 'Yes. Puerto Escondido is an incredibly safe destination, and you\'ll never be on your own unless you choose to be. Alex is always nearby.',
              },
              {
                q: 'What\'s included?',
                a: 'Private villa accommodations, daily breakfasts and lunches by a private chef, curated activity options, and Alex\'s full attention making sure everything runs smoothly.',
              },
              {
                q: 'Is this actually a retreat?',
                a: 'Absolutely not. No drum circles, no mandatory yoga, no promises of transformation. Just a really good trip with the right women.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-sand pb-8">
                <p className="font-serif text-lg text-bark mb-2">{q}</p>
                <p className="text-text-soft text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-bark py-12 px-6 text-center">
        <div className="flex justify-center mb-5">
          <span className="relative w-14 h-14 rounded-full overflow-hidden block">
            <Image
              src="/images/image_2.png"
              alt="Vistas & Vibes"
              fill
              className="object-cover scale-[0.88]"
            />
          </span>
        </div>
        <p className="font-serif text-white text-xl mb-1">Vistas &amp; Vibes</p>
        <p className="text-white/40 text-xs mb-6">Oaxaca Coast, Mexico · The Unretreat</p>
        <nav className="flex flex-wrap justify-center gap-6 text-[0.7rem] font-medium tracking-[0.1em] uppercase text-white/50 mb-8">
          <a href="#" className="hover:text-white/80 transition-colors">The Experience</a>
          <a href="#" className="hover:text-white/80 transition-colors">The Villa</a>
          <a href="#" className="hover:text-white/80 transition-colors">About Alex</a>
          <a href="#dates" className="hover:text-white/80 transition-colors">Upcoming Dates</a>
          <a href="#faq" className="hover:text-white/80 transition-colors">Q&amp;A</a>
        </nav>
        <div className="flex justify-center gap-4 mb-6 text-xs text-white/50">
          <a href="tel:18472080419" className="hover:text-white/80 transition-colors">1-847-208-0419</a>
          <span>·</span>
          <a
            href="https://instagram.com/VistasandVibesco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            @VistasandVibesco
          </a>
        </div>
        <p className="text-white/25 text-xs">&copy; 2025 Vistas &amp; Vibes &middot; Oaxaca Coast, Mexico</p>
      </footer>
    </>
  )
}
