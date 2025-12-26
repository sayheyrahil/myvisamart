import React from "react";

export default function SponsorPassportDetailsForm({
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
            placeholder="Date of Birth"
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
            <option value="">Select</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">
            Passport Number*
          </label>
          <input
            className="w-full border rounded px-2 py-1"
            placeholder="Passport Number"
            value={sponsorData.passportNumber}
            onChange={(e) => handleChange("passportNumber", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">
            Passport place of issue*
          </label>
          <input
            className="w-full border rounded px-2 py-1"
            placeholder="Passport place of issue"
            value={sponsorData.passportPlace}
            onChange={(e) => handleChange("passportPlace", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">
            Passport valid till*
          </label>
          <input
            type="date"
            className="w-full border rounded px-2 py-1"
            placeholder="Passport valid till"
            value={sponsorData.passportValidTill}
            onChange={(e) => handleChange("passportValidTill", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
