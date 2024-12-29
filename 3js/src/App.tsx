import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { ModalProvider } from './contexts/ModalContext';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <CustomCursor />
      <ModalProvider>
        <div className="bg-black min-h-screen text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <Footer />
          </motion.div>
        </div>
        <ScrollToTop />
      </ModalProvider>
    </>
  );
}

export default App;
