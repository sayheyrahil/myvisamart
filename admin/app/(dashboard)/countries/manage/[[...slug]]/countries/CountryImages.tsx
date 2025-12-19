import React from "react";
import ImageUpload from "@/components/common/image-upload";

type Props = {
  flag: string;
  avatar: string; // <-- added
  image: string;
  imageFlagPreview: string;
  avatarPreview: string; // <-- added
  imagePreview: string;
  setFlag: (flag: string) => void;
  setAvatar: (avatar: string) => void; // <-- added
  setImage: (image: string) => void;
  setImageFlagPreview: (preview: string) => void;
  setAvatarPreview: (preview: string) => void; // <-- added
  setImagePreview: (preview: string) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
  errors?: string[];
};

const CountryImages: React.FC<Props> = ({
  flag,
  avatar, // <-- added
  image,
  imageFlagPreview,
  avatarPreview, // <-- added
  imagePreview,
  setFlag,
  setAvatar, // <-- added
  setImage,
  setImageFlagPreview,
  setAvatarPreview, // <-- added
  setImagePreview,
  uploading,
  setUploading,
  errors = [],
}) => (
  <>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        flag:
        <ImageUpload
          value={flag}
          preview={imageFlagPreview}
          onChange={(imgUrl, previewUrl) => {
            const imageVal = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
            const previewVal = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
            setFlag(imageVal);
            setImageFlagPreview(previewVal && previewVal.length > 0 ? previewVal : imageVal);
          }}
          uploading={uploading}
          setUploading={setUploading}
          type="countries/flag"
        />
      </label>
      {errors.filter(e => e.toLowerCase().includes("flag")).map((e, i) => (
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
          type="countries/image"
        />
      </label>
      {errors.filter(e => e.toLowerCase().includes("image")).map((e, i) => (
        <div key={i} className="text-red-600 text-sm mt-1">{e}</div>
      ))}
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        avatar:
        <ImageUpload
          value={avatar}
          preview={avatarPreview}
          onChange={(imgUrl, previewUrl) => {
            const imageVal = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
            const previewVal = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
            setAvatar(imageVal);
            setAvatarPreview(previewVal && previewVal.length > 0 ? previewVal : imageVal);
          }}
          uploading={uploading}
          setUploading={setUploading}
          type="countries/avatar"
        />
      </label>
      {errors.filter(e => e.toLowerCase().includes("avatar")).map((e, i) => (
        <div key={i} className="text-red-600 text-sm mt-1">{e}</div>
      ))}
    </div>
  </>
);

export default CountryImages;
