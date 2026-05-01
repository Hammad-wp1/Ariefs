import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Background from './components/Background';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home key="home" />;
      case 'pricing':
        return <Pricing key="pricing" />;
      case 'booking':
        return <Booking key="booking" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-500">
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

      <footer className="relative z-10 bg-black/80 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © 2024 Ariefs Uni-sex Salon. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors">WhatsApp</a>
          </div>
          <div className="text-yellow-500/50 text-xs font-mono uppercase tracking-widest">
            Ariefs Uni-sex Salon | 169A Belgravia Road
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
