import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
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
    <>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.05}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2 + 0.3}
        minPolarAngle={Math.PI / 2 - 0.5}
        touches={{
          ONE: 1, // touch rotate
          TWO: 0  // disable touch zoom/pan
        }}
      />
      <group ref={group}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <CoffeeCup />
        </Float>
        <FloatingBeans count={15} />
        <Particles count={300} />
      </group>
    </>
  );
}
