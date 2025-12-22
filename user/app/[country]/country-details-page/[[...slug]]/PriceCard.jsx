import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import Link from "next/link";
export default function PriceCard(deta) {
  // Debug: Check what id is being passed
 
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="text-lg font-semibold text-[#1A355A]">
        {deta.detail?.name} Visa for Indians
      </h3>
      <p className="text-gray-500 text-sm mt-2">{deta.detail?.description}</p>

      <div className="mt-4 inline-flex items-center gap-3 bg-[#F3F8FF] px-3 py-1 rounded-full">
        <RiSecurePaymentFill />
        <span className="text-brand text-sm font-medium">
          Visa guaranteed in {deta.detail?.visa_process_time}
        </span>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pay Now</span>
          <span className="font-semibold"> ${deta.detail?.visa_fee_now}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pay Later</span>
          <span className="font-semibold">
            {" "}
            ${deta.detail?.visa_fee_later}
          </span>
        </div>
        <div className="flex justify-between border-t pt-2 font-semibold text-[#1A355A]">
          <span>Total Amount</span>
          <span>${deta.detail?.visa_fee_now + deta.detail?.service_fee_now}</span>
        </div>
      </div>

      <Link
        href={{
          pathname: "/application/step1",
          query: { id: deta.detail?.id,
            slug: deta.detail?.slug
           }
        }}
        passHref
      >
        <button className="mt-5 w-full bg-brand text-white py-3 rounded-xl font-semibold">
          Start Application
        </button>
      </Link>
    </div>
  );
}
