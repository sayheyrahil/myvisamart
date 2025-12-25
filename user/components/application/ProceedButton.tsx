import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ProceedButton({
  onClick,
  onBack,
  disabled = false,
}: {
  onClick: () => void;
  onBack?: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex gap-4">
      {onBack && (
        <button
          className="bg-[#F7FAFC] text-[#7B7B7B] border border-[#D1D5DB] px-10 py-1 rounded-full flex items-center justify-center text-lg font-medium shadow hover:bg-[#e5e7eb] transition"
          onClick={onBack}
          type="button"
        >
          Back
        </button>
      )}
      <button
        className="bg-[#022538] text-[#578BCC] px-10 py-4 rounded-full flex items-center gap-2 hover:bg-[#083d7a] transition text-lg font-medium shadow disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onClick}
        type="button"
        disabled={disabled}
      >
        Proceed
        <MdKeyboardDoubleArrowRight size={33} />
      </button>
    </div>
  );
}
