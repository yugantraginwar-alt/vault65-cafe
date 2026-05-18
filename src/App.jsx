import { useEffect } from 'react';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Reviews from './components/sections/Reviews';
import Reservation from './components/sections/Reservation';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import AudioController from './components/ui/AudioController';

function App() {
  // Mobile check to disable custom cursor on touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return (
    <SmoothScroll>
      <AudioController />
      <LoadingScreen />
      {!isTouchDevice && <CustomCursor />}
      <Navbar />
      
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-[-1] bg-background pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.03),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <main className="relative w-full overflow-hidden">
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
