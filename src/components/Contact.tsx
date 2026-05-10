import Script from 'next/script';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <LuPhone className={styles.icon} />
                </div>
                <div>
                  <p className={styles.infoLabel}>PHONE</p>
                  <p className={styles.infoText}>(689) 334-1505</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <LuMail className={styles.icon} />
                </div>
                <div>
                  <p className={styles.infoLabel}>EMAIL</p>
                  <p className={styles.infoText}>contact@jj2lservices.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <LuMapPin className={styles.icon} />
                </div>
                <div>
                  <p className={styles.infoLabel}>LOCATION</p>
                  <p className={styles.infoText}>Winter Garden, Florida</p>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.69460594376!2d-81.65481775!3d28.52837335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e78297cb7303e1%3A0xc6fb6982ddcc9ce8!2sWinter%20Garden%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.formContainer}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/SuG1NkfM5zaSNHJGxsIY"
                style={{ width: '100%', height: '100%', minHeight: '600px', border: 'none', borderRadius: '8px' }}
                id="inline-SuG1NkfM5zaSNHJGxsIY" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Landing Page - Lead Inbound Form"
                data-height="857"
                data-layout-iframe-id="inline-SuG1NkfM5zaSNHJGxsIY"
                data-form-id="SuG1NkfM5zaSNHJGxsIY"
                title="Landing Page - Lead Inbound Form"
              ></iframe>
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
