import { motion } from 'framer-motion';

export default function Reservation() {
  return (
    <section id="reservation" className="relative w-full py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Reserve Your <span className="text-primary italic">Experience</span>
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed max-w-md">
              Secure your spot in the most sought-after atmosphere in the city. Walk-ins are welcome, but reservations guarantee the best seats.
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          
          <form className="relative z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Name</label>
                <input type="text" className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Guests</label>
                <select className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4+ People</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Date</label>
                <input type="date" className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Time</label>
                <input type="time" className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]" />
              </div>
            </div>

            <button type="button" className="mt-4 w-full py-4 bg-primary text-background font-medium uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-colors hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Confirm Reservation
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
