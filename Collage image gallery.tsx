import React from 'react';
import './CollageImageGallery.css';

interface Image {
  id: number;
  src: string;
  alt: string;
  aspectRatio: number; // width / height
}

const CollageImageGallery: React.FC = () => {
  const images: Image[] = [
    { id: 1, src: 'https://via.placeholder.com/500x300', alt: 'Image 1', aspectRatio: 5/3 },
    { id: 2, src: 'https://via.placeholder.com/300x500', alt: 'Image 2', aspectRatio: 3/5 },
    { id: 3, src: 'https://via.placeholder.com/600x400', alt: 'Image 3', aspectRatio: 3/2 },
    { id: 4, src: 'https://via.placeholder.com/400x600', alt: 'Image 4', aspectRatio: 2/3 },
    { id: 5, src: 'https://via.placeholder.com/500x500', alt: 'Image 5', aspectRatio: 1 },
    { id: 6, src: 'https://via.placeholder.com/600x300', alt: 'Image 6', aspectRatio: 2/1 },
  ];

  return (
    <div className="collage-gallery">
      {images.map(image => (
        <div
          key={image.id}
          className="collage-item"
          style={{ flex: `${image.aspectRatio} 1 0%` }}
        >
          <img src={image.src} alt={image.alt} className="collage-image" />
        </div>
      ))}
    </div>
  );
};

export default CollageImageGallery;


.collage-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.collage-item {
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.collage-item:hover {
  transform: scale(1.05);
}

.collage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
