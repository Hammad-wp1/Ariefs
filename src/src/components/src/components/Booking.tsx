import { Calendar, User, Phone, Scissors as ScissorsIcon, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', dateTime: '', message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "27815391324";
    const text = `*New Appointment Request - Ariefs Uni-sex Salon*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Preferred Date/Time:* ${formData.dateTime}%0A` +
      `*Note:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
        <h2 className="text-4xl font-bold text-white mb-8 text-center uppercase tracking-tighter">
          Book Your <span className="text-yellow-500">Session</span>
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input required name="name" onChange={handleChange} placeholder="Full Name" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white" />
          <input required name="phone" onChange={handleChange} placeholder="Phone Number" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white" />
          <select required name="service" onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white">
            <option value="">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Waxing">Waxing</option>
            <option value="Massage">Massage</option>
          </select>
          <input required name="dateTime" type="datetime-local" onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white" />
          <textarea name="message" onChange={handleChange} placeholder="Notes" className="md:col-span-2 w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white h-32" />
          <button type="submit" className="md:col-span-2 bg-yellow-500 text-black font-bold py-5 rounded-xl uppercase tracking-widest">
            Send to WhatsApp
          </button>
        </form>
      </motion.div>
    </div>
  );
};


export default Booking;
