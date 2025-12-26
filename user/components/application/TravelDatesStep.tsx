import React, { useState } from "react";
import ProceedButton from "@/components/application/ProceedButton";

type Props = {
  onProceed: () => void;
  onBack: () => void;
};

const travelOptions = [
  {
    label: "4 Week",
    range: "8 Jan - 5 Feb",
    warning:
      "Please note that you will have to provide financials that support a 4 week stay in Europe",
  },
  {
    label: "2 Week",
    range: "8 Jan - 22 Jan",
    warning: "",
  },
];

export default function TravelDatesStep({ onProceed, onBack }: Props) {
  const [selectedTab, setSelectedTab] = useState(1); // Default to 2 Week

  return (
    <div className="flex flex-col items-center md:items-start w-full min-h-[60vh]   p-4">
      {/* Title */}
      <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[40px] sm:leading-[52px] md:leading-[70px] lg:leading-[80px] text-[#85ABDB] mb-2 text-left">
        What are your tentative <br />
        <span className="text-[#0A509F]">travel dates?</span>
      </div>
      <div className="text-[#7A92B7] text-base sm:text-lg mb-8 max-w-xl">
        these can be updated later too
      </div>
      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 mb-8">
        {/* Tabs */}
        <div className="flex border-b border-[#E1EBF6] mb-6">
          {travelOptions.map((opt, idx) => (
            <button
              key={opt.label}
              className={`px-6 py-2 font-medium text-lg transition border-b-2 ${
                selectedTab === idx
                  ? "text-[#0A509F] border-[#0A509F]"
                  : "text-[#7A92B7] border-transparent"
              }`}
              onClick={() => setSelectedTab(idx)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {/* Timeline */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#0A509F] text-white px-4 py-1 rounded-full font-medium text-base">
              {travelOptions[selectedTab].range}
            </span>
          </div>
          {/* Timeline bar */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-lg h-12 flex items-center">
              {/* Timeline line */}
              <div
                className="absolute left-0 right-0 top-1/2 h-1 bg-[#E1EBF6] rounded"
                style={{ zIndex: 0 }}
              />
              {/* Timeline marker */}
              <div
                className="absolute left-[8%] top-1/2 -translate-y-1/2 w-2 h-8 bg-[#0A509F] rounded-full"
                style={{ zIndex: 1 }}
              />
              {/* Month labels */}
              <div className="flex w-full justify-between text-[#7A92B7] font-medium text-sm z-10">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>
        {/* Warning */}
        {travelOptions[selectedTab].warning && (
          <div className="mt-4 border border-red-200 bg-red-50 text-red-600 rounded-lg px-4 py-2 text-sm">
            {travelOptions[selectedTab].warning}
          </div>
        )}
      </div>
      {/* Confirm Button */}
      <div className="w-full max-w-xl flex justify-start">
        <ProceedButton
          onClick={onProceed}
          onBack={onBack}
          text=" Confirm Travel Dates "
        />
      </div>
    </div>
  );
}
