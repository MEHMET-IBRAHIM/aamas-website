import React from 'react'

export default function About(){
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-3xl mb-4 text-aamas-deep">About AamaS Housing & Developers</h2>
          <p className="text-aamas-body mb-4">AamaS is a premier construction and real-estate developer operating in Islamabad and Rawalpindi. We blend architectural excellence with rigorous engineering and project management to deliver outstanding residential and commercial spaces.</p>
          <h3 className="text-xl mt-4 font-semibold text-aamas-deep">Mission</h3>
          <p className="mb-2">Deliver sustainable, beautiful, and safe spaces that uplift communities.</p>
          <h3 className="text-xl mt-4 font-semibold text-aamas-deep">Vision</h3>
          <p>To be the leading developer in the region known for integrity, innovation and quality.</p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/about.svg" alt="architectural" className="w-full h-72 object-cover" />
        </div>
      </div>
    </section>
  )
}
