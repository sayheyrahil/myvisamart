import React from "react";

export default function SponsorBasicDetailsForm({
  sponsorData,
  handleChange,
  countryOptions,
  stateOptions,
  cityOptions,
  useDropdowns,
}: {
  sponsorData: any;
  handleChange: (field: string, value: any) => void;
  countryOptions?: { value: string; label: string }[];
  stateOptions?: { value: string; label: string }[];
  cityOptions?: { value: string; label: string }[];
  useDropdowns?: boolean;
}) {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Added fields */}
      <div>
        <label className="block text-xs font-medium mb-1">
          First Name*
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="First Name"
          value={sponsorData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Last Name*
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Last Name"
          value={sponsorData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Father's Name*
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Father's Name"
          value={sponsorData.fatherName}
          onChange={(e) => handleChange("fatherName", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Mother's Name*
        </label>
        <input
          className="w-full border rounded px-2 py-1"
          placeholder="Mother's Name"
          value={sponsorData.motherName}
          onChange={(e) => handleChange("motherName", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Date of Birth*
        </label>
        <input
          type="date"
          className="w-full border rounded px-2 py-1"
          value={sponsorData.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Gender*
        </label>
        <select
          className="w-full border rounded px-2 py-1"
          value={sponsorData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
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
        {useDropdowns && cityOptions ? (
          <select
            className="w-full border rounded px-2 py-1"
            value={sponsorData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          >
            <option value="">Select City</option>
            {cityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="w-full border rounded px-2 py-1"
            value={sponsorData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="City"
          />
        )}
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          State*
        </label>
        {useDropdowns && stateOptions ? (
          <select
            className="w-full border rounded px-2 py-1"
            value={sponsorData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          >
            <option value="">Select State</option>
            {stateOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="w-full border rounded px-2 py-1"
            value={sponsorData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="State"
          />
        )}
      </div>
      <div>
        <label className="block text-xs font-medium mb-1">
          Country*
        </label>
        {useDropdowns && countryOptions ? (
          <select
            className="w-full border rounded px-2 py-1"
            value={sponsorData.country}
            onChange={(e) => handleChange("country", e.target.value)}
          >
            <option value="">Select Country</option>
            {countryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="w-full border rounded px-2 py-1"
            value={sponsorData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="Country"
          />
        )}
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
