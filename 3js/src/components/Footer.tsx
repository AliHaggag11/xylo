import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function Footer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-[#00ff00]/10 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Glowing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(0,255,0,0.${i + 1}) 0%, transparent 70%)`,
            left: `${25 * (i + 1)}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [20, -20, 20],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative container mx-auto px-4 py-12">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#00ff00]/20 to-transparent blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h3 className="text-[#00ff00] font-orbitron text-2xl relative">XYLO</h3>
            </div>
            <p className="text-gray-400 backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-[#00ff00]/10">
              Advancing the future through quantum computing and AI innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
            <h4 className="text-[#00ff00] font-mono flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Features', 'Documentation', 'Blog'].map((item, index) => (
                <motion.li 
                  key={item}
                  onHoverStart={() => setHoverIndex(index)}
                  onHoverEnd={() => setHoverIndex(null)}
                  className="relative"
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00ff00] transition-colors duration-300 flex items-center gap-2"
                  >
                    {hoverIndex === index && (
                      <motion.div
                        layoutId="hover"
                        className="absolute inset-0 bg-[#00ff00]/10 rounded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    <span className="relative">
                      {item}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
            <h4 className="text-[#00ff00] font-mono flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              Resources
            </h4>
            <ul className="space-y-2">
              {['Support', 'Partners', 'Community', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  onHoverStart={() => setHoverIndex(index + 4)}
                  onHoverEnd={() => setHoverIndex(null)}
                  className="relative"
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#00ff00] transition-colors duration-300 flex items-center gap-2"
                  >
                    {hoverIndex === index + 4 && (
                      <motion.div
                        layoutId="hover"
                        className="absolute inset-0 bg-[#00ff00]/10 rounded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    <span className="relative">
                      {item}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
            <h4 className="text-[#00ff00] font-mono flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              Neural Link
            </h4>
            <p className="text-gray-400">Connect to our quantum network</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/30 border border-[#00ff00]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00ff00] pr-24"
              />
              <button className="absolute right-1 top-1 bg-[#00ff00] text-black px-4 py-1 rounded-md hover:bg-[#00cc00] transition-colors duration-300 group">
                <span className="relative z-10">Link</span>
                <motion.div
                  className="absolute inset-0 rounded-md bg-[#00ff00]/40"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#00ff00]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-mono">
              <span className="text-[#00ff00]">&gt;</span> © 2024 XYLO_CORP v2.4.1
            </p>
            <div className="flex gap-6">
              {['Privacy Protocol', 'Terms of Operation', 'Security Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-[#00ff00] transition-colors duration-300 font-mono text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 