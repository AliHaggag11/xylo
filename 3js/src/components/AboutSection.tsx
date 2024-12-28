import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  {
    year: '2023',
    title: 'Concept Development',
    description: 'Initial AI and biomechanical research'
  },
  {
    year: '2024',
    title: 'Prototype Phase',
    description: 'First successful integration of quantum computing'
  },
  {
    year: '2025',
    title: 'Field Testing',
    description: 'Environmental adaptation trials'
  }
];

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section ref={containerRef} className="relative py-32 min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-[#000a05]">
        <motion.div 
          style={{ scale: bgScale }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ff0015_0%,transparent_50%)]"
        />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,0,0.03)_1.5px,transparent_1.5px)]"
          style={{
            backgroundSize: '30px 30px',
            opacity: gridOpacity,
          }}
        />
        {/* Animated Glow Orbs */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, transparent 70%)',
              top: `${30 * i}%`,
              left: `${20 * i}%`,
              animation: `floatAnimation ${8 + i * 2}s infinite ease-in-out ${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Title with Cyber Effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-2 left-0 h-[1px] bg-[#00ff00]/50"
            />
            <h2 className="text-5xl md:text-7xl font-orbitron font-bold bg-clip-text text-transparent 
                        bg-gradient-to-r from-[#00ff00] via-[#00cc00] to-[#00ff00] mb-6
                        [text-shadow:0_0_20px_rgba(0,255,0,0.5)]">
              About Xylo
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent"
            />
            {/* Cyber Decorations */}
            <div className="absolute -left-6 top-1/2 w-4 h-4 border-l-2 border-t-2 border-[#00ff00]/60 transform -translate-y-1/2" />
            <div className="absolute -right-6 top-1/2 w-4 h-4 border-r-2 border-b-2 border-[#00ff00]/60 transform -translate-y-1/2" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#00ff00]/5 blur-3xl group-hover:bg-[#00ff00]/10 transition-colors duration-700" />
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-black/20 border border-[#00ff00]/20
                        group-hover:border-[#00ff00]/40 transition-all duration-500
                        hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              {/* Enhanced Corner Accents */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 
                           border-[#00ff00]/20 rounded-tr-2xl group-hover:border-[#00ff00]/60
                           transition-colors duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute bottom-4 left-4 w-full h-full border-b-2 border-l-2 
                           border-[#00ff00]/20 rounded-bl-2xl group-hover:border-[#00ff00]/60
                           transition-colors duration-500"
                />
              </div>

              <h3 className="text-3xl font-orbitron mb-6 text-[#00ff00]/90
                         group-hover:text-[#00ff00] transition-colors duration-300">
                The Vision
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Inspired by nature's perfect design, Xylo represents the convergence of
                biological efficiency and cutting-edge technology. Our team of engineers and
                scientists have created a revolutionary robotic system that mimics the
                remarkable adaptability of amphibians.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#00ff00]/5 blur-3xl group-hover:bg-[#00ff00]/10 transition-colors duration-700" />
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-black/20 border border-[#00ff00]/20
                        group-hover:border-[#00ff00]/40 transition-all duration-500
                        hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              {/* Corner Accents (same as Vision section) */}
              {/* ... */}

              <h3 className="text-3xl font-orbitron mb-6 text-[#00ff00]/90
                         group-hover:text-[#00ff00] transition-colors duration-300">
                Development Timeline
              </h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-[#00ff00]/20"
                  >
                    {/* Enhanced Timeline Dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] -translate-y-[2px]
                                group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-[#00ff00]/20 rounded-full blur-sm
                                  animate-pulse" />
                      <div className="absolute inset-0 bg-[#00ff00] rounded-full transform scale-50
                                  group-hover:scale-75 transition-transform duration-300" />
                    </div>
                    
                    <div className="text-[#00ff00] font-orbitron text-xl mb-2
                                group-hover:text-[#00ff00] transition-colors duration-300">
                      {item.year}
                    </div>
                    <h4 className="font-orbitron text-white mb-2 group-hover:text-[#00ff00]/90
                               transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff00]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff00]/30 to-transparent" />

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes floatAnimation {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
      `}</style>
    </section>
  );
} 