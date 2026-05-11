"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${sectionId}`);
      }
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/Logo_JJ2L.png" 
              alt="JJ2L Services Logo" 
              width={300} 
              height={150} 
              className={styles.logoImage} 
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li><Link href="/about" className={styles.navLink}>ABOUT</Link></li>
          <li><Link href="/#services" className={styles.navLink} onClick={(e) => handleScrollToSection(e, 'services')}>SERVICES</Link></li>
          <li><Link href="/#why-us" className={styles.navLink} onClick={(e) => handleScrollToSection(e, 'why-us')}>WHY US</Link></li>
          <li><Link href="/#gallery" className={styles.navLink} onClick={(e) => handleScrollToSection(e, 'gallery')}>GALLERY</Link></li>
          <li><Link href="/contact" className={styles.navLink}>CONTACT</Link></li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.phone}>
            <svg xmlns="http://www.w3.org/polygons" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>(689) 334-1505</span>
          </div>
          <Link href="/contact" className={styles.estimateBtn}>
            Free Estimate
          </Link>
        </div>
      </div>
    </nav>
  );
}
