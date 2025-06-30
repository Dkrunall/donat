import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { OptimizedImage } from "../utils/cloudinary";

const mediaImages = [
  'File1.jpg', 'File10.jpg', 'File18.jpg', 'File2.jpg', 'File20.jpg', 
  'File21.jpg', 'File22.jpg', 'File23.jpg', 'File24.jpg', 'File25.jpg', 
  'File26.jpeg', 'File3.jpg', 'File4.jpg', 'File5.JPG', 'File6.jpg', 
  'File7.jpg', 'File8.jpg', 'File9.jpg'
];

const MediaGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = mediaImages.map(file => `/media/${file}`);
    setImages(imagePaths);
  }, []);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex w-full"
      columnClassName="px-1"
    >
      {images.map((image, index) => (
        <div key={index} className="mb-4 relative group overflow-hidden rounded-lg">
          <OptimizedImage
            src={image}
            alt={`Media image ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      ))}
    </Masonry>
  );
};

export default MediaGallery;