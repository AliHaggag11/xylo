import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './FeaturesSection.css';

const features = [
  {
    title: 'Quantum Processing',
    description: 'Advanced quantum computing core enables parallel processing across multiple dimensions.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[#00ff00]"
        />
        <circle cx="12" cy="12" r="3" className="fill-[#00ff00]/20" />
      </svg>
    ),
    stats: ['1024 Qubits', '99.9% Accuracy']
  },
  {
    title: 'Neural Network',
    description: 'Self-evolving neural architecture with dynamic learning capabilities.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[#00ff00]"
        />
        <path
          d="M12 8v8M8 12h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[#00ff00]"
        />
        <circle cx="12" cy="12" r="6" className="fill-[#00ff00]/20" />
      </svg>
    ),
    stats: ['1M Parameters', '0.001ms Response']
  },
  {
    title: 'Adaptive Systems',
    description: 'Real-time environmental adaptation with predictive modeling.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          className="stroke-[#00ff00]"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="12" cy="12" r="4" className="fill-[#00ff00]/20" />
        <motion.path
          d="M12 2v4m0 12v4m10-10h-4m-12 0H2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-[#00ff00]"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    ),
    stats: ['100% Coverage', '24/7 Active']
  }
];

// Add the same fade animation from HeroSection
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

// Add this new function for the counting animation like in HeroSection

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Add mouse movement effect from HeroSection
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
    <section ref={containerRef} className="relative py-32 bg-black min-h-screen overflow-hidden">
      {/* Updated Background Elements to match HeroSection style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.03)_0%,transparent_70%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)]"
          style={{ 
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      {/* Floating Elements from HeroSection */}
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

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header with HeroSection styling */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4">
            <motion.span 
              className="text-sm font-mono text-green-500 tracking-wider bg-green-500/10 px-4 py-2 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ADVANCED CAPABILITIES
            </motion.span>
          </div>
          <h2 className="text-8xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
              Features
            </span>
          </h2>
          <p className="text-green-400 text-xl font-mono">NEXT-GEN QUANTUM TECHNOLOGY</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Feature Card */}
              <div className="group relative h-[420px] bg-[#020a02]/40 backdrop-blur-md rounded-xl 
                             border border-green-500/10 overflow-hidden hover:border-green-500/30 
                             transition-colors duration-500">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.02] to-transparent opacity-0 
                                 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Animated Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.01)_1px,transparent_1px)] 
                                 bg-[size:20px_20px] [mask-image:radial-gradient(black,transparent_90%)]" />

                  {/* Scan Line */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ 
                      background: [
                        'linear-gradient(to bottom, transparent 0%, rgba(0,255,0,0.05) 50%, transparent 100%) 0 0/100% 200%',
                        'linear-gradient(to bottom, transparent 0%, rgba(0,255,0,0.05) 50%, transparent 100%) 0 -200%/100% 200%'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Card Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-green-500/10 rounded-full blur-xl opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-14 h-14 flex items-center justify-center bg-black/30 
                                   rounded-xl border border-green-500/20 group-hover:border-green-500/40 
                                   transition-colors duration-300">
                      <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                                  from-green-500 to-emerald-400 pb-2">
                      {feature.title}
                    </h3>
                    <div className="h-px w-12 bg-gradient-to-r from-green-500/50 to-transparent 
                                   group-hover:w-full transition-all duration-700 ease-out" />
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400/90 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Container */}
                  <div className="mt-auto pt-6 space-y-3">
                    {feature.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                      >
                        <div className="relative overflow-hidden">
                          {/* Stat Background */}
                          <div className="absolute inset-0 bg-green-500/[0.02] rounded-lg" />
                          
                          {/* Stat Content */}
                          <div className="relative px-4 py-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-green-500/40"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                              <span className="font-mono text-sm text-green-500/80 tracking-wide">
                                {stat}
                              </span>
                            </div>
                            <div className="flex space-x-0.5">
                              {[...Array(3)].map((_, j) => (
                                <motion.div
                                  key={j}
                                  className="w-0.5 h-2 bg-green-500/30 rounded-full"
                                  animate={{ scaleY: [0.3, 1, 0.3] }}
                                  transition={{ 
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: j * 0.2
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 right-0 w-24 h-24">
                    <div className="absolute top-3 right-3 w-full h-full border-t border-r 
                                   border-green-500/20 rounded-tr-xl" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-24 h-24">
                    <div className="absolute bottom-3 left-3 w-full h-full border-b border-l 
                                   border-green-500/20 rounded-bl-xl" />
                  </div>

                  {/* Edge Highlights */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r 
                                 from-green-500/50 via-green-500/10 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l 
                                 from-green-500/50 via-green-500/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent from HeroSection */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>
    </section>
  );
} 