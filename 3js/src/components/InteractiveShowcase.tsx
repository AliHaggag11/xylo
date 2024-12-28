// import { FC, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import ErrorBoundary from './ErrorBoundary';
// import './InteractiveShowcase.css';

// const Model: FC = () => {
//   const { scene } = useGLTF('/models/scene.gltf');
//   return <primitive object={scene} />;
// };

// const InteractiveShowcase: FC = () => {
//   return (
//     <section className="showcase-container">
//       <ErrorBoundary>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Canvas>
//             <Model />
//           </Canvas>
//         </Suspense>
//       </ErrorBoundary>
//     </section>
//   );
// };

// export default InteractiveShowcase; 