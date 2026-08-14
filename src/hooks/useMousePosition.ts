import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromPoint = (clientX: number, clientY: number) => {
      setPos({
        x: (clientX / window.innerWidth) * 2 - 1,
        y: (clientY / window.innerHeight) * 2 - 1,
      })
    }

    // Desktop: follows the mouse whenever it moves, no click needed.
    const onMouseMove = (e: MouseEvent) => setFromPoint(e.clientX, e.clientY)

    // Mobile: follows a finger while it's actively dragging across
    // the screen. { passive: true } keeps normal page scrolling working.
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) setFromPoint(touch.clientX, touch.clientY)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return pos
}