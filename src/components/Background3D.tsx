"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

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

function Book({ position, rotation, color = "#ffffff" }: { position: [number, number, number]; rotation?: [number, number, number]; color?: string }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Pages (white-ish transparent paper block) */}
      <mesh position={[0.02, 0, 0]}>
        <boxGeometry args={[2.96, 0.22, 1.98]} />
        <MeshTransmissionMaterial 
          {...materialProps} 
          color={color} 
          roughness={0.2} 
          transmission={0.9} 
          thickness={0.2}
        />
      </mesh>
      
      {/* Top Cover */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[3.02, 0.02, 2.02]} />
        <MeshTransmissionMaterial {...materialProps} color={color} roughness={0.0} thickness={0.5} />
      </mesh>
      
      {/* Bottom Cover */}
      <mesh position={[0, -0.12, 0]}>
        <boxGeometry args={[3.02, 0.02, 2.02]} />
        <MeshTransmissionMaterial {...materialProps} color={color} roughness={0.0} thickness={0.5} />
      </mesh>
      
      {/* Spine */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.02, 0.26, 2.02]} />
        <MeshTransmissionMaterial {...materialProps} color={color} roughness={0.0} thickness={0.5} />
      </mesh>
    </group>
  );
}

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

      {/* Realistic 3D Books - Floating Glass Stack */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[0, -2, -6]}>
        <group ref={layeredRef}>
          {/* Top book */}
          <Book position={[0, 0.35, 0]} rotation={[0, 0.1, 0]} color="#ffffff" />
          {/* Middle book */}
          <Book position={[0.2, 0, 0.1]} rotation={[0, -0.05, 0]} color="#ffffff" />
          {/* Bottom book */}
          <Book position={[-0.1, -0.35, -0.1]} rotation={[0, 0.2, 0]} color="#ffffff" />
        </group>
      </Float>
    </>
  );
}

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  if (!mounted || isMobile) {
    return (
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: -1, 
          background: 'radial-gradient(circle at 80% 20%, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)', 
          pointerEvents: 'none' 
        }} 
      />
    );
  }

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
