import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { projects } from '../data/projects';

export default function ProjectCards({ onProjectClick }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((card, i) => {
        card.position.y = Math.sin(clock.getElapsedTime() / 2 + i) * 0.5;
        card.rotation.y += 0.003;
        card.rotation.z = Math.sin(clock.getElapsedTime() / 3 + i) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {projects.map((project, i) => (
        <group key={project.id} position={[i * 3 - 4.5, 0, 0]}>
          {/* Card mesh */}
          <mesh
            position={[0, 0, 0]}
            onClick={() => onProjectClick(project)}
            onPointerEnter={(e) => (e.object.scale.set(1.1, 1.1, 1.1))}
            onPointerLeave={(e) => (e.object.scale.set(1, 1, 1))}
          >
            <boxGeometry args={[2, 2.5, 0.2]} />
            <meshStandardMaterial color={project.color} metalness={0.5} roughness={0.3} />
          </mesh>

          {/* Glow effect */}
          <mesh position={[0, 0, -0.15]}>
            <boxGeometry args={[2.2, 2.7, 0.1]} />
            <meshStandardMaterial
              color={project.color}
              emissive={project.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Text label */}
          <mesh position={[0, -1.2, 0.15]}>
            <planeGeometry args={[1.8, 0.6]} />
            <meshBasicMaterial color="#0a0a0a" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
