import React from 'react'

const reasons = [
  {
    title: 'Quality Craftsmanship',
    description: 'Every project is built to last, using materials and techniques that meet the highest construction standards.'
  },
  {
    title: 'On-Time Delivery',
    description: 'We plan meticulously and manage every phase closely, so your project is delivered on schedule, every time.'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs or surprise charges. You get clear estimates and honest communication from day one.'
  },
  {
    title: 'Local Expertise',
    description: 'Deep experience across Islamabad and Rawalpindi means we understand local regulations, land, and communities.'
  },
]

export default function WhyChoose(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
      <div className="max-w-2xl mb-12">
        <span className="text-aamas-terracotta font-sans text-sm font-semibold tracking-wide uppercase">
          Why AamaS
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 text-aamas-ink">Why Choose Us</h2>
        <p className="text-aamas-body mt-3">
          Four reasons clients trust AamaS with their most important projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div key={r.title} className="p-6 rounded-xl border border-aamas-border bg-aamas-ivory hover:border-aamas-terracotta transition-colors duration-300">
            <span className="font-display text-3xl text-aamas-terracotta/30">0{i + 1}</span>
            <h4 className="font-display text-lg font-semibold text-aamas-ink mt-3 mb-2">{r.title}</h4>
            <p className="text-sm text-aamas-body leading-relaxed">{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}