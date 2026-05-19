"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px', marginBottom: 'var(--spacing-xl)' }}
      >
        <h1 className="text-3d" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px', marginBottom: 'var(--spacing-md)' }}>
          About KnowXtra
        </h1>
        <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', color: 'var(--text-main)', lineHeight: 1.8 }}>
          Know-Xtra Ltd is a human capacity development company with strategic focus on the educational, corporate and governmental institutions. We are driven by the vision and passion to raise the profile of our clients to global standards.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {['Vision', 'Mission', 'Plan'].map((item, i) => (
           <motion.div 
             key={item}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.2, duration: 0.6 }}
             className="glass-panel"
             style={{ padding: '3rem', borderRadius: '24px' }}
           >
             <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '1rem', color: 'var(--primary-navy)' }}>Our {item}</h2>
             <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.7 }}>
               {item === 'Vision' && "To be a world leader in human capacity development initiatives, setting new benchmarks for organizational excellence."}
               {item === 'Mission' && "To raise the profile of our clients to global standards by leveraging top-notch experts and leading brands."}
               {item === 'Plan' && "To create a platform for good governance advocates and the public through our flagship initiatives."}
             </p>
           </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginTop: 'var(--spacing-xl)', borderRadius: '32px', overflow: 'hidden', height: '400px', position: 'relative' }}
      >
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" alt="Corporate Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(15,23,42,0.2), rgba(15,23,42,0.8))', display: 'flex', alignItems: 'flex-end', padding: '3rem' }}>
          <h3 style={{ color: 'white', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', maxWidth: '600px' }}>Built on significant intellectual and business reputation.</h3>
        </div>
      </motion.div>
    </div>
  )
}
