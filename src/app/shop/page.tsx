"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ShopPage() {
  const products = [
    { id: 1, title: "Leadership Journal Vol. 1", price: "₦49,900", img: "/images/leadership_journal.png" },
    { id: 2, title: "Corporate Strategy Guide", price: "₦59,900", img: "/images/strategy_guide.png" },
    { id: 3, title: "Capacity Masterclass Access", price: "₦199,000", img: "/images/masterclass_flyer.png" }
  ];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 className="text-3d" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-2px', marginBottom: '1rem' }}>The Knowledge Shop</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Premium journals, books, and exclusive event access.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        {products.map((product, i) => (
          <Link key={product.id} href={`/shop/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
            <motion.div 
              className="glass-panel" 
              style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }} 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ height: '350px', position: 'relative', overflow: 'hidden', background: '#0a0f1d', padding: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src={product.img.startsWith('http') ? `${product.img}?auto=format&fit=crop&w=800&q=80` : product.img} 
                  alt={product.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>{product.title}</h3>
                <p style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '2rem', fontFamily: 'var(--font-sans)' }}>{product.price}</p>
                
                <button style={{ 
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
                  transition: 'background 0.3s'
                }}>
                  View Product
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
