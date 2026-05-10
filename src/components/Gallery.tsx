"use client";

import { useState } from 'react';
import Image from 'next/image';
import { LuX } from 'react-icons/lu';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/gallery_1.png', alt: 'Paver driveway' },
    { src: '/gallery_2.png', alt: 'Black aluminum pool fence' },
    { src: '/gallery_3.png', alt: 'Artificial grass playground' },
    { src: '/gallery_4.png', alt: 'Paver patio with fire pit at night' },
    { src: '/gallery_5.png', alt: 'White vinyl privacy fence alongside paver walkway' },
    { src: '/gallery_6.png', alt: 'Aerial view of modern backyard' }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Project Gallery</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={styles.imageWrapper}
              onClick={() => openModal(image.src)}
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                className={styles.image}
              />
              <div className={styles.overlay}>
                <LuX className={styles.hiddenIcon} /> {/* Just to preload icon styles */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={styles.closeBtn} onClick={(e) => { e.stopPropagation(); closeModal(); }}>
            <LuX />
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage} 
              alt="Gallery Preview"
              fill
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
