import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} id="about" className="relative w-full py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">Our Story</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight"
          >
            A Sanctuary for <br />
            <span className="text-primary italic">Modern Thinkers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted text-lg leading-relaxed mb-8"
          >
            Founded in the heart of the neon district, Vault65 was built on a simple premise: coffee is an experience, not a transaction. We blend artisanal roasting techniques with futuristic ambiance to create a space that inspires.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10"
          >
            <div>
              <p className="text-4xl font-serif text-primary mb-2">10k+</p>
              <p className="text-sm uppercase tracking-widest text-muted">Cups Served</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary mb-2">3</p>
              <p className="text-sm uppercase tracking-widest text-muted">Locations</p>
            </div>
          </motion.div>
        </div>

        {/* Abstract Imagery / Shapes */}
        <div className="order-1 lg:order-2 relative h-[500px] w-full">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[80%] h-[80%] glass rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-surfaceHighlight opacity-50" />
            <div className="relative text-9xl font-serif text-white/5 select-none">65</div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-surfaceHighlight/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl"
          >
             <div className="w-full h-full border border-primary/30 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 group-hover:bg-primary/10" />
               <div className="absolute bottom-4 left-4">
                 <p className="text-white font-serif text-xl">The Vault</p>
                 <p className="text-primary text-sm uppercase tracking-widest mt-1">Est. 2026</p>
               </div>
             </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
