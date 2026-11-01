import React from 'react'

export default function Hero(){
  return (
    <section className="relative bg-aamas-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.6fr_1fr] min-h-[88vh]">

        {/* Left: light content */}
        <div className="flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-xl flex flex-col gap-6">

            <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-aamas-terracotta/10 border border-aamas-terracotta/25 text-aamas-terracottaDark font-sans text-xs font-semibold tracking-wide uppercase">
              Islamabad & Rawalpindi
            </span>

            <h1 className="font-display leading-[1.1] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-aamas-ink">
              Building Spaces.
              <br />
              <span className="text-aamas-terracotta">Creating Possibilities.</span>
            </h1>

            <p className="font-sans text-aamas-body text-base md:text-lg leading-relaxed max-w-lg">
              AamaS Housing & Developers combines modern design, structural excellence,
              and meticulous project delivery to create spaces that last, built on
              quality, transparency, and client satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 font-sans pt-2">
              <a href="#projects" className="inline-flex items-center justify-center px-7 py-3.5 bg-aamas-terracotta text-white text-sm font-semibold rounded-lg shadow-md shadow-aamas-terracotta/25 hover:bg-aamas-terracottaDark hover:shadow-lg hover:shadow-aamas-terracotta/30 hover:-translate-y-0.5 transition-all duration-200">
                Explore Our Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-7 py-3.5 border border-aamas-ink/15 text-aamas-ink text-sm font-medium rounded-lg hover:border-aamas-terracotta hover:text-aamas-terracotta transition-all duration-200">
                Contact Us
              </a>
            </div>

            <div className="flex gap-10 font-sans text-aamas-stone text-xs pt-6 mt-2 border-t border-aamas-border">
              <div className="pt-6">
                <span className="block text-2xl font-display font-semibold text-aamas-ink">50+</span>
                Projects Delivered
              </div>
              <div className="pt-6">
                <span className="block text-2xl font-display font-semibold text-aamas-ink">10+</span>
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right: dark image panel */}
        <div className="relative min-h-[40vh] lg:min-h-full bg-aamas-ink overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '22px 22px'
            }}
          />
          <img
            src="/assets/hero.jpg"
            alt="AamaS construction project"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-aamas-ink/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-aamas-ink/30 via-transparent to-transparent lg:block hidden" />
        </div>
      </div>
    </section>
  )
}