import React, { useState, useContext } from "react";
import { FormDataContext } from "@/context/FormDataContext";
import ProceedButton from "./ProceedButton";

type Props = {
  onProceed: () => void;
  onBack?: () => void;
};

const slots = [
  {
    date: "Thu, 25 Dec",
    slotsLeft: 12,
    color: "text-green-600",
    bg: "bg-[#F8FBFF]",
  },
  {
    date: "Fri, 26 Dec",
    slotsLeft: 2,
    color: "text-red-500",
    bg: "bg-[#F8FBFF]",
  },
  {
    date: "Sat, 27 Dec",
    slotsLeft: 5,
    color: "text-yellow-500",
    bg: "bg-[#F8FBFF]",
  },
];

export default function ReviewStep({ onProceed, onBack }: Props) {
  const [selectedSlot, setSelectedSlot] = useState(1); // Default to 26 Dec

  const { formData } = useContext(FormDataContext);

  console.log("formData from reducer:", formData);
  return (
    <div className="flex flex-col items-center md:items-start w-full min-h-[60vh]">
      {/* Title */}
      <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[40px] sm:leading-[52px] md:leading-[70px] lg:leading-[80px] text-[#85ABDB] mb-2 text-left">
        Choose appointment <span className="text-[#0A509F]">date</span>
      </div>
      <div className="w-full max-w-2xl mt-4">
        <div className="mb-4">
          <div className="bg-[#FFF7E6] border border-[#FFD59E] rounded-lg px-4 py-3 text-[#B88300] text-base flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            Note: We ensure appointment slots are upto date. If it's available,
            you'll see it first on Visamart.
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-[#022538]">
            Select Flight from city
          </label>
          <div className="relative">
            <select className="w-full border rounded-lg px-4 py-3 text-base outline-none bg-white">
              <option>Hyderabad - Switzerland</option>
              {/* Add more options as needed */}
            </select>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A509F]">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#E6F0FA" />
                <path
                  d="M8 12l4 4 4-4"
                  stroke="#0A509F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Earliest available slot */}
          <div className="flex flex-col gap-4">
            <div className="font-medium text-[#022538] mb-2">
              Earliest available slot
            </div>
            {slots.map((slot, idx) => (
              <button
                key={slot.date}
                className={`flex flex-col items-start px-6 py-4 rounded-2xl border shadow ${
                  slot.bg
                } ${
                  selectedSlot === idx ? "border-[#0A509F]" : "border-[#E1EBF6]"
                } transition`}
                onClick={() => setSelectedSlot(idx)}
              >
                <span className="font-semibold text-[#022538]">
                  {slot.date}
                </span>
                <span className={`text-sm mt-1 ${slot.color}`}>
                  {slot.slotsLeft} Slots Left
                </span>
              </button>
            ))}
          </div>
          {/* Calendar */}
          <div className="flex-1 flex flex-col items-center">
            <div className="font-medium text-[#022538] mb-2">December 2025</div>
            <div className="bg-white rounded-2xl shadow p-4 w-full max-w-xs">
              <div className="grid grid-cols-7 gap-2 text-center text-[#7A92B7] font-medium mb-2">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {/* Days before 22nd */}
                {Array.from({ length: 21 }).map((_, i) => (
                  <div key={i} className="text-[#BFD1EA]">
                    {" "}
                  </div>
                ))}
                {/* 22-28 */}
                {[22, 23, 24, 25, 26, 27, 28].map((day, idx) => (
                  <button
                    key={day}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-[#022538] font-semibold
                      ${
                        selectedSlot === idx
                          ? "bg-[#0A509F] text-white border-[#0A509F]"
                          : "bg-white border-[#E1EBF6]"
                      }
                    `}
                    onClick={() => setSelectedSlot(idx)}
                  >
                    {day}
                  </button>
                ))}
                {/* Days after 28th */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="text-[#BFD1EA]">
                    {" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ProceedButton
            onClick={onProceed}
            onBack={onBack}
            text={` Reserve appointment for ${
              slots[selectedSlot].date.split(", ")[1]
            } `}
          />
        </div>
      </div>
    </div>
  );
}
