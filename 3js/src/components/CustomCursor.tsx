import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);
  
  // Even more responsive spring settings
  const springConfig = { damping: 12, stiffness: 1200, mass: 0.2 };
  
  // Separate spring configs for dot and trailer
  const dotSpringConfig = { ...springConfig, mass: 0.1 };
  const trailerSpringConfig = { ...springConfig, damping: 20 };
  
  const cursorXSpring = useSpring(cursorX, dotSpringConfig);
  const cursorYSpring = useSpring(cursorY, dotSpringConfig);
  
  const trailerXSpring = useSpring(cursorX, trailerSpringConfig);
  const trailerYSpring = useSpring(cursorY, trailerSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(
        cursorX.get(),
        cursorY.get()
      );
      
      if (hoveredElement) {
        const isClickable = 
          hoveredElement.tagName.toLowerCase() === 'button' ||
          hoveredElement.tagName.toLowerCase() === 'a' ||
          hoveredElement.tagName.toLowerCase() === 'input' ||
          hoveredElement.closest('button') ||
          hoveredElement.closest('a') ||
          hoveredElement.closest('[role="button"]');
        
        setIsPointer(!!isClickable);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', updateCursorType);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', updateCursorType);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Core cursor */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          {/* Center dot */}
          <div className="w-1 h-1 bg-white rounded-full" />
          
          {/* Inner ring */}
          <motion.div
            className="absolute w-4 h-4 border border-white rounded-full"
            animate={{
              scale: isPointer ? 1.2 : [0.8, 1.1, 0.8],
              opacity: isPointer ? 0.5 : 1,
            }}
            transition={{
              scale: {
                duration: isPointer ? 0.15 : 2,
                repeat: isPointer ? 0 : Infinity,
                ease: isPointer ? "easeInOut" : "linear",
              },
              opacity: { duration: 0.15 },
            }}
          />

          {/* Click indicator */}
          {isPointer && (
            <motion.div
              className="absolute w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <div className="absolute inset-0 border border-white/50 rounded-full" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Trailer effect */}
      <motion.div
        className="fixed pointer-events-none z-[99] mix-blend-difference"
        style={{
          x: trailerXSpring,
          y: trailerYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-8 h-8 border border-white/20 rounded-full"
          animate={{
            scale: isPointer ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
} 