import { motion } from 'framer-motion';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop', alt: 'Coffee pour', span: 'col-span-1 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop', alt: 'Cafe interior', span: 'col-span-1 row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop', alt: 'Coffee beans', span: 'col-span-2 row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1507133750076-13bf781e6d2a?q=80&w=600&auto=format&fit=crop', alt: 'Barista', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full py-32 bg-surfaceHighlight overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">Gallery</span>
            <div className="w-12 h-[1px] bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Visual <span className="text-primary italic">Journey</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500 rounded-2xl z-20" />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
