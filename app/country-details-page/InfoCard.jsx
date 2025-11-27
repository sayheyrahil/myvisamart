import React from "react";
import SectionHeading from "@/components/tools/SectionHeading";

export default function InfoCard() {
  const item = (label, value) => (
    <div className="p-4 bg-[#F4F8FB] rounded-xl">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow card">

      <SectionHeading>
        Dubai Visa Information
      </SectionHeading>

      <div className="grid grid-cols-2 gap-4">
        {item("Visa Type", "E-Visa")}
        {item("Length of Stay", "30 days")}
        {item("Validity", "60 days")}
        {item("Entry", "$0 for now")}
      </div>
    </div>
  );
}
