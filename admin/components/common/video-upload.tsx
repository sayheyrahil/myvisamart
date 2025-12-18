import * as React from "react";
import { axiosInstance } from "@/lib/axios-instance";
import { ENDPOINTS, WEB_URL } from "@/lib/constants";
import { handleAxiosError } from "@/lib/common";
import axios from "axios";

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
  type = "general",
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = React.useState(false);

  async function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      const file = files[0];
      const formData = new FormData();
      formData.append("files", file);
      const response = await axios.post(
        `${ENDPOINTS.file_upload}?type=${type}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const store_url = response.data.data.store_url;
      const video_url = response.data.data.video_url;
      onChange(store_url, video_url);
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragActive(false);
    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;
    const event = {
      target: { files },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    handleVideoUpload(event);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragActive(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragActive(false);
  }

  function handleRemoveVideo() {
    onChange("", "");
  }

  function withBaseUrl(url: string) {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${WEB_URL}${url}`;
  }

  const hasVideo =
    (typeof preview === "string" && preview) ||
    (typeof value === "string" && value);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-colors cursor-pointer
          ${isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-50 hover:border-blue-400"}
          ${uploading ? "opacity-60 pointer-events-none" : ""}
          py-6 px-4`}
        tabIndex={0}
        onClick={handleButtonClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleButtonClick();
        }}
        aria-label="Upload video"
        style={{ outline: isDragActive ? "2px solid #3b82f6" : undefined }}
      >
        {hasVideo ? (
          <div className="relative flex flex-col items-center">
            <video
              src={
                typeof preview === "string" && preview
                  ? withBaseUrl(preview)
                  : typeof value === "string" && value
                  ? withBaseUrl(value)
                  : ""
              }
              controls
              className="max-h-40 rounded-lg border border-gray-300 shadow mb-2 object-contain"
            />
            <button
              type="button"
              className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveVideo();
              }}
              tabIndex={0}
              aria-label="Remove video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-10 h-10 text-blue-400 mb-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 10l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            <span className="text-gray-600 text-sm">
              {uploading
                ? "Uploading..."
                : "Click or drag video to upload"}
            </span>
            <span className="text-xs text-gray-400">
              MP4, WEBM, AVI up to 50MB
            </span>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          multiple={false}
          onChange={handleVideoUpload}
          disabled={uploading}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default VideoUpload;
