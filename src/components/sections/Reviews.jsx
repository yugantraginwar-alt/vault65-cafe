import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Elena R.', text: 'The most immersive cafe experience I’ve ever had. The Nitro Coffee is out of this world, and the ambiance is pure luxury.', rating: 5 },
  { name: 'James T.', text: 'A visual and culinary masterpiece. Perfect place for meetings or just escaping the city noise. The design is incredible.', rating: 5 },
  { name: 'Sarah K.', text: 'I come here just for the atmosphere. It feels like stepping into the future while sipping the best matcha fusion.', rating: 5 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative w-full py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            What They <span className="text-primary italic">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="glass p-8 rounded-2xl relative group hover:border-primary/50 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-primary font-serif">
                  {review.name.charAt(0)}
                </div>
                <span className="text-white font-medium tracking-wide">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
