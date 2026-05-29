"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, RefreshCw, Sparkles } from "lucide-react";

interface Quote {
  text: string;
  author: string;
  title: string;
}

const QUOTES: Quote[] = [
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    author: "Albert Einstein",
    title: "Theoretical Physicist"
  },
  {
    text: "There is no story that is not true. The story-teller is the memory of the people.",
    author: "Chinua Achebe",
    title: "Novelist & Scholar"
  },
  {
    text: "The greatest threat to freedom is the absence of criticism.",
    author: "Wole Soyinka",
    title: "Nobel Laureate in Literature"
  },
  {
    text: "We face neither East nor West; we face forward.",
    author: "Kwame Nkrumah",
    title: "Statesman & Pan-Africanist"
  },
  {
    text: "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete.",
    author: "Chimamanda Ngozi Adichie",
    title: "Author & Feminist Icon"
  },
  {
    text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more.",
    author: "Marie Curie",
    title: "Physicist & Nobel Laureate"
  },
  {
    text: "If I have seen further it is by standing on the shoulders of Giants.",
    author: "Sir Isaac Newton",
    title: "Mathematician & Physicist"
  },
  {
    text: "We must encourage our youth to seek knowledge not just for livelihood, but for progressive service.",
    author: "Grace Alele-Williams",
    title: "Pioneering Mathematician & Educator"
  }
];

export default function WisdomJournalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Randomize initial quote index
  useEffect(() => {
    setCurrentIdx(Math.floor(Math.random() * QUOTES.length));
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isOpen) return;
    
    let active = true;
    setDisplayedText("");
    setIsTyping(true);
    
    const text = QUOTES[currentIdx].text;
    let currentText = "";
    let charIndex = 0;
    let timerId: any = null;
    
    const typeChar = () => {
      if (!active) return;
      if (charIndex < text.length) {
        currentText += text.charAt(charIndex);
        setDisplayedText(currentText);
        charIndex++;
        timerId = setTimeout(typeChar, 25);
      } else {
        setIsTyping(false);
      }
    };
    
    timerId = setTimeout(typeChar, 25); // Speedy elegant typing

    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [isOpen, currentIdx]);

  const handleNext = () => {
    if (isTyping) return;
    let nextIdx = Math.floor(Math.random() * QUOTES.length);
    // Avoid immediate repeat
    while (nextIdx === currentIdx && QUOTES.length > 1) {
      nextIdx = Math.floor(Math.random() * QUOTES.length);
    }
    setCurrentIdx(nextIdx);
  };

  return (
    <>
      {/* 1. Interactive Floating Book Trigger Icon */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="wisdom-trigger-btn"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            title="Open Journal of Wisdom 📖"
            style={{
              position: "fixed",
              bottom: "2.5rem",
              right: "2.5rem",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #161e38 0%, #0f162d 100%)",
              border: "2px solid var(--accent-gold)",
              boxShadow: "0 10px 25px rgba(15, 22, 53, 0.25), inset 0 2px 4px rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-gold)",
              cursor: "pointer",
              zIndex: 9999,
              outline: "none"
            }}
          >
            <BookOpen size={24} />
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                background: "var(--accent-gold)",
                color: "#000",
                fontSize: "0.55rem",
                padding: "2px 5px",
                borderRadius: "10px",
                fontWeight: 800,
                border: "1px solid #161e38"
              }}
            >
              WISDOM
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Expanded Vintage Journal Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="wisdom-journal-overlay"
            initial={{ scale: 0.85, opacity: 0, y: 100, rotate: -2 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 100, rotate: -2 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            style={{
              position: "fixed",
              bottom: "3rem",
              right: "3rem",
              width: "360px",
              background: "#12182c", /* Deep modern navy case */
              borderRadius: "16px",
              border: "1px solid rgba(224, 169, 36, 0.4)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
              overflow: "hidden",
              zIndex: 9999,
              fontFamily: "var(--font-sans)"
            }}
          >
            {/* Leather Journal Spine Header */}
            <div style={{
              background: "linear-gradient(to right, #1d2645, #141c36)",
              padding: "0.85rem 1.2rem",
              borderBottom: "1.5px solid var(--accent-gold)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-gold)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                <Sparkles size={14} /> Journal of Wisdom
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#a0aec0",
                  cursor: "pointer",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Antique Paper Page */}
            <div style={{
              background: "#fdfaf3", /* Warm vintage library paper page */
              padding: "1.75rem",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative"
            }}>
              {/* Paper line rules background texture */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(15, 22, 53, 0.05) 1px, transparent 1px)",
                backgroundSize: "100% 24px",
                pointerEvents: "none",
                opacity: 0.7
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Vintage large editorial quote icon */}
                <span style={{ fontFamily: "Georgia, serif", fontSize: "3rem", color: "rgba(224, 169, 36, 0.25)", position: "absolute", top: "-1.5rem", left: "-0.5rem", userSelect: "none" }}>
                  “
                </span>
                
                {/* Dynamically typed quote text */}
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.05rem",
                  color: "#202538",
                  lineHeight: 1.6,
                  margin: "0 0 1rem 1rem",
                  minHeight: "80px",
                  fontStyle: "italic"
                }}>
                  {displayedText}
                  {isTyping && <span className="typewriter-cursor">|</span>}
                </p>

                {/* Author & Title Sign-off */}
                <div style={{ textAlign: "right", borderTop: "1px solid rgba(15, 22, 53, 0.1)", paddingTop: "0.5rem", marginTop: "1rem" }}>
                  <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "var(--primary-navy)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    — {QUOTES[currentIdx].author}
                  </h4>
                  <p style={{ margin: "2px 0 0", fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: 600 }}>
                    {QUOTES[currentIdx].title}
                  </p>
                </div>
              </div>

              {/* Action Buttons inside paper page footer */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem", position: "relative", zIndex: 1 }}>
                <button
                  onClick={handleNext}
                  disabled={isTyping}
                  style={{
                    background: "var(--primary-navy)",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    padding: "0.5rem 1rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: isTyping ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    boxShadow: "2px 2px 0px rgba(15, 22, 53, 0.15)",
                    transition: "transform 0.1s",
                    opacity: isTyping ? 0.75 : 1
                  }}
                  onMouseDown={(e) => !isTyping && (e.currentTarget.style.transform = "translate(1px, 1px)")}
                  onMouseUp={(e) => !isTyping && (e.currentTarget.style.transform = "translate(0px, 0px)")}
                >
                  <RefreshCw size={12} className={isTyping ? "spin-animate" : ""} /> Next Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded Styles */}
      <style jsx global>{`
        .typewriter-cursor {
          animation: blink 0.7s infinite alternate;
          color: var(--accent-gold);
          font-weight: bold;
          margin-left: 2px;
        }
        @keyframes blink {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .spin-animate {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
