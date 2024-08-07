import React from 'react';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.galleryItem}>
          <img src={image} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;



.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1000px;
  margin: 0 auto;
}

.galleryItem {
  flex: 1 1 calc(33.333% - 10px);
  box-sizing: border-box;
}

.galleryItem img {
  width: 100%;
  height: auto;
  display: block;
}
