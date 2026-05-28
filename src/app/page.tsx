"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Presentation, Library, Globe } from "lucide-react";
import DigitalSpaceBackground from "../components/DigitalSpaceBackground";
import styles from "./page.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function DecryptedText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+*}>%@{}$";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3; // Decrypting speed
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
}

export default function Home() {
  const [rollIndex, setRollIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showCursor, setShowCursor] = useState(false);

  const rollCopies = [
    "Human Capacity.",
    "Strategic Policy.",
    "Global Summits.",
    "Academic Journals."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRollIndex((prev) => (prev + 1) % rollCopies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Realistic interactive digital space grid, binary stream columns and microchip traces background */}
        <DigitalSpaceBackground />
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.heroCentered}>
            {/* Centered Editorial masthead eyebrow */}
            <motion.div 
              className={styles.eyebrow} 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              ★ THE KNOWXTRA ADVANTAGE ★
            </motion.div>
            
            {/* Centered Large Title */}
            <motion.h1 
              className={`${styles.heroTitleCentered} text-3d`} 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              The Future of <br />
              <span className={styles.rollWrapperCentered}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rollIndex}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -35, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3d-gold"
                    style={{ display: "inline-block" }}
                  >
                    <DecryptedText text={rollCopies[rollIndex]} />
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Centered Newspaper Double Divider */}
            <motion.hr 
              className={styles.heroDividerCentered} 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            />
            
            {/* Centered Subtitle */}
            <motion.p 
              className={`${styles.heroSubtitleCentered} drop-cap`} 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              We are raising the profile of our clients to global standards. Through our cutting-edge network and state-of-the-art initiatives, we generate significant intellectual, social, economic, and political values across all administrative and corporate sectors by synthesizing classical human knowledge with advanced, futuristic technology.
            </motion.p>
            
            {/* Centered CTA Buttons */}
            <motion.div 
              className={styles.heroButtonsCentered} 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Link href="/services" style={{ background: 'var(--primary-navy)', color: '#fff', padding: '1rem 2.2rem', borderRadius: '4px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.65rem', border: '1px solid var(--primary-navy)' }}>
                Discover Initiatives <ArrowRight size={16} />
              </Link>
              <Link href="/about" style={{ background: 'transparent', color: 'var(--primary-navy)', padding: '1rem 2.2rem', borderRadius: '4px', fontWeight: 600, border: '1px solid var(--border-color)', transition: 'background-color 0.3s' }} className={styles.visionBtn}>
                Our Vision
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cinematic Video Placeholder */}
      <section className="container">
        <motion.div 
          className={styles.videoSection}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Unsplash beautiful placeholder video (using an image to simulate video for now or actual html5 video) */}
          <video className={styles.videoElement} autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80">
            {/* If we had a real video URL, we'd put it here */}
          </video>
          <div className={styles.videoOverlay}>
            <h2 className={styles.videoTitle}>Global Standards. Local Impact.</h2>
            <p style={{ maxWidth: '600px', fontSize: '1.2rem', opacity: 0.9 }}>
              Experience the pinnacle of corporate training and governmental consultation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Dynamic Codex Tab Grid (Plateau Style Integration) */}
      <section style={{ padding: 'var(--spacing-lg) 0 var(--spacing-xl)' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div style={{ maxWidth: '600px', marginBottom: 'var(--spacing-lg)' }}>
              <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-heading)', marginBottom: '1rem', letterSpacing: '-1px' }}>
                Our Core Activities
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
                Explore our sophisticated suite of services designed to elevate institutions worldwide.
              </motion.p>
            </div>

            <CodexTabGrid />
          </motion.div>
        </div>
      </section>
      {/* Breathtaking interactive cursor trail inspired by Sidewave */}
      {showCursor && (
        <div
          className={styles.cursorTrail}
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        />
      )}
    </>
  );
}

// Separate component for standard state handling
function CodexTabGrid() {
  const [activeTab, setActiveTab] = useState(0);

  const sectors = [
    {
      title: "Capacity Development",
      icon: <Users size={22} />,
      tagline: "Elevating human capacity in Lagos, Abuja & across the Federation",
      desc: "High-end corporate training tailored to raise performance indices of Nigerian businesses and ministries to international standards. Elevating workforce productivity across critical economic hubs like Ikeja, Lekki, and Port Harcourt.",
      objectives: [
        { label: "Target Scope", value: "15,000+ Nigerian Professionals Reskilled" },
        { label: "Methodology", value: "LBS-aligned cohort curricula & field assessments" }
      ],
      checkmarks: ["Lekki & Ikeja executive hubs", "Interactive capacity diagnostics", "Federal & state ministry partnerships"],
      img: "/images/capacity_dev.png"
    },
    {
      title: "Global Conferences",
      icon: <Presentation size={22} />,
      tagline: "Flagship summits bridging Lagos, Abuja, Accra & London",
      desc: "Immersive high-impact conferences bringing together industry giants, Nigerian policy directors, and global visionaries. Elevate your strategic networking and regional administrative benchmarking at our premium national convenings.",
      objectives: [
        { label: "Key Hubs", value: "Abuja Transcorp Hilton & Lagos Eko Hotel stages" },
        { label: "Target Audience", value: "NASS Members, Policy Directors & Captains of Industry" }
      ],
      checkmarks: ["Lagos & Abuja roundtable panels", "Facilitator-led policy clinics", "Inter-border corporate partnerships"],
      img: "/images/global_conf.png"
    },
    {
      title: "Good Governance",
      icon: <Globe size={22} />,
      tagline: "Public sector optimization & administrative transparency",
      desc: "Flagship consulting frameworks helping Nigerian local, state, and federal administrative bodies audit operations and engage citizens transparently. Spearheading integrity assessment indices for progressive civic administration.",
      objectives: [
        { label: "Framework", value: "Citizen-centered legislative advisory guides" },
        { label: "Audits", value: "Integrity metrics in local government areas (LGAs)" }
      ],
      checkmarks: ["State & LGA audit guides", "Integrity assessment indices", "Direct citizen communication channels"],
      img: "/images/good_gov.png"
    },
    {
      title: "Publishing & Archives",
      icon: <BookOpen size={22} />,
      tagline: "African academic journals & strategic handbooks",
      desc: "Rigorous curation of peer-reviewed research, economic blueprints, and legislative histories. Spearheading African academic documentation, economic records, and digital archives from our Lagos headquarters.",
      objectives: [
        { label: "Scale", value: "Annual African Governance Journals" },
        { label: "Key Focus", value: "Nigerian macro-economics & sub-national policy research" }
      ],
      checkmarks: ["Nigerian economic guides", "Academic journal collaborations", "Digital knowledge archives"],
      img: "/images/pub_archive.png"
    }
  ];

  return (
    <div className={styles.codexGrid}>
      {/* Left Pane - Interactive Selectors */}
      <div className={styles.codexNav}>
        {sectors.map((sector, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`${styles.codexTabBtn} ${activeTab === idx ? styles.activeTab : ""}`}
          >
            <div className={styles.tabBtnContent}>
              <div className={styles.tabIconWrapper}>{sector.icon}</div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: activeTab === idx ? 'var(--primary-navy)' : 'var(--text-heading)' }}>
                  {sector.title}
                </h4>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {sector.tagline}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Right Pane - Rich Detailed Card */}
      <div className={styles.codexDisplay}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.codexCard}
        >
          {/* HD Scenic Image with hover scale */}
          <div className={styles.codexCardImageWrapper}>
            <img
              src={sectors[activeTab].img}
              alt={sectors[activeTab].title}
              className={styles.codexCardImage}
            />
            <div className={styles.codexCardImageOverlay} />
          </div>

          {/* Editorial Content */}
          <div className={styles.codexCardBody}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
              KnowXtra Codex Focus
            </span>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: '0.5rem 0 1rem', fontFamily: 'var(--font-serif)', color: 'var(--text-heading)' }}>
              {sectors[activeTab].title}
            </h3>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {sectors[activeTab].desc}
            </p>

            {/* High-Impact Objectives with bold highlights */}
            <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              {sectors[activeTab].objectives.map((obj, i) => (
                <p key={i} style={{ margin: '0.5rem 0', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                  <strong style={{ color: 'var(--primary-navy)' }}>{obj.label}: </strong> {obj.value}
                </p>
              ))}
            </div>

            {/* Premium Capsule Checkmarks */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {sectors[activeTab].checkmarks.map((chk, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(15, 23, 42, 0.05)',
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    color: 'var(--primary-navy)',
                    padding: '0.5rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  ✓ {chk}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
