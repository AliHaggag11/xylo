import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  })
};

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);
  const gridScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black min-h-screen">
      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,0,0.05)_1.5px,transparent_1.5px)]"
        style={{
          backgroundSize: '30px 30px',
          opacity: gridOpacity,
          scale: gridScale
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff00] via-[#00cc00] to-[#00ff00] mb-6">
            Quantum Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pushing the boundaries of what's possible with next-generation quantum technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Feature Card */}
              <div className="relative group h-[400px]">
                {/* Glass Card */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 
                             backdrop-blur-sm rounded-2xl transition-all duration-500
                             group-hover:bg-gradient-to-b group-hover:from-black/50 group-hover:to-black/70">
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

                {/* Content Container */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center items-center">
                    {/* Glow Effect */}
                    <div className="absolute w-24 h-24 bg-[#00ff00]/5 blur-3xl rounded-full
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Icon Wrapper - Fixed Position */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20 rounded-xl" />
                      <div className="relative transform-gpu transition-all duration-500
                                    group-hover:rotate-12">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-orbitron mb-4 tracking-wider
                               bg-clip-text text-transparent bg-gradient-to-r 
                               from-white to-gray-400 group-hover:from-[#00ff00] group-hover:to-white
                               transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed tracking-wide
                               group-hover:text-gray-300 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>

                  {/* Stats Container */}
                  <div className="space-y-3 relative">
                    {feature.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className="relative overflow-hidden"
                      >
                        {/* Stat Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent
                                     transform -skew-x-12" />
                        <div className="relative p-3 flex items-center space-x-3">
                          {/* Stat Icon */}
                          <div className="w-2 h-2 rounded-full bg-[#00ff00]/40
                                       group-hover:bg-[#00ff00] transition-colors duration-500" />
                          {/* Stat Text */}
                          <p className="font-mono text-sm text-[#00ff00] tracking-wider">
                            {stat}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                             transition-opacity duration-500 pointer-events-none">
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 
                                 border-[#00ff00]/20 rounded-tr-2xl" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16">
                    <div className="absolute bottom-4 left-4 w-full h-full border-b-2 border-l-2 
                                 border-[#00ff00]/20 rounded-bl-2xl" />
                  </div>

                  {/* Scan Line */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent
                                 absolute top-0 animate-scanline" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-24"
        >
          <button className="px-8 py-4 bg-[#00ff00] text-black font-bold rounded-full hover:bg-[#00cc00] transition-colors duration-300
                           relative overflow-hidden group">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-[#00cc00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff00]/20 to-transparent" />

      {/* Add these animations to your global CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
    </section>
  );
} 