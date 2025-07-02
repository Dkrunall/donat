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
  const [loadedImages, setLoadedImages] = useState(new Set());
  const imagesPerPage = 20;

  // Function to get image files from the gallery directory
  const getGalleryImages = (start, end) => {
    const imageFiles = [];
    for (let i = start; i <= end; i++) {
      if (i > 256) continue; // Skip if beyond the last image
      
      // Skip known missing file numbers
      const missingFiles = new Set([150, 173, 175, 239, 240, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256]);
      if (missingFiles.has(i)) continue;
      
      // Use the correct extension based on the file number
      let extension = 'jpg';
      const jpgFiles = new Set([1, 2, 3, 9, 10, 11, 22, 23, 24, 25, 41, 42, 49, 50, 51, 52, 53, 54, 59, 60, 61, 62, 63, 64, 65, 66, 67, 70,
        208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
        237, 238, 239, 240, 241]);
      const jpegFiles = new Set([239, 240]);
      
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

  // Handle image load error with retry logic
  const handleImageError = (imagePath) => {
    try {
      // Extract file number and current extension
      const match = imagePath.match(/File(\d+)\.(jpg|JPG|jpeg)$/);
      if (!match) {
        console.error('Invalid image path format:', imagePath);
        setErrorImages(prev => new Set([...prev, imagePath]));
        setImages(prev => prev.filter(img => img !== imagePath));
        return;
      }

      const [, fileNumber, currentExt] = match;
      const num = parseInt(fileNumber, 10);

      // Try alternative extensions
      let newExt;
      if (currentExt === 'jpg') newExt = 'JPG';
      else if (currentExt === 'JPG') newExt = 'jpeg';
      else {
        // If we've tried all extensions, mark as error
        setErrorImages(prev => new Set([...prev, imagePath]));
        setImages(prev => prev.filter(img => img !== imagePath));
        return;
      }

      // Replace with new extension
      const newPath = `/gallery/File${num}.${newExt}`;
      if (!images.includes(newPath)) {
        setImages(prev => prev.map(img => img === imagePath ? newPath : img));
      }
    } catch (error) {
      console.error('Error handling image:', error);
      setErrorImages(prev => new Set([...prev, imagePath]));
      setImages(prev => prev.filter(img => img !== imagePath));
    }
  };

  // Load more images when scrolling
  const loadMore = () => {
    try {
      const start = (page - 1) * imagesPerPage + 1;
      const end = Math.min(page * imagesPerPage, 256); // Limit to max 256 images
      
      if (start > 256) {
        setHasMore(false);
        return;
      }
      
      const newImages = getGalleryImages(start, end)
        .filter(img => !loadedImages.has(img) && !errorImages.has(img)); // Filter out already loaded and error images

      if (newImages.length > 0) {
        setImages(prevImages => {
          const uniqueImages = new Set([...prevImages, ...newImages]);
          return Array.from(uniqueImages);
        });
        setPage(prevPage => prevPage + 1);
      }
      
      // Check if we've reached the end
      if (end >= 256 || newImages.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more images:', error);
      setHasMore(false);
    }
  };

  // Initial load and cleanup
  useEffect(() => {
    loadMore();
    return () => {
      setLoadedImages(new Set()); // Reset loaded images on unmount
    };
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
              className={`w-full h-auto transition-transform duration-300 group-hover:scale-105 ${!loadedImages.has(image) ? 'opacity-0' : 'opacity-100'}`}
              quality={75}
              onError={() => handleImageError(image)}
              onLoad={() => {
                setLoadedImages(prev => new Set([...prev, image]));
              }}
              {...(index < 4 ? { priority: true } : { loading: 'lazy' })} // Use priority for first 4 images, lazy loading for rest
            />
            {!loadedImages.has(image) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
          </div>
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default Gallery;