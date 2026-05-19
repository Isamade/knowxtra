"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, ShieldCheck, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    // Generate static dynamic order reference ID
    const randomRef = "KX-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomRef);
  }, []);

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 60px)', paddingBottom: 'var(--spacing-xl)', maxWidth: '650px' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{ padding: '4rem 3rem', borderRadius: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', boxShadow: '0 30px 60px rgba(0,0,0,0.06)' }}
      >
        <div style={{ position: 'relative' }}>
          <CheckCircle size={80} style={{ color: 'var(--accent-gold)' }} />
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ delay: 0.3 }} 
            style={{ position: 'absolute', bottom: -5, right: -5, background: 'white', borderRadius: '50%', padding: '0.2rem' }}
          >
            <ShieldCheck size={28} style={{ color: 'var(--primary-navy)' }} />
          </motion.div>
        </div>

        <div>
          <h1 className="text-3d" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Transaction Successful</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>Thank you for investing in capacity and progressive change with KnowXtra.</p>
        </div>

        <div style={{ width: '100%', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-color)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Order ID</span>
            <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{orderId || "KX-891047"}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Payment Gateway</span>
            <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Paystack Nigeria</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Transaction Status</span>
            <span style={{ fontWeight: 600, color: '#10B981' }}>COMPLETED</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
          <Link href="/shop" style={{ flex: 1, textDecoration: 'none' }}>
            <button style={{ 
              width: '100%', 
              padding: '1rem', 
              background: 'white', 
              border: '1px solid var(--border-color)', 
              borderRadius: '12px', 
              color: 'var(--primary-navy)', 
              fontWeight: 600, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Download size={18} /> Receipt
            </button>
          </Link>

          <Link href="/" style={{ flex: 1, textDecoration: 'none' }}>
            <button style={{ 
              width: '100%', 
              padding: '1rem', 
              background: 'var(--primary-navy)', 
              border: 'none', 
              borderRadius: '12px', 
              color: 'white', 
              fontWeight: 600, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              Return Home <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
