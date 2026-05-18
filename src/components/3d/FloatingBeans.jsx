import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingBeans({ count = 20 }) {
  const groupRef = useRef();

  const beans = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: 0.1 + Math.random() * 0.15,
      speed: 0.2 + Math.random() * 0.5,
    }));
  }, [count]);

  const beanGeometry = useMemo(() => {
    // Approximate a coffee bean shape with a modified sphere
    const geo = new THREE.SphereGeometry(1, 16, 16);
    geo.scale(1, 1.3, 0.8);
    return geo;
  }, []);

  const beanMaterial = useMemo(() => (
    new THREE.MeshStandardMaterial({
      color: '#4A3B32',
      roughness: 0.7,
      metalness: 0.1,
    })
  ), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh, i) => {
        mesh.position.y += Math.sin(t * beans[i].speed + i) * 0.005;
        mesh.rotation.x += 0.01 * beans[i].speed;
        mesh.rotation.y += 0.015 * beans[i].speed;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {beans.map((bean, i) => (
        <mesh
          key={i}
          geometry={beanGeometry}
          material={beanMaterial}
          position={bean.position}
          rotation={bean.rotation}
          scale={bean.scale}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
}
