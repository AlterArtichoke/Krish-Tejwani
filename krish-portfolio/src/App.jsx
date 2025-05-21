import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Publications from './components/Publications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App