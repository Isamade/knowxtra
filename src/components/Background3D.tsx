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

function Book({ position, rotation, color = "#FAF5EB", coverColor = "#FF3B00" }: { position: [number, number, number]; rotation?: [number, number, number]; color?: string; coverColor?: string }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Pages (white-ish transparent paper block) */}
      <mesh position={[0.02, 0, 0]}>
        <boxGeometry args={[2.96, 0.22, 1.98]} />
        <MeshTransmissionMaterial 
          {...materialProps} 
          color={color} 
          roughness={0.25} 
          transmission={0.8} 
          thickness={0.3}
        />
      </mesh>
      
      {/* Top Cover */}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[3.02, 0.02, 2.02]} />
        <MeshTransmissionMaterial {...materialProps} color={coverColor} roughness={0.15} thickness={0.5} />
      </mesh>
      
      {/* Bottom Cover */}
      <mesh position={[0, -0.12, 0]}>
        <boxGeometry args={[3.02, 0.02, 2.02]} />
        <MeshTransmissionMaterial {...materialProps} color={coverColor} roughness={0.15} thickness={0.5} />
      </mesh>
      
      {/* Spine */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.02, 0.26, 2.02]} />
        <MeshTransmissionMaterial {...materialProps} color={coverColor} roughness={0.15} thickness={0.5} />
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
      {/* Abstract "Global Knowledge / Brain" - Brand Red-Orange Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-6, 1, -4]}>
        <mesh ref={sphereRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshTransmissionMaterial {...materialProps} color="#FF3B00" />
        </mesh>
      </Float>

      {/* Futuristic Concentric Orbits (Representing Scientific Nodes) around Sphere */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1} position={[-6, 1, -4]}>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.2, 0.03, 8, 64]} />
          <meshBasicMaterial color="#FF3B00" transparent opacity={0.25} />
        </mesh>
      </Float>

      {/* Abstract "Corporate Structure / Diamond" - Brand Deep Navy Octahedron */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[5, 2, -5]}>
        <mesh ref={octaRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshTransmissionMaterial {...materialProps} color="#0F1635" />
        </mesh>
      </Float>

      {/* Futuristic Concentric Orbits around Octahedron */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5} position={[5, 2, -5]}>
        <mesh rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
          <torusGeometry args={[2.2, 0.03, 8, 64]} />
          <meshBasicMaterial color="#0F1635" transparent opacity={0.2} />
        </mesh>
      </Float>

      {/* Floating Single Book Left */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8} position={[-4, -2.2, -5]}>
        <Book position={[0, 0, 0]} rotation={[0.4, 0.5, -0.2]} />
      </Float>

      {/* Floating Single Book Right */}
      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={1.4} position={[4.5, -1, -5.5]}>
        <Book position={[0, 0, 0]} rotation={[-0.3, -0.6, 0.4]} />
      </Float>

      {/* Realistic 3D Books - Floating Gold/Cream Stack */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[0, -2, -6]}>
        <group ref={layeredRef}>
          {/* Top book */}
          <Book position={[0, 0.35, 0]} rotation={[0, 0.1, 0]} />
          {/* Middle book */}
          <Book position={[0.2, 0, 0.1]} rotation={[0, -0.05, 0]} />
          {/* Bottom book */}
          <Book position={[-0.1, -0.35, -0.1]} rotation={[0, 0.2, 0]} />
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
          background: 'radial-gradient(circle at 80% 20%, #FDFBF7 0%, #FAF5EB 50%, #F2ECDC 100%)', 
          pointerEvents: 'none' 
        }} 
      />
    );
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={3.5} color="#FAF0E6" />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#FFF5EE" />
        <directionalLight position={[-10, -10, -5]} intensity={2.5} color="#FFEBCD" />
        
        <FloatingGeometry />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -4, 0]} opacity={0.06} scale={30} blur={2.5} far={10} color="#161C24" />
      </Canvas>
    </div>
  );
}
