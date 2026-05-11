"use client";

import Link from 'next/link';
import { LuPhone } from 'react-icons/lu';
import styles from './Cta.module.css';

export default function Cta() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '/#contact');
      }
    }
  };
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Upgrade Your Outdoor Space?</h2>
        <p className={styles.subtitle}>
          Contact JJ2L Construction today for a free estimate and let us transform your backyard.
        </p>
        <div className={styles.actions}>
          <Link href="/#contact" className={styles.primaryBtn} onClick={handleScrollToContact}>
            Get Free Estimate
          </Link>
          <a href="tel:6893341505" className={styles.secondaryBtn}>
            <LuPhone className={styles.icon} />
            (689) 334-1505
          </a>
        </div>
      </div>
    </section>
  );
}
