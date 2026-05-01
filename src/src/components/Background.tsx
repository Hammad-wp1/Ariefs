import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const StarBackground = () => {
  const stars = Array.from({ length: 80 });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{ opacity: Math.random(), scale: Math.random() * 0.5 + 0.1 }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 3 === 0 ? '3px' : '1px',
            height: i % 3 === 0 ? '3px' : '1px',
            boxShadow: i % 5 === 0 ? '0 0 10px rgba(255, 255, 255, 0.8)' : 'none',
          }}
        />
      ))}
      
      <motion.div
        className="absolute top-[15%] left-[10%] text-yellow-600/20"
        animate={{
          y: [0, -60, 0],
          rotateY: [0, 360],
          rotateZ: [0, 15, -15, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ perspective: '1000px' }}
      >
        <Scissors size={240} strokeWidth={0.5} />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[15%] text-yellow-500/10"
        animate={{
          y: [0, 80, 0],
          rotateY: [360, 0],
          rotateX: [0, 45, 0],
          scale: [1.2, 0.9, 1.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ perspective: '1000px' }}
      >
        <Scissors size={350} strokeWidth={0.2} />
      </motion.div>
    </div>
  );
};


export default StarBackground;
