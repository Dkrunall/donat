'use client';

import Image from 'next/image';

const OptimizedImage = ({
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
    quality,
    priority,
    className,
    ...props
  };

  if (fill) {
    imageProps.fill = true;
    imageProps.sizes = sizes || '100vw';
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  return <Image {...imageProps} />;
};

export default OptimizedImage;