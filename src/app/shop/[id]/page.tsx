"use client";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, RefreshCw, X, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [currency, setCurrency] = useState("NGN");
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const productsData: Record<string, { title: string; price: string; rawPrice: number; img: string; desc: string; specs: string[] }> = {
    "1": {
      title: "Leadership Journal Vol. 1",
      price: "₦49,900",
      rawPrice: 49900,
      img: "/images/leadership_journal.png",
      desc: "An exclusive, high-end editorial journal capturing pivotal leadership paradigms, executive research, and capacity blueprints tailored specifically for the progressive African corporate ecosystem.",
      specs: ["Premium Hardcover layout", "240 gold-rimmed archival pages", "Includes digital access pass", "Written by certified capacity experts"]
    },
    "2": {
      title: "Corporate Strategy Guide",
      price: "₦59,900",
      rawPrice: 59900,
      img: "/images/strategy_guide.png",
      desc: "A highly actionable, strategic guide for modern corporate managers. Outlines institutional capacity audits, operational restructuring frameworks, and key performance pipelines to match international standards.",
      specs: ["Sleek modular layout", "Interactive strategy checklists", "Case studies from top African brands", "180 full-color pages"]
    },
    "3": {
      title: "Capacity Masterclass Access",
      price: "₦199,000",
      rawPrice: 199000,
      img: "/images/masterclass_flyer.png",
      desc: "Lifetime premium digital credentials and pass keys for the flagship KnowXtra Online Academy. Delivers comprehensive, interactive modules designed to raise institutional performance to global benchmarks.",
      specs: ["24 detailed interactive video modules", "Direct cohort Slack community access", "Certificate signed by global advisors", "1-on-1 monthly strategic check-in"]
    }
  };

  const product = productsData[id] || productsData["1"];

  // Helper to handle local cart storage or progression
  const handleAddToCart = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("knowxtra_cart", JSON.stringify({
        id,
        title: product.title,
        price: product.price,
        rawPrice: product.rawPrice,
        img: product.img,
        quantity: quantity
      }));
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)', maxWidth: '1100px' }}>
      <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back to Shop
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          style={{ borderRadius: '24px', overflow: 'hidden', height: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', background: '#0a0f1d', padding: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <img src={product.img.startsWith('http') ? `${product.img}?auto=format&fit=crop&w=1000&q=80` : product.img} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Product Details */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div>
            <h1 className="text-3d" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', lineHeight: 1.1, marginBottom: '0.5rem' }}>{product.title}</h1>
            <p style={{ color: 'var(--accent-gold)', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, margin: 0, fontFamily: 'var(--font-sans)' }}>{product.price}</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.7, margin: 0 }}>
              {product.desc}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>Specifications</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {product.specs.map((spec, i) => (
                <li key={i} style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Quantity:</span>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(15,23,42,0.03)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '0.25rem 0.5rem' }}>
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', padding: '0.25rem 0.75rem', fontWeight: 'bold', color: 'var(--primary-navy)' }}
              >
                -
              </button>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, width: '32px', textAlign: 'center', color: 'var(--text-heading)' }}>
                {quantity}
              </span>
              <button 
                onClick={() => setQuantity(q => q + 1)} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', padding: '0.25rem 0.75rem', fontWeight: 'bold', color: 'var(--primary-navy)' }}
              >
                +
              </button>
            </div>
          </div>

          <button 
            onClick={() => {
              handleAddToCart();
              setCartDrawerOpen(true);
            }} 
            style={{ 
              width: '100%', 
              padding: '1.25rem', 
              background: 'var(--primary-navy)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '16px', 
              fontWeight: 600, 
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              transition: 'background 0.3s'
            }}
          >
            <ShoppingBag size={20} /> Add to Shopping Cart
          </button>

          {/* Mini Features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem', textAlign: 'center' }}>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={24} style={{ color: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>Secure Payment</span>
            </div>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Truck size={24} style={{ color: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>Nationwide Delivery</span>
            </div>
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <RefreshCw size={24} style={{ color: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>Easy Returns</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sliding Quick Cart Drawer Overlay (Plateau style integration) */}
      <AnimatePresence>
        {cartDrawerOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartDrawerOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: isMobile ? 'none' : 'blur(10px)',
                zIndex: 9999
              }}
            />

            {/* Right side cart drawer panel */}
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
                background: isMobile ? '#ffffff' : 'rgba(255, 255, 255, 0.96)',
                backdropFilter: isMobile ? 'none' : 'blur(20px)',
                boxShadow: '-20px 0 50px rgba(0,0,0,0.15)',
                padding: '2rem 1.5rem',
                overflowY: 'auto',
                zIndex: 10000,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Close Button & Header */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => setCartDrawerOpen(false)}
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShoppingCart size={24} style={{ color: 'var(--accent-gold)' }} />
                  <h3 style={{ fontSize: '1.8rem', margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--text-heading)' }}>
                    Your Shopping Cart
                  </h3>
                </div>
              </div>

              {/* Cart Items & Calculations Content Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid rgba(15,23,42,0.1)', paddingBottom: '1.25rem' }}>
                  <p style={{ color: 'var(--text-muted)', margin: '0 0 1rem', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    The following capacity resource has been added to your session cart:
                  </p>

                  {/* Product row item */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', background: 'rgba(15,23,42,0.03)', padding: '1rem', borderRadius: '16px', flexWrap: 'wrap' }}>
                    <img src={product.img.startsWith('http') ? `${product.img}?auto=format&fit=crop&w=150&q=80` : product.img} alt={product.title} style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'contain', background: '#0a0f1d', padding: '0.2rem' }} />
                    <div style={{ flex: 1, minWidth: '150px' }}>
                      <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-heading)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{product.title}</h4>
                      <p style={{ margin: '0.2rem 0 0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Standard Pass</p>
                      
                      {/* Inline Quantity Selector inside Drawer */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.15rem 0.4rem', width: 'fit-content' }}>
                        <button 
                          onClick={() => {
                            const newQty = Math.max(1, quantity - 1);
                            setQuantity(newQty);
                            if (typeof window !== "undefined") {
                              localStorage.setItem("knowxtra_cart", JSON.stringify({
                                id, title: product.title, price: product.price, rawPrice: product.rawPrice, img: product.img, quantity: newQty
                              }));
                            }
                          }} 
                          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0 0.4rem', fontWeight: 'bold', color: 'var(--primary-navy)' }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, width: '20px', textAlign: 'center', color: 'var(--text-heading)' }}>
                          {quantity}
                        </span>
                        <button 
                          onClick={() => {
                            const newQty = quantity + 1;
                            setQuantity(newQty);
                            if (typeof window !== "undefined") {
                              localStorage.setItem("knowxtra_cart", JSON.stringify({
                                id, title: product.title, price: product.price, rawPrice: product.rawPrice, img: product.img, quantity: newQty
                              }));
                            }
                          }} 
                          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0 0.4rem', fontWeight: 'bold', color: 'var(--primary-navy)' }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Currency Selector Option */}
                <div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-navy)', display: 'block', marginBottom: '0.5rem' }}>
                    Select Settlement Currency:
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.05)', padding: '0.25rem', borderRadius: '100px', alignSelf: 'flex-start', width: 'fit-content' }}>
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
                </div>

                {/* pricing summary container */}
                <div style={{ borderLeft: '4px solid var(--accent-gold)', background: 'rgba(15, 23, 42, 0.03)', padding: '1.25rem', borderRadius: '16px' }}>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Estimated Investment Total:</span>
                  <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.8rem', color: 'var(--primary-navy)', fontWeight: 700 }}>
                    {currency === 'NGN' ? `₦${(product.rawPrice * quantity).toLocaleString()}` : `$${((id === '1' ? 100 : id === '2' ? 120 : 400) * quantity).toLocaleString()}`}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Paystack integration live for regional routing</span>
                </div>

                {/* Action Buttons grouped closely */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <Link href="/shop/checkout" style={{ textDecoration: 'none' }}>
                    <button
                      style={{
                        width: '100%',
                        padding: '1.1rem',
                        background: 'var(--primary-navy)',
                        border: 'none',
                        color: 'white',
                        borderRadius: '14px',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'opacity 0.2s'
                      }}
                    >
                      Secure Checkout
                    </button>
                  </Link>

                  <button
                    onClick={() => setCartDrawerOpen(false)}
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      background: 'transparent',
                      border: '1px solid rgba(15,23,42,0.15)',
                      color: 'var(--text-heading)',
                      borderRadius: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.95rem'
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
