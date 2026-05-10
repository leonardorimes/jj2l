import { LuShieldCheck, LuGem, LuSparkles, LuDollarSign, LuMapPin, LuFileText } from 'react-icons/lu';
import styles from './WhyUs.module.css';

export default function WhyUs() {
  const features = [
    {
      title: 'Professional installation',
      icon: <LuShieldCheck className={styles.icon} />
    },
    {
      title: 'High quality materials',
      icon: <LuGem className={styles.icon} />
    },
    {
      title: 'Clean and organized Job sites',
      icon: <LuSparkles className={styles.icon} />
    },
    {
      title: 'Honest and transparent pricing',
      icon: <LuDollarSign className={styles.icon} />
    },
    {
      title: 'Local Florida contractor',
      icon: <LuMapPin className={styles.icon} />
    },
    {
      title: 'Free estimates',
      icon: <LuFileText className={styles.icon} />
    }
  ];

  return (
    <section id="why-us" className={styles.whyUsSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
