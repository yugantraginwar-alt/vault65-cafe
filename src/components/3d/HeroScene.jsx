import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';
import CoffeeCup from './CoffeeCup';
import FloatingBeans from './FloatingBeans';
import Particles from './Particles';

export default function HeroScene() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t / 4) / 4;
      group.current.rotation.x = Math.cos(t / 4) / 8;
    }
  });

  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <group ref={group}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <CoffeeCup />
        </Float>
        <FloatingBeans count={15} />
        <Particles count={300} />
      </group>
    </PresentationControls>
  );
}
