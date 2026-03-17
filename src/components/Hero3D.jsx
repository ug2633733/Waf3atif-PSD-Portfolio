import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingText from './FloatingText';
import Particles from './Particles';
import { OrbitControls } from '@react-three/drei';

export default function Hero3D() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      <Canvas 
        camera={{ position: [0, 2, 6], fov: 45 }} 
        shadows
        gl={{ 
          antialias: true, 
          pixelRatio: Math.min(window.devicePixelRatio, 2),
          shadowMap: { enabled: true }
        }}
      >
        {/* Ambient Light - provides overall illumination */}
        <ambientLight intensity={0.6} color="#ffffff" />
        
        {/* Main Gold Spotlight - creates dramatic lighting */}
        <pointLight 
          position={[8, 15, 8]} 
          intensity={2.5} 
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
        />
        
        {/* Secondary White Light - fills shadows */}
        <pointLight 
          position={[-8, 10, -8]} 
          intensity={1.2} 
          color="#ffffff"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        {/* Rim Light - adds depth separation */}
        <pointLight 
          position={[0, 5, -10]} 
          intensity={1} 
          color="#ffffff"
        />
        
        {/* Back fill light */}
        <pointLight 
          position={[0, -5, 10]} 
          intensity={0.8} 
          color="rgba(255, 255, 255, 0.5)"
        />
        
        <Suspense fallback={null}>
          <Particles />
          <FloatingText />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={true} autoRotate={false} />
      </Canvas>
    </div>
  );
}
