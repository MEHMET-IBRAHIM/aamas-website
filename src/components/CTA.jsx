import React from 'react'
const EMAIL = 'aamas79@gmail.com'

const openEmail = (e) => {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (!isMobile) {
    e.preventDefault()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Project%20Inquiry`, '_blank')
  }
}
export default function CTA(){
  return (
    <section className="bg-aamas-ink text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Let's Build Something Exceptional.</h2>
        <p className="text-white/70 mb-8">
          Call us: <a href="tel:+923017722544" className="font-bold text-white hover:text-aamas-terracotta transition-colors">0301-7722544</a> · Email: <a href="mailto:aamas79@gmail.com" className="underline underline-offset-2 hover:text-aamas-terracotta transition-colors">aamas79@gmail.com</a>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+923017722544" className="px-6 py-3 bg-aamas-terracotta text-white font-semibold rounded-lg shadow-sm hover:bg-aamas-terracottaDark transition duration-200 ease-out">Call</a>
          <a href="https://wa.me/923017722544?text=Hello%20AamaS%2C%20I%20am%20interested%20in%20your%20projects" target="_blank" rel="noreferrer" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700 transition duration-200 ease-out">WhatsApp</a>
          <a href="mailto:aamas79@gmail.com" onClick={openEmail} className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white hover:text-aamas-ink transition duration-200 ease-out">Email</a>
        </div>
      </div>
    </section>
  )
}