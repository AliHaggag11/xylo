import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', url: '#', icon: <FaGithub /> },
  { name: 'Twitter', url: '#', icon: <FaTwitter /> },
  { name: 'LinkedIn', url: '#', icon: <FaLinkedin /> },
  { name: 'Discord', url: '#', icon: <FaDiscord /> }
];

const footerLinks = [
  { name: 'About', url: '#' },
  { name: 'Features', url: '#' },
  { name: 'Documentation', url: '#' },
  { name: 'Contact', url: '#' }
];

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.8, 1], [50, 0]);

  return (
    <footer className="relative overflow-hidden">
      {/* Alien Tech Background */}
      <div className="absolute inset-0 bg-[#000a05]">
        {/* Hexagonal Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='2' stroke='%2300ff00' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[200px] h-[200px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, transparent 70%)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              animation: `float ${10 + i * 2}s infinite ease-in-out ${i * 1.5}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000a05] via-transparent to-[#000a05]/90" />
      </div>

      {/* Alien Tech Border */}
      <div className="relative border-t border-[#00ff00]/20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff00]/30 to-transparent" />
        {/* Multiple scanning lines with different speeds and directions */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="w-20 h-px absolute -top-px"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(0,255,0,${0.3 + i * 0.2}), transparent)`,
              animation: `moveRight ${4 + i * 2}s linear infinite ${i * 1.5}s`,
              left: i % 2 === 0 ? '0' : 'auto',
              right: i % 2 === 0 ? 'auto' : '0',
              transform: i % 2 === 0 ? 'none' : 'rotate(180deg)'
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity, y }}
        className="relative max-w-7xl mx-auto py-16 px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            <motion.div 
              animate={{ 
                boxShadow: ['0 0 0 rgba(0,255,0,0.2)', '0 0 30px rgba(0,255,0,0.2)', '0 0 0 rgba(0,255,0,0.2)']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-[#00ff00]/20
                       hover:border-[#00ff00]/40 transition-all duration-500"
            >
              {/* Animated Corner Accents */}
              {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map((position, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className={`absolute ${position} w-6 h-6 border-2 border-[#00ff00]/40`}
                  style={{
                    borderTopWidth: i < 2 ? '2px' : '0',
                    borderRightWidth: i % 2 === 1 ? '2px' : '0',
                    borderBottomWidth: i >= 2 ? '2px' : '0',
                    borderLeftWidth: i % 2 === 0 ? '2px' : '0'
                  }}
                />
              ))}
              
              <h3 className="text-3xl font-orbitron bg-clip-text text-transparent 
                          bg-gradient-to-r from-[#00ff00] to-[#00cc00]
                          group-hover:from-[#00ff00] group-hover:to-[#00ff00]
                          transition-all duration-300 relative">
                <motion.span 
                  className="absolute -left-4 top-1/2 w-2 h-2 bg-[#00ff00]/50 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Xylo
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Advancing the future of robotics through biomimetic innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* Social Links with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-orbitron text-[#00ff00]/80 flex items-center gap-2">
              <motion.span 
                className="w-1 h-1 bg-[#00ff00] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Connect
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="relative group"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-[#00ff00]/20 rounded-full blur-xl opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative text-2xl text-gray-400 hover:text-[#00ff00] 
                               transition-colors duration-300
                               p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-[#00ff00]/20
                               group-hover:border-[#00ff00]/40">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-orbitron text-[#00ff00]/80 flex items-center gap-2">
              <motion.span 
                className="w-1 h-1 bg-[#00ff00] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.url}
                    className="relative group flex items-center text-gray-400 hover:text-[#00ff00] 
                             transition-colors duration-300 p-2"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-[#00ff00]/5 opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300" 
                    />
                    <motion.span 
                      className="absolute left-0 w-0 h-full bg-[#00ff00]/10
                               group-hover:w-full transition-all duration-300"
                    />
                    <span className="relative flex items-center gap-2">
                      <motion.span 
                        className="w-1 h-1 bg-[#00ff00]/50 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                      {link.name}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative mt-16 pt-8 border-t border-[#00ff00]/10"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,255,0,0.2), transparent)'
            }}
            animate={{
              backgroundPosition: ['200% 0', '-200% 0']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <p className="text-center text-gray-500 font-orbitron">
            &copy; {new Date().getFullYear()} Xylo. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
} 