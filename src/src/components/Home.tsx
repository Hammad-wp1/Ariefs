import { MapPin, Clock } from 'lucide-react';
const Home = () => (
  <div className="pt-32 px-6 max-w-7xl mx-auto">
    <h1 className="text-6xl font-bold text-white mb-6 uppercase">Ariefs <span className="text-yellow-500 italic">Uni-sex</span> Salon</h1>
    <p className="text-gray-400 text-lg mb-12 max-w-lg">15+ years of master styling in Athlone.</p>
    <div className="space-y-4">
      <div className="flex items-center gap-4"><MapPin className="text-yellow-500" /><p>169A Belgravia Road, Athlone</p></div>
      <div className="flex items-center gap-4"><Clock className="text-yellow-500" /><p>Mon - Sat: 09:00 - 18:00</p></div>
    </div>
  </div>
);
export default Home;
