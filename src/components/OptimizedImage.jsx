// src/components/OptimizedImage.jsx
import { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, width, height, loading = 'lazy' }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle image loading errors
  const handleError = () => {
    setImageSrc('/images/placeholder.jpg'); // Fallback image
  };

  return (
    <div className={`${className} ${!isLoaded ? 'bg-gray-200 animate-pulse' : ''}`}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;