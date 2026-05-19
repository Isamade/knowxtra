"use client";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    { title: "Human Capacity Development", desc: "Corporate training, leadership development, and organizational restructuring to match global standards." },
    { title: "Conferences and Seminars", desc: "Bringing together world-class experts for impactful networking and knowledge exchange." },
    { title: "Publishing", desc: "Disseminating thought leadership, academic papers, and corporate journals." },
    { title: "Library Services", desc: "State-of-the-art information curation and resource management." },
    { title: "Event Management and Planning", desc: "Executing flawless corporate and governmental events with precision." },
  ];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 className="text-3d" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px', marginBottom: '1rem' }}>Our Activities</h1>
        <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '600px' }}>Comprehensive solutions tailored for educational, corporate, and governmental institutions.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {services.map((svc, i) => (
          <motion.div 
            key={svc.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel"
            style={{ padding: '3rem', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}
          >
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1rem', color: 'var(--primary-navy)' }}>{svc.title}</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>{svc.desc}</p>
            </div>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
              {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
