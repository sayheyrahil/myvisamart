import React, { useState, useRef } from "react";
import axios from "axios"
import { ENDPOINTS } from "@/utils/constants";

function DocumentModal({
  open,
  onClose,
  title,
  image,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[320px] relative flex flex-col items-center">
        <button
          className="absolute top-4 right-4 text-gray-500 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
    
        <div className="w-full text-left mb-2 text-base font-medium text-gray-700">
          {title}
        </div>
        <div className="flex justify-center items-center w-full my-4">
          <img
            src={image}
            alt={title}
            className="rounded object-contain"
           />
        </div>
        <button
          className="w-full bg-brand text-white py-2 rounded-lg mt-2"
          onClick={onClose}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default function SponsorDocumentsForm({
  sponsorData,
  handleChange,
}: {
  sponsorData: any;
  handleChange: (field: string, value: any, imageUrl?: string) => void;
}) {
  const [modal, setModal] = useState<null | "photo" | "passport">(null);
  const [uploading, setUploading] = useState<null | "photo" | "passport">(null);
  const [uploadedImages, setUploadedImages] = useState<{ photo?: string; passport?: string }>({});
  const photoInputRef = useRef<HTMLInputElement>(null);
  const passportInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "photo" | "passport"
  ) => {  
    const files = e.target.files;
    if (!files || !files[0]) return;
    setUploading(type);
    try {
      const formData = new FormData();
      formData.append("files", files[0]);
      const response = await axios.post(
        `${ENDPOINTS.image_upload}?type=${type}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const store_url = response.data.data.store_url;
      const image_url = response.data.data.image_url;
      handleChange(type === "photo" ? "photo" : "passportFile", store_url, image_url);
      setUploadedImages((prev) => ({
        ...prev,
        [type]: image_url,
      }));
      setModal(type); // Open modal to preview uploaded image
    } catch (err) {
      // Optionally handle error
    }
    setUploading(null);
  };

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Photo Upload */}
        <div>
          <label className="block text-xs font-medium mb-2">
            Photo
          </label>
          <div className="border rounded-lg bg-[#F7FAFC] flex items-center px-4 py-3">
            <input
              type="file"
              className="hidden"
              id="photo-upload"
              ref={photoInputRef}
              onChange={(e) => handleFileUpload(e, "photo")}
            />
            <button
              type="button"
              className="flex-1 cursor-pointer text-gray-400 text-left"
              onClick={() => photoInputRef.current?.click()}
              disabled={uploading === "photo"}
            >
              {uploading === "photo" ? "Uploading..." : "Upload"}
            </button>
            {/* Preview button if photo exists */}
            {uploadedImages.photo && (
              <button
                type="button"
                className="ml-2 text-brand underline text-xs"
                onClick={() => setModal("photo")}
              >
                Preview
              </button>
            )}
            <span className="ml-2">
              <svg width="24" height="24" fill="none">
                <path
                  d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2M7 12l5 5 5-5M12 17V4"
                  stroke="#A0AEC0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* Passport Upload */}
        <div>
          <label className="block text-xs font-medium mb-2">
            Passport
          </label>
          <div className="border rounded-lg bg-[#F7FAFC] flex items-center px-4 py-3">
            <input
              type="file"
              className="hidden"
              id="passport-upload"
              ref={passportInputRef}
              onChange={(e) => handleFileUpload(e, "passport")}
            />
            <button
              type="button"
              className="flex-1 cursor-pointer text-gray-400 text-left"
              onClick={() => passportInputRef.current?.click()}
              disabled={uploading === "passport"}
            >
              {uploading === "passport" ? "Uploading..." : "Upload"}
            </button>
            {/* Preview button if passport exists */}
            {uploadedImages.passport && (
              <button
                type="button"
                className="ml-2 text-brand underline text-xs"
                onClick={() => setModal("passport")}
              >
                Preview
              </button>
            )}
            <span className="ml-2">
              <svg width="24" height="24" fill="none">
                <path
                  d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2M7 12l5 5 5-5M12 17V4"
                  stroke="#A0AEC0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* Modals */}
      <DocumentModal
        open={modal === "photo"}
        onClose={() => setModal(null)}
        title="Photo"
        image={uploadedImages.photo || '/application/Avatarprofilephoto.png'}
      />
      <DocumentModal
        open={modal === "passport"}
        onClose={() => setModal(null)}
        title="Passport"
        image={uploadedImages.passport || '/application/Passport.png'}
      />
    </div>
  );
}
