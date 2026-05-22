"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"

function ParticleField() {
  const ref = useRef<any>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(9000 * 3)

    for (let i = 0; i < 9000; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * 30

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 18

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 12
    }

    return positions
  }, [])

  useFrame((state) => {
    if (!ref.current) return

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.01

    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.08) *
      0.02
  })

  return (
    <Points
      ref={ref}
      positions={particles}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#eef5e8"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export default function NeuralScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={1} />

        <ParticleField />
      </Canvas>
    </div>
  )
}