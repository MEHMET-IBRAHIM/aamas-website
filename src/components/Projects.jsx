import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-aamas-ivory">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-aamas-terracotta font-sans text-sm font-semibold tracking-wide uppercase">
          Our Work
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 text-aamas-ink">Our Projects</h2>
        <p className="text-aamas-body mt-3">
          A look at the developments we've completed and the ones currently underway.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map(p => (
          <div key={p.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
    </section>
  )
}