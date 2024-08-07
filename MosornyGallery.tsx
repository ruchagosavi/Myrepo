import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './Gallery.module.css';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: 'https://picsum.photos/id/1018/200/300/', alt: 'Image 1' },
  { src: 'https://picsum.photos/id/1015/200/250/', alt: 'Image 2' },
  { src: 'https://picsum.photos/id/1019/200/350/', alt: 'Image 3' },
  { src: 'https://picsum.photos/id/1020/200/200/', alt: 'Image 4' },
  { src: 'https://picsum.photos/id/1021/200/400/', alt: 'Image 5' },
  { src: 'https://picsum.photos/id/1022/200/150/', alt: 'Image 6' },
];

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1
};

const Gallery: React.FC = () => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className={styles.myMasonryGrid}
      columnClassName={styles.myMasonryGridColumn}
    >
      {images.map((image, index) => (
        <div key={index} className={styles.item}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;








.myMasonryGrid {
  display: flex;
  margin-left: -10px; /* gutter size offset */
  width: auto;
}

.myMasonryGridColumn {
  padding-left: 10px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.item img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}
