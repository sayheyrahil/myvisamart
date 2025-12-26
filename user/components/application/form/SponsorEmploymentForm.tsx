import React from "react";

// Main options
const MAIN_OPTIONS = [
  "Employed",
  "Self Employed",
  "Unemployed",
  "Retired",
];

// Sub-options for Self Employed
const SELF_EMPLOYED_OPTIONS = [
  "Run a Business",
  "Freelancer",
  "Stock Trader",
  "Self Employed",
];

// Sub-options for Unemployed
const UNEMPLOYED_OPTIONS = [
  "Student",
  "Home-maker",
  "Unemployed",
];

export default function SponsorEmploymentForm({
  sponsorData,
  handleChange,
}: {
  sponsorData: any;
  handleChange: (field: string, value: any) => void;
}) {
  // Determine if sub-options should be shown
  const showSelfEmployed = sponsorData.employmentType === "Self Employed";
  const showUnemployed = sponsorData.employmentType === "Unemployed";

  return (
    <div className="py-4">
      <form>
        <div className="mb-6">
          <label className="block text-xs font-medium mb-1">
            You are ?
          </label>
          <select
            className="w-full border rounded-lg px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={sponsorData.employmentType}
            onChange={(e) => {
              handleChange("employmentType", e.target.value);
              // Reset subEmploymentType if main changes
              if (e.target.value !== "Self Employed" && e.target.value !== "Unemployed") {
                handleChange("subEmploymentType", "");
              }
            }}
          >
            <option value="">Select</option>
            {MAIN_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {showSelfEmployed && (
          <div className="mb-6">
            <label className="block text-xs font-medium mb-1">
              Please specify
            </label>
            <select
              className="w-full border rounded-lg px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={sponsorData.subEmploymentType || ""}
              onChange={(e) => handleChange("subEmploymentType", e.target.value)}
            >
              <option value="">Select</option>
              {SELF_EMPLOYED_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        {showUnemployed && (
          <div className="mb-6">
            <label className="block text-xs font-medium mb-1">
              Please specify
            </label>
            <select
              className="w-full border rounded-lg px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={sponsorData.subEmploymentType || ""}
              onChange={(e) => handleChange("subEmploymentType", e.target.value)}
            >
              <option value="">Select</option>
              {UNEMPLOYED_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
    </div>
  );
}
