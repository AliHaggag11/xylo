import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

// Import the model directly
import modelPath from '../assets/models/scene.gltf?url'

export default function ToadModel() {
  const toadRef = useRef<Group>(null);
  
  // Use the imported model path
  const { scene } = useGLTF(modelPath);
  
  useFrame((state) => {
    if (toadRef.current) {
      toadRef.current.rotation.y += 0.003;
      toadRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <primitive 
      ref={toadRef}
      object={scene} 
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}

// Preload with the same path
useGLTF.preload(modelPath); 