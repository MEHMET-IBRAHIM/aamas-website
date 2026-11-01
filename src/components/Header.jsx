import React, {useState} from 'react'
import logo from '../assests/aamas-logo.png'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-aamas-border bg-aamas-ivory">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between py-5 md:py-6">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="AamaS Home" className="inline-flex items-center gap-3">
              <img src={logo} alt="AamaS" className="h-12 md:h-16 lg:h-18 w-auto object-contain" />
              <span className="hidden md:inline-block font-display text-2xl text-aamas-ink">AamaS</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-aamas-ink hover:text-aamas-terracotta transition-colors duration-200">Projects</a>
            <a href="#services" className="text-aamas-ink hover:text-aamas-terracotta transition-colors duration-200">Services</a>
            <a href="#about" className="text-aamas-ink hover:text-aamas-terracotta transition-colors duration-200">About</a>
            <a href="#contact" className="text-aamas-ink hover:text-aamas-terracotta transition-colors duration-200">Contact</a>
            <a href="#" className="px-4 py-2 rounded-md bg-aamas-terracotta text-white font-semibold shadow-sm hover:bg-aamas-terracottaDark transition duration-200">Get Quote</a>
          </nav>

          <div className="md:hidden">
            <button onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu" className="p-2 rounded-md border border-aamas-border text-aamas-ink">
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-aamas-border">
          <div className="px-4 py-4 space-y-2">
            <a onClick={()=>setOpen(false)} href="#projects" className="block px-3 py-2 text-aamas-ink hover:bg-aamas-cream rounded">Projects</a>
            <a onClick={()=>setOpen(false)} href="#services" className="block px-3 py-2 text-aamas-ink hover:bg-aamas-cream rounded">Services</a>
            <a onClick={()=>setOpen(false)} href="#about" className="block px-3 py-2 text-aamas-ink hover:bg-aamas-cream rounded">About</a>
            <a onClick={()=>setOpen(false)} href="#contact" className="block px-3 py-2 text-aamas-ink hover:bg-aamas-cream rounded">Contact</a>
            <a onClick={()=>setOpen(false)} href="#" className="inline-block px-4 py-2 rounded-md bg-aamas-terracotta text-white w-max shadow-sm hover:bg-aamas-terracottaDark transition duration-200">Get Quote</a>
          </div>
        </div>
      )}
    </header>
  )
}