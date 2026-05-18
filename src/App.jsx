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

function App() {
  // Mobile check to disable custom cursor on touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return (
    <>
      <LoadingScreen />
      {!isTouchDevice && <CustomCursor />}
      <Navbar />
      
      <main className="relative w-full bg-background overflow-hidden">
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}

export default App;
