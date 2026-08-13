import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMousePosition } from '../hooks/useMousePosition'
import * as THREE from 'three'

function Icosa() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mouse = useMousePosition()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = t * 0.15 + mouse.y * 0.3
    meshRef.current.rotation.y = t * 0.2 + mouse.x * 0.3
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.15
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial color="#00ff6a" wireframe transparent opacity={0.55} />
    </mesh>
  )
}

export default function FloatingObject() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true }}>
        <Icosa />
      </Canvas>
    </div>
  )
}
