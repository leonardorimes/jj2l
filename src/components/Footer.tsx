import Link from 'next/link';
import Image from 'next/image';
import { LuPhone, LuMail } from 'react-icons/lu';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/Logo_JJ2L.png" 
                alt="JJ2L Services Logo" 
                width={360} 
                height={180} 
                className={styles.logoImage} 
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.description}>
              Professional outdoor home improvement services for homeowners in Florida. Fences, pavers, and artificial grass installed right.
            </p>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>QUICK LINKS</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/#services" className={styles.link}>Services</Link></li>
              <li><Link href="/#why-us" className={styles.link}>Why Us</Link></li>
              <li><Link href="/#gallery" className={styles.link}>Gallery</Link></li>
              <li><Link href="/#contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>CONTACT</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="tel:6893341505" className={styles.contactLink}>
                  <LuPhone className={styles.icon} />
                  (689) 334-1505
                </a>
              </li>
              <li>
                <a href="mailto:contact@jj2lservices.com" className={styles.contactLink}>
                  <LuMail className={styles.icon} />
                  contact@jj2lservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} JJ2L SERVICES LLC. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacypolicy">Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/termsofservice">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
