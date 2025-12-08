import React from "react";
import ImageUpload from "@/components/common/image-upload";

type Props = {
  icon: string;
  image: string;
  imageIconPreview: string;
  imagePreview: string;
  setIcon: (icon: string) => void;
  setImage: (image: string) => void;
  setImageIconPreview: (preview: string) => void;
  setImagePreview: (preview: string) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
  errors?: string[]; // <-- add errors prop
};

const CountryImages: React.FC<Props> = ({
  icon,
  image,
  imageIconPreview,
  imagePreview,
  setIcon,
  setImage,
  setImageIconPreview,
  setImagePreview,
  uploading,
  setUploading,
  errors = [],
}) => (
  <>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Icon:
        <ImageUpload
          value={icon}
          preview={imageIconPreview}
          onChange={(imgUrl, previewUrl) => {
            const imageVal = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
            const previewVal = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
            setIcon(imageVal);
            setImageIconPreview(previewVal && previewVal.length > 0 ? previewVal : imageVal);
          }}
          uploading={uploading}
          setUploading={setUploading}
          type="countries_icon"
        />
      </label>
      {errors.filter(e => e.toLowerCase().includes("icon")).map((e, i) => (
        <div key={i} className="text-red-600 text-sm mt-1">{e}</div>
      ))}
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Image:
        <ImageUpload
          value={image}
          preview={imagePreview}
          onChange={(imgUrl, previewUrl) => {
            const imageVal = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
            const previewVal = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
            setImage(imageVal);
            setImagePreview(previewVal && previewVal.length > 0 ? previewVal : imageVal);
          }}
          uploading={uploading}
          setUploading={setUploading}
          type="countries"
        />
      </label>
      {errors.filter(e => e.toLowerCase().includes("image")).map((e, i) => (
        <div key={i} className="text-red-600 text-sm mt-1">{e}</div>
      ))}
    </div>
  </>
);

export default CountryImages;
