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

// Add fade in up animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section id="about" className="relative py-32 min-h-screen overflow-hidden bg-[#020f02]">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ scale: bgScale }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)]"
        />
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)]"
          style={{
            backgroundSize: '60px 60px',
            opacity: gridOpacity,
          }}
        />
      </div>

      {/* Floating Orbs */}
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

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Title Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.span 
            className="text-sm font-mono text-green-500 tracking-wider bg-green-500/10 px-4 py-2 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            OUR JOURNEY
          </motion.span>
          
          <h2 className="mt-6 text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
              About Xylo
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-green-500/5 blur-3xl group-hover:bg-green-500/10 transition-colors duration-700" />
            <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-black/20 border border-green-500/20
                          group-hover:border-green-500/40 transition-all duration-500
                          hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 
                           border-green-500/20 rounded-tr-2xl group-hover:border-green-500/60
                           transition-colors duration-500"
                />
              </div>

              <h3 className="text-3xl font-mono mb-6 text-green-500/90
                         group-hover:text-green-500 transition-colors duration-300">
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

          {/* Timeline Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-green-500/20 group"
              >
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] -translate-y-[2px]
                            group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm animate-pulse" />
                  <div className="absolute inset-0 bg-green-500 rounded-full transform scale-50
                              group-hover:scale-75 transition-transform duration-300" />
                </div>
                
                <div className="text-green-500 font-mono text-xl mb-2
                            group-hover:text-green-400 transition-colors duration-300">
                  {item.year}
                </div>
                <h4 className="font-mono text-white mb-2 group-hover:text-green-500/90
                           transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Border Effects */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
    </section>
  );
} 