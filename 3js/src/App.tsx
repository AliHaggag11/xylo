import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
