import { WEB_URL } from "@/utils/constants";
import React, { useEffect, useState } from "react";

interface ImageWithPreviewProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  className?: string;
}

const ImageWithPreview: React.FC<ImageWithPreviewProps> = ({
  src,
  alt = "image",
  fallback = WEB_URL + "/uploads/fallback-image.png",
  className = "w-12 h-12 object-cover rounded-md m-auto cursor-pointer",
}) => {
  const [imgSrc, setImgSrc] = useState<string>(fallback);
  const [showModal, setShowModal] = useState(false);

  // ✅ Always handle undefined / null / empty src
  useEffect(() => {
    if (src && src.trim() !== "") {
      setImgSrc(src);
    } else {
      setImgSrc(fallback);
    }
  }, [src, fallback]);

  const getImageUrl = (path: string) => {
    // if already absolute URL, return as-is
    if (path.startsWith("http")) return path;
    return WEB_URL + path;
  };

  return (
    <>
      <img
        src={getImageUrl(imgSrc)}
        alt={alt}
        className={className}
        loading="lazy"
        onClick={() => imgSrc !== fallback && setShowModal(true)}
        onError={() => setImgSrc(fallback)}
        style={{ opacity: imgSrc === fallback ? 0.5 : 1 }}
      />

      {showModal && imgSrc !== fallback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded shadow-lg p-2"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 text-black bg-white rounded-full p-3 shadow"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <img
              src={getImageUrl(imgSrc)}
              alt={alt}
              className="max-w-[80vw] max-h-[80vh] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithPreview;
