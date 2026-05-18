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
            {/* Logo Text */}
            <motion.h1 
              className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vault65
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
