import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, MapPin, Clock } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* 3D Stars & Scissors Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div key={i} className="absolute bg-white rounded-full w-[1px] h-[1px]" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
        ))}
        <motion.div className="absolute top-20 left-10 text-yellow-500/20" animate={{ rotateY: 360, y: [0, 40, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}><Scissors size={200} /></motion.div>
        <motion.div className="absolute bottom-20 right-10 text-yellow-500/10" animate={{ rotateY: -360, y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Scissors size={300} /></motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 h-20 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2 font-bold uppercase tracking-tighter text-yellow-500"><Scissors size={28} /><span>Ariefs Salon</span></div>
        <div className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
          {['home', 'pricing', 'booking'].map(id => (
            <button key={id} onClick={() => setActive(id)} className={active === id ? "text-yellow-500" : "text-gray-400"}>{id}</button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {active === 'home' && (
            <motion.div key="h" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4">Ariefs <br /><span className="text-yellow-500 italic">Uni-sex</span> Salon</h1>
              <p className="text-gray-400 text-lg mb-12 max-w-lg">Premium grooming at 169A Belgravia Road, Athlone.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><MapPin className="text-yellow-500" /><span>169A Belgravia Road, Athlone, 7780</span></div>
                <div className="flex items-center gap-4"><Clock className="text-yellow-500" /><span>Mon - Sat: 09:00 - 18:00</span></div>
              </div>
            </motion.div>
          )}

          {active === 'pricing' && (
            <motion.div key="p" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-6">
              <h2 className="text-4xl font-bold uppercase mb-8">Pricing</h2>
              {[
                { n: "Haircut", p: "R 250" }, { n: "Laser", p: "R 450+" }, { n: "Massage", p: "R 600" }, { n: "Waxing", p: "R 150+" }, { n: "Threading", p: "R 80" }
              ].map((s, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-4 text-xl"><span>{s.n}</span><span className="text-yellow-500 font-bold">{s.p}</span></div>
              ))}
            </motion.div>
          )}

          {active === 'booking' && (
            <motion.div key="b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-md mx-auto bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold uppercase mb-6 text-center">Book Now</h2>
              <form onSubmit={(e:any) => { e.preventDefault(); window.open(`https://wa.me/27815391324?text=AppointmentRequest`, '_blank'); }} className="space-y-4">
                <input placeholder="Name" className="w-full bg-black border border-white/20 p-4 rounded-xl outline-none focus:border-yellow-500" required />
                <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl uppercase">WhatsApp Confirm</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
