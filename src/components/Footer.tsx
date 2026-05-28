import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <img 
                src="/images/logo_transparent.png" 
                alt="KnowXtra Logo" 
                className={styles.footerLogoImage} 
              />
            </Link>
            <p className={styles.description}>
              A human capacity development company with a strategic focus on
              educational, corporate, and governmental institutions. We raise
              profiles to global standards.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className={styles.colTitle}>Activities</h4>
            <ul className={styles.links}>
              <li><Link href="/services#human-capacity" className={styles.link}>Human Capacity Development</Link></li>
              <li><Link href="/services#conferences" className={styles.link}>Conferences & Seminars</Link></li>
              <li><Link href="/services#publishing" className={styles.link}>Publishing</Link></li>
              <li><Link href="/services#library" className={styles.link}>Library Services</Link></li>
              <li><Link href="/services#event-management" className={styles.link}>Event Management</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/events" className={styles.link}>Events</Link></li>
              <li><Link href="/articles" className={styles.link}>Articles</Link></li>
              <li><Link href="/shop" className={styles.link}>Shop</Link></li>
              <li><Link href="/help" className={styles.link}>Help / Contact</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.links}>
              <li><a href="mailto:info@knowxtra.com" className={styles.link}>info@knowxtra.com</a></li>
              <li><a href="tel:+2349078765354" className={styles.link}>+234 9078765354</a></li>
            </ul>
            <div className={styles.socials} style={{ marginTop: '1.5rem', display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#" className={styles.socialLink} aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter (now X)" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="TikTok" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} KnowXtra Ltd. All rights reserved.
          </p>
          <div className={styles.socials}>
            <Link href="/privacy" className={styles.link} style={{ fontSize: '0.85rem' }}>Privacy Policy</Link>
            <span style={{ color: "var(--border-color)" }}>|</span>
            <Link href="/terms" className={styles.link} style={{ fontSize: '0.85rem' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
