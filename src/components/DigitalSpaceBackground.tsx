'use client';

import React, { useState, useEffect } from 'react';
import styles from './DigitalSpaceBackground.module.css';

export default function DigitalSpaceBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax displacement hook
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientWidth, clientHeight } = document.documentElement;
      const x = (e.clientX / clientWidth) - 0.5;
      const y = (e.clientY / clientHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.digitalWrapper}>
      {/* 1. Immersive Atmospheric Neon Mesh Gradients (Mesh of glowing nebulas behind the grid) */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />
      <div className={styles.ambientGlowCenter} />

      {/* 2. Global cybernetic coordinate grid with Parallax displacement */}
      <div 
        className={styles.digitalGrid} 
        style={{
          transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`
        }}
      />

      {/* 3. Stylized Portrait of Albert Einstein cybernetic watermark */}
      <div 
        className={styles.figureWatermarkLeft}
        style={{
          transform: `translate3d(${mousePos.x * -42}px, ${mousePos.y * -42}px, 0)`
        }}
      >
        <img 
          src="/images/einstein_cybernetic_transparent.png" 
          alt="Albert Einstein Cybernetic Sketch Watermark" 
          className={styles.watermarkImage}
        />
      </div>

      {/* 4. Stylized Sketch of Leonardo da Vinci Flight Schematic watermark */}
      <div 
        className={styles.figureWatermarkRight}
        style={{
          transform: `translate3d(${mousePos.x * -48}px, ${mousePos.y * -48}px, 0)`
        }}
      >
        <img 
          src="/images/davinci_cybernetic_transparent.png" 
          alt="Leonardo da Vinci Flight Schematic Watermark" 
          className={styles.watermarkImage}
        />
      </div>

      {/* 5. Fluid Glowing Cybernetic Light Waves (Inspired by Sidewave neon wave paths) */}
      <div 
        className={styles.wavesContainer}
        style={{
          transform: `translate3d(${mousePos.x * -50}px, ${mousePos.y * -50}px, 0) rotate(${mousePos.x * 2.5}deg)`
        }}
      >
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.waveSvg}>
          <path d="M-100 380 C 350 120, 750 580, 1540 220" stroke="url(#gradient-primary)" strokeWidth="8" strokeLinecap="round" className={styles.wavePath1} />
          <path d="M-100 250 C 450 510, 850 90, 1540 410" stroke="url(#gradient-accent)" strokeWidth="6" strokeLinecap="round" className={styles.wavePath2} />
          <defs>
            <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F1635" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#E03A3E" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0F1635" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E03A3E" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0F1635" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E03A3E" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 6. Highly Graphic Topological Global Knowledge Vector Map (Constellation Graph) */}
      <div 
        className={styles.constellationWrapper}
        style={{
          transform: `translate3d(${mousePos.x * -42}px, ${mousePos.y * -42}px, 0)`
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1400 800" fill="none" className={styles.constellationSvg}>
          {/* Orbital paths */}
          <circle cx="280" cy="400" r="160" stroke="var(--border-color)" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="5 5" />
          <circle cx="280" cy="400" r="280" stroke="var(--color-primary)" strokeWidth="1.5" strokeOpacity="0.08" />
          <circle cx="1120" cy="400" r="180" stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="12 6" />

          {/* Network constellation paths */}
          <path d="M150 250 L280 180 L420 300 L280 400 Z" stroke="var(--border-color)" strokeWidth="1.5" strokeOpacity="0.2" fill="var(--color-primary)" fillOpacity="0.015" />
          <path d="M280 400 L420 300 L550 480 L350 550 Z" stroke="var(--border-color)" strokeWidth="1.5" strokeOpacity="0.2" fill="var(--color-accent)" fillOpacity="0.01" />
          
          <path d="M980 320 L1120 220 L1250 350 L1120 480 Z" stroke="var(--border-color)" strokeWidth="1.5" strokeOpacity="0.2" fill="var(--color-accent)" fillOpacity="0.015" />

          {/* Glowing nodes / vertices */}
          <circle cx="280" cy="180" r="5" fill="var(--color-primary)" className={styles.glowingVertice} />
          <circle cx="420" cy="300" r="6" fill="var(--color-accent)" className={styles.glowingVertice} />
          <circle cx="150" cy="250" r="4" fill="var(--color-primary)" />
          <circle cx="350" cy="550" r="5.5" fill="var(--color-primary)" />
          <circle cx="550" cy="480" r="6" fill="var(--color-accent)" className={styles.glowingVertice} />
          
          <circle cx="1120" cy="220" r="6" fill="var(--color-accent)" className={styles.glowingVertice} />
          <circle cx="980" cy="320" r="5" fill="var(--color-primary)" />
          <circle cx="1250" cy="350" r="5.5" fill="var(--color-accent)" />
          <circle cx="1120" cy="480" r="4" fill="var(--color-primary)" />

          {/* Holographic coordinate readouts floating in coordinate space */}
          <text x="300" y="175" fill="var(--text-main)" fillOpacity="0.4" fontSize="10" fontFamily="monospace">KNOW_CORE_V.09</text>
          <text x="440" y="305" fill="var(--color-accent)" fillOpacity="0.5" fontSize="10" fontFamily="monospace">TX_RATE: 4.8GB/S</text>
          <text x="1140" y="215" fill="var(--color-accent)" fillOpacity="0.5" fontSize="10" fontFamily="monospace">SYS.SUMMIT_NODE</text>
        </svg>
      </div>

      {/* 7. Microchip Circuit Columns (Interactive depth) */}
      <div 
        className={styles.circuitColumnLeft}
        style={{ transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)` }}
      >
        <svg viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.circuitSvg}>
          <path d="M10 0 V300 L40 330 V450 L15 475 V600 L50 635 V800" stroke="var(--border-color)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 3" />
          <circle cx="40" cy="330" r="4.5" fill="var(--color-primary)" fillOpacity="0.8" />
          <circle cx="15" cy="475" r="5" fill="var(--color-primary)" fillOpacity="0.9" />
        </svg>
      </div>

      <div 
        className={styles.circuitColumnRight}
        style={{ transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)` }}
      >
        <svg viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.circuitSvg}>
          <path d="M90 0 V300 L60 330 V450 L85 475 V600 L50 635 V800" stroke="var(--border-color)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 3" />
          <circle cx="60" cy="330" r="4.5" fill="var(--color-primary)" fillOpacity="0.8" />
          <circle cx="85" cy="475" r="5" fill="var(--color-primary)" fillOpacity="0.9" />
        </svg>
      </div>

      {/* 8. Horizontal Information flow Rails (Digital Shelves) */}
      <div className={styles.dataShelfTop}>
        <div className={styles.dataRail} />
        <div className={styles.dataNodeRow}>
          <span className={styles.glowingNode} style={{ animationDelay: '0s' }} />
          <span className={styles.glowingNode} style={{ animationDelay: '3s' }} />
          <span className={styles.glowingNode} style={{ animationDelay: '6s' }} />
        </div>
      </div>

      <div className={styles.dataShelfBottom}>
        <div className={styles.dataRail} />
        <div className={styles.dataNodeRow}>
          <span className={styles.glowingNode} style={{ animationDelay: '1.5s' }} />
          <span className={styles.glowingNode} style={{ animationDelay: '4.5s' }} />
          <span className={styles.glowingNode} style={{ animationDelay: '7.5s' }} />
        </div>
      </div>
    </div>
  );
}
