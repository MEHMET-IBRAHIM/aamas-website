import React from 'react'

export default function Showcase(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl mb-6 text-aamas-deep">Construction Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-sm border border-[#E5DED0] hover:shadow-[0_8px_24px_rgba(168,150,120,0.06)] transition">
            <img src="/assets/showcase1.svg" alt="machinery" className="w-full h-96 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-[#E5DED0] hover:shadow-[0_8px_24px_rgba(168,150,120,0.06)] transition">
            <img src="/assets/showcase2.svg" alt="workers" className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
