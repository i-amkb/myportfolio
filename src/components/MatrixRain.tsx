import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CHARS = 'アイウエオカキクケコサシスセソ01001101アルゴリズム'
const COLS = 46
const ROWS = 30

function makeGlyphTexture(char: string) {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = '#00ff6a'
  ctx.font = `${size * 0.8}px monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(char, size / 2, size / 2)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

function Column({ x, speed, delay }: { x: number; speed: number; delay: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const textures = useMemo(
    () => Array.from({ length: ROWS }, () => makeGlyphTexture(CHARS[Math.floor(Math.random() * CHARS.length)])),
    []
  )

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime * speed + delay
    groupRef.current.position.y = 20 - ((t * 4) % 40)
  })

  return (
    <group ref={groupRef} position={[x, 0, -5]}>
      {textures.map((tex, i) => (
        <sprite key={i} position={[0, -i * 0.9, 0]} scale={[0.6, 0.6, 0.6]}>
          <spriteMaterial
            map={tex}
            transparent
            opacity={Math.max(0.08, 1 - i * 0.06)}
            depthWrite={false}
          />
        </sprite>
      ))}
    </group>
  )
}

function Rain() {
  const columns = useMemo(
    () =>
      Array.from({ length: COLS }, (_, i) => ({
        x: (i - COLS / 2) * 0.5,
        speed: 0.5 + Math.random() * 0.8,
        delay: Math.random() * 20,
      })),
    []
  )
  return (
    <>
      {columns.map((c, i) => (
        <Column key={i} x={c.x} speed={c.speed} delay={c.delay} />
      ))}
    </>
  )
}

export default function MatrixRain() {
  return (
    <div className="fixed inset-0 -z-10 opacity-[0.35]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ alpha: true }}>
        <Rain />
      </Canvas>
    </div>
  )
}
