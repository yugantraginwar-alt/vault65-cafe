import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles({ count = 500 }) {
  const meshRef = useRef();

  // Generate random positions
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        factor: 0.1 + Math.random(),
        speed: 0.01 + Math.random() / 200,
        xFactor: Math.random() - 0.5,
        yFactor: Math.random() - 0.5,
        zFactor: Math.random() - 0.5,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, xFactor, yFactor, zFactor } = particle;
      
      // Update position
      const t = factor + speed;
      particle.factor = t;
      
      // Apply movement
      dummy.position.set(
        particle.position[0] + Math.sin(t * xFactor) * 2,
        particle.position[1] + Math.cos(t * yFactor) * 2,
        particle.position[2] + Math.sin(t * zFactor) * 2
      );
      
      // Twinkle effect
      const scale = Math.max(0.1, Math.sin(t * 10) * 0.15 + 0.1);
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#D4AF37" transparent opacity={0.6} />
    </instancedMesh>
  );
}
