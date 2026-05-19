"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar as CalendarIcon, Clock, MapPin, Users, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const events = [
    {
      id: 1,
      date: "OCT 24",
      month: "OCT",
      day: "24",
      year: "2026",
      title: "Global Leadership Summit",
      location: "Eko Hotels & Suites, Victoria Island, Lagos, NG",
      time: "09:00 AM WAT",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      category: "Leadership",
      price: "₦25,000",
      excerpt: "The flagship capacity development summit of the year. Join top-notch global executives, governmental heads, and business leaders as we outline strategic institutional guidelines to meet modern global benchmarks.",
      seatsTotal: 50,
      seatsLeft: 12,
      attendees: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80"
      ],
      attendeeCount: 148
    },
    {
      id: 2,
      date: "NOV 12",
      month: "NOV",
      day: "12",
      year: "2026",
      title: "Capacity Seminar",
      location: "Transcorp Hilton, Abuja, NG",
      time: "10:30 AM WAT",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      category: "Capacity Development",
      price: "Free Access",
      excerpt: "An intensive seminar designed to deliver advanced organizational restructuring models, modern digital curriculum resources, and progressive leadership capacity building.",
      seatsTotal: 100,
      seatsLeft: 24,
      attendees: [
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80"
      ],
      attendeeCount: 312
    },
    {
      id: 3,
      date: "DEC 05",
      month: "DEC",
      day: "05",
      year: "2026",
      title: "Executive Workshop",
      location: "Movenpick Ambassador Hotel, Accra, GH",
      time: "02:00 PM GMT",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      category: "Executive Masterclass",
      price: "₦50,000",
      excerpt: "Hands-on intensive masterclass tailored specifically for decision-makers in governance and executive corporate levels. Focuses on change management, modern governance models, and progressive structural pipelines.",
      seatsTotal: 30,
      seatsLeft: 8,
      attendees: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&h=80&q=80"
      ],
      attendeeCount: 88
    }
  ];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3d" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1rem', letterSpacing: '-1.5px' }}>
          Upcoming Cohorts & Events
        </h1>
        <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
          Join hands-on seminars and elite summits designed to raise corporate governance and organizational standards.
        </p>
      </motion.div>

      {/* Structured dynamic flexbox list */}
      <div style={{ marginTop: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {events.map((event, i) => (
          <Link key={event.id} href={`/events/${event.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 30px 60px rgba(15, 23, 42, 0.09)'
              }}
              style={{ 
                position: 'relative',
                background: isMobile ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                backdropFilter: isMobile ? 'none' : 'blur(20px)',
                border: '1px solid var(--border-color)',
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(15, 23, 42, 0.05)',
                cursor: 'pointer',
                display: 'flex',
                flexWrap: 'wrap',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, box-shadow'
              }}
            >
              {/* Cover image panel with zoom effect on hover */}
              <div style={{ 
                flex: '1 1 320px', 
                position: 'relative', 
                minHeight: '280px', 
                overflow: 'hidden'
              }}>
                <img 
                  src={event.img.startsWith('http') ? `${event.img}?auto=format&fit=crop&w=800&q=80` : event.img} 
                  alt={event.title} 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform'
                  }} 
                  className="event-card-img"
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to right, transparent, rgba(15,23,42,0.05))' 
                }} />
              </div>
              
              {/* Detailed descriptive text blocks */}
              <div style={{ 
                flex: '2 1 420px', 
                padding: '2.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem',
                justifyContent: 'space-between'
              }}>
                {/* Header metadata (Calendar badge & Category) */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Calendar Badge */}
                    <div style={{
                      width: '52px',
                      height: '56px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(15,23,42,0.1)',
                      textAlign: 'center',
                      background: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      flexShrink: 0
                    }}>
                      <div style={{ background: 'var(--primary-navy)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '2px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {event.month}
                      </div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                        {event.day}
                      </div>
                    </div>

                    <span style={{
                      padding: '0.4rem 1rem',
                      background: 'rgba(15, 23, 42, 0.05)',
                      color: 'var(--primary-navy)',
                      borderRadius: '100px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', 
                    margin: 0, 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--text-heading)',
                    lineHeight: 1.3
                  }}>
                    {event.title}
                  </h3>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.98rem', 
                    color: 'var(--text-muted)', 
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {event.excerpt}
                  </p>
                </div>

                {/* Metadata row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span>{event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ 
                      maxWidth: '300px', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      whiteSpace: 'nowrap' 
                    }} title={event.location}>
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Seats Remaining Urgency Indicator */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600 }}>
                    <span style={{ color: 'var(--accent-gold)' }}>
                      Only {event.seatsLeft} seats remaining!
                    </span>
                    <span style={{ color: 'var(--text-muted)' }}>
                      {event.seatsTotal - event.seatsLeft}/{event.seatsTotal} delegates registered
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(15,23,42,0.06)', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${((event.seatsTotal - event.seatsLeft) / event.seatsTotal) * 100}%`, 
                      height: '100%', 
                      background: 'linear-gradient(to right, var(--accent-gold), #e0a924)',
                      borderRadius: '100px'
                    }} />
                  </div>
                </div>

                {/* Bottom section (Social proof attendees & Price / CTA) */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  borderTop: '1px solid rgba(15,23,42,0.08)', 
                  paddingTop: '1rem',
                  marginTop: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {/* Attendee Avatars */}
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {event.attendees.map((avatar, idx) => (
                        <img 
                          key={idx}
                          src={avatar} 
                          alt="Attendee Profile" 
                          style={{ 
                            width: '28px', 
                            height: '28px', 
                            borderRadius: '50%', 
                            border: '2px solid white', 
                            marginLeft: idx === 0 ? 0 : '-8px',
                            objectFit: 'cover'
                          }} 
                        />
                      ))}
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'var(--primary-navy)',
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid white',
                        marginLeft: '-8px'
                      }}>
                        +
                      </div>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 500 }}>
                      Joined by <strong>{event.attendeeCount}</strong> professionals
                    </span>
                  </div>

                  {/* Pricing and Action button aligned right */}
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fee</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{event.price}</span>
                    </div>

                    <button style={{ 
                      padding: '0.75rem 1.5rem', 
                      background: 'var(--primary-navy)', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '100px', 
                      fontWeight: 600, 
                      cursor: 'pointer', 
                      fontFamily: 'var(--font-sans)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      transition: 'background 0.3s'
                    }}>
                      Reserve Seat <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Global CSS Inject to support zoom animation triggers on card hover */}
      <style jsx global>{`
        a:hover .event-card-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}
