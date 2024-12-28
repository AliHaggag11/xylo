import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const glowVariants = {
  initial: { opacity: 0.5 },
  animate: { 
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const icons = {
  processing: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M22 12A10 10 0 1 1 12 2" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 2L22 8L16 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
    </svg>
  ),
  quantum: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 3C16.9706 3 21 7.02944 21 12" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 21C7.02944 21 3 16.9706 3 12" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <path d="M12 12L18 6M12 12L6 18" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  response: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 12C3 7.02944 7.02944 3 12 3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 12C21 16.9706 16.9706 21 12 21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 12L11 14L15 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  learning: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 12H7L10 19L14 5L17 12H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

function Model() {
  const { scene } = useGLTF('/src/assets/models/scene.gltf');
  return <primitive 
    object={scene} 
    scale={0.25}
    position={[0, -1, 0]}
    rotation={[0, 0, 0]}
  />;
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)]"
          style={{ 
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(0,255,0,0.${i + 1}) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="absolute -inset-4 bg-gradient-to-r from-[#00ff00]/20 to-transparent blur-xl"
              />
              <h1 className="text-7xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff00] to-[#00cc00] relative">
                XYLO
              </h1>
              <p className="text-[#00ff00] text-xl mt-2 font-mono relative">QUANTUM SERIES X-1</p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-[#00ff00]/10"
            >
              Experience the next evolution in biomechanical engineering. 
              Xylo combines quantum computing with advanced robotics to create
              an unprecedented leap in artificial intelligence.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <button className="group relative px-8 py-3 bg-[#00ff00] text-black font-bold rounded-full hover:bg-[#00cc00] transition-colors duration-300">
                <span className="relative z-10">Explore Now</span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#00ff00]/40"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </button>
              <button className="px-8 py-3 border border-[#00ff00] text-[#00ff00] rounded-full hover:bg-[#00ff00]/10 transition-colors duration-300 relative overflow-hidden">
                <span className="relative z-10">Watch Demo</span>
                <motion.div
                  className="absolute inset-0 bg-[#00ff00]/10"
                  animate={{ 
                    x: ['100%', '-100%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </button>
            </motion.div>
          </div>

          {/* Right Column - 3D Model Display */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative h-[600px] rounded-2xl overflow-hidden group"
          >
            {/* Animated corner accents */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
              <div key={i} className={`absolute ${position} w-8 h-8 pointer-events-none`}>
                <div className="absolute inset-0 border-[#00ff00]/30">
                  <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-full h-[1px] bg-[#00ff00]/30`} />
                  <div className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} h-full w-[1px] bg-[#00ff00]/30`} />
                </div>
              </div>
            ))}

            {/* Enhanced glow effect border */}
            <motion.div 
              className="absolute -inset-[1px] bg-gradient-to-r from-[#00ff00]/50 via-[#00ff00]/20 to-[#00ff00]/50 rounded-2xl blur-sm"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Main content container */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-2xl">
              {/* Enhanced grid overlay effect */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
              </div>

              {/* Compact Rotation hint */}
              <motion.div 
                className="absolute top-4 right-4 z-10 flex items-center gap-2 text-[#00ff00]/70 bg-black/40 px-3 py-2 rounded-md backdrop-blur-sm border border-[#00ff00]/10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {/* Compact rotation icon */}
                <div className="relative w-5 h-5">
                  <motion.div
                    className="absolute inset-0 border border-[#00ff00]/10 rounded-full"
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    className="w-5 h-5 relative z-10"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24" />
                    <path d="M21 3v4h-4" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-mono tracking-wide">ROTATE MODEL</p>
                </div>

                {/* Subtle pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-md border border-[#00ff00]/10"
                  animate={{ 
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              <Canvas
                camera={{ 
                  position: [320, 160, 320],
                  fov: 15,
                  near: 1,
                  far: 8000,
                }}
                className="w-full h-full"
              >
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <pointLight position={[-5, -5, -5]} intensity={1} color="#00ff00" />
                <Model />
                <OrbitControls 
                  enableZoom={true}
                  minDistance={160}
                  maxDistance={480}
                  autoRotate
                  autoRotateSpeed={0.3}
                  target={[0, 0, 0]}
                  maxPolarAngle={Math.PI / 1.5}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>

              {/* Enhanced Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-lg" />
                
                <div className="relative p-6 space-y-4">
                  {/* Hexagonal grid background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' stroke='%2300ff00' fill='none' /%3E%3C/svg%3E")`,
                      backgroundSize: '30px 30px'
                    }} />
                  </div>

                  {/* Enhanced top accent line */}
                  <div className="absolute top-0 left-0 right-0">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#00ff00]/30 to-transparent" />
                    <div className="h-px mt-1 bg-gradient-to-r from-transparent via-[#00ff00]/10 to-transparent" />
                  </div>

                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute left-0 right-0"
                    animate={{
                      top: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    <div className="h-px bg-[#00ff00]/50" />
                    <div className="h-20 bg-gradient-to-b from-[#00ff00]/5 to-transparent" />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Processing Power', value: '1.21 PetaFLOPS', icon: icons.processing },
                      { label: 'Quantum States', value: '1024 Qubits', icon: icons.quantum },
                      { label: 'Response Time', value: '0.001ms', icon: icons.response },
                      { label: 'Learning Rate', value: '99.99%', icon: icons.learning }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        className="group relative"
                      >
                        {/* Card Background */}
                        <div className="absolute inset-0 bg-black/40 rounded-lg border border-[#00ff00]/10 transition-colors duration-300 group-hover:border-[#00ff00]/30" />
                        
                        {/* Glowing corner accents */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff00]/30" />
                          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff00]/30" />
                          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff00]/30" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff00]/30" />
                        </div>

                        {/* Content */}
                        <div className="relative p-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="text-[#00ff00]/70 group-hover:text-[#00ff00] transition-colors duration-300">
                              {stat.icon}
                            </div>
                            <p className="text-[#00ff00]/70 text-sm font-mono tracking-wider group-hover:text-[#00ff00] transition-colors duration-300">
                              {stat.label}
                            </p>
                          </div>
                          <p className="text-white font-orbitron tracking-wider group-hover:text-[#00ff00] transition-colors duration-300">
                            {stat.value}
                          </p>
                        </div>

                        {/* Hover effects */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent rounded-lg blur-sm" />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00ff00]/5" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
} 