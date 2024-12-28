import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

const Particles = ({ count }: ParticlesProps) => {
  // Create a properly typed ref for Points
  const points = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const positions = new Float32Array(
    Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 10)
  );

  useFrame((_state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.1;
      points.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Points
      ref={points}
      positions={positions}
    >
      <PointMaterial
        transparent
        color="#88ff88"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default Particles; 