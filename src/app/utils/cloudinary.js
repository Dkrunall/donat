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
  if (isCloudinaryUrl(src)) {
    // Extract public ID from Cloudinary URL
    const publicId = src.split('/').pop().split('.')[0];
    return (
      <CldImage
        src={publicId}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={className}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      className={className}
      {...props}
    />
  );
};