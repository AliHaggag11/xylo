import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { OrbitControls, Html } from '@react-three/drei';
import ToadModel from './ToadModel';

const modes = [
  {
    name: 'Scout Mode',
    description: 'Enhanced surveillance and reconnaissance capabilities',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" className="fill-[#00ff00]/20 stroke-[#00ff00]" />
        <path
          d="M20.2 20.2L15.8 15.8M15.8 8.2L20.2 3.8M3.8 20.2L8.2 15.8M8.2 8.2L3.8 3.8"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#00ff00]"
        />
        <path
          d="M12 2V4M12 20V22M2 12H4M20 12h2"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#00ff00]"
        />
      </svg>
    ),
    color: '#00ff00'
  },
  {
    name: 'Defense Mode',
    description: 'Activated protective mechanisms and defensive protocols',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M12 2L3 7l1.5 11L12 22l7.5-4L21 7l-9-5z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[#00ffaa] fill-[#00ffaa]/10"
        />
        <path
          d="M12 8v8M8 12h8"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#00ffaa]"
        />
      </svg>
    ),
    color: '#00ffaa'
  },
  {
    name: 'Stealth Mode',
    description: 'Advanced camouflage and silent operation systems',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          strokeWidth="1.5"
          className="stroke-[#00ffff] fill-[#00ffff]/10"
        />
        <path
          d="M12 6a6 6 0 00-6 6M18 12a6 6 0 01-6 6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="stroke-[#00ffff]"
        />
      </svg>
    ),
    color: '#00ffff'
  }
];

function ModelLoader() {
  return (
    <Html center>
      <div className="text-[#00ff00] text-xl font-orbitron animate-pulse flex items-center gap-2">
        <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Initializing Model...
      </div>
    </Html>
  );
}

export default function InteractiveShowcase() {
  const [activeMode, setActiveMode] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-32 min-h-screen">
      {/* Enhanced Background with better contrast */}
      <div className="absolute inset-0 bg-[#000a05]">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,0,0.03)_1.5px,transparent_1.5px)]"
          style={{
            backgroundSize: '30px 30px',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a05]/90 via-transparent to-[#000a05]/90" />
        {/* Additional depth layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000a05_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff00] via-[#00cc00] to-[#00ff00] mb-6">
            Interactive Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore Xylo's advanced operational modes
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* 3D Model Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 aspect-square relative group"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* Glass Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 
                           backdrop-blur-sm rounded-2xl transition-all duration-500">
                {/* Animated Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {/* Horizontal Lines */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px w-full bg-[#00ff00]/10"
                      style={{
                        top: `${20 * (i + 1)}%`,
                        left: 0,
                        transform: 'translateX(-100%)',
                        animation: `slideRight 3s ${i * 0.2}s infinite linear`
                      }}
                    />
                  ))}
                  {/* Vertical Lines */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-full bg-[#00ff00]/10"
                      style={{
                        left: `${33.33 * (i + 1)}%`,
                        top: 0,
                        transform: 'translateY(-100%)',
                        animation: `slideDown 3s ${i * 0.2}s infinite linear`
                      }}
                    />
                  ))}
                </div>
              </div>

              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <color attach="background" args={['#001a0a']} />
                <fog attach="fog" args={['#001a0a', 5, 15]} />
                <Suspense fallback={<ModelLoader />}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} color="#00ff00" intensity={1.5} />
                  <spotLight position={[-10, -10, -10]} color="#00ff00" intensity={0.5} />
                  <ToadModel />
                  <OrbitControls 
                    enableZoom={false}
                    autoRotate={!isHovered}
                    autoRotateSpeed={4}
                  />
                </Suspense>
              </Canvas>

              {/* Scan Line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent
                             absolute top-0 animate-scanline" />
              </div>
            </div>
          </motion.div>

          {/* Mode Selection */}
          <div className="w-full lg:w-1/2 space-y-6">
            {modes.map((mode, index) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setActiveMode(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative group h-[120px] cursor-pointer`}
              >
                {/* Glass Card */}
                <div className={`absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 
                             backdrop-blur-sm rounded-2xl transition-all duration-500
                             ${activeMode === index 
                               ? 'border-2 border-[#00ff00]' 
                               : 'border border-[#00ff00]/20'}`}>
                  {/* Content Container */}
                  <div className="relative h-full p-6 flex items-center gap-6">
                    {/* Icon Container */}
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute w-24 h-24 bg-[#00ff00]/5 blur-3xl rounded-full
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative transform-gpu transition-all duration-500
                                  group-hover:rotate-12">
                        {mode.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-orbitron tracking-wider
                                 bg-clip-text text-transparent bg-gradient-to-r 
                                 from-white to-gray-400 group-hover:from-[#00ff00] group-hover:to-white
                                 transition-all duration-500">
                        {mode.name}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                        {mode.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 
                               border-[#00ff00]/20 rounded-tr-2xl group-hover:border-[#00ff00]/60" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className="absolute bottom-4 left-4 w-full h-full border-b-2 border-l-2 
                               border-[#00ff00]/20 rounded-bl-2xl group-hover:border-[#00ff00]/60" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add these animations to your global CSS */}
      <style jsx global>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
} 