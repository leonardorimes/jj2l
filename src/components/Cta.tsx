import Link from 'next/link';
import { LuPhone } from 'react-icons/lu';
import styles from './Cta.module.css';

export default function Cta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Upgrade Your Outdoor Space?</h2>
        <p className={styles.subtitle}>
          Contact JJ2L Construction today for a free estimate and let us transform your backyard.
        </p>
        <div className={styles.actions}>
          <Link href="/#contact" className={styles.primaryBtn}>
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
