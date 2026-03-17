import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Particles({ count = 150 }) {
  const pointsRef = useRef();
  const particlesRef = useRef([]);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const particles = [];
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 25;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Create varied colors - mostly white with some gold accents
      const isGold = Math.random() > 0.7;
      if (isGold) {
        colors[i * 3] = 0.84;     // d6 / 255
        colors[i * 3 + 1] = 0.66; // a8 / 255
        colors[i * 3 + 2] = 0.42; // 6c / 255
      } else {
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 1;
      }

      particles.push({
        x, y, z,
        vx: (Math.random() - 0.5) * 0.01,
        vy: (Math.random() - 0.5) * 0.01,
        vz: (Math.random() - 0.5) * 0.01,
        speed: Math.random() * 0.002 + 0.0005,
        size: Math.random() * 1.5 + 0.5
      });
    }

    particlesRef.current = particles;
    return { positions, colors };
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      // Rotate the entire particle system
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.00005;
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.0001;
      pointsRef.current.rotation.z = clock.getElapsedTime() * 0.00003;

      // Update individual particle positions for depth effect
      const positions = pointsRef.current.geometry.attributes.position.array;
      
      particlesRef.current.forEach((particle, idx) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around boundaries
        if (Math.abs(particle.x) > 30) particle.vx *= -1;
        if (Math.abs(particle.y) > 30) particle.vy *= -1;
        if (Math.abs(particle.z) > 30) particle.vz *= -1;

        positions[idx * 3] = particle.x;
        positions[idx * 3 + 1] = particle.y;
        positions[idx * 3 + 2] = particle.z;
      });

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        sizeAttenuation 
        vertexColors 
        transparent 
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}
