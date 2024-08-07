import React, { useState } from 'react';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';
import styles from './ImageGalleryWithPicker.module.css';

// Import your images
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const imagesList = [
  { src: img1, value: 'Image 1' },
  { src: img2, value: 'Image 2' },
  { src: img3, value: 'Image 3' }
];

const ImageGalleryWithPicker: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const onPick = (images: any[]) => {
    setSelectedImages(images);
  };

  return (
    <div className={styles.container}>
      <ImagePicker
        images={imagesList.map((image, i) => ({ src: image.src, value: image.value }))}
        onPick={onPick}
        multiple
      />
      <div className={styles.selectedImages}>
        {selectedImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={image.src} alt={image.value} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryWithPicker;


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selectedImages {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.imageContainer {
  width: 200px;
  height: 150px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
