import React from "react";

export default function SponsorDocumentsForm({
  sponsorData,
  handleChange,
}: {
  sponsorData: any;
  handleChange: (field: string, value: any) => void;
}) {
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
              onChange={(e) =>
                handleChange("photo", e.target.files?.[0] || null)
              }
            />
            <label
              htmlFor="photo-upload"
              className="flex-1 cursor-pointer text-gray-400"
            >
              Upload
            </label>
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
            <label
              htmlFor="passport-upload"
              className="flex-1 cursor-pointer text-gray-400"
            >
              Upload
            </label>
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
    </div>
  );
}
