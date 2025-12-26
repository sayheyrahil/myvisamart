import React, { useState } from "react";

 
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
  handleChange: (field: string, value: any) => void;
}) {
  const [modal, setModal] = useState<null | "photo" | "passport">(null);

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Photo Upload */}
        <div>
          <label className="block text-xs font-medium mb-2">
            Photo
          </label>
          <div className="border rounded-lg bg-[#F7FAFC] flex items-center px-4 py-3">
            {/* Hidden input for real upload */}
            <input
              type="file"
              className="hidden"
              id="photo-upload"
              onChange={(e) =>
                handleChange("photo", e.target.files?.[0] || null)
              }
            />
            <button
              type="button"
              className="flex-1 cursor-pointer text-gray-400 text-left"
              onClick={() => setModal("photo")}
            >
              Upload
            </button>
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
              onChange={(e) =>
                handleChange("passportFile", e.target.files?.[0] || null)
              }
            />
            <button
              type="button"
              className="flex-1 cursor-pointer text-gray-400 text-left"
              onClick={() => setModal("passport")}
            >
              Upload
            </button>
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
        image={'/application/Avatarprofilephoto.png'}
      />
      <DocumentModal
        open={modal === "passport"}
        onClose={() => setModal(null)}
        title="Passport"
        image={'/application/Passport.png'}
      />
    </div>
  );
}
