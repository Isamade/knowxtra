"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function AncientLibraryBackground() {
  const pathname = usePathname();

  // Define layout configurations based on current path
  const getPortraitsForRoute = (path: string) => {
    switch (path) {
      case '/about':
        return {
          leftTop: { src: '/images/wole_soyinka_portrait.png', alt: 'Wole Soyinka' },
          leftBottom: { src: '/images/chimamanda_adichie_portrait.png', alt: 'Chimamanda Ngozi Adichie' },
          rightTop: { src: '/images/marie_curie_portrait.png', alt: 'Marie Curie' },
          rightBottom: { src: '/images/grace_alele_portrait.png', alt: 'Grace Alele-Williams' }
        };
      case '/services':
        return {
          leftTop: { src: '/images/albert_einstein_portrait.png', alt: 'Albert Einstein' },
          leftBottom: { src: '/images/grace_alele_portrait.png', alt: 'Grace Alele-Williams' },
          rightTop: { src: '/images/isaac_newton_portrait.png', alt: 'Isaac Newton' },
          rightBottom: { src: '/images/kwame_nkrumah_portrait.png', alt: 'Kwame Nkrumah' }
        };
      case '/events':
        return {
          leftTop: { src: '/images/kwame_nkrumah_portrait.png', alt: 'Kwame Nkrumah' },
          leftBottom: { src: '/images/isaac_newton_portrait.png', alt: 'Isaac Newton' },
          rightTop: { src: '/images/marie_curie_portrait.png', alt: 'Marie Curie' },
          rightBottom: { src: '/images/chimamanda_adichie_portrait.png', alt: 'Chimamanda Ngozi Adichie' }
        };
      case '/':
      default:
        return {
          leftTop: { src: '/images/chinua_achebe_portrait.png', alt: 'Chinua Achebe' },
          leftBottom: { src: '/images/wole_soyinka_portrait.png', alt: 'Wole Soyinka' },
          rightTop: { src: '/images/grace_alele_portrait.png', alt: 'Grace Alele-Williams' },
          rightBottom: { src: '/images/kwame_nkrumah_portrait.png', alt: 'Kwame Nkrumah' }
        };
    }
  };

  const portraits = getPortraitsForRoute(pathname || '/');
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1, 
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* 1. Trompe-l'œil Classical Arch & Vault (Centered at top) */}
      <svg 
        className="ancient-arch"
        viewBox="0 0 1200 400" 
        preserveAspectRatio="xMidYMin slice"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          height: 'auto',
          opacity: 0.08,
          stroke: 'var(--primary-navy)',
          fill: 'none',
          strokeWidth: 0.8
        }}
      >
        {/* Soaring dome ribs and cassettes */}
        <path d="M 100,400 Q 600,-150 1100,400" strokeDasharray="5 5" />
        <path d="M 150,400 Q 600,-100 1050,400" />
        <path d="M 250,400 Q 600,0 950,400" strokeWidth={1.5} />
        <path d="M 350,400 Q 600,100 850,400" />
        <path d="M 450,400 Q 600,200 750,400" strokeDasharray="3 3" />
        
        {/* Radial perspective lines radiating from center */}
        <line x1="600" y1="200" x2="100" y2="400" />
        <line x1="600" y1="200" x2="300" y2="400" />
        <line x1="600" y1="200" x2="500" y2="400" />
        <line x1="600" y1="200" x2="700" y2="400" />
        <line x1="600" y1="200" x2="900" y2="400" />
        <line x1="600" y1="200" x2="1100" y2="400" />
        
        {/* Keystone detail */}
        <rect x="585" y="190" width="30" height="20" rx="2" strokeWidth={1.5} />
        <line x1="600" y1="170" x2="600" y2="190" />
      </svg>

      {/* 2. Left Towering Fluted Column (Responsive, fades out on narrow mobile viewports) */}
      <svg 
        className="ancient-column-left"
        viewBox="0 0 200 1000" 
        preserveAspectRatio="xMinYMin slice"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '18%',
          maxWidth: '220px',
          minWidth: '80px',
          height: '100%',
          opacity: 0.08,
          stroke: 'var(--primary-navy)',
          fill: 'none',
          strokeWidth: 0.8
        }}
      >
        {/* Column capital (Corinthian scrolls and leaves) */}
        <path d="M 20,80 Q 50,60 100,80 Q 150,60 180,80" strokeWidth={1.5} />
        <path d="M 30,100 C 30,70 170,70 170,100" />
        <path d="M 40,120 Q 100,90 160,120" />
        <circle cx="50" cy="70" r="10" />
        <circle cx="150" cy="70" r="10" />
        <path d="M 20,80 L 20,130 L 180,130 L 180,80 Z" strokeWidth={1.2} />
        
        {/* Fluted shaft vertical grooves */}
        <line x1="40" y1="130" x2="40" y2="920" />
        <line x1="60" y1="130" x2="60" y2="920" />
        <line x1="80" y1="130" x2="80" y2="920" />
        <line x1="100" y1="130" x2="100" y2="920" strokeWidth={1.5} />
        <line x1="120" y1="130" x2="120" y2="920" />
        <line x1="140" y1="130" x2="140" y2="920" />
        <line x1="160" y1="130" x2="160" y2="920" />
        
        {/* Column base pedestals */}
        <path d="M 20,920 L 180,920 M 10,935 L 190,935 M 5,950 L 195,950" strokeWidth={1.5} />
        <rect x="5" y="950" width="190" height="40" rx="3" />
      </svg>

      {/* 3. Right Towering Fluted Column */}
      <svg 
        className="ancient-column-right"
        viewBox="0 0 200 1000" 
        preserveAspectRatio="xMaxYMin slice"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '18%',
          maxWidth: '220px',
          minWidth: '80px',
          height: '100%',
          opacity: 0.08,
          stroke: 'var(--primary-navy)',
          fill: 'none',
          strokeWidth: 0.8
        }}
      >
        {/* Column capital */}
        <path d="M 20,80 Q 50,60 100,80 Q 150,60 180,80" strokeWidth={1.5} />
        <path d="M 30,100 C 30,70 170,70 170,100" />
        <path d="M 40,120 Q 100,90 160,120" />
        <circle cx="50" cy="70" r="10" />
        <circle cx="150" cy="70" r="10" />
        <path d="M 20,80 L 20,130 L 180,130 L 180,80 Z" strokeWidth={1.2} />
        
        {/* Fluted shaft grooves */}
        <line x1="40" y1="130" x2="40" y2="920" />
        <line x1="60" y1="130" x2="60" y2="920" />
        <line x1="80" y1="130" x2="80" y2="920" />
        <line x1="100" y1="130" x2="100" y2="920" strokeWidth={1.5} />
        <line x1="120" y1="130" x2="120" y2="920" />
        <line x1="140" y1="130" x2="140" y2="920" />
        <line x1="160" y1="130" x2="160" y2="920" />
        
        {/* Column base pedestals */}
        <path d="M 20,920 L 180,920 M 10,935 L 190,935 M 5,950 L 195,950" strokeWidth={1.5} />
        <rect x="5" y="950" width="190" height="40" rx="3" />
      </svg>

      {/* 4. Library Alexandria Background Shelves & Book Scrolls (Horizontal overlays) */}
      <svg 
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: '180px',
          left: '10%',
          width: '80%',
          height: '65%',
          opacity: 0.05,
          stroke: 'var(--primary-navy)',
          fill: 'none',
          strokeWidth: 0.7
        }}
      >
        {/* Horizontal Wooden Shelf 1 */}
        <line x1="0" y1="150" x2="1000" y2="150" strokeWidth={2} />
        <line x1="0" y1="155" x2="1000" y2="155" strokeWidth={0.5} />
        {/* Book scrolls on Shelf 1 */}
        <path d="M 50,150 L 50,100 A 10,10 0 0,1 70,100 L 70,150 Z" />
        <path d="M 80,150 L 80,90 A 8,8 0 0,1 96,90 L 96,150 Z" />
        <path d="M 105,150 L 125,95 A 9,9 0 0,1 143,101 L 123,150 Z" /> {/* Tilted book */}
        <path d="M 880,150 C 880,110 900,110 900,150" /> {/* Scroll bundle */}
        <circle cx="890" cy="140" r="5" />
        <circle cx="890" cy="125" r="5" />

        {/* Horizontal Wooden Shelf 2 */}
        <line x1="0" y1="350" x2="1000" y2="350" strokeWidth={2} />
        <line x1="0" y1="355" x2="1000" y2="355" strokeWidth={0.5} />
        {/* Books & Astrolabes on Shelf 2 */}
        <rect x="150" y="270" width="25" height="80" rx="1" />
        <rect x="180" y="280" width="22" height="70" rx="1" />
        <rect x="207" y="260" width="30" height="90" rx="1" strokeWidth={1.2} />
        <path d="M 820,350 L 840,300 A 10,10 0 0,1 860,310 L 840,350 Z" /> {/* Tilted book */}
        {/* Faint mechanical compass detail */}
        <circle cx="500" cy="300" r="30" strokeDasharray="3 3" />
        <line x1="500" y1="270" x2="500" y2="330" />
        <line x1="470" y1="300" x2="530" y2="300" />

        {/* Horizontal Wooden Shelf 3 */}
        <line x1="0" y1="520" x2="1000" y2="520" strokeWidth={2} />
        <line x1="0" y1="525" x2="1000" y2="525" strokeWidth={0.5} />
        {/* Scroll rolls stacked */}
        <circle cx="100" cy="510" r="10" />
        <circle cx="120" cy="510" r="10" />
        <circle cx="110" cy="492" r="10" />
      </svg>

      {/* 5. Vintage Intellectual Watermarks scattered behind content */}
      <div className="library-watermark-container">
        {/* Left Top */}
        <div className="library-watermark-wrapper watermark-pos-left-top">
          <img 
            src={portraits.leftTop.src} 
            alt={`${portraits.leftTop.alt} Portrait Watermark`} 
            className="library-watermark-image"
          />
          <span className="library-watermark-label">{portraits.leftTop.alt}</span>
        </div>

        {/* Right Top */}
        <div className="library-watermark-wrapper watermark-pos-right-top">
          <img 
            src={portraits.rightTop.src} 
            alt={`${portraits.rightTop.alt} Portrait Watermark`} 
            className="library-watermark-image"
          />
          <span className="library-watermark-label">{portraits.rightTop.alt}</span>
        </div>

        {/* Left Bottom */}
        <div className="library-watermark-wrapper watermark-pos-left-bottom">
          <img 
            src={portraits.leftBottom.src} 
            alt={`${portraits.leftBottom.alt} Portrait Watermark`} 
            className="library-watermark-image"
          />
          <span className="library-watermark-label">{portraits.leftBottom.alt}</span>
        </div>

        {/* Right Bottom */}
        <div className="library-watermark-wrapper watermark-pos-right-bottom">
          <img 
            src={portraits.rightBottom.src} 
            alt={`${portraits.rightBottom.alt} Portrait Watermark`} 
            className="library-watermark-image"
          />
          <span className="library-watermark-label">{portraits.rightBottom.alt}</span>
        </div>
      </div>
    </div>
  );
}
