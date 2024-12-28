import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { 
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)]"
           style={{
             backgroundSize: '40px 40px',
             transform: `translateY(${scrollY * 0.2}px)`
           }} />

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
            >
              <h1 className="text-7xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff00] to-[#00cc00]">
                XYLO
              </h1>
              <p className="text-[#00ff00] text-xl mt-2 font-mono">QUANTUM SERIES X-1</p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed"
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
              <button className="px-8 py-3 bg-[#00ff00] text-black font-bold rounded-full hover:bg-[#00cc00] transition-colors duration-300">
                Explore Now
              </button>
              <button className="px-8 py-3 border border-[#00ff00] text-[#00ff00] rounded-full hover:bg-[#00ff00]/10 transition-colors duration-300">
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right Column - Interactive Display */}
          <div className="relative">
            <motion.div
              variants={glowVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-[#00ff00]/20 blur-3xl rounded-full"
            />
            <div className="relative bg-black/50 rounded-2xl p-6 backdrop-blur-sm border border-[#00ff00]/30">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Processing Power', value: '1.21 PetaFLOPS' },
                  { label: 'Quantum States', value: '1024 Qubits' },
                  { label: 'Response Time', value: '0.001ms' },
                  { label: 'Learning Rate', value: '99.99%' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="p-4 rounded-lg bg-black/40 border border-[#00ff00]/20"
                  >
                    <p className="text-[#00ff00] text-sm font-mono">{stat.label}</p>
                    <p className="text-white font-orbitron mt-1">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Mode Selector */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 p-4 rounded-lg bg-black/40 border border-[#00ff00]/20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#00ff00] font-mono">Current Mode:</span>
                  <select className="bg-black border border-[#00ff00]/30 rounded px-3 py-1 text-[#00ff00] outline-none">
                    <option>Quantum</option>
                    <option>Defense</option>
                    <option>Stealth</option>
                  </select>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
} 