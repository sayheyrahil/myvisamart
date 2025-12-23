import React from "react";
import ProceedButton from "@/components/application/ProceedButton";

type Props = {
  onProceed: () => void;
};

export default function PaymentStep({ onProceed }: Props) {
  return (
    <div className="flex flex-col items-center md:items-start w-full min-h-[60vh] bg-gradient-to-br from-[#f8fbff] to-[#e6f0fa] p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
          Pay now to reserve your Visa Appointment
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1 flex flex-col items-start">
            <div className="text-xs text-[#7A92B7] mb-1">Appointment Date</div>
            <div className="font-semibold text-[#022538] text-base">18<sup>th</sup> December 2025</div>
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="text-xs text-[#7A92B7] mb-1">Appointment Center</div>
            <div className="font-semibold text-[#0A509F] text-base">Hyderabad - Switzerland</div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src="/static/mock-map.png"
            alt="Map"
            className="w-full h-40 object-cover"
            style={{ background: "#f8fbff" }}
          />
        </div>
        <div className="bg-[#F8FBFF] rounded-xl px-4 py-3 mb-4">
          <div className="font-medium text-[#022538] mb-2">Visa on 12<sup>th</sup> January, 2026</div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#7A92B7]">Government Fees</span>
            <span className="font-semibold text-[#022538]">₹2,690</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#7A92B7]">Visamart Fees <span className="text-xs align-middle">▼</span></span>
            <span className="font-semibold text-[#022538]">₹4,708</span>
          </div>
        </div>
        <button
          className="w-full bg-[#022538] hover:bg-[#0A509F] text-white font-medium rounded-full px-8 py-4 text-lg flex items-center justify-center gap-2 transition"
          onClick={onProceed}
        >
          Pay ₹7398 to reserve appointment <span className="text-2xl">››</span>
        </button>
      </div>
    </div>
  );
}
