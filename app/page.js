'use client'

import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false })
const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => mod.OrbitControls), { ssr: false })
const Environment = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false })
const MickeyMouse = dynamic(() => import('./MickeyMouse'), { ssr: false })

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', background: '#87CEEB' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <MickeyMouse />
        <OrbitControls enableZoom={true} enablePan={true} />
        <Environment preset="sunset" />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        fontFamily: 'Arial, sans-serif'
      }}>
        3D Mickey Mouse
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '14px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        fontFamily: 'Arial, sans-serif'
      }}>
        Drag to rotate • Scroll to zoom
      </div>
    </main>
  )
}
