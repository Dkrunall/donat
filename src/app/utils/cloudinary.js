import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

// Cloudinary configuration
export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
};

export const isCloudinaryUrl = (src) => {
  return typeof src === 'string' && src.includes('res.cloudinary.com');
};

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  quality = 75,
  priority = false,
  className,
  ...props
}) => {
  const imageProps = {
    src,
    alt,
    sizes,
    quality,
    priority,
    className,
    ...props,
  };

  if (fill) {
    imageProps.fill = true;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  // Check if the URL is already a Cloudinary URL
  if (isCloudinaryUrl(src)) {
    // Handle Cloudinary URL
    const publicId = src.split('/').pop().split('.')[0];
    return <CldImage {...imageProps} src={publicId} />;
  }

  // Fallback to next/image for local or other cases
  return <Image {...imageProps} />;
};