import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function PriceCard(deta) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="text-lg font-semibold text-[#1A355A]">{deta.detail?.name} Visa for Indians</h3>
      <p className="text-gray-500 text-sm mt-2">
         {deta.detail?.description}
      </p>

      <div className="mt-4 inline-flex items-center gap-3 bg-[#F3F8FF] px-3 py-1 rounded-full">
        <RiSecurePaymentFill />
        <span className="text-brand text-sm font-medium">Visa guaranteed in {deta.detail?.visa_process_time}</span>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pay Now</span>
          <span className="font-semibold"> ${deta.detail?.amount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pay Later</span>
          <span className="font-semibold"> ${deta.detail?.pay_later_amount}</span>
        </div>
        <div className="flex justify-between border-t pt-2 font-semibold text-[#1A355A]">
          <span>Total Amount</span>
          <span>${deta.detail?.amount + deta.detail?.pay_later_amount}</span>
        </div>
      </div>

      <button className="mt-5 w-full bg-brand text-white py-3 rounded-xl font-semibold">Start Application</button>
    </div>
  );
}
