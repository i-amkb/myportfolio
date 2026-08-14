import { useEffect, useState, lazy, Suspense } from 'react'

// Same deal as MatrixRain — Three.js chunk loads separately,
// so this doesn't block the hero text/buttons from showing up.
const FloatingObject = lazy(() => import('./FloatingObject'))

const roles = [
  'developer_',
  'video_editor_',
  'security_learner_',
  'student_',
  'gamer_',
  'anime weeb_',
  'builder_',
]

function useTyping() {
  const [text, setText] = useState('')
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false
    let timeout: ReturnType<typeof setTimeout>
    const tick = () => {
      const word = roles[ri]
      if (!deleting) {
        ci++
        setText(word.slice(0, ci))
        if (ci === word.length) {
          deleting = true
          timeout = setTimeout(tick, 1400)
          return
        }
      } else {
        ci--
        setText(word.slice(0, ci))
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % roles.length
        }
      }
      timeout = setTimeout(tick, deleting ? 50 : 90)
    }
    tick()
    return () => clearTimeout(timeout)
  }, [])
  return text
}

const stats = [
  { value: '1+', label: 'Years Coding' },
  { value: '∞', label: 'Still Learning' },
]

export default function Hero() {
  const typing = useTyping()

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-28 md:pt-32 pb-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          }}
        />
      </div>

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center w-full max-w-6xl mx-auto relative z-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-green uppercase mb-6">
            <span className="w-7 h-px bg-green" />
            Portfolio v2
          </div>
          <h1 className="font-sans font-extrabold leading-[1.05] mb-2 tracking-tight">
            <span className="block text-[clamp(2.6rem,11vw,6rem)] sm:text-[clamp(3rem,8vw,6rem)] text-cyan drop-shadow-[0_0_30px_rgba(0,229,255,0.25)] pb-1">
              ADEWALE
            </span>
            <span className="block text-[clamp(1.15rem,4.5vw,2.2rem)] sm:text-[clamp(1.3rem,3vw,2.2rem)] text-white/75 tracking-[0.08em] font-bold mt-1">
              KHALID BOLUWATIFE
            </span>
          </h1>
          <div className="text-muted text-sm md:text-base mb-8 flex items-center gap-2">
            <span>&gt;</span>
            <span className="blink">{typing}</span>
          </div>
          <p className="max-w-md text-muted text-sm leading-relaxed mb-8">
            I write codes, play games, watch anime and edit for fun.
          </p>

          <div className="flex gap-4 flex-wrap mb-10">
            <a
              href="#projects"
              className="interactive inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.1em] uppercase border border-green bg-green text-bg hover:bg-transparent hover:text-green hover:shadow-[0_0_20px_var(--color-green-dim),inset_0_0_20px_var(--color-green-dim)] transition-all"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="interactive inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.1em] uppercase border border-green-dim text-green hover:border-green hover:shadow-[0_0_15px_var(--color-green-dim)] transition-all"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-green-dim pl-4">
                <div className="font-sans text-2xl md:text-3xl font-extrabold text-green leading-none">
                  {s.value}
                </div>
                <div className="text-[10px] text-muted uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Only shows once there's real horizontal room for it (lg+),
            same breakpoint the grid switches to two columns at — so it
            can never squeeze into the text column and collide again. */}
        <div className="h-64 lg:h-80 hidden lg:block mt-12">
          <Suspense fallback={null}>
            <FloatingObject />
          </Suspense>
        </div>
      </div>
    </section>
  )
}