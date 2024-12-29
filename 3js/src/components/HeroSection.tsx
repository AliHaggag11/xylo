import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import VideoDialog from './VideoDialog';

function useCountUp(end: number, duration: number = 2, decimals: number = 0) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let requestId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(progress * end);
      
      if (progress < 1) {
        requestId = requestAnimationFrame(animate);
      }
    };

    requestId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestId);
  }, [end, duration]);

  return decimals ? count.toFixed(decimals) : Math.floor(count);
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};



function Model() {
  const { scene } = useGLTF('/models/scene.gltf');
  return <primitive 
    object={scene} 
    scale={0.25}
    position={[0, -1, 0]}
    rotation={[0, 0, 0]}
  />;
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const modelRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  const scrollToModel = () => {
    modelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#020f02] overflow-hidden">
      {/* Updated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)]"
          style={{ 
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      {/* Updated Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(0,255,0,0.${i + 1}) 0%, transparent 60%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Updated Text Content */}
          <div className="space-y-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="inline-block">
                <motion.span 
                  className="text-sm font-mono text-green-500 tracking-wider bg-green-500/10 px-4 py-2 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  NEXT GENERATION AI
                </motion.span>
              </div>
              <h1 className="mt-6 text-8xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
                  XYLO
                </span>
              </h1>
              <p className="text-green-400 text-xl mt-4 font-mono">QUANTUM SERIES X-1</p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
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
              className="flex gap-6"
            >
              <button 
                onClick={scrollToModel}
                className="group relative px-8 py-4 bg-green-500 text-black font-medium rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10">Explore Now</span>
                <motion.div
                  className="absolute inset-0 bg-green-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="group px-8 py-4 border border-green-500/30 text-green-500 rounded-lg hover:bg-green-500/10 transition-colors duration-300"
              >
                Watch Demo
              </button>
            </motion.div>

            {/* Key Highlights */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-green-500/70 text-sm font-mono tracking-wider">KEY CAPABILITIES</h3>
              
              {[
                {
                  title: "Quantum Processing",
                  value: "1.21 PetaFLOPS",
                  detail: "Real-time neural computation"
                },
                {
                  title: "AI Integration",
                  value: "Gen 4",
                  detail: "Advanced cognitive systems"
                },
                {
                  title: "Response Time",
                  value: "0.001ms",
                  detail: "Ultra-low latency"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                >
                  {/* Highlight bar */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500/20 group-hover:bg-green-500/40 transition-colors duration-300" />
                  
                  <div className="pl-4 border-b border-green-500/10 pb-4 group-hover:border-green-500/30 transition-colors duration-300">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="text-gray-400 font-mono text-sm">{item.title}</h4>
                      <span className="text-green-500 font-bold font-mono">{item.value}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                  </div>

                  {/* Hover animation */}
                  <motion.div
                    className="absolute inset-0 bg-green-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              ))}

              {/* Bottom accent */}
              <div className="h-px bg-gradient-to-r from-green-500/30 to-transparent" />
            </motion.div>
          </div>

          {/* Right Column - 3D Model Display */}
            <motion.div
              ref={modelRef}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-[700px] rounded-2xl overflow-hidden"
            >
            {/* Model container styling updates */}
            <div className="absolute inset-0 bg-[#021002] rounded-2xl border border-green-500/20">
            {/* Animated corner accents */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((position, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${position} w-24 h-24`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  <div className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-full h-[2px] bg-gradient-to-r from-green-500/50 to-transparent`} />
                  <div className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} h-full w-[2px] bg-gradient-to-b from-green-500/50 to-transparent`} />
                </motion.div>
              ))}

              {/* Enhanced background effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,20,0,0.8)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,0,0.03)_1.5px,transparent_1.5px)] bg-[size:20px_20px]" />
              </div>

              {/* Scanning line effect */}
            <motion.div 
                className="absolute inset-0 pointer-events-none"
              animate={{ 
                  background: [
                    'linear-gradient(transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%) 0 0/100% 200%',
                    'linear-gradient(transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%) 0 -200%/100% 200%'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Stats overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
                
                <div className="bg-black/40 backdrop-blur-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-4 p-4 sm:p-6">
                    {[
                      { 
                        label: 'Processing Power',
                        value: '1.21',
                        suffix: 'PF',
                        countTo: 1.21,
                        decimals: 2,
                        icon: (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M22 12A10 10 0 1 1 12 2" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                          </svg>
                        )
                      },
                      { 
                        label: 'Quantum States',
                        value: '1024',
                        suffix: 'Q',
                        countTo: 1024,
                        icon: (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 3C16.9706 3 21 7.02944 21 12" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 21C7.02944 21 3 16.9706 3 12" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 12L18 6M12 12L6 18" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="12" cy="12" r="1" fill="currentColor" />
                          </svg>
                        )
                      },
                      { 
                        label: 'Response Time',
                        value: '0.001',
                        suffix: 'ms',
                        countTo: 0.001,
                        decimals: 3,
                        icon: (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M3 12C3 7.02944 7.02944 3 12 3" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M21 12C21 16.9706 16.9706 21 12 21" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9 12L11 14L15 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )
                      },
                      { 
                        label: 'Learning Rate',
                        value: '99.99',
                        suffix: '%',
                        countTo: 99.99,
                        decimals: 2,
                        icon: (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M3 12H7L10 19L14 5L17 12H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )
                      }
                    ].map((stat) => (
                      <motion.div 
                        key={stat.label}
                        className="group relative rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 rounded-lg" />
                        
                        <div className="relative flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-black/40 m-[1px] rounded-[7px]">
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 blur-sm rounded-full" />
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-green-500/30 flex items-center justify-center text-green-500">
                              {stat.icon}
                            </div>
                          </div>

                          <div>
                            <p className="text-green-500/70 text-[10px] sm:text-xs font-mono tracking-wider">{stat.label}</p>
                            <p className="text-white font-bold tracking-wide font-mono text-sm sm:text-base">
                              {useCountUp(stat.countTo, 2, stat.decimals)}{stat.suffix}
                            </p>
                          </div>

                          <motion.div
                            className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                            animate={{ opacity: [0, 0.1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Model Controls Hint */}
              <motion.div 
                className="absolute top-4 right-4 space-y-1.5 hidden lg:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {/* Hints Container */}
                <div className="bg-black/40 backdrop-blur-md border border-green-500/20 rounded-lg p-3 w-44">
                  {/* Header */}
                  <div className="flex items-center gap-1.5 text-green-500/70 mb-2">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[10px] font-mono tracking-wider">MODEL CONTROLS</span>
                  </div>
                  
                  {/* Control Instructions */}
                  <div className="space-y-1.5">
                    {[
                      { action: 'Rotate', key: 'Drag' },
                      { action: 'Zoom', key: 'Scroll' },
                      { action: 'Pan', key: 'Ctrl+Drag' },
                    ].map((control) => (
                      <div key={control.action} 
                        className="flex items-center justify-between text-[10px] py-0.5"
                      >
                        <span className="text-gray-400 font-medium">{control.action}</span>
                        <span className="font-mono text-green-500 bg-green-500/5 px-1.5 py-0.5 rounded border border-green-500/20">
                          {control.key}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    initial={false}
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(0,255,0,0)',
                        '0 0 0 1px rgba(0,255,0,0.1)',
                        '0 0 0 0px rgba(0,255,0,0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Auto-rotate indicator */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-green-500/40">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-2.5 h-2.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M21 3v4h-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </motion.div>
                  <span className="font-mono tracking-wide">Auto-rotating</span>
                </div>
              </motion.div>

              {/* 3D Canvas */}
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
            </div>
            </motion.div>
        </div>
      </div>
      <VideoDialog 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  );
} 