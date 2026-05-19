"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const layeredRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t / 2) * 0.5;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.2;
      octaRef.current.rotation.y = t * 0.2;
    }
    if (layeredRef.current) {
      layeredRef.current.rotation.x = Math.sin(t / 3) * 0.2 + 0.2;
      layeredRef.current.rotation.y = t * 0.1;
    }
  });

  const materialProps = {
    thickness: 0.5,
    roughness: 0,
    transmission: 0.95,
    transparent: true,
    opacity: 0.8,
    ior: 1.1,
    chromaticAberration: 0.05,
    backside: true,
  };

  return (
    <>
      {/* Abstract "Global Knowledge / Brain" - Crystal Clear Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-6, 1, -4]}>
        <mesh ref={sphereRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshTransmissionMaterial {...materialProps} color="#ffffff" />
        </mesh>
      </Float>

      {/* Abstract "Corporate Structure / Diamond" - Octahedron */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[5, 2, -5]}>
        <mesh ref={octaRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshTransmissionMaterial {...materialProps} color="#ffffff" />
        </mesh>
      </Float>

      {/* Abstract "Books / Documents" - Layered Glass Plates */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[0, -2, -6]}>
        <group ref={layeredRef}>
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[3, 0.1, 2]} />
            <MeshTransmissionMaterial {...materialProps} color="#ffffff" />
          </mesh>
          <mesh position={[0.2, 0, 0.2]}>
            <boxGeometry args={[3, 0.1, 2]} />
            <MeshTransmissionMaterial {...materialProps} color="#ffffff" />
          </mesh>
          <mesh position={[-0.2, -0.4, -0.2]}>
            <boxGeometry args={[3, 0.1, 2]} />
            <MeshTransmissionMaterial {...materialProps} color="#ffffff" />
          </mesh>
        </group>
      </Float>
    </>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={3} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ffffff" />
        
        <FloatingGeometry />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -4, 0]} opacity={0.05} scale={30} blur={2.5} far={10} color="#0F172A" />
      </Canvas>
    </div>
  );
}
