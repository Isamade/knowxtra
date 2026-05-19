"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    { id: 1, date: "OCT 24", year: "2026", title: "Global Leadership Summit", location: "Lagos, NG", img: "/images/global_leadership_summit.png" },
    { id: 2, date: "NOV 12", year: "2026", title: "Capacity Seminar", location: "Abuja, NG", img: "/images/capacity_seminar.png" },
    { id: 3, date: "DEC 05", year: "2026", title: "Executive Workshop", location: "Accra, GH", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998" },
  ];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3d" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem' }}>Upcoming Events</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Join us at our upcoming conferences and seminars.</p>
      </motion.div>

      <div style={{ marginTop: 'var(--spacing-xl)', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
        {events.map((event, i) => (
          <Link key={event.id} href={`/events/${event.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ 
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                height: '400px',
                display: 'flex',
                alignItems: 'flex-end',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}
            >
              <img 
                src={event.img.startsWith('http') ? `${event.img}?auto=format&fit=crop&w=1600&q=80` : event.img} 
                alt={event.title} 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
              />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)', zIndex: 1 }} />
              
              <div style={{ position: 'relative', zIndex: 2, padding: '3rem', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: 'white', padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
                    {event.date}, {event.year} &nbsp;|&nbsp; {event.location}
                  </div>
                  <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', margin: 0, fontFamily: 'var(--font-serif)', letterSpacing: '-1px' }}>{event.title}</h3>
                </div>
                <button style={{ padding: '1rem 2rem', background: 'white', color: 'var(--primary-navy)', border: 'none', borderRadius: '100px', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'transform 0.3s' }}>
                  Reserve Seat
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
