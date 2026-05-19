"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Trash2, ShoppingBag } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  price: string;
  rawPrice: number;
  img: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("knowxtra_cart");
      if (stored) {
        const item = JSON.parse(stored);
        setCart(item);
        if (item.quantity) {
          setQuantity(item.quantity);
        }
      }
    }
  }, []);

  // Persist quantity modifications
  useEffect(() => {
    if (mounted && cart) {
      if (typeof window !== "undefined") {
        localStorage.setItem("knowxtra_cart", JSON.stringify({
          ...cart,
          quantity: quantity
        }));
      }
    }
  }, [quantity, mounted, cart]);

  const handleClear = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("knowxtra_cart");
    }
    setCart(null);
  };

  if (!mounted) return null;

  const subtotal = cart ? cart.rawPrice * quantity : 0;
  const shipping = 2500; // Flat-rate delivery in Nigeria
  const total = subtotal + shipping;

  const formatNaira = (num: number) => {
    return "₦" + num.toLocaleString();
  };

  return (
    <div className="container" style={{ paddingTop: 'calc(var(--spacing-xl) + 40px)', paddingBottom: 'var(--spacing-xl)', maxWidth: '900px' }}>
      <h1 className="text-3d" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem' }}>Your Shopping Cart</h1>

      {!cart ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel" style={{ padding: '4rem 2rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <ShoppingBag size={64} style={{ color: 'var(--accent-gold)' }} />
          <h3 style={{ fontSize: '1.75rem', margin: 0, fontFamily: 'var(--font-serif)', color: 'var(--text-heading)' }}>Your Cart is Empty</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>Explore our exclusive knowledge products to fill your library.</p>
          <Link href="/shop" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', background: 'var(--primary-navy)', color: 'white', borderRadius: '100px', textDecoration: 'none', fontWeight: 600 }}>
            Go to Shop
          </Link>
        </motion.div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* Cart Item Detail */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src={`${cart.img}?auto=format&fit=crop&w=150&q=80`} alt={cart.title} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>{cart.title}</h3>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{cart.price}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {/* Quantity Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.25rem 0.5rem' }}>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0 0.5rem', fontWeight: 'bold' }}>-</button>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, width: '20px', textAlign: 'center' }}>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0 0.5rem', fontWeight: 'bold' }}>+</button>
              </div>

              {/* Total Price */}
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', minWidth: '100px', textAlign: 'right' }}>
                {formatNaira(cart.rawPrice * quantity)}
              </span>

              {/* Remove */}
              <button onClick={handleClear} style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Trash2 size={20} />
              </button>
            </div>
          </motion.div>

          {/* Cart Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', maxWidth: '450px', marginLeft: 'auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-heading)', fontFamily: 'var(--font-serif)' }}>Order Summary</h3>
            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', color: 'var(--text-main)' }}>
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', color: 'var(--text-main)' }}>
              <span>Shipping Fee (NGN)</span>
              <span>{formatNaira(shipping)}</span>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
              <span>Total</span>
              <span>{formatNaira(total)}</span>
            </div>

            <Link href="/shop/checkout" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
              <button style={{ 
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
                gap: '0.5rem'
              }}>
                Proceed to Checkout <ArrowRight size={20} />
              </button>
            </Link>

            <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-navy)', fontWeight: 600, justifyContent: 'center', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}
