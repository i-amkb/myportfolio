import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { useScrollReveal } from './hooks/useScrollReveal'

// Three.js components are the heaviest part of the bundle.
// Lazy-loading them means the page paints instantly, and the
// 3D stuff streams in a beat later in its own chunk.
const MatrixRain = lazy(() => import('./components/MatrixRain'))

export default function App() {
  useScrollReveal('.reveal')

  return (
    <div className="scanlines min-h-screen">
      <Suspense fallback={null}>
        <MatrixRain />
      </Suspense>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <About />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
