import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, MapPin, Clock, User, Phone, MessageSquare } from 'lucide-react';

// --- ALL-IN-ONE COMPONENTS (NO SEPARATE FILES NEEDED) ---

const Background = () => {
  const stars = Array.from({ length: 50 });
  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
      {stars.map((_, i) => (
        <motion.div key={i} className="absolute bg-white rounded-full w-[1px] h-[1px]" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
      ))}
      <motion.div className="absolute top-20 left-10 text-yellow-600/20" animate={{ rotateY: 360, y: [0, 40, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ perspective: '1000px' }}><Scissors size={200} /></motion.div>
      <motion.div className="absolute bottom-20 right-10 text-yellow-500/10" animate={{ rotateY: -360, y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ perspective: '1000px' }}><Scissors size={300} /></motion.div>
    </div>
  );
};

const Navbar = ({ active, setActive }: any) => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 h-20 flex items-center justify-between px-6 md:px-12">
    <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-white cursor-pointer" onClick={() => setActive('home')}>
      <Scissors className="text-yellow-500" size={28} />
      <span className="text-sm md:text-lg">Ariefs Uni-sex Salon</span>
    </div>
    <div className="flex gap-6 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
      {['home', 'pricing', 'booking'].map(id => (
        <button key={id} onClick={() => setActive(id)} className={active === id ? "text-yellow-500" : "text-gray-400 hover:text-white transition-colors"}>{id}</button>
      ))}
    </div>
  </nav>
);

const Home = () => (
  <motion.div key="h" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
    <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4 leading-none">Ariefs <br /><span className="text-yellow-500 italic">Uni-sex</span> Salon</h1>
    <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed font-light">Professional styling and grooming for everyone. Experience over 15 years of precision at Belgravia's premier salon.</p>
    <div className="space-y-6">
      <div className="flex items-center gap-4 text-white group"><div className="p-3 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20"><MapPin className="text-yellow-500" size={20} /></div><div><p className="text-[10px] uppercase text-yellow-500 font-bold tracking-widest mb-1">Location</p><p className="text-sm">169A Belgravia Road, Athlone, 7780</p></div></div>
      <div className="flex items-center gap-4 text-white group"><div className="p-3 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20"><Clock className="text-yellow-500" size={20} /></div><div><p className="text-[10px] uppercase text-yellow-500 font-bold tracking-widest mb-1">Hours</p><p className="text-sm">Monday - Saturday: 09:00 - 18:00</p></div></div>
    </div>
  </motion.div>
);

const Pricing = () => (
  <motion.div key="p" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid gap-6">
    <h2 className="text-4xl font-bold uppercase mb-8 text-center md:text-left">Service <span className="text-yellow-500">Menu</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-white">
      {[
        { n: "Executive Haircut", p: "R 250" }, { n: "Laser Hair Removal", p: "R 450+" }, { n: "Full Body Massage", p: "R 600" }, { n: "Body Waxing", p: "R 150+" }, { n: "Eyebrow Threading", p: "R 80" }
      ].map((s, i) => (
        <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4 group hover:border-yellow-500/50 transition-colors"><span className="text-lg md:text-xl group-hover:text-yellow-500 transition-colors">{s.n}</span><span className="text-yellow-500 font-bold">{s.p}</span></div>
      ))}
    </div>
  </motion.div>
);

const Booking = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', dateTime: '', message: '' });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const whatsappNumber = "27815391324";
    const text = `*New Appointment Request*%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Date/Time:* ${form.dateTime}%0A*Note:* ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };
  const inputClass = "w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-500 outline-none transition-colors";
  return (
    <motion.div key="b" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-xl mx-auto bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
      <h2 className="text-3xl font-bold uppercase mb-8 text-center">Book Your <span className="text-yellow-500 font-serif italic">Session</span></h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required placeholder="Your Name" className={inputClass} onChange={e => setForm({...form, name: e.target.value})} />
        <input required placeholder="Phone Number" className={inputClass} onChange={e => setForm({...form, phone: e.target.value})} />
        <select required className={inputClass} onChange={e => setForm({...form, service: e.target.value})}>
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Laser">Laser Hair Removal</option>
          <option value="Massage">Full Body Massage</option>
          <option value="Waxing">Waxing</option>
          <option value="Threading">Eyebrow Threading</option>
        </select>
        <input required type="datetime-local" className={inputClass + " [color-scheme:dark]"} onChange={e => setForm({...form, dateTime: e.target.value})} />
        <textarea placeholder="Any special requests?" className={inputClass + " h-32 resize-none"} onChange={e => setForm({...form, message: e.target.value})} />
        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-5 rounded-xl uppercase tracking-[0.2em] shadow-lg shadow-yellow-500/20 transition-all">Confirm Appointment</button>
      </form>
    </motion.div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [active, setActive] = useState('home');
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500/30 selection:text-yellow-500">
      <Background />
      <Navbar active={active} setActive={setActive} />
      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {active === 'home' ? <Home /> : active === 'pricing' ? <Pricing /> : <Booking />}
        </AnimatePresence>
      </main>
      <footer className="relative z-10 py-12 text-center border-t border-white/5 text-gray-500 text-[10px] uppercase tracking-widest">
        © 2024 Ariefs Uni-sex Salon | 169A Belgravia Road, Athlone | +27 81 539 1324
      </footer>
    </div>
  );
}
