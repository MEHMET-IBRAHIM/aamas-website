import React from 'react'

const IconRuler = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 17l14-14 4 4L7 21l-4-4z" /><path d="M14 6l2 2" /><path d="M11 9l2 2" /><path d="M8 12l2 2" />
  </svg>
)
const IconColumns = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 21V9M10 21V9M14 21V9M20 21V9" /><path d="M2 9l10-6 10 6" /><path d="M2 21h20" />
  </svg>
)
const IconCrane = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 21V5l12 4" /><path d="M4 9h13" /><path d="M17 9l3 3-3 1" /><path d="M9 21v-6" />
  </svg>
)
const IconHammer = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 12l-8.5 8.5a1.5 1.5 0 01-2-2L13 10" /><path d="M12 8l4-4 4 4-2 2h-4l-2-2z" /><path d="M17 4l3 3" />
  </svg>
)
const IconPalette = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" /><circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="12" cy="8" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" /><path d="M8 15a3 3 0 003 3h4a2 2 0 000-4h-1a2 2 0 010-4" />
  </svg>
)
const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
)
const IconHouses = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21V11l5-4 5 4v10" /><path d="M13 21v-7l4-3 4 3v7" /><path d="M3 21h18" />
  </svg>
)

const services = [
  { title: 'Architecture Design', Icon: IconRuler, description: 'From concept sketches to detailed blueprints, we design spaces that balance form, function, and local building codes.' },
  { title: 'Structure Design', Icon: IconColumns, description: 'Structural engineering and load analysis to ensure every build is safe, durable, and built to last.' },
  { title: 'Construction', Icon: IconCrane, description: 'End-to-end construction management, from groundwork to finishing, delivered on time and on budget.' },
  { title: 'Renovation', Icon: IconHammer, description: 'Modernizing existing spaces with updated layouts, finishes, and structural improvements.' },
  { title: 'Interior & Exterior Design', Icon: IconPalette, description: 'Thoughtful interior and facade design that reflects your style while maximizing space and light.' },
  { title: 'Land Survey', Icon: IconPin, description: 'Accurate topographic and boundary surveys to lay the groundwork before any project begins.' },
  { title: 'Housing Society Design', Icon: IconHouses, description: 'Master planning for housing societies, from plot layouts to shared amenities and infrastructure.' },
]

function Card({ Icon, title, description }){
  return (
    <div className="group p-7 border border-aamas-border rounded-xl bg-white hover:border-aamas-terracotta hover:shadow-[0_10px_30px_rgba(168,99,46,0.12)] transition-all duration-300 hover:-translate-y-1.5">
      <div className="w-14 h-14 rounded-full bg-aamas-cream flex items-center justify-center mb-5 text-aamas-terracotta group-hover:bg-aamas-terracotta group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-display text-lg font-semibold mb-2 text-aamas-ink">{title}</h4>
      <p className="text-sm text-aamas-body leading-relaxed">{description}</p>
    </div>
  )
}

export default function Services(){
  return (
    <>
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 bg-aamas-ivory">
        <div className="max-w-2xl mb-12">
          <span className="text-aamas-terracotta font-sans text-sm font-semibold tracking-wide uppercase">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 text-aamas-ink">Our Services</h2>
          <p className="text-aamas-body mt-3">
            From the first survey to the final finish, we handle every stage of your project with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => <Card key={s.title} {...s} />)}
        </div>
      </section>

      {/* Dark contrast band */}
      <section className="bg-aamas-ink py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl text-white">Ready to start your project?</h3>
            <p className="text-white/60 mt-2 font-sans">Get a free consultation and quote from our team.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-aamas-terracotta text-white font-semibold rounded-lg shadow-lg shadow-aamas-terracotta/30 hover:bg-aamas-terracottaDark hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
            Get a Free Quote
          </a>
        </div>
      </section>
    </>
  )
}