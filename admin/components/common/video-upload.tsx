import React, { useRef } from "react";
import ImageUpload from "@/components/common/image-upload";

type VideoUploadProps = {
  value: string;
  preview?: string;
  onChange: (videoUrl: string, previewUrl: string) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
  type?: string;
};

const VideoUpload: React.FC<VideoUploadProps> = ({
  value,
  preview,
  onChange,
  uploading,
  setUploading,
  type,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    // Preview
    const previewUrl = URL.createObjectURL(file);

    // Simulate upload or use your upload logic here
    // For now, just return the preview URL as the value
    // Replace this with your actual upload logic if needed
    onChange(previewUrl, previewUrl);

    setUploading(false);
  };

  return (
    <ImageUpload
      value={value}
      preview={preview ?? ""}
      onChange={(imgUrl, previewUrl) => {
        const videoUrl = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
        const previewUrlFinal = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
        onChange(videoUrl, previewUrlFinal);
      }}
      uploading={uploading}
      setUploading={setUploading}
      type="transit_timeline_video"
    />
  );
};

export default VideoUpload;
