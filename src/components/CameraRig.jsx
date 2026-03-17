import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';

export default function CameraRig({ targetPosition }) {
  const cameraRef = useRef();

  useFrame(({ camera, mouse }) => {
    if (targetPosition) {
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1,
        ease: 'power2.inOut',
      });
    } else {
      // Smooth mouse-following camera movement
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    }
  });

  return null;
}
