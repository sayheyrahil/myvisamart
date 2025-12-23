import React from "react";
import { FiCheck, FiPlus } from "react-icons/fi";
import ProceedButton from "@/components/application/ProceedButton";
import NoOptionRow from "@/components/application/NoOptionRow";

type Props = {
  selectedSponsor: "self" | "other";
  setSelectedSponsor: (v: "self" | "other") => void;
  noOptions: { name: string; relation: string }[];
  handleNoOptionChange: (idx: number, field: "name" | "relation", value: string) => void;
  handleRemoveNoOption: (idx: number) => void;
  handleAddNoOption: () => void;
  handleProceed: () => void;
};

export default function SponsorStep({
  selectedSponsor,
  setSelectedSponsor,
  noOptions,
  handleNoOptionChange,
  handleRemoveNoOption,
  handleAddNoOption,
  handleProceed,
}: Props) {
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="font-madefor font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[52px] text-[#85ABDB] mb-8 text-center md:text-left">
        Who’s Sponsoring this <br />
        <span className="text-[#022538] font-semibold">
          Trip to Switzerland
        </span>
      </div>
      <div className="flex gap-4 mb-10 w-full max-w-xl justify-center md:justify-start">
        {/* Self Option */}
        <button
          type="button"
          onClick={() => setSelectedSponsor("self")}
          className={`flex items-center px-5 py-3 rounded-full border transition text-base sm:text-lg font-medium shadow
            ${
              selectedSponsor === "self"
                ? "bg-[#f8fbff] border-[#0A509F] text-[#022538] shadow-lg"
                : "bg-white border-[#E1EBF6] text-[#022538] hover:border-[#0A509F]"
            }
          `}
        >
          <span className="w-8 h-8 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-3 text-[#0A509F] font-bold text-base">
            AD
          </span>
          Anjum Desai(You)
          {selectedSponsor === "self" && (
            <span className="ml-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0A509F]">
              <FiCheck className="text-white w-4 h-4" />
            </span>
          )}
        </button>
        {/* Other Option */}
        <button
          type="button"
          onClick={() => setSelectedSponsor("other")}
          className={`flex items-center px-5 py-3 rounded-full border transition text-base sm:text-lg font-medium shadow
            ${
              selectedSponsor === "other"
                ? "bg-[#f8fbff] border-[#0A509F] text-[#022538] shadow-lg"
                : "bg-white border-[#E1EBF6] text-[#022538] hover:border-[#0A509F]"
            }
          `}
        >
          Someone Else
          <span className="ml-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#E6F0FA]">
            <FiPlus className="text-[#0A509F] w-4 h-4" />
          </span>
        </button>
      </div>
      {/* If "Someone Else" is selected, show input row(s) */}
      {selectedSponsor === "other" && (
        <div className="w-full max-w-xl mb-6">
          {noOptions.map((option, idx) => (
            <NoOptionRow
              key={idx}
              option={option}
              idx={idx}
              handleNoOptionChange={handleNoOptionChange}
              handleRemoveNoOption={handleRemoveNoOption}
              canRemove={noOptions.length > 1}
            />
          ))}
          <div
            onClick={handleAddNoOption}
            className="bg-[#0A509F] m-2 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-[#BFD1EA] cursor-pointer"
            tabIndex={-1}
          >
            <FiPlus />
          </div>
        </div>
      )}
      <ProceedButton onClick={handleProceed} />
    </div>
  );
}
