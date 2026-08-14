import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hasMouse, setHasMouse] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setHasMouse(mq.matches)
    const onChange = () => setHasMouse(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!hasMouse) return

    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
    }
    let raf: number
    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(animRing)
    }
    document.addEventListener('mousemove', onMove)
    animRing()

    const interactive = document.querySelectorAll('a, button, .interactive')
    const grow = () => {
      dotRef.current?.style.setProperty('width', '6px')
      dotRef.current?.style.setProperty('height', '6px')
      ringRef.current?.style.setProperty('width', '50px')
      ringRef.current?.style.setProperty('height', '50px')
    }
    const shrink = () => {
      dotRef.current?.style.setProperty('width', '12px')
      dotRef.current?.style.setProperty('height', '12px')
      ringRef.current?.style.setProperty('width', '36px')
      ringRef.current?.style.setProperty('height', '36px')
    }
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [hasMouse])

  if (!hasMouse) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 rounded-full bg-green pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
        style={{ mixBlendMode: 'screen' }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full border border-green-mid pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
      />
    </>
  )
}