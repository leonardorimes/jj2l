import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './about.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | JJ2L Services',
  description: 'Learn more about JJ2L Services LLC, a premier outdoor home improvement contractor in Winter Garden, Florida.',
};

export default function About() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>ABOUT JJ2L SERVICES</h1>
          
          <p>JJ2L Services is a premier outdoor home improvement contractor based in Winter Garden, Florida. We specialize in transforming residential backyards into functional and beautiful living spaces through professional fence, paver, and artificial grass installations.</p>
          
          <p>With a commitment to "Outdoor Improvements Done Right," our team focuses on precision, high-quality materials, and maintaining clean, organized job sites. Whether you are looking for increased privacy with a new vinyl fence, a custom-designed paver patio, or a low-maintenance lawn that stays green year-round, JJ2L Services delivers durable solutions with honest, transparent pricing.</p>
          
          <p>We take pride in being a local Florida contractor dedicated to helping homeowners upgrade their outdoor environments with expert craftsmanship and reliable service.</p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
