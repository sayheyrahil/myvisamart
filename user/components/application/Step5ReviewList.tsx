import React, { useState } from "react";
import ProceedButton from "./ProceedButton";

const TAB_STATUS = [
  { label: "Basic Details", status: "success" },
  { label: "Employment Status", status: "error" },
  { label: "Documents", status: "success" },
  { label: "Passport details", status: "success" },
];

export default function Step5ReviewList({
  noOptions,
  onBack,
  onProceed,
}: {
  noOptions: { name: string; relation: string }[];
  onBack: () => void;
  onProceed: () => void;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Helper to render a person row with dropdown on hover
  const renderPerson = (
    name: string,
    relation: string,
    isYou: boolean = false,
    idx?: number
  ) => (
    <div
      className="flex items-center w-full px-4 py-3 rounded-full bg-white border border-[#E1EBF6] shadow transition group relative cursor-pointer"
      onMouseEnter={() => setHoveredIdx(idx ?? -1)}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      <span className="w-12 h-12 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-4 text-[#0A509F] font-bold text-base text-center uppercase">
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)}
      </span>
      <span className="flex-1 text-left text-[#022538] font-medium text-base">
        {name} {isYou ? "(You)" : `(${relation})`}
      </span>
      <span
        className={`w-8 h-8 flex items-center justify-center rounded-full ml-2 ${
          isYou ? "bg-[#E6F9E6]" : "bg-[#FBEAEA]"
        }`}
      >
        {isYou ? (
          <svg width="20" height="20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#E6F9E6" />
            <path
              d="M6 10.5l2 2 5-5"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#FBEAEA" />
            <path
              d="M13.5 8.5l-5 5M8.5 8.5l5 5"
              stroke="#F87171"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {/* Dropdown on hover */}
      {hoveredIdx === idx && (
        <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl shadow-lg w-64 p-4">
          {TAB_STATUS.map((tab, i) => (
            <div key={i} className="flex items-center justify-between py-1">
              <span className="font-medium text-sm">{tab.label}</span>
              {tab.status === "success" ? (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500">
                  <svg width="16" height="16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#22C55E" />
                    <path
                      d="M4.5 8.5l2 2 4-4"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ) : (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-500">
                  <svg width="16" height="16" fill="none">
                    <circle cx="8" cy="8" r="8" fill="#F87171" />
                    <text
                      x="8"
                      y="12"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#fff"
                    >
                      i
                    </text>
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="font-madefor font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[52px] text-[#85ABDB] mb-2 text-center md:text-left">
        Let’s start with your{" "}
        <span className="text-[#022538] font-semibold">details</span>
      </div>
      <div className="text-[#7B7B7B] mb-8 text-base text-center md:text-left">
        Confirm your details to proceed further.
      </div>
      {/* Tab Status List */}

      <div className="flex flex-col gap-4 w-full max-w-md mb-8">
        {noOptions.map((item, idx) =>
          renderPerson(
            item.name,
            item.relation.charAt(0).toUpperCase() + item.relation.slice(1),
            false,
            idx
          )
        )}
      </div>
      <ProceedButton onClick={onProceed} onBack={onBack} />
    </div>
  );
}
