'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function MickeyMouse() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head (large black sphere) */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Left ear */}
      <mesh position={[-1.1, 1.1, -0.3]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right ear */}
      <mesh position={[1.1, 1.1, -0.3]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Face (beige/tan oval) */}
      <mesh position={[0, -0.2, 0.8]} castShadow>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial color="#f4d4a8" />
      </mesh>

      {/* Nose (black oval at bottom of face) */}
      <mesh position={[0, -0.5, 1.3]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Left eye (white) */}
      <mesh position={[-0.35, 0.2, 1.2]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Left pupil */}
      <mesh position={[-0.3, 0.2, 1.4]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Right eye (white) */}
      <mesh position={[0.35, 0.2, 1.2]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Right pupil */}
      <mesh position={[0.3, 0.2, 1.4]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, -0.7, 1.2]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.3, 0.05, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Body (black ellipsoid) */}
      <mesh position={[0, -2.2, 0]} scale={[1, 1.3, 0.8]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Red shorts */}
      <mesh position={[0, -2.8, 0]} scale={[1.1, 0.8, 0.9]} castShadow>
        <cylinderGeometry args={[1, 1, 1, 32]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>

      {/* White buttons on shorts */}
      <mesh position={[-0.4, -2.4, 0.85]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.4, -2.4, 0.85]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Left arm */}
      <group position={[-1.2, -1.8, 0]} rotation={[0, 0, -0.3]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.25, 1.2, 16, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Left hand (glove) */}
        <mesh position={[0, -0.8, 0]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[1.2, -1.8, 0]} rotation={[0, 0, 0.3]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.25, 1.2, 16, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Right hand (glove) */}
        <mesh position={[0, -0.8, 0]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Left leg */}
      <group position={[-0.5, -3.8, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.3, 1.2, 16, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Left shoe */}
        <mesh position={[0, -0.8, 0.3]} scale={[1.2, 0.8, 1.8]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffeb3b" />
        </mesh>
      </group>

      {/* Right leg */}
      <group position={[0.5, -3.8, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.3, 1.2, 16, 32]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Right shoe */}
        <mesh position={[0, -0.8, 0.3]} scale={[1.2, 0.8, 1.8]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#ffeb3b" />
        </mesh>
      </group>

      {/* Tail */}
      <mesh position={[0, -2.5, -0.9]} rotation={[0.5, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 1, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}
