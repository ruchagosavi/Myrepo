import React from 'react';
import styles from './Gallery.module.css';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: 'https://picsum.photos/id/1018/200/200/', alt: 'Image 1' },
  { src: 'https://picsum.photos/id/1015/200/200/', alt: 'Image 2' },
  { src: 'https://picsum.photos/id/1019/200/200/', alt: 'Image 3' },
  { src: 'https://picsum.photos/id/1020/200/200/', alt: 'Image 4' },
  { src: 'https://picsum.photos/id/1021/200/200/', alt: 'Image 5' },
  { src: 'https://picsum.photos/id/1022/200/200/', alt: 'Image 6' },
  { src: 'https://picsum.photos/id/1022/200/200/', alt: 'Image 6' },
  { src: 'https://picsum.photos/id/1022/200/200/', alt: 'Image 6' },
  { src: 'https://picsum.photos/id/1022/200/200/', alt: 'Image 6' },
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.container}>
         <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.item}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Gallery;


.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    padding: 10px;
    margin-left: 160px;
  }
  
  .item img {
    width: 100%;
    height: auto;
    display: block;
  }
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
