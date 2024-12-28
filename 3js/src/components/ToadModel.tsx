import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function ToadModel() {
  const toadRef = useRef<THREE.Group>();
  const [modelPath] = useState(() => {
    const modelUrl = new URL('../assets/models/scene.gltf', import.meta.url).href;
    return modelUrl;
  });
  
  try {
    const { scene } = useGLTF(modelPath);

    useFrame((state) => {
      if (toadRef.current) {
        toadRef.current.rotation.y += 0.003;
        toadRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        toadRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      }
    });

    return <primitive ref={toadRef} object={scene} scale={2.5} position={[0, 0, 0]} />;
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
}

// Pre-load the model
try {
  const modelUrl = new URL('../assets/models/scene.gltf', import.meta.url).href;
  useGLTF.preload(modelUrl);
} catch (error) {
  console.error('Error preloading model:', error);
} 