import React, {useState} from 'react'

export default function ProjectCard({p}){
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-aamas-border hover:border-aamas-terracotta hover:shadow-[0_10px_30px_rgba(168,99,46,0.12)] transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative h-64 bg-aamas-cream">
        {!imgError ? (
          <img
            src={p.image}
            alt={p.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-aamas-terracotta/40 text-lg">{p.name}</span>
          </div>
        )}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
          p.status === 'Ongoing'
            ? 'bg-aamas-terracotta text-white'
            : 'bg-aamas-ink text-white'
        }`}>
          {p.status}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-display font-semibold text-lg text-aamas-ink">{p.name}</h4>
        <p className="text-sm text-aamas-body mt-1">{p.location}</p>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center justify-center px-4 py-2 bg-transparent border border-aamas-terracotta text-aamas-terracotta font-medium rounded-lg hover:bg-aamas-terracotta hover:text-white transition duration-200 ease-out">
            View Project
          </a>
        </div>
      </div>
    </div>
  )
}