import { useEffect, useState } from 'react'
import './App.css'
import Capabilities from './components/Capabilities/Capabilities'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'

export type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = localStorage.getItem('folio-theme')
    if (stored === 'light' || stored === 'dark') return stored
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    const bgPage = getComputedStyle(root).getPropertyValue('--bg-page')
    if (bgPage) {
      document.body.style.backgroundColor = bgPage.trim()
    }
    localStorage.setItem('folio-theme', theme)
  }, [theme])

  return (
    <div className="app" id="top">
      <div className="grid-overlay" aria-hidden />
      <div className="blur-blob blob-one" aria-hidden />
      <div className="blur-blob blob-two" aria-hidden />

      <Navigation theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main className="page-shell main-shell">
        <Hero />
        <Capabilities />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
