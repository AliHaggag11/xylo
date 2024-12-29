import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 bg-black/50 
                   backdrop-blur-sm border border-[#00ff00]/20 rounded-lg overflow-hidden
                   hover:border-[#00ff00]/40 transition-colors duration-300"
      >
        {/* Progress indicator */}
        <motion.div
          className="absolute inset-0 origin-bottom bg-[#00ff00]/10"
          style={{ scaleY: scaleX }}
        />

        {/* Corner accents */}
        <div className="absolute inset-0">
          {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((position, i) => (
            <div
              key={i}
              className={`absolute ${position} w-2 h-2 border-[#00ff00]/30`}
              style={{
                borderStyle: 'solid',
                borderWidth: i < 2 ? '1px 0 0 1px' : '0 1px 1px 0'
              }}
            />
          ))}
        </div>

        {/* Arrow icon */}
        <div className="relative">
          <motion.svg
            className="w-6 h-6 text-[#00ff00]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </motion.svg>
        </div>

        {/* Hover effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Scan line */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0 0", "0 100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)',
              backgroundSize: '100% 200%'
            }}
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#00ff00]/5 blur-sm" />
        </div>
      </button>
    </motion.div>
  );
} 