import React, { useState } from "react";
// You can use any chart library, here is a placeholder for the chart
function ChartPlaceholder() {
  return (
    <div className="bg-white rounded-xl shadow flex items-center justify-center  ">
     <img 
        src="/extra/qsqs-card.png"
        alt="Chart Placeholder"
        className="w-full h-full object-contain  "
      />
    </div>
  );
}

export default function VisaStatisticsCard({ stats, name }: { stats: any, name: string }) {
  const [tab, setTab] = useState<"processing" | "approval">("processing");

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-10">
      <div className="font-semibold text-[#1A355A] mb-4 flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-green-200 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </span>
        Statistics on  {name}
      </div>
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium ${tab === "processing" ? "text-brand border-b-2 border-brand" : "text-gray-500"}`}
          onClick={() => setTab("processing")}
        >
          Visa Processing Time
        </button>
        <button
          className={`px-4 py-2 font-medium ${tab === "approval" ? "text-brand border-b-2 border-brand" : "text-gray-500"}`}
          onClick={() => setTab("approval")}
        >
          Approval Rating
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPlaceholder />
        <div className="bg-white rounded-xl shadow p-6 border border-brand flex flex-col items-center justify-center">
          <div className="font-semibold text-[#1A355A] mb-2">What is this?</div>
          {tab === "processing" ? (
            <>
              <div className="text-gray-500 text-sm mb-2">
                This shows the average time a visa decision took to be delivered on
              </div>
              <div className="bg-[#F4F8FB] rounded-lg px-4 py-2 flex flex-col items-center">
                <span className="font-semibold text-brand">{stats.statistics_on_visa_processing_time}</span>
               </div>
            </>
          ) : (
            <>
              <div className="text-gray-500 text-sm mb-2">
                Visa getting approved on time
              </div>
              <div className="bg-[#F4F8FB] rounded-lg px-4 py-2 flex flex-col items-center">
                <span className="font-semibold text-brand">Average</span>
                <span className="text-xs text-gray-500"> {stats.statistics_on_visa_approval_rating}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
