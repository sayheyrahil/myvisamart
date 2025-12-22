"use client";
import React from "react";
import { FiCreditCard } from "react-icons/fi";
import ProceedButton from "@/components/user/ProceedButton";

export default function Page() {
  const handleProceed = () => {
    // Your proceed logic here
  };

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      {/* User Card */}
      <div className="flex items-center bg-white rounded-full px-6 py-3 shadow mb-8 border border-[#E1EBF6]">
        <span className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-3 text-[#0A509F] font-bold text-lg">
          AD
        </span>
        <span className="font-madefor font-medium text-[#022538] text-lg mr-2">
          Anjum Desai(You)
        </span>
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0A509F] ml-2">
          <svg
            className="text-white w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 16 16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8.5l3 3 5-5"
            />
          </svg>
        </span>
      </div>
      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full max-w-2xl justify-center">
        {/* Passport Details Card */}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow px-10 py-8 min-w-[220px]">
          <div className="w-14 h-14 rounded-lg bg-[#022538] flex items-center justify-center mb-4">
            <FiCreditCard className="text-white w-8 h-8" />
          </div>
          <div className="font-madefor font-medium text-[#022538] text-lg mb-2">
            Passport Details
          </div>
          <button className="border border-[#0A509F] text-[#0A509F] rounded-full px-6 py-1 mt-2 hover:bg-[#0A509F] hover:text-white transition font-medium">
            Add
          </button>
        </div>
        {/* Employer Details Card */}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow px-10 py-8 min-w-[220px]">
          <div className="w-14 h-14 rounded-lg bg-[#022538] flex items-center justify-center mb-4">
            <FiCreditCard className="text-white w-8 h-8" />
          </div>
          <div className="font-madefor font-medium text-[#022538] text-lg mb-2">
            Employer Details
          </div>
          <button className="border border-[#0A509F] text-[#0A509F] rounded-full px-6 py-1 mt-2 hover:bg-[#0A509F] hover:text-white transition font-medium">
            Add
          </button>
        </div>
      </div>
      {/* Proceed Button */}
      <ProceedButton onClick={handleProceed} />
    </div>
  );
}
