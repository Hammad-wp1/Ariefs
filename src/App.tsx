import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, MapPin, Clock, User, Phone, MessageSquare } from 'lucide-react';

// 1. BACKGROUND COMPONENT
const Background = () => {
  const stars = Array.from({ length: 80 });
  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
      {stars.map((_, i) => (
        <motion.div key={i} className="absolute bg-white rounded-full" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }} style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: '1px', height: '1px' }} />
      ))}
      <motion.div className="absolute top-[15%] left-[10%] text-yellow-600/20" animate={{ y: [0, -60, 0], rotateY: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ perspective: '1000px' }}><Scissors size={240} strokeWidth={0.5} /></motion.div>
      <motion.div className="absolute bottom-[20%] right-[15%] text-yellow-500/10" animate={{ y: [0, 80, 0], rotateY: [360, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ perspective: '1000px' }}><Scissors size={350} strokeWidth={0.2} /></motion.div>
    </div>
  );
};

// 2. NAVBAR COMPONENT
const Navbar = ({ activeSection, setActiveSection }: any) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 h-20 flex items-center justify-between px-6">
    <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest cursor-pointer" onClick={() => setActiveSection('home')}>
      <Scissors className="text-yellow-500" size={32} />
      <span className="text-sm md:text-xl">Ariefs Uni-sex Salon</span>
    </div>
    <div className="flex gap-4 md:gap-8">
      {['home', 'pricing', 'booking'].map((id) => (
        <button key={id} onClick={() => setActiveSection(id)} className={`text-[10px] md:text-sm uppercase tracking-widest transition-colors ${activeSection === id ? 'text-yellow-500 font-bold' : 'text-gray-400 hover:text-white'}`}>{id}</button>
      ))}
    </div>
  </nav>
);

// 3. HOME COMPONENT
const Home = () => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">Ariefs <br /><span className="text-yellow-500 italic">Uni-sex</span> <br />Hair Salon</h1>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">Professional styling and grooming for everyone. Located at 169A Belgravia Road, Athlone.</p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-white"><MapPin className="text-yellow-500" /><div><p className="text-xs uppercase text-yellow-500 font-bold">Location</p><p>169A Belgravia Road, Athlone, 7780</p></div></div>
        <div className="flex items-center gap-4 text-white"><Clock className="text-yellow-500" /><div><p className="text-xs uppercase text-yellow-500 font-bold">Hours</p><p>Mon - Sat: 09:00 - 18:00</p></div></div>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 rounded-2xl overflow-hidden border border-yellow-500/30">
      <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" alt="Salon" className="w-full h-[400px] object-cover" />
    </motion.div>
  </div>
);

// 4. PRICING COMPONENT
const Pricing = () => (
  <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-12 uppercase text-center">Service <span className="text-yellow-500">Menu</span></h2>
    <div className="grid grid-cols-1 gap-6 text-white">
      {[
        { name: "Haircut", price: "R 250" },
        { name: "Laser Hair Removal", price: "R 450+" },
        { name: "Massage", price: "R 600" },
        { name: "Waxing", price: "R 150+" },
        { name: "Threading", price: "R 80" }
      ].map((s, i) => (
        <div key={i} className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-xl">{s.name}</span>
          <span className="text-yellow-500 font-bold">{s.price}</span>
        </div>
      ))}
    </div>
  </div>
);

// 5. BOOKING COMPONENT
const Booking = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', dateTime: '', message: '' });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const text = `*New Appointment*%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Time:* ${form.dateTime}`;
    window.open(`https://wa.me/27815391324?text=${text}`, '_blank');
  };
  return (
    <div className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase">Book <span className="text-yellow-500">Appointment</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required placeholder="Name" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white" onChange={e => setForm({...form, name: e.target.value})} />
          <input required placeholder="Phone" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white" onChange={e => setForm({...form, phone: e.target.value})} />
          <select required className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white" onChange={e => setForm({...form, service: e.target.value})}>
            <option value="">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Laser">Laser Hair Removal</option>
            <option value="Massage">Massage</option>
          </select>
          <input required type="datetime-local" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white [color-scheme:dark]" onChange={e => setForm({...form, dateTime: e.target.value})} />
          <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl uppercase">Confirm WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Background />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            {activeSection === 'home' ? <Home /> : activeSection === 'pricing' ? <Pricing /> : <Booking />}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="relative z-10 py-12 text-center text-gray-500 text-xs">
        © 2024 Ariefs Uni-sex Salon | 169A Belgravia Road, Athlone
      </footer>
    </div>
  );
}
