import React from 'react'
import logo from '../assests/aamas-logo.png'

export default function Footer(){
  return (
    <footer className="bg-aamas-ink text-white py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="AamaS" className="h-10 md:h-12 mb-4 w-auto object-contain" />
          <p className="text-sm text-white/60 leading-relaxed">Premium construction and development in Islamabad & Rawalpindi.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="text-sm text-white/60 space-y-2">
            <li><a href="#projects" className="hover:text-aamas-terracotta transition-colors">Projects</a></li>
            <li><a href="#services" className="hover:text-aamas-terracotta transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-aamas-terracotta transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-white">Contact</h4>
          <p className="text-sm text-white/60">0301-7722544</p>
          <p className="text-sm text-white/60">amir@aamas.pk</p>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} AamaS Housing & Developers. All rights reserved.
      </div>
    </footer>
  )
}