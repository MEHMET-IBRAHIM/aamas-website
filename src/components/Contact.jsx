import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('Sending...')
    try {
      const res = await fetch('https://formspree.io/f/mdeewjoa', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('Message sent! We will get back to you soon.')
        form.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('Network error. Please try again.')
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 bg-aamas-ivory">
      <div className="max-w-2xl mb-12">
        <span className="text-aamas-terracotta font-sans text-sm font-semibold tracking-wide uppercase">
          Get In Touch
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 text-aamas-ink">Contact Us</h2>
        <p className="text-aamas-body mt-3">
          Have a project in mind? Reach out and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-aamas-terracotta font-semibold min-w-[90px]">Phone</span>
              <a href="tel:+923017722544" className="text-aamas-body hover:text-aamas-terracotta transition-colors">0301-7722544</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-aamas-terracotta font-semibold min-w-[90px]">WhatsApp</span>
              <a href="https://wa.me/923017722544?text=Hello%20AamaS%2C%20I%20am%20interested%20in%20your%20projects" target="_blank" rel="noreferrer" className="text-aamas-body hover:text-aamas-terracotta underline underline-offset-2 transition-colors">Chat on WhatsApp</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-aamas-terracotta font-semibold min-w-[90px]">Email</span>
              <a href="mailto:aamas79@gmail.com" className="text-aamas-body hover:text-aamas-terracotta underline underline-offset-2 transition-colors">aamas79@gmail.com</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-aamas-terracotta font-semibold min-w-[90px]">Location</span>
              <span className="text-aamas-body">Islamabad / Rawalpindi, Pakistan</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-display font-semibold text-aamas-ink mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-aamas-border flex items-center justify-center text-xs font-semibold text-aamas-ink hover:bg-aamas-terracotta hover:text-white hover:border-aamas-terracotta transition-colors duration-200">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-aamas-border flex items-center justify-center text-xs font-semibold text-aamas-ink hover:bg-aamas-terracotta hover:text-white hover:border-aamas-terracotta transition-colors duration-200">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-aamas-border flex items-center justify-center text-xs font-semibold text-aamas-ink hover:bg-aamas-terracotta hover:text-white hover:border-aamas-terracotta transition-colors duration-200">LI</a>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border border-aamas-border rounded-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-aamas-ink mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-lg border border-aamas-border p-2.5 text-aamas-ink focus:outline-none focus:ring-2 focus:ring-aamas-terracotta/40 focus:border-aamas-terracotta" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-aamas-ink mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-aamas-border p-2.5 text-aamas-ink focus:outline-none focus:ring-2 focus:ring-aamas-terracotta/40 focus:border-aamas-terracotta" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-aamas-ink mb-1">Message</label>
              <textarea id="message" name="message" required className="w-full rounded-lg border border-aamas-border p-2.5 text-aamas-ink focus:outline-none focus:ring-2 focus:ring-aamas-terracotta/40 focus:border-aamas-terracotta" rows="5" placeholder="Describe your project"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full px-4 py-3 bg-aamas-terracotta text-white font-semibold rounded-lg shadow-sm hover:bg-aamas-terracottaDark transition duration-200 ease-out">
                Send Message
              </button>
            </div>
            {status && <p className="text-sm text-aamas-body">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}