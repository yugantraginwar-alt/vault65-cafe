import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CoffeeCup() {
  const cupRef = useRef();
  const liquidRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (liquidRef.current) {
      // Simulate liquid subtle movement
      liquidRef.current.rotation.z = Math.sin(t * 2) * 0.02;
    }
    if (cupRef.current) {
      cupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={cupRef} position={[0, -1, 0]} scale={1.2}>
      {/* Cup Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 0.8, 2.5, 32, 1, false]} />
        <meshPhysicalMaterial 
          color="#111111" 
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Inner Cup */}
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.15, 0.75, 2.4, 32, 1, false]} />
        <meshPhysicalMaterial 
          color="#0a0a0a" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Coffee Liquid */}
      <mesh ref={liquidRef} position={[0, 1.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.12, 32]} />
        <meshPhysicalMaterial 
          color="#2a1b12" 
          metalness={0.1}
          roughness={0.2}
          transmission={0.5}
          ior={1.5}
          envMapIntensity={1}
        />
      </mesh>

      {/* Cup Handle (Torus) */}
      <mesh position={[1.2, 0.2, 0]} rotation={[0, 0, -0.1]} castShadow receiveShadow>
        <torusGeometry args={[0.5, 0.15, 16, 32, Math.PI]} />
        <meshPhysicalMaterial 
          color="#D4AF37" /* Gold handle */
          metalness={1}
          roughness={0.1}
          clearcoat={1}
        />
      </mesh>
      
      {/* Golden Rim */}
      <mesh position={[0, 1.25, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1.2, 0.05, 16, 64]} />
        <meshPhysicalMaterial 
          color="#D4AF37"
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
