import React from "react";

export default function SponsorBasicDetailsForm({
  sponsorData,
  handleChange,
}: {
  sponsorData: any;
  handleChange: (field: string, value: any) => void;
}) {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-medium mb-1">
          Phone Number
        </label>
        <div className="flex items-center border rounded px-2 py-1">
          <input
            className="w-full outline-none bg-transparent"
            placeholder="Phone Number"
            value={sponsorData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Email*
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Email"
          value={sponsorData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Address Line 1
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Address Line 1"
          value={sponsorData.address1}
          onChange={(e) => handleChange("address1", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Address Line 2
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Address Line 2"
          value={sponsorData.address2}
          onChange={(e) => handleChange("address2", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          City*
        </label>
        <select
          className="w-full border rounded px-2 py-1"
          value={sponsorData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          disabled={typeof sponsorData.city === "undefined"}
        >
          <option value="">Select</option>
          {/* Add city options here */}
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          State*
        </label>
        <select
          className="w-full border rounded px-2 py-1"
          value={sponsorData.state}
          onChange={(e) => handleChange("state", e.target.value)}
          disabled={typeof sponsorData.state === "undefined"}
        >
          <option value="">Select</option>
          {/* Add state options here */}
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Country*
        </label>
        <select
          className="w-full border rounded px-2 py-1"
          value={sponsorData.country}
          onChange={(e) => handleChange("country", e.target.value)}
          disabled={typeof sponsorData.country === "undefined"}
        >
          <option value="">Select</option>
          {/* Add country options here */}
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Zip Code*
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Zip Code"
          value={sponsorData.zip}
          onChange={(e) => handleChange("zip", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Have Schengen Visa?
        </label>
        <select
          className="w-full border rounded px-2 py-1"
          value={sponsorData.schengenVisa}
          onChange={(e) => handleChange("schengenVisa", e.target.value)}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Marital Status
        </label>
        <select
          className="w-full border rounded px-2 py-1"
          value={sponsorData.maritalStatus}
          onChange={(e) => handleChange("maritalStatus", e.target.value)}
        >
          <option value="">Select</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
      </div>
    </form>
  );
}
