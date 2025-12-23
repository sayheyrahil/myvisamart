import React, { useState } from "react";
import ProceedButton from "@/components/application/ProceedButton";
import { FiEdit2 } from "react-icons/fi";

type Props = {
  onProceed: () => void;
};

const popularCountries = [
  "Italy", "France", "Greece", "Switzerland", "Spain", "Austria"
];
const otherCountries = [
  "Belgium", "Estonia", "Bulgaria", "Germany", "Czechia",
  "Croatia", "Denmark", "Finland", "Hungary"
];

export default function CountriesStep({ onProceed }: Props) {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["Denmark"]);

  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : prev.length < 6
          ? [...prev, country]
          : prev
    );
  };

  return (
    <div className="flex flex-col items-center md:items-start w-full min-h-[60vh] bg-gradient-to-br from-[#f8fbff] to-[#e6f0fa] p-4">
      {/* Title */}
      <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[40px] sm:leading-[52px] md:leading-[70px] lg:leading-[80px] text-[#85ABDB] mb-2 text-left">
        Which countries do you plan to <span className="text-[#0A509F]">visit tentatively?</span>
      </div>
      <div className="text-[#7A92B7] text-base sm:text-lg mb-8 max-w-xl">
        Ideally don&apos;t include more than 6. Can be updated later too.
      </div>
      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E6F0FA] text-[#0A509F] text-xl">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M3 12h18M12 3v18" stroke="#0A509F" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-medium text-[#022538]">Travelling Week</span>
          <span className="ml-2 font-semibold text-[#0A509F]">8 Jan 2026 - 22 Jan 2026</span>
          <button className="ml-auto text-[#0A509F] hover:bg-[#F8FBFF] p-2 rounded transition">
            <FiEdit2 />
          </button>
        </div>
        <hr className="my-3 border-[#E1EBF6]" />
        <div className="mb-2 font-medium text-[#022538]">Popular Countries</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {popularCountries.map((country) => (
            <button
              key={country}
              type="button"
              onClick={() => toggleCountry(country)}
              className={`px-5 py-2 rounded-full border text-base font-medium transition
                ${
                  selectedCountries.includes(country)
                    ? "bg-[#0A509F] text-white border-[#0A509F]"
                    : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"
                }
              `}
            >
              {country}
            </button>
          ))}
        </div>
        <div className="mb-2 font-medium text-[#022538]">Other</div>
        <div className="flex flex-wrap gap-2">
          {otherCountries.map((country) => (
            <button
              key={country}
              type="button"
              onClick={() => toggleCountry(country)}
              className={`px-5 py-2 rounded-full border text-base font-medium transition
                ${
                  selectedCountries.includes(country)
                    ? "bg-[#0A509F] text-white border-[#0A509F]"
                    : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"
                }
              `}
            >
              {country}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full max-w-xl flex justify-start">
        <ProceedButton onClick={onProceed} />
      </div>
    </div>
  );
}
