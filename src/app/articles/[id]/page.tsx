"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const articlesData: Record<string, { category: string; title: string; author: string; date: string; img: string; content: string[] }> = {
    "1": { 
      category: "Leadership", 
      title: "The Future of Corporate Capacity", 
      author: "Dr. Chidi Nnamdi", 
      date: "May 18, 2026", 
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      content: [
        "In the contemporary landscape of global enterprise, the concept of corporate capacity is undergoing a paradigm shift. Traditional models focused on standardized competencies are no longer sufficient to navigate the rapid evolution of technology and socio-political dynamics.",
        "To raise corporate performance to global standards, African organizations must implement continuous learning architectures driven by collaborative technology. This means transitioning from passive seminar styles to active capacity development where employees directly apply learnings to high-impact workflows.",
        "Moreover, the integration of Artificial Intelligence (AI) into daily corporate activities offers an unprecedented boost in operational efficiency. Far from rendering human talent redundant, AI empowers capacity planners and executives to make highly informed, data-driven decisions that generate lasting economic and social value."
      ]
    },
    "2": { 
      category: "Governance", 
      title: "Effective Systems for Progressive Leadership", 
      author: "Prof. Folake Alao", 
      date: "April 29, 2026", 
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
      content: [
        "Good governance is not merely an administrative ideal; it is the cornerstone of sustainable developmental initiatives. To achieve lasting progressive change, modern institutions require bridges of absolute transparency between citizen advocates and policy makers.",
        "Through strategic capacity building, public administrators can develop the necessary political and social frameworks to raise governmental efficiency to global standards. This requires standardizing policy feedback loops and standardizing digital access to public archives.",
        "When public institutions leverage networks of top-notch corporate experts, the resulting social value creates a resilient, high-trust ecosystem that naturally facilitates long-term civic engagement and political stability."
      ]
    },
    "3": { 
      category: "Capacity", 
      title: "Fostering Innovation in Nigerian Institutions", 
      author: "Engr. Tunde Bakare", 
      date: "March 12, 2026", 
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      content: [
        "Innovation within institutional frameworks is often met with resistance due to legacy configurations. However, building robust capacity means designing technical frameworks that naturally accommodate progressive technological integration.",
        "By focusing strategic investments on digital skills, engineering infrastructure, and collaborative networks, Nigerian corporate bodies can establish a leadership pipeline capable of driving high-end technological outputs.",
        "We are at a unique juncture where the adoption of standard cloud architectures and modern data solutions can rapidly close the operational gap, raising standard industry profiles to elite global benchmarks."
      ]
    },
    "4": { 
      category: "Education", 
      title: "Modern Curation & Digital Library Systems", 
      author: "Mrs. Amara Okafor", 
      date: "February 20, 2026", 
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      content: [
        "The digital age has transformed library services from static archives of physical volumes to active, high-impact networks of dynamic global knowledge curation.",
        "Modern university and corporate libraries must deploy intelligent metadata extraction and cloud retrieval layers to support researchers on-demand. Digital resource standardisation ensures that knowledge remains accessible and organized across institutions.",
        "By providing self-service academic portals and digital research repositories, educational institutions can drastically enhance student onboarding pipelines and empower the next generation of intellectual leaders."
      ]
    }
  };

  const article = articlesData[id] || articlesData["1"];

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)', maxWidth: '900px' }}>
      <Link href="/articles" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back to Articles
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{article.category}</span>
          <span style={{ color: 'var(--text-muted)' }}>{article.date}</span>
        </div>
        <h1 className="text-3d" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>{article.title}</h1>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '3rem' }}>Written by: <strong>{article.author}</strong></p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.2 }}
        style={{ borderRadius: '24px', overflow: 'hidden', height: '400px', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
      >
        <img src={`${article.img}?auto=format&fit=crop&w=1200&q=80`} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
        className="glass-panel"
        style={{ padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        {article.content.map((paragraph, idx) => (
          <p key={idx} style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
