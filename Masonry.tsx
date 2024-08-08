import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImageGallery: React.FC = () => {
  const images = [
    { id: 1, src: 'https://via.placeholder.com/600x400', alt: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/600x800', alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/600x600', alt: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/600x700', alt: 'Image 4' },
    { id: 5, src: 'https://via.placeholder.com/600x500', alt: 'Image 5' },
    { id: 6, src: 'https://via.placeholder.com/600x900', alt: 'Image 6' },
  ];

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
    >
      <Masonry gutter="20px">
        {images.map(image => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImageGallery;
