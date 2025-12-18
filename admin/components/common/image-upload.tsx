import * as React from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS, WEB_URL } from "@/lib/constants"
import { handleAxiosError } from "@/lib/common"
import axios from "axios"
import { FaUpload } from "react-icons/fa6"

interface ImageUploadProps {
  multiple?: boolean
  value: string | string[]
  onChange: (url: string | string[], preview: string | string[]) => void
  uploading: boolean
  setUploading: (val: boolean) => void
  preview: string | string[]
  type?:string
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  multiple,
  value,
  onChange,
  uploading,
  setUploading,
  preview,
  type = "general",
}) => {
 
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [isDragActive, setIsDragActive] = React.useState(false)

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || files.length === 0) return
    setUploading(true)
    try {
      if (multiple) {
        const urls: string[] = []
        const previews: string[] = []
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData()
          formData.append("files", files[i])
          const response = await axios.post(
            `${ENDPOINTS.image_upload}?type=${type}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          )
          urls.push(response.data.data.store_url)
          previews.push(response.data.data.image_url)
        }
        onChange(urls, previews)
      } else {
        const file = files[0]
        const formData = new FormData()
        formData.append("files", file)
        const response = await axios.post(
          `${ENDPOINTS.image_upload}?type=${type}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        const store_url = response.data.data.store_url
        const image_url = response.data.data.image_url
        onChange(store_url, image_url)
      }
    } catch (error) {
      handleAxiosError(error)
    } finally {
      setUploading(false)
      e.target.value = "" // Reset file input so same file can be selected again
    }
  }

  function handleButtonClick() {
    fileInputRef.current?.click()
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragActive(false)
    const files = e.dataTransfer.files
    if (!files || files.length === 0) return
    const event = {
      target: { files },
    } as unknown as React.ChangeEvent<HTMLInputElement>
    handleImageUpload(event)
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragActive(true)
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragActive(false)
  }

  function handleRemoveImage(idx?: number) {
    if (multiple) {
      const valueArr = Array.isArray(value) ? value : []
      const previewArr = Array.isArray(preview) ? preview : []
      if (typeof idx === "number") {
        const newValue = [...valueArr]
        const newPreview = [...previewArr]
        newValue.splice(idx, 1)
        newPreview.splice(idx, 1)
        onChange(newValue, newPreview)
      }
    } else {
      onChange("", "")
    }
  }

  function withBaseUrl(url: string) {
    if (!url) return ""
    if (url.startsWith("http")) return url
    return `${WEB_URL}${url}`
  }

  const hasImages =
    multiple
      ? Array.isArray(preview) && preview.length > 0
      : (typeof preview === "string" && preview) || (typeof value === "string" && value);


   return (
    <div className="flex flex-col gap-2 mt-5">
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
          if (e.key === "Enter" || e.key === " ") handleButtonClick()
        }}
        aria-label="Upload image"
        style={{ outline: isDragActive ? "2px solid #3b82f6" : undefined }}
      >
        {hasImages ? (
          multiple && Array.isArray(value) && Array.isArray(preview) ? (
            <div className="flex flex-wrap gap-4 w-full justify-center">
              {preview.map((p, idx) => (
                <div key={idx} className="relative flex flex-col items-center   w-28 h-28">
                  <img
                    src={withBaseUrl(p || value[idx])}
                    alt={`Preview ${idx + 1}`}
                    className="object-contain w-full h-full"
                  />
                  <RemoveImageButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(idx);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              <img
                src={
                  typeof preview === "string" && preview
                    ? withBaseUrl(preview)
                    : typeof value === "string" && value
                    ? withBaseUrl(value)
                    : ""
                }
                alt="Preview"
                className="max-h-40 rounded-lg border border-gray-300 shadow mb-2 object-contain"
              />
              <RemoveImageButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
              />
            </div>
          )
        ) : (
          <div className="flex flex-col items-center gap-2">
           <FaUpload className="text-4xl text-brand" />
            <span className="text-gray-600 text-sm">
              {uploading
                ? "Uploading..."
                : multiple
                ? "Click or drag images to upload"
                : "Click or drag image to upload"}
            </span>
            <span className="text-xs text-gray-400">
              PNG, JPG, JPEG, GIF up to 5MB
            </span>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple={!!multiple}
          onChange={handleImageUpload}
          disabled={uploading}
          className="hidden"
        />
      </div>
    </div>
  )
}

function RemoveImageButton({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      type="button"
      className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-colors"
      onClick={onClick}
      tabIndex={0}
      aria-label="Remove image"
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
  );
}

export default ImageUpload
