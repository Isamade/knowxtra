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
              Know<span>Xtra</span>
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
              <li><a href="tel:+1234567890" className={styles.link}>+1 234 567 890</a></li>
            </ul>
            <div className={styles.socials} style={{ marginTop: '1.5rem', fontWeight: 600 }}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">FB</a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">TW</a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">IN</a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">IG</a>
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
