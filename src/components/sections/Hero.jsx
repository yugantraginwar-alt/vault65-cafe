import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroScene from '../3d/HeroScene';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 three-container" draggable="false">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }} 
          dpr={[1, 1.5]} 
          gl={{ 
            preserveDrawingBuffer: false, 
            powerPreference: "high-performance",
            antialias: true 
          }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (event) => {
              event.preventDefault();
              console.log('WebGL context lost - preventing default crash');
            });
            gl.domElement.addEventListener('webglcontextrestored', () => {
              console.log('WebGL context restored - recovering');
            });
          }}
          style={{ touchAction: 'none' }}
        >
          <color attach="background" args={['#080808']} />
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
          
          <Suspense fallback={null}>
            <HeroScene />
            <Environment preset="city" />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pointer-events-none"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-wider mb-4 drop-shadow-2xl">
            VAULT<span className="text-primary text-glow">65</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light tracking-widest uppercase mb-10 max-w-2xl mx-auto">
            Where Coffee Meets Atmosphere
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          style={{ y: y2 }}
        >
          <a href="#reservation" className="group relative px-8 py-4 bg-primary text-background font-medium uppercase tracking-widest overflow-hidden rounded-full">
            <span className="relative z-10 transition-colors group-hover:text-white">Reserve Table</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
          <a href="#menu" className="group px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 font-medium uppercase tracking-widest rounded-full transition-all hover:bg-white/10 hover:border-primary">
            Explore Menu
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-white/50 writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
