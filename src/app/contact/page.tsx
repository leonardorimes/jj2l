import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import styles from './contact.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | JJ2L Services',
  description: 'Get a free estimate for your outdoor home improvement project in Winter Garden, Florida.',
};

export default function ContactPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      
      <Contact />
      
      <Footer />
    </main>
  );
}
