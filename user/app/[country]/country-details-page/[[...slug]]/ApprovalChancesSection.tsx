import React from "react";

type Props = {
  countryName?: string;
  thisValue?: number | string;
  otherValue?: number | string;
};

const ApprovalChancesSection: React.FC<Props> = ({ countryName, thisValue, otherValue }) => {
  // Format values as percentages
  const thisPercent = thisValue !== undefined && thisValue !== null ? Number(thisValue).toFixed(2) : "--";
  const otherPercent = otherValue !== undefined && otherValue !== null ? Number(otherValue).toFixed(2) : "--";

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-2">Chances of approval for {countryName || "this country"}</h2>
      <p className="mb-6 text-gray-600">
        This data was taken from the official Schengen Visa data of 2024.
      </p>
      <div className="flex flex-wrap gap-6">
        <div className="bg-white rounded-xl shadow p-5 flex-1 min-w-[220px] max-w-[260px]">
          <div className="font-semibold text-gray-700 mb-1">Atlys</div>
          <div className="text-xs text-gray-400 mb-1">Years <span className="font-medium">2021-2024</span></div>
          <div className="text-xs text-gray-400 mb-3">Users <span className="font-medium">18k+</span></div>
          <div className="flex items-end h-24">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-inner relative">
                <span className="text-xl font-bold text-green-600">{thisPercent}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 flex-1 min-w-[220px] max-w-[260px]">
          <div className="font-semibold text-gray-700 mb-1">Overall Stats</div>
          <div className="text-xs text-gray-400 mb-1">Years <span className="font-medium">2021-2024</span></div>
          <div className="text-xs text-gray-400 mb-3">Users <span className="font-medium">132k+</span></div>
          <div className="flex items-end h-24">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center shadow-inner relative">
                <span className="text-xl font-bold text-red-600">{otherPercent}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        Source: <a href="https://ec.europa.eu/eurostat" className="underline text-brand" target="_blank" rel="noopener noreferrer">Official EU Schengen Data</a>, and Atlys Internal Data
      </div>
    </div>
  );
};

export default ApprovalChancesSection;
