import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useRef } from 'react';

const menuItems = [
  { name: 'Espresso', price: '$4.50', desc: 'Rich, intense, and perfectly extracted.' },
  { name: 'Cold Brew', price: '$5.50', desc: 'Slow-steeped for 24 hours, served over ice.' },
  { name: 'Caramel Latte', price: '$6.00', desc: 'Espresso with steamed milk and house caramel.' },
  { name: 'Hazelnut Mocha', price: '$6.50', desc: 'Dark chocolate, hazelnut, espresso, and milk.' },
  { name: 'Nitro Coffee', price: '$6.00', desc: 'Cold brew infused with nitrogen for a creamy finish.' },
  { name: 'Matcha Fusion', price: '$7.00', desc: 'Premium matcha with a shot of espresso and oat milk.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

// 3D Tilt Card Component
function TiltCard({ item, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative p-8 glass rounded-2xl cursor-pointer transition-colors duration-500 overflow-hidden perspective-1000"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{ transform: "translateZ(-10px)" }}
      />
      <div 
        className="absolute -inset-0.5 bg-gradient-to-br from-primary to-transparent opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" 
      />
      
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500">
          <Coffee className="text-primary w-6 h-6" />
        </div>
        
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors">{item.name}</h3>
          <span className="text-primary font-mono group-hover:scale-110 transition-transform">{item.price}</span>
        </div>
        
        <p className="text-muted text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative w-full py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center md:justify-start gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">Signature Menu</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Crafted for <br className="hidden md:block" /> the <span className="text-primary italic">Connoisseur</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
        >
          {menuItems.map((item, index) => (
            <TiltCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
