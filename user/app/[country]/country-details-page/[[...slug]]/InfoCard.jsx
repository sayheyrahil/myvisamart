import React from "react";
import SectionHeading from "@/components/tools/SectionHeading";

export default function InfoCard({ name, visa }) {
  const item = (label, value) => (
    <div className="p-4 bg-[#F4F8FB] rounded-xl">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  ); 
  return (
    <div className="bg-white rounded-2xl p-6 shadow card">
      <SectionHeading>{name} Visa Information</SectionHeading>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {Array.isArray(visa) && visa.length > 0 ? (
          visa.map((v, idx) => item(v.key || `Info ${idx + 1}`, v.value || ""))
        ) : (
          <div className="col-span-2 text-gray-400">
            No visa information available.
          </div>
        )}
      </div>
    </div>
  );
}
