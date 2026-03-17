import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

  const group = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();

  // Gyroscope state
  const gyro = useRef({ beta: 0, gamma: 0 });

  useEffect(() => {
    // Only add listener on mobile devices
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    if (!isMobile) return;

    function handleOrientation(event) {
      // Clamp values for smoother effect
      gyro.current.beta = Math.max(-60, Math.min(60, event.beta || 0)); // front-back tilt
      gyro.current.gamma = Math.max(-60, Math.min(60, event.gamma || 0)); // left-right tilt
    }
    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation, true);
  }, []);

  useFrame(({ clock }) => {
    if (group.current) {
      // Default floating animation
      let y = Math.sin(clock.getElapsedTime() / 2) * 0.5;
      let zRot = Math.sin(clock.getElapsedTime() / 4) * 0.05;

      // On mobile, override with gyroscope
      const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
      if (isMobile) {
        // Map beta/gamma to position/rotation
        const { beta, gamma } = gyro.current;
        // beta: -180 (face up) to 180 (face down), gamma: -90 (left) to 90 (right)
        y = beta / 90; // up/down tilt
        zRot = gamma / 180; // left/right tilt
      }
      group.current.position.y = y;
      group.current.rotation.z = zRot;
    }

    // Add subtle depth animation to text
    if (textRef1.current) {
      textRef1.current.position.z = Math.sin(clock.getElapsedTime() / 3) * 0.3;
      textRef1.current.rotation.y = Math.sin(clock.getElapsedTime() / 4) * 0.15;
    }
    if (textRef2.current) {
      textRef2.current.position.z = Math.sin(clock.getElapsedTime() / 3 + Math.PI / 2) * 0.2;
      textRef2.current.rotation.y = Math.sin(clock.getElapsedTime() / 4 + Math.PI / 2) * 0.1;
    }
  });
  
  return (
    <group ref={group} position={[0, 1, 0]}>
      {/* Main Title Text - Ahmed Atif */}
      <group ref={textRef1} position={[0, 0.8, 0]}>
        {/* Deep shadow layer 1 */}
        <mesh position={[0.05, -0.15, -0.8]} scale={1.05}>
          <planeGeometry args={[5.5, 2]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#000000"
            emissiveIntensity={0.4}
            transparent
            opacity={0.6}
            depthWrite={false}
          />
        </mesh>

        {/* Deep shadow layer 2 */}
        <mesh position={[0.02, -0.08, -0.6]} scale={1.02}>
          <planeGeometry args={[5.2, 1.9]} />
          <meshStandardMaterial
            color="#1a1a1a"
            emissive="#1a1a1a"
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
            depthWrite={false}
          />
        </mesh>

        {/* Text mesh with depth */}
        <mesh castShadow receiveShadow>
          <Text
            fontSize={2}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            maxWidth={10}
            textAlign="center"
            weight="bold"
            font="https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ISg.ttf"
            outlineWidth={0.1}
            outlineColor="#ffffff"
            letterSpacing={-0.02}
          >
            Ahmed Atif
          </Text>
        </mesh>

        {/* Bright blurred glow effect in front */}
        <mesh position={[0, 0, 0.5]} scale={1.5}>
          <planeGeometry args={[6, 2.5]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
            depthWrite={false}
          />
        </mesh>

        {/* Soft blurred halo shadow behind text */}
        <mesh position={[0, 0, -0.5]} scale={1.8}>
          <planeGeometry args={[7, 3]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.4}
            transparent
            opacity={0.2}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Subtitle Text - Graphic Designer */}
      <group ref={textRef2} position={[0, -0.5, 0]}>
        {/* Shadow layer 1 */}
        <mesh position={[0.03, -0.12, -0.6]} scale={1.03}>
          <planeGeometry args={[4.5, 1.2]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#000000"
            emissiveIntensity={0.35}
            transparent
            opacity={0.5}
            depthWrite={false}
          />
        </mesh>

        {/* Shadow layer 2 */}
        <mesh position={[0.01, -0.06, -0.4]} scale={1.01}>
          <planeGeometry args={[4.2, 1.15]} />
          <meshStandardMaterial
            color="#1a1a1a"
            emissive="#1a1a1a"
            emissiveIntensity={0.25}
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>

        {/* Text mesh with depth */}
        <mesh castShadow receiveShadow>
          <Text
            fontSize={1.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            maxWidth={10}
            textAlign="center"
            weight="bold"
            font="https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ISg.ttf"
            outlineWidth={0.06}
            outlineColor="#ffffff"
            letterSpacing={0.03}
          >
            Graphic Designer
          </Text>
        </mesh>

        {/* Glow effect in front */}
        <mesh position={[0, 0, 0.4]} scale={1.4}>
          <planeGeometry args={[5, 1.5]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.45}
            transparent
            opacity={0.25}
            depthWrite={false}
          />
        </mesh>

        {/* Soft blurred halo shadow */}
        <mesh position={[0, 0, -0.35]} scale={1.6}>
          <planeGeometry args={[6, 2]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.35}
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* 3D Depth box for casting/receiving shadows */}
      <mesh position={[0, 0.1, 0]} scale={[2, 1.5, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[5, 2, 0.2]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.2}
          roughness={0.8}
          emissive="#0a0a0a"
          emissiveIntensity={0.05}
          transparent
          opacity={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
