import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-background pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-serif font-semibold text-white tracking-wider flex items-center gap-2 mb-6">
              VAULT<span className="text-primary">65</span>
            </a>
            <p className="text-muted max-w-md leading-relaxed">
              Experience the intersection of exceptional coffee and futuristic design. A sanctuary for those who appreciate the finer details.
            </p>
          </div>
          
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6 font-semibold">Visit Us</h4>
            <ul className="text-muted space-y-4 text-sm">
              <li>Sector 7, Neo District</li>
              <li>Cyber City, 2045</li>
              <li>Mon-Sun: 7am - 11pm</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm mb-6 font-semibold">Social</h4>
            <ul className="text-muted space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; 2026 Vault65 Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
      
      {/* Huge background text */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02]">
        <span className="text-[15vw] font-serif font-bold whitespace-nowrap">VAULT65</span>
      </div>
    </footer>
  );
}
