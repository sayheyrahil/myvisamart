import React from "react";

export default function SponsorEmploymentForm({
  sponsorData,
  handleChange,
}: {
  sponsorData: any;
  handleChange: (field: string, value: any) => void;
}) {
  return (
    <div className="py-4">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1">
            Employment Type*
          </label>
          <input
            className="w-full border rounded px-2 py-1"
            placeholder="Employment Type"
            value={sponsorData.employmentType}
            onChange={(e) => handleChange("employmentType", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">
            Company Name
          </label>
          <input
            className="w-full border rounded px-2 py-1"
            placeholder="Company Name"
            value={sponsorData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
