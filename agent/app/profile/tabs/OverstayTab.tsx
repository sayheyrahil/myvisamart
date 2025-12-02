import React from "react";

export default function OverstayTab() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-[#b5c8e1] rounded-lg overflow-x-auto mb-8">
        <div className="grid grid-cols-7 text-[#4b5c6b] text-sm font-medium py-3 px-6">
          <div>Name</div>
          <div>Passport Number</div>
          <div>Days left to Overstay</div>
          <div>Entry Date</div>
          <div>Status</div>
          <div>Amount to Pay</div>
          <div>Actions</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16">
        <img src="/img/hot-air-balloon.png" alt="No Data" className="w-40 h-40 mb-4" />
        <div className="text-[#101828] text-lg font-medium">Data not Found</div>
      </div>
    </div>
  );
}
