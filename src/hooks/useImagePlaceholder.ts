import { useEffect, useState } from "react";

const PLACEHOLDER = "/img/placeholder/imagePlaceholder.jpg";

export const useImagePlaceholder = (image: string) => {
  const [imageUrl, setImageUrl] = useState(PLACEHOLDER);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ignore = false;
    const img = new Image();

    img.onload = () => {
      if (!ignore) setImageUrl(image);
    };
    img.onerror = () => {
      if (!ignore) setImageUrl(PLACEHOLDER);
    };
    img.src = image;

    return () => {
      ignore = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [image]);

  return {
    imageUrl
  };
};
