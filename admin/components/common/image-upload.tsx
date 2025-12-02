import * as React from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS, WEB_URL } from "@/lib/constants"
import { handleAxiosError } from "@/lib/common"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"

interface ImageUploadProps {
  multiple?: boolean
  value: string | string[]
  onChange: (url: string | string[], preview: string | string[]) => void
  uploading: boolean
  setUploading: (val: boolean) => void
  preview: string | string[]
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  multiple,
  value,
  onChange,
  uploading,
  setUploading,
  preview,
}) => {
  const { toast } = useToast()
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
            `${ENDPOINTS.image_upload}?type=profiles`,
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
          `${ENDPOINTS.image_upload}?type=profiles`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )


        console.log("Upload response:", response.data)
        const store_url = response.data.data.store_url
        const image_url = response.data.data.image_url
        onChange(store_url, image_url)
      }
    } catch (error) {
      handleAxiosError(toast, error)
    } finally {
      setUploading(false)
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

  // Helper to prepend WEB_URL if not already present
  function withBaseUrl(url: string) {
    if (!url) return ""
    if (url.startsWith("http")) return url
    return `${WEB_URL}${url}`
  }

  // Render logic for single/multiple images
  const hasImages = multiple
    ? Array.isArray(value) && value.length > 0
    : !!(preview || value)

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-colors cursor-pointer
          ${isDragActive
            ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950"
            : "border-gray-300 bg-gray-50 hover:border-blue-400 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-400"}
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
              {value.map((v, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <img
                    src={withBaseUrl(preview[idx] || v)}
                    alt={`Preview ${idx + 1}`}
                    className="max-h-40 rounded-lg border border-gray-300 shadow mb-2 object-contain dark:border-gray-700 dark:bg-gray-800"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-colors dark:bg-gray-900 dark:border-gray-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveImage(idx)
                    }}
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
                </div>
              ))}
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              {Array.isArray(preview) && preview.length > 0 ? (
                preview.map((p, idx) => (
                  <img
                    key={idx}
                    src={withBaseUrl(p)}
                    alt={`Preview ${idx + 1}`}
                    className="max-h-40 rounded-lg border border-gray-300 shadow mb-2 object-contain dark:border-gray-700 dark:bg-gray-800"
                  />
                ))
              ) : Array.isArray(value) && value.length > 0 ? (
                value.map((v, idx) => (
                  <img
                    key={idx}
                    src={withBaseUrl(v)}
                    alt={`Preview ${idx + 1}`}
                    className="max-h-40 rounded-lg border border-gray-300 shadow mb-2 object-contain dark:border-gray-700 dark:bg-gray-800"
                  />
                ))
              ) : (
                <img
                  src={
                    typeof preview === "string" && preview
                      ? withBaseUrl(preview)
                      : typeof value === "string"
                      ? withBaseUrl(value)
                      : ""
                  }
                  alt="Preview"
                  className="max-h-40 rounded-lg border border-gray-300 shadow mb-2 object-contain dark:border-gray-700 dark:bg-gray-800"
                />
              )}
              <button
                type="button"
                className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-colors dark:bg-gray-900 dark:border-gray-700"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveImage()
                }}
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
            </div>
          )
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

export default ImageUpload
