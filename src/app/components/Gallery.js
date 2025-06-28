'use client';

import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { OptimizedImage } from "../utils/cloudinary";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [errorImages, setErrorImages] = useState(new Set());
  const imagesPerPage = 20;

  // Function to get image files from the gallery directory
  const getGalleryImages = (start, end) => {
    const imageFiles = [];
    for (let i = start; i <= end; i++) {
      if (i > 256) continue; // Skip if beyond the last image
      
      // Use the correct extension based on the file number
      let extension = 'jpg';
      const jpgFiles = new Set([1, 2, 3, 9, 10, 11, 23, 24, 25, 26, 44, 45, 53, 54, 55, 56, 57, 58, 59,
        64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75,
        217, 218, 219, 220, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236,
        251, 252, 256]);
      const jpegFiles = new Set([253, 254, 255]);
      
      if (jpgFiles.has(i)) {
        extension = 'JPG';
      } else if (jpegFiles.has(i)) {
        extension = 'jpeg';
      }
      
      const imagePath = `/gallery/File${i}.${extension}`;
      if (!errorImages.has(imagePath)) {
        imageFiles.push(imagePath);
      }
    }
    return imageFiles;
  };

  // Handle image load error
  const handleImageError = (imagePath) => {
    setErrorImages(prev => new Set([...prev, imagePath]));
    setImages(prev => prev.filter(img => img !== imagePath));
  };

  // Load more images when scrolling
  const loadMore = () => {
    const start = (page - 1) * imagesPerPage + 1;
    const end = Math.min(page * imagesPerPage, 256); // Limit to max 256 images
    
    if (start > 256) {
      setHasMore(false);
      return;
    }
    
    const newImages = getGalleryImages(start, end);
    if (newImages.length > 0) {
      setImages(prevImages => [...prevImages, ...newImages]);
      setPage(prevPage => prevPage + 1);
    }
    
    // Check if we've reached the end
    if (end >= 256 || newImages.length === 0) {
      setHasMore(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadMore();
  }, []);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4 className="text-center py-4">Loading...</h4>}
      endMessage={<p className="text-center py-4">No more images to load.</p>}
      className="w-full px-2"
    >
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-full"
        columnClassName="px-1"
      >
        {images.map((image, index) => (
          <div key={index} className="mb-4 relative group overflow-hidden rounded-lg">
            <OptimizedImage
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={800}
              height={600}
              sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              quality={75}
              onError={() => handleImageError(image)}
            />
          </div>
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default Gallery;