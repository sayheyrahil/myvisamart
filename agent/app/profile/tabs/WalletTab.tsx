import React from "react";

export default function WalletTab() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow p-10">
        <div className="text-3xl font-semibold mb-2 text-[#101828]">Load Wallet</div>
        <div className="text-gray-500 text-base mb-8 max-w-2xl">
          Please wait for 30mins - 2hrs for the payment to reflect in your wallet. Our system is completely automated. If in 2hrs the payment is not reflected in your account, please check if you got a refund. If not, please create a support ticket and we will help you.
        </div>
        {/* Payment Tabs */}
        <div className="bg-[#f6fafd] rounded-2xl shadow flex flex-col gap-0 p-6 mb-8">
          <div className="flex gap-2 md:gap-8 mb-6">
            <button className="flex items-center gap-2 text-blue-700 font-semibold border-b-2 border-blue-700 pb-2 px-2">
              <svg width="22" height="22" fill="none" stroke="#174ea6" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Credit Card <span className="text-xs text-[#667085] font-normal">(2% Fee)</span>
            </button>
            <button className="flex items-center gap-2 text-[#667085] font-medium pb-2 px-2">
              <svg width="22" height="22" fill="none" stroke="#667085" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Bank Transfer <span className="text-xs text-[#667085] font-normal">(0% Fee)</span>
            </button>
            <button className="flex items-center gap-2 text-[#667085] font-medium pb-2 px-2">
              <svg width="22" height="22" fill="none" stroke="#667085" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              UPI <span className="text-xs text-[#667085] font-normal">(0% Fee)</span>
            </button>
            <button className="flex items-center gap-2 text-[#667085] font-medium pb-2 px-2">
              <svg width="22" height="22" fill="none" stroke="#667085" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 10v10h18V10" />
                <path d="M12 2v8" />
                <path d="M8 6h8" />
              </svg>
              Refund to Bank Account
            </button>
          </div>
          <div className="border-b border-blue-200 mb-6" />
          {/* Form */}
          <form className="flex flex-col md:flex-row gap-4">
            <select className="flex-1 border border-blue-300 rounded-lg px-4 py-3 text-base focus:outline-none">
              <option>Visa Type</option>
              <option>Tourist</option>
              <option>Business</option>
            </select>
            <input className="flex-1 border border-blue-300 rounded-lg px-4 py-3 text-base focus:outline-none" placeholder="Internal ID" />
            <input className="flex-1 border border-blue-300 rounded-lg px-4 py-3 text-base focus:outline-none" placeholder="Group Name" />
          </form>
        </div>
        <button className="mt-6 px-12 py-3 rounded-full bg-[#174ea6] text-white font-semibold text-lg shadow hover:bg-[#0a53b7] transition">
          Save
        </button>
      </div>
    </div>
  );
}
