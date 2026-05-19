"use client";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Award, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function EventDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [reserved, setReserved] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFacilitator, setSelectedFacilitator] = useState(0);
  const [currency, setCurrency] = useState("NGN");

  const facilitators = [
    { name: "Prof. Albert K. Lar", role: "Policy & Governance Chair", rating: "4.9 ★", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&h=150&q=80" },
    { name: "Dr. Sarah Alabi", role: "Executive Capacity Lead", rating: "4.8 ★", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" }
  ];

  const eventsData: Record<string, { title: string; date: string; time: string; location: string; img: string; cost: string; desc: string; highlights: string[] }> = {
    "1": {
      title: "Global Leadership Summit",
      date: "October 24, 2026",
      time: "09:00 AM WAT",
      location: "Eko Hotels & Suites, Victoria Island, Lagos, NG",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      cost: "₦25,000",
      desc: "The flagship capacity development summit of the year. Join top-notch global executives, governmental heads, and business leaders as we outline strategic institutional guidelines to meet modern global benchmarks.",
      highlights: ["Executive Networking session", "Keynote speech by Global Capacity Experts", "Panel discussions on African integration", "Interactive Masterclass workshops"]
    },
    "2": {
      title: "Capacity Seminar",
      date: "November 12, 2026",
      time: "10:30 AM WAT",
      location: "Transcorp Hilton, Abuja, NG",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      cost: "Free (Registration Required)",
      desc: "An intensive seminar designed to deliver advanced organizational restructuring models, modern digital curriculum resources, and progressive leadership capacity building.",
      highlights: ["Strategic corporate capacity blueprints", "Digital repository development guides", "Workplace performance optimization", "Certificate of participation"]
    },
    "3": {
      title: "Executive Workshop",
      date: "December 05, 2026",
      time: "02:00 PM GMT",
      location: "Movenpick Ambassador Hotel, Accra, GH",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      cost: "₦50,000",
      desc: "Hands-on intensive masterclass tailored specifically for decision-makers in governance and executive corporate levels. Focuses on change management, modern governance models, and progressive structural pipelines.",
      highlights: ["Case study analysis on modern governance", "One-on-one consulting clinic", "Peer-to-peer benchmarking tools", "Digital executive resources toolkit"]
    }
  };

  const event = eventsData[id] || eventsData["1"];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)', maxWidth: '1000px' }}>
      <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back to Events
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '450px', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        <img src={`${event.img}?auto=format&fit=crop&w=1600&q=80`} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.3))' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '3rem', color: 'white', zIndex: 2 }}>
          <span style={{ background: 'var(--accent-gold)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem', display: 'inline-block', marginBottom: '1rem' }}>
            {event.cost}
          </span>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', margin: 0, color: 'white', fontFamily: 'var(--font-serif)', letterSpacing: '-1px' }}>{event.title}</h1>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
        {/* Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Calendar size={32} style={{ color: 'var(--accent-gold)' }} />
            <div>
              <h4 style={{ margin: 0, color: 'var(--text-heading)', fontWeight: 600 }}>Date & Time</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{event.date} at {event.time}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <MapPin size={32} style={{ color: 'var(--accent-gold)' }} />
            <div>
              <h4 style={{ margin: 0, color: 'var(--text-heading)', fontWeight: 600 }}>Location</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{event.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Content & Booking Form Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Main Description */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
              <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', marginBottom: '1.5rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>About the Event</h3>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {event.desc}
              </p>

              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>Key Highlights</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {event.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)' }}>
                    <Award size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Booking Desk Opening Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
              KnowXtra Executive Cohorts
            </span>
            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)', margin: 0 }}>
              Access Guidelines
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.7, margin: 0 }}>
              Seats in each professional cohort are strictly limited to ensure standard mentorship. Register your dynamic reservation request, choose your expert facilitator, and check estimated fees inside the digital desk.
            </p>
            <button
              onClick={() => setDrawerOpen(true)}
              style={{
                marginTop: 'auto',
                width: '100%',
                padding: '1rem',
                background: 'var(--primary-navy)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'background 0.3s'
              }}
            >
              Open Reservation Desk
            </button>
          </motion.div>
        </div>
      </div>

      {/* Sliding Booking Drawer Overlay (Plateau Luxury style) */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Dark blur overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: 'blur(10px)',
                zIndex: 9999
              }}
            />

            {/* Right side drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '520px',
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(20px)',
                boxShadow: '-20px 0 50px rgba(0,0,0,0.15)',
                padding: '3.5rem 3rem',
                overflowY: 'auto',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setDrawerOpen(false)}
                style={{
                  alignSelf: 'flex-end',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-heading)',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(15,23,42,0.05)',
                  transition: 'background 0.3s'
                }}
              >
                <X size={20} />
              </button>

              {!reserved ? (
                <>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                    KnowXtra Reservation Desk
                  </span>
                  <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0 1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-heading)' }}>
                    Reserve Your Seat
                  </h3>

                  {/* Multi-Currency Toggle */}
                  {event.cost !== 'Free (Registration Required)' && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(15, 23, 42, 0.05)', padding: '0.25rem', borderRadius: '100px', alignSelf: 'flex-start' }}>
                      <button
                        onClick={() => setCurrency('NGN')}
                        style={{
                          border: 'none',
                          background: currency === 'NGN' ? 'white' : 'transparent',
                          color: currency === 'NGN' ? 'var(--primary-navy)' : 'var(--text-muted)',
                          padding: '0.5rem 1.25rem',
                          borderRadius: '100px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        NGN (₦)
                      </button>
                      <button
                        onClick={() => setCurrency('USD')}
                        style={{
                          border: 'none',
                          background: currency === 'USD' ? 'white' : 'transparent',
                          color: currency === 'USD' ? 'var(--primary-navy)' : 'var(--text-muted)',
                          padding: '0.5rem 1.25rem',
                          borderRadius: '100px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        USD ($)
                      </button>
                    </div>
                  )}

                  {/* Pricing capsule card (Plateau State estimated amount style) */}
                  <div style={{ borderLeft: '4px solid var(--accent-gold)', background: 'rgba(15, 23, 42, 0.03)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Estimated Investment Fee:</span>
                    <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.8rem', color: 'var(--primary-navy)', fontWeight: 700 }}>
                      {event.cost === 'Free (Registration Required)' ? 'Free' : (currency === 'NGN' ? event.cost : (id === '1' ? '$50' : '$100'))}
                    </h3>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Payment required only after cohort scheduling and validation
                    </p>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); setReserved(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Full Name</label>
                      <input required type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="John Doe" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Email Address</label>
                      <input required type="email" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="john@company.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Phone Number</label>
                      <input required type="tel" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="+234 80 1234 5678" />
                    </div>

                    {/* Facilitator profiles selector panel */}
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Select Lead Speaker/Facilitator Cohort</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {facilitators.map((fac, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedFacilitator(idx)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              padding: '1rem',
                              borderRadius: '16px',
                              border: selectedFacilitator === idx ? '2px solid var(--accent-gold)' : '1px solid rgba(15,23,42,0.1)',
                              background: selectedFacilitator === idx ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)',
                              cursor: 'pointer',
                              transition: 'all 0.3s'
                            }}
                          >
                            <img src={fac.img} alt={fac.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div style={{ flex: 1 }}>
                              <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-heading)' }}>{fac.name}</h4>
                              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{fac.role}</p>
                            </div>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)' }}>{fac.rating}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button type="submit" style={{ width: '100%', padding: '1rem', background: 'var(--primary-navy)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 600, cursor: 'pointer', marginTop: '1rem' }}>
                      Confirm Reservation Request
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '3rem 0', margin: 'auto' }}>
                  <CheckCircle size={64} style={{ color: 'var(--accent-gold)' }} />
                  <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>Booking Registered!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Congratulations! Your cohort request under <strong>{facilitators[selectedFacilitator].name}</strong> for <strong>{event.title}</strong> has been successfully registered. Check your email for further guidelines.
                  </p>
                  <button
                    onClick={() => { setDrawerOpen(false); setReserved(false); }}
                    style={{
                      display: 'inline-flex',
                      padding: '0.75rem 1.5rem',
                      background: 'var(--primary-navy)',
                      border: 'none',
                      color: 'white',
                      borderRadius: '100px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
