import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import ToadModel from './components/ToadModel';
import Particles from './components/Particles';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InteractiveShowcase from './components/InteractiveShowcase';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

function LoadingScreen() {
  return (
    <Html center>
      <div className="text-white text-xl">
        Loading...
      </div>
    </Html>
  );
}

function App() {
  return (
    <div className="relative bg-[#001a0a] text-white overflow-x-hidden min-h-screen">
      {/* Hero Section with 3D Canvas */}
      <section className="h-screen relative w-full">
        <ErrorBoundary>
          <Canvas className="absolute inset-0 z-0"
            camera={{ position: [0, 0, 8], fov: 50 }}
          >
            <color attach="background" args={['#001a0a']} />
            <fog attach="fog" args={['#001a0a', 8, 20]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense fallback={<LoadingScreen />}>
              <group position={[0, -1, 0]}>
                <ToadModel />
                <Particles count={200} />
              </group>
            </Suspense>
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </ErrorBoundary>
        
        <div className="relative z-10 w-full">
          <HeroSection />
        </div>
      </section>

      {/* Content Container */}
      <div className="relative z-20 mt-[100vh] w-full">
        {/* Features Section */}
        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <FeaturesSection />
          </motion.div>
        </div>

        {/* Interactive Showcase */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveShowcase />
          </motion.div>
        </div>

        {/* About Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AboutSection />
          </motion.div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
