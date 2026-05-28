"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Landmark } from "lucide-react";
import styles from "./Navigation.module.css";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Articles", href: "/articles" },
  { name: "Shop", href: "/shop" },
  { name: "Help", href: "/help" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(new Date().toLocaleDateString('en-US', options).toUpperCase());
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      {/* Top masthead branding row */}
      <div className={styles.mastheadTop}>
        <div className={`container ${styles.mastheadContainer}`}>
          {/* Logo centered */}
          <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
            <img 
              src="/images/logo_transparent.png" 
              alt="KnowXtra Logo" 
              className={styles.logoImage} 
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Newspaper Metadata Divider Row */}
      <div className={styles.metadataBar}>
        <div className={`container ${styles.metadataContainer}`}>
          <div className={styles.metaLeft}>LAGOS • ABUJA • ACCRA • LONDON</div>
          <div className={styles.metaCenter}>★ THE VOICE OF CAPACITY ★</div>
          <div className={styles.metaRight}>
            {currentDate || "THURSDAY, MAY 28, 2026"} &nbsp;|&nbsp; VOL. VIII NO. 42
          </div>
        </div>
      </div>

      {/* Main Nav Links Row */}
      <div className={styles.navLinksRow}>
        <div className={`container ${styles.navLinksContainer}`}>
          <div className={styles.desktopLinks}>
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              LAGOS • ABUJA • ACCRA • LONDON <br /> EST. 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
