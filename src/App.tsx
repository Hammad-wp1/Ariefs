import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Imports - Ensure these filenames are CAPITALIZED on GitHub
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Background from './components/Background';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'pricing': return <Pricing />;
      case 'booking': return <Booking />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      <Background />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 bg-black/80 border-t border-white/5 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2024 Ariefs Uni-sex Salon. 169A Belgravia Road, Athlone.</p>
        </div>
      </footer>
    </div>
  );
}
