import { useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';

export default function AudioController() {
  const { soundEnabled } = useStore();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      // High-quality ambient cafe sound
      audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_f523c9ce47.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
    }

    const audio = audioRef.current;

    if (soundEnabled) {
      audio.play().catch(() => {
        // Handle autoplay policy blocks smoothly
        console.log("Audio autoplay blocked by browser.");
      });
      
      // Smooth fade in
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 100);
    } else {
      // Smooth fade out
      let vol = audio.volume;
      const fade = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05;
          audio.volume = vol;
        } else {
          audio.pause();
          clearInterval(fade);
        }
      }, 100);
    }
  }, [soundEnabled]);

  return null;
}
