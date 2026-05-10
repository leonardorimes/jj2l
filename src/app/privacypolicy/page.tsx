import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './privacy.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | JJ2L Services',
  description: 'Privacy Policy for JJ2L Services LLC',
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>PRIVACY POLICY FOR JJ2L SERVICES LLC</h1>
          <p className={styles.date}>Effective Date: May 1, 2026</p>
          
          <p>JJ2L SERVICES LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data, including information collected through our website and SMS communication services.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us, such as your name, email address, phone number, and any other details you provide when filling out forms on our website or contacting us directly.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to operate our business, respond to inquiries, provide requested services (such as pavers, fences, and artificial grass installation), and send communications related to your service requests.</p>
          
          <h2>3. SMS/Text Messaging and Data Sharing</h2>
          <p>By providing your phone number and opting into our messaging services, you consent to receive text messages (SMS) from JJ2L SERVICES LLC regarding your inquiries, services, or appointments.</p>
          
          <p><strong>Opt-Out:</strong> You may opt-out of receiving text messages at any time by replying "STOP" to any message we send.</p>
          
          <p><strong>Data Sharing Policy:</strong> No mobile information will be shared with third parties or affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, except for aggregators and providers of the Text Message services.</p>
          
          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <address>
            <strong>JJ2L SERVICES LLC</strong><br />
            7935 Ava Jade Aly<br />
            Winter Garden, FL 34787
          </address>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
