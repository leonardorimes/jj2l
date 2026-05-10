import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../privacypolicy/privacy.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | JJ2L Services',
  description: 'Terms of Service for JJ2L Services LLC',
};

export default function TermsOfService() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>TERMS OF SERVICE FOR JJ2L SERVICES LLC</h1>
          <p className={styles.date}>Last Updated: May 1, 2026</p>
          
          <p>Welcome to JJ2L SERVICES LLC. By accessing our website and using our services, you agree to be bound by these Terms of Service.</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By using our services, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement.</p>
          
          <h2>2. SMS/Text Messaging Program Terms</h2>
          <p>By interacting with our website, providing your phone number, and opting into our messaging services, you agree to receive SMS communications from JJ2L SERVICES LLC.</p>
          
          <p><strong>Program Description:</strong> Our SMS program sends text messages to customers who have opted in to receive them regarding free estimate requests, appointment confirmations, installation reminders, and promotional offers related to outdoor home improvement services (pavers, fences, and artificial grass).</p>
          
          <p><strong>Opt-In Information:</strong> Consent is obtained through website forms where you explicitly check a box to receive messages. Providing your phone number without checking the consent box does not constitute an opt-in.</p>
          
          <p><strong>Message Frequency:</strong> Message frequency varies based on your interaction with our services and the progress of your project.</p>
          
          <p><strong>Rates:</strong> Message and data rates may apply depending on your mobile carrier plan.</p>
          
          <p><strong>Opt-Out/Cancellation:</strong> You can cancel the SMS service at any time. Just text "STOP" to the number we are messaging you from. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.</p>
          
          <p><strong>Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword "HELP" for more assistance, or you can get help directly at our contact information listed below.</p>
          
          <p><strong>Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</p>
          
          <p><strong>Privacy:</strong> For information on how we handle your data, please review our <a href="/privacypolicy" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Privacy Policy</a>.</p>
          
          <h2>3. User Responsibilities</h2>
          <p>You agree to use our website and services for lawful purposes only. You are responsible for providing accurate and current contact information and for notifying us if you change or deactivate your phone number.</p>
          
          <h2>4. Limitation of Liability</h2>
          <p>JJ2L SERVICES LLC shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including any delays in SMS delivery or technical issues beyond our control.</p>
          
          <h2>5. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the State of Florida, USA.</p>
          
          <h2>6. Company Information</h2>
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
