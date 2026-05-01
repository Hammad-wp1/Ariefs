import { Scissors } from 'lucide-react';
const Navbar = ({ activeSection, setActiveSection }: any) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 h-20 flex items-center justify-between px-6">
    <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest cursor-pointer" onClick={() => setActiveSection('home')}>
      <Scissors className="text-yellow-500" size={32} />
      <span>Ariefs Uni-sex Salon</span>
    </div>
    <div className="flex gap-8">
      {['home', 'pricing', 'booking'].map((id) => (
        <button key={id} onClick={() => setActiveSection(id)} className={`text-sm uppercase tracking-widest ${activeSection === id ? 'text-yellow-500' : 'text-gray-400'}`}>
          {id}
        </button>
      ))}
    </div>
  </nav>
);
export default Navbar;
