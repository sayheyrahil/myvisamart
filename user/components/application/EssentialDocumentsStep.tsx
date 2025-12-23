import React, { useState } from "react";
import ProceedButton from "@/components/application/ProceedButton";
import { FiCheck } from "react-icons/fi";

type Props = {
  onProceed: () => void;
};

export default function EssentialDocumentsStep({ onProceed }: Props) {
  const [showPassportForm, setShowPassportForm] = useState(false);

  return (
    <div className="flex flex-col items-center md:items-start w-full min-h-[60vh]  ">
      {/* Title */}
      <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[40px] sm:leading-[52px] md:leading-[64px] lg:leading-[72px] text-[#022538] mb-2 text-left">
        Just need some{" "}
        <span className="text-[#0A509F] font-semibold">
          essential documents
        </span>
      </div>
      <div className="text-[#7A92B7] text-base sm:text-lg mb-8 max-w-xl">
        These help us evaluate and secure your appointment right
      </div>
      {/* User Card */}
      <div className="flex items-center bg-white rounded-full px-6 py-3 shadow mb-8">
        <span className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-3 text-[#0A509F] font-bold text-lg">
          AD
        </span>
        <span className="font-madefor font-medium text-[#022538] text-lg mr-2">
          Anjum Desai (You)
        </span>
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0A509F] ml-2">
          <FiCheck className="text-white w-4 h-4" />
        </span>
      </div>
      {/* Passport Details Card */}
      <div className="flex flex-col items-center bg-white rounded-2xl shadow px-10 py-8 min-w-[220px] mb-8">
        {!showPassportForm && (
          <>
            <div className="w-14 h-14 rounded-lg bg-[#022538] flex items-center justify-center mb-4">
              {/* You can use an SVG or icon for passport here */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  rx="6"
                  fill="#0A509F"
                  opacity="0.08"
                />
                <path
                  d="M8 7h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="10" y="11" width="4" height="2" rx="1" fill="#fff" />
              </svg>
            </div>
            <div className="font-madefor font-medium text-[#022538] text-lg mb-2">
              Passport Details
            </div>

            <button
              className="border border-[#0A509F] text-[#0A509F] rounded-full px-6 py-1 mt-2 hover:bg-[#0A509F] hover:text-white transition font-medium"
              onClick={() => setShowPassportForm(true)}
            >
              Add
            </button>
          </>
        )}
        {showPassportForm && (
          <div className="w-full mt-6">
            <div className="bg-[#f8fbff] rounded-xl p-6 shadow border border-[#E1EBF6]">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 rounded-lg bg-[#022538] flex items-center justify-center mr-3">
                  {/* ...passport icon... */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect
                      width="24"
                      height="24"
                      rx="6"
                      fill="#0A509F"
                      opacity="0.08"
                    />
                    <path
                      d="M8 7h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
                      stroke="#0A509F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="10"
                      y="11"
                      width="4"
                      height="2"
                      rx="1"
                      fill="#0A509F"
                    />
                  </svg>
                </span>
                <span className="font-madefor font-medium text-[#022538] text-lg">
                  Enter your passport details
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="border rounded px-4 py-3"
                  placeholder="First Name*"
                />
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Last Name*"
                />
                <select className="border rounded px-4 py-3">
                  <option value="">Gender*</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Date of Birth*"
                  type="date"
                />
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Birth Place*"
                />
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Passport Number*"
                />
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Passport Issued On*"
                  type="date"
                />
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Passport Valid Till*"
                  type="date"
                />
                <select className="border rounded px-4 py-3">
                  <option value="">Nationality*</option>
                  <option value="indian">Indian</option>
                  <option value="other">Other</option>
                </select>
                <input
                  className="border rounded px-4 py-3"
                  placeholder="Place of Issue*"
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="px-6 py-2 rounded bg-[#0A509F] text-white font-medium hover:bg-[#022538] transition"
                  onClick={() => setShowPassportForm(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Proceed Button */}
      <div className="w-full max-w-xl flex justify-start">
        <ProceedButton onClick={onProceed} />
      </div>
    </div>
  );
}
