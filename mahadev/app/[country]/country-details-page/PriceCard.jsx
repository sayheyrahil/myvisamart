import React from "react";

export default function PriceCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="text-lg font-semibold text-[#1A355A]">Thailand Visa for Indians</h3>
      <p className="text-gray-500 text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Semper vel amet egestas sociis sed lorem.
      </p>

      <div className="mt-4 inline-flex items-center gap-3 bg-[#F3F8FF] px-3 py-1 rounded-full">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 6v6l4 2" stroke="#0A509F" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <span className="text-blue-700 text-sm font-medium">Visa guaranteed in 1 day</span>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pay Now</span>
          <span className="font-semibold">$75 + 1</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pay Later</span>
          <span className="font-semibold">$35 for now</span>
        </div>
        <div className="flex justify-between border-t pt-2 font-semibold text-[#1A355A]">
          <span>Total Amount</span>
          <span>$75</span>
        </div>
      </div>

      <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Start Application</button>
    </div>
  );
}
