"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ArticlesPage() {
  const articles = [
    { id: 1, category: "Leadership", title: "The Future of Corporate Capacity", author: "Dr. Chidi Nnamdi", excerpt: "A deep dive into how AI and modern learning are reshaping corporate structures across Africa.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87" },
    { id: 2, category: "Governance", title: "Effective Systems for Progressive Leadership", author: "Prof. Folake Alao", excerpt: "Bridging the gap between citizens and administrators to build lasting intellectual infrastructure.", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095" },
    { id: 3, category: "Capacity", title: "Fostering Innovation in Nigerian Institutions", author: "Engr. Tunde Bakare", excerpt: "Critical analysis of building technological frameworks to meet global engineering standards.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998" },
    { id: 4, category: "Education", title: "Modern Curation & Digital Library Systems", author: "Mrs. Amara Okafor", excerpt: "Exploring the evolution of resource management, digital curation, and modern libraries.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66" }
  ];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3d" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-2px', marginBottom: '1rem' }}>Insights & Articles</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Thought leadership and research from our experts.</p>
      </motion.div>

      <div style={{ marginTop: 'var(--spacing-xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {articles.map((article, idx) => (
          <Link key={article.id} href={`/articles/${article.id}`} style={{ display: 'block', textDecoration: 'none' }}>
            <motion.div 
              className="glass-panel" 
              style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }} 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={`${article.img}?auto=format&fit=crop&w=800&q=80`} alt={article.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>By {article.author}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>{article.title}</h3>
                <p style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{article.excerpt}</p>
                <span style={{ marginTop: 'auto', color: 'var(--primary-navy)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read Article &rarr;
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
