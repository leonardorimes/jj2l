import Image from 'next/image';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: 'Fence Installation',
      description: 'Professional residential fence installation including vinyl, aluminum and privacy fences. Built to last and installed with precision.',
      image: '/fence_service.png',
      alt: 'White vinyl fence in residential backyard'
    },
    {
      title: 'Paver Installation',
      description: 'Custom paver patios, walkways, driveways and outdoor living spaces designed for durability and beauty.',
      image: '/paver_service.png',
      alt: 'Custom paver patio with fire pit'
    },
    {
      title: 'Artificial Grass Installation',
      description: 'Low maintenance artificial turf solutions that keep your yard green all year long.',
      image: '/grass_service.png',
      alt: 'Green artificial grass lawn'
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.alt}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
