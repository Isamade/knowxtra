"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  title: string;
  price: string;
  rawPrice: number;
  img: string;
  quantity?: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("knowxtra_cart");
      if (stored) {
        setCart(JSON.parse(stored));
      }
    }
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment gateway loading
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("knowxtra_cart");
      }
      setProcessing(false);
      router.push("/shop/success");
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)', maxWidth: '1000px' }}>
      <Link href="/shop/cart" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Return to Cart
      </Link>

      <h1 className="text-3d" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2.5rem' }}>Checkout Details</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        {/* Shipping Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>Shipping Information</h3>
          <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>First Name</label>
                <input required type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="Chinedu" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Last Name</label>
                <input required type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="Okonkwo" />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Phone Number</label>
              <input required type="tel" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="+234 80 1234 5678" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>Delivery Address</label>
              <input required type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="Plot 12, Lekki Phase 1" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>City</label>
                <input required type="text" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }} placeholder="Lekki / Lagos" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-navy)' }}>State</label>
                <select required style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.7)', outline: 'none' }}>
                  <option value="Lagos">Lagos State</option>
                  <option value="Abuja">FCT Abuja</option>
                  <option value="Rivers">Rivers State</option>
                  <option value="Enugu">Enugu State</option>
                  <option value="Kano">Kano State</option>
                </select>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', margin: '1rem 0 0.5rem 0', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>Payment Processing</h3>
            <div style={{ padding: '1.5rem', background: 'rgba(212,175,55,0.05)', border: '1px dashed var(--accent-gold)', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <CreditCard size={24} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, display: 'block', color: 'var(--primary-navy)' }}>Paystack Automated Gateway</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Debit cards, bank transfer & USD shortcodes supported.</span>
              </div>
            </div>

            <button type="submit" disabled={processing} style={{ 
              width: '100%', 
              padding: '1.25rem', 
              background: 'var(--primary-navy)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '16px', 
              fontWeight: 600, 
              fontSize: '1.1rem',
              cursor: processing ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              opacity: processing ? 0.7 : 1
            }}>
              {processing ? "Connecting Paystack..." : "Confirm & Pay With Paystack"}
            </button>
          </form>
        </motion.div>

        {/* Order details */}
        {cart && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>Order Details</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img src={`${cart.img}?auto=format&fit=crop&w=150&q=80`} alt={cart.title} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>{cart.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', fontWeight: 600 }}>{cart.price}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Qty: {cart.quantity || 1}</span>
                </div>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-main)' }}>
                <span style={{ fontSize: '0.95rem' }}>Subtotal:</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>₦{(cart.rawPrice * (cart.quantity || 1)).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-main)' }}>
                <Truck size={20} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.95rem' }}>Flat delivery rate: ₦2,500</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-main)' }}>
                <Shield size={20} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.95rem' }}>Automated Paystack protection</span>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
              <span>Pay Total</span>
              <span>₦{((cart.rawPrice * (cart.quantity || 1)) + 2500).toLocaleString()}</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
