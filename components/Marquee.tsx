const items = [
  'Travel solo, never alone',
  'Not a retreat. Your kind of trip',
  'Curated freedom for adventurous women',
  'The trip you\'ve been promising yourself',
  'Luxury without effort. Connection without pressure',
]

export default function Marquee() {
  // Duplicate items so the animation loops seamlessly
  const all = [...items, ...items]

  return (
    <div
      className="overflow-hidden bg-ocean py-4 border-y border-ocean-mid"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {all.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[0.7rem] tracking-[0.2em] uppercase font-medium text-white/70 px-8"
          >
            {item}
            <span className="text-gold mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
