import React, { useState } from "react";
import ProceedButton from "@/components/application/ProceedButton";
import { FiCheck } from "react-icons/fi";

type Props = {
  address: {
    flat: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  setAddress: (addr: Props["address"]) => void;
  onProceed: () => void;
};

export default function AddressStep({ address, setAddress, onProceed }: Props) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex flex-col items-center md:items-start w-full">
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
      {/* Address Title and Map */}
      <div className="flex items-center justify-between w-full max-w-xl mb-2">
        <div className="font-madefor font-medium text-[#022538] text-lg">
          What's your current address?
        </div>
        <button
          type="button"
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-[#E6F0FA] text-[#022538] text-sm font-medium shadow"
          onClick={() => setShowMap((v) => !v)}
        >
          Expand Map <span className="text-lg">↗</span>
        </button>
      </div>
      {showMap && (
        <div className="w-full max-w-xl mb-4">
          <img
            src="/static/mock-map.png"
            alt="Map"
            className="rounded-xl shadow border border-[#E1EBF6] w-full h-56 object-cover"
            style={{ minHeight: 180, background: "#f8fbff" }}
          />
        </div>
      )}
      {/* Address Form */}
      <div className="w-full max-w-xl border-2 border-[#BFD1EA] rounded-lg p-4 flex flex-col gap-3 bg-white">
        <input
          type="text"
          placeholder="Flat/House No/Building/Apartment*"
          value={address.flat}
          onChange={e => setAddress({ ...address, flat: e.target.value })}
          className="w-full border border-dashed border-[#BFD1EA] rounded px-4 py-3 text-base outline-none"
        />
        <input
          type="text"
          placeholder="Area/Sector/Street*"
          value={address.street}
          onChange={e => setAddress({ ...address, street: e.target.value })}
          className="w-full border border-dashed border-[#BFD1EA] rounded px-4 py-3 text-base outline-none"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City*"
            value={address.city}
            onChange={e => setAddress({ ...address, city: e.target.value })}
            className="flex-1 border border-dashed border-[#BFD1EA] rounded px-4 py-3 text-base outline-none"
          />
          <input
            type="text"
            placeholder="State*"
            value={address.state}
            onChange={e => setAddress({ ...address, state: e.target.value })}
            className="flex-1 border border-dashed border-[#BFD1EA] rounded px-4 py-3 text-base outline-none"
          />
          <input
            type="text"
            placeholder="Zip Code*"
            value={address.zip}
            onChange={e => setAddress({ ...address, zip: e.target.value })}
            className="flex-1 border border-dashed border-[#BFD1EA] rounded px-4 py-3 text-base outline-none"
          />
        </div>
      </div>
      <div className="w-full max-w-xl mt-8 flex justify-start">
        <ProceedButton onClick={onProceed} />
      </div>
    </div>
  );
}
