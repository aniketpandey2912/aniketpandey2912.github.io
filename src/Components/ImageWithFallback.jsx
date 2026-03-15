import React, { useState } from "react";
import { Image, Box, Spinner } from "@chakra-ui/react";

/**
 * ImageWithFallback - Image component with error handling and fallback support
 * Handles broken external image links gracefully
 */
const ImageWithFallback = ({
  src,
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e0e0e0' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='14' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EImage not found%3C/text%3E%3C/svg%3E",
  alt = "Image",
  isLoading = false,
  onError = null,
  ...imageProps
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(isLoading);

  const handleError = () => {
    setHasError(true);
    setImgSrc(fallbackSrc);
    if (onError) {
      onError();
    }
  };

  const handleLoadingComplete = () => {
    setIsLoadingImage(false);
  };

  return (
    <Box position="relative" display="inline-block" width="100%">
      {isLoadingImage && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <Spinner size="sm" />
        </Box>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoadingComplete}
        {...imageProps}
      />
    </Box>
  );
};

export default ImageWithFallback;
