"use client";
import { motion } from "framer-motion";

export default function HelpPage() {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-2px', color: 'var(--text-heading)', marginBottom: '1rem' }}>How can we help?</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-xl)' }}>Get in touch with our team of experts.</p>
      </motion.div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <motion.form 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="glass-panel"
          style={{ padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Name</label>
            <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="John Doe" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Email</label>
            <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="john@company.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Message</label>
            <textarea rows={5} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none', resize: 'none' }} placeholder="How can we assist you?"></textarea>
          </div>
          <button type="button" style={{ width: '100%', padding: '1rem', background: 'var(--primary-navy)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 600, cursor: 'pointer', marginTop: '1rem', transition: 'all 0.3s' }}>Send Message</button>
        </motion.form>
      </div>
    </div>
  )
}
