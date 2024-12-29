import { motion } from 'framer-motion';
import { useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

interface LegalDocument {
  title: string;
  content: string;
}

export default function Footer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { openModal } = useModal();
  const [email, setEmail] = useState('');
  const [isLinking, setIsLinking] = useState(false);
  const [linkStatus, setLinkStatus] = useState<'idle' | 'linking' | 'success' | 'error'>('idle');

  const legalDocuments: Record<string, LegalDocument> = {
    'Privacy Protocol': {
      title: 'Privacy Protocol v2.4.1',
      content: `In accordance with Quantum Data Protection Standards (QDPS), XYLO_CORP implements state-of-the-art encryption protocols to safeguard your neural data.

Our quantum-encrypted networks ensure your personal information remains secure across all dimensional planes.

By accessing our services, you acknowledge and consent to the collection and processing of your data through our quantum neural networks.

XYLO_CORP maintains strict compliance with the Inter-Dimensional Data Protection Regulation (IDDPR).`
    },
    'Terms of Operation': {
      title: 'Terms of Operation v2.4.1',
      content: `Welcome to XYLO_CORP's Terms of Operation. By accessing our quantum network, you agree to comply with these terms.

Users must maintain proper quantum entanglement protocols when accessing XYLO services.

XYLO_CORP reserves the right to modify or terminate services across any timeline or dimension.

Unauthorized attempts to breach our quantum firewall will result in immediate neural disconnection.`
    },
    'Security Policy': {
      title: 'Security Policy v2.4.1',
      content: `XYLO_CORP employs advanced quantum encryption algorithms to protect your data across all parallel universes.

Our security measures include:
- Quantum-grade neural firewalls
- Multi-dimensional authentication protocols
- Time-locked encryption keys
- Neural pattern recognition systems

Regular security audits are conducted by certified quantum security specialists.`
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'About', id: 'about' }
  ];

  const resources = [
    { 
      name: 'Neural Interface', 
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeWidth="1.5"/>
          <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      name: 'Quantum Labs', 
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="1.5"/>
          <path d="M12 22v-6" strokeWidth="1.5"/>
          <path d="M12 8L3.3 13 12 18l8.7-5L12 8z" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      name: 'Research Portal', 
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" strokeWidth="1.5"/>
          <circle cx="12" cy="10" r="3" strokeWidth="1.5"/>
          <path d="M12 13v3" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      name: 'AI Network', 
      href: '#',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10" strokeWidth="1.5"/>
          <path d="M20 12a8 8 0 1 0-8 8" strokeWidth="1.5"/>
          <path d="M16 12a4 4 0 1 0-4 4" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  const handleEmailLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLinking) return;

    setIsLinking(true);
    setLinkStatus('linking');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLinkStatus('success');
      setEmail('');
    } catch (error) {
      setLinkStatus('error');
    } finally {
      setIsLinking(false);
      setTimeout(() => setLinkStatus('idle'), 3000);
    }
  };

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-[#00ff00]/10 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Glowing orbs - Hide on mobile */}
      <div className="hidden md:block">
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
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
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
              <h3 className="text-[#00ff00] font-orbitron text-xl md:text-2xl relative">XYLO</h3>
            </div>
            <p className="text-gray-400 backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-[#00ff00]/10 text-sm md:text-base">
              Advancing the future through quantum computing and AI innovation.
            </p>
          </motion.div>

          {/* Quick Links - Show in 2-column grid on small screens */}
          <motion.div 
            className="space-y-4 sm:col-span-2 md:col-span-1"
            variants={fadeInUp}
          >
            <h4 className="text-[#00ff00] font-mono flex items-center gap-2 text-sm md:text-base">
              <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {quickLinks.map((item, index) => (
                <motion.li 
                  key={item.name}
                  onHoverStart={() => setHoverIndex(index)}
                  onHoverEnd={() => setHoverIndex(null)}
                  className="relative"
                >
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors duration-300 flex items-center gap-2 w-full text-left"
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
                      {item.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources - Show in 2-column grid on small screens */}
          <motion.div 
            className="space-y-4 sm:col-span-2 md:col-span-1"
            variants={fadeInUp}
          >
            <h4 className="text-[#00ff00] font-mono flex items-center gap-2 text-sm md:text-base">
              <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              Resources
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {resources.map((item, index) => (
                <motion.li 
                  key={item.name}
                  onHoverStart={() => setHoverIndex(index + quickLinks.length)}
                  onHoverEnd={() => setHoverIndex(null)}
                  className="relative"
                >
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-[#00ff00] transition-colors duration-300 flex items-center gap-2"
                  >
                    {hoverIndex === index + quickLinks.length && (
                      <motion.div
                        layoutId="hover"
                        className="absolute inset-0 bg-[#00ff00]/10 rounded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    {item.icon}
                    <span className="relative">
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4 sm:col-span-2 md:col-span-1"
            variants={fadeInUp}
          >
            <h4 className="text-[#00ff00] font-mono flex items-center gap-2 text-sm md:text-base">
              <span className="inline-block w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" />
              Neural Link
            </h4>
            <p className="text-gray-400 text-sm md:text-base">Connect to our quantum network</p>
            <form onSubmit={handleEmailLink} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isLinking}
                className="w-full bg-black/30 border border-[#00ff00]/30 rounded-lg px-3 md:px-4 py-2 text-white text-sm md:text-base focus:outline-none focus:border-[#00ff00] pr-20 md:pr-24 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              <button 
                type="submit"
                disabled={isLinking || !email}
                className="absolute right-1 top-1 bg-[#00ff00]/10 text-[#00ff00] px-3 md:px-4 py-1 rounded-md 
                         hover:bg-[#00ff00]/20 transition-colors duration-300 group disabled:opacity-50 
                         disabled:cursor-not-allowed overflow-hidden text-sm md:text-base"
              >
                {/* Button content container */}
                <div className="relative">
                  {/* Default state */}
                  <span className={`inline-block transition-transform duration-300 ${linkStatus !== 'idle' ? 'scale-0' : 'scale-100'}`}>
                    Link
                  </span>

                  {/* Linking animation */}
                  {linkStatus === 'linking' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-1 bg-[#00ff00] rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.5, 1],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Success animation */}
                  {linkStatus === 'success' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center text-xs"
                    >
                      <span>LINKED</span>
                      <motion.div
                        className="absolute inset-0 bg-[#00ff00]/20"
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          times: [0, 0.5, 1],
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Error animation */}
                  {linkStatus === 'error' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center text-xs text-red-500"
                    >
                      <span>ERROR</span>
                      <motion.div
                        className="absolute inset-0 bg-red-500/20"
                        animate={{
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          times: [0, 0.5, 1],
                        }}
                      />
                    </motion.div>
                  )}
                </div>

                {/* Background effects */}
                <motion.div
                  className="absolute inset-0 rounded-md bg-[#00ff00]/0"
                  animate={linkStatus === 'linking' ? {
                    background: [
                      'radial-gradient(circle at center, rgba(0,255,0,0.2) 0%, transparent 50%)',
                      'radial-gradient(circle at center, rgba(0,255,0,0.4) 0%, transparent 50%)',
                      'radial-gradient(circle at center, rgba(0,255,0,0.2) 0%, transparent 50%)',
                    ],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </button>

              {/* Connection lines effect */}
              {linkStatus === 'linking' && (
                <div className="absolute -inset-4 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border border-[#00ff00]/30 rounded-lg"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.1, 1.2],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#00ff00]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-mono text-sm md:text-base text-center md:text-left">
              <span className="text-[#00ff00]">&gt;</span> © 2024 XYLO_CORP v2.4.1
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {Object.entries(legalDocuments).map(([key, doc]) => (
                <button
                  key={key}
                  onClick={() => openModal(doc.title, doc.content)}
                  className="text-gray-400 hover:text-[#00ff00] transition-colors duration-300 font-mono text-xs md:text-sm relative group"
                >
                  <span className="relative z-10">{key}</span>
                  <motion.div
                    className="absolute inset-0 bg-[#00ff00]/0 group-hover:bg-[#00ff00]/10 -z-10 rounded"
                    initial={false}
                    animate={{ opacity: [0, 1] }}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 