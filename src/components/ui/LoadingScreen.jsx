import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = useStore();
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Auto hide after a brief delay for cinematic effect
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Cinematic smoke/glow behind logo */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Logo Text with tracking animation */}
            <motion.h1 
              className="text-4xl md:text-6xl font-serif text-white uppercase mb-8 relative z-10"
              initial={{ opacity: 0, filter: "blur(10px)", tracking: "0em" }}
              animate={{ opacity: 1, filter: "blur(0px)", tracking: "0.2em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ letterSpacing: "0.2em" }}
            >
              Vault<span className="text-primary">65</span>
            </motion.h1>
            
            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-surfaceHighlight rounded-full overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
            
            {/* Percentage */}
            <motion.p 
              className="text-primary font-mono text-sm tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(progress, 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
