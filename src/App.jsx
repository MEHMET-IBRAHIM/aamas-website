import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChoose from './components/WhyChoose'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="smooth-scroll text-gray-900">
      <Header />
      <main className="space-y-24">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChoose />
        <Showcase />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
