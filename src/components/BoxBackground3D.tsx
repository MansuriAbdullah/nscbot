import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleMesh = () => {
  const meshRef = useRef<THREE.Points>(null!);
  
  // Create 3D particles spreading inside the box
  const particlesCount = 150;
  const positions = new Float32Array(particlesCount * 3);
  
  React.useMemo(() => {
    for(let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 8;
    }
  }, [particlesCount, positions]);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00ff41" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

const BoxBackground3D: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.5 }}>
      <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 2]}>
        <ParticleMesh />
      </Canvas>
    </div>
  );
};

export default BoxBackground3D;
