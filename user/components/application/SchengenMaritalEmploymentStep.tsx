import React from "react";
import { FiCheck } from "react-icons/fi";
import ProceedButton from "@/components/application/ProceedButton";

const radioBtnClass = (active: boolean) =>
  `flex items-center gap-2 px-4 py-2 rounded-full border transition text-base font-medium
   ${
     active
       ? "bg-[#0A509F] text-white border-[#0A509F] shadow"
       : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"
   }
  `;

type Props = {
  schengen: "yes" | "no";
  setSchengen: (v: "yes" | "no") => void;
  marital: "single" | "married" | "divorced" | "widowed";
  setMarital: (v: "single" | "married" | "divorced" | "widowed") => void;
  employment: "employed" | "self" | "unemployed" | "retired";
  setEmployment: (v: "employed" | "self" | "unemployed" | "retired") => void;
  employmentSub: string;
  setEmploymentSub: (v: string) => void;
  employmentSubOptions: Record<string, string[]>;
  onProceed: () => void;
  onBack?: () => void;
};

export default function SchengenMaritalEmploymentStep({
  schengen,
  setSchengen,
  marital,
  setMarital,
  employment,
  setEmployment,
  employmentSub,
  setEmploymentSub,
  employmentSubOptions,
  onProceed,
  onBack,
}: Props) {
  return (
    <div className="flex flex-col items-center md:items-start w-full ">
      {/* User Card */}
      <div className="flex items-center bg-white rounded-full px-6 py-3 shadow mb-8">
        <span className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-3 text-[#0A509F] font-bold text-lg">
          AD
        </span>
        <span className="font-madefor font-medium text-[#022538] text-lg mr-2">
          Anjum Desai(You)
        </span>
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0A509F]">
          <FiCheck className="text-white w-4 h-4" />
        </span>
      </div>

      {/* Schengen Visa */}
      <div className="bg-white rounded-2xl shadow p-6 mb-5 w-full  ">
        <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
          Had a Prior Schengen Visa ?
        </div>
        <div className="flex gap-6">
          <button
            type="button"
            className={radioBtnClass(schengen === "yes")}
            onClick={() => setSchengen("yes")}
          >
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                  schengen === "yes"
                    ? "border-white bg-white"
                    : "border-[#0A509F] bg-white"
                }`}
              >
                {schengen === "yes" && (
                  <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                )}
              </span>
              Yes
            </span>
          </button>
          <button
            type="button"
            className={radioBtnClass(schengen === "no")}
            onClick={() => setSchengen("no")}
          >
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                  schengen === "no"
                    ? "border-white bg-white"
                    : "border-[#0A509F] bg-white"
                }`}
              >
                {schengen === "no" && (
                  <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                )}
              </span>
              No
            </span>
          </button>
        </div>
      </div>

      {/* Marital Status */}
      <div className="bg-white rounded-2xl shadow p-6 mb-5 w-full max-w-xl">
        <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
          What is your Marital Status?
        </div>
        <div className="flex flex-wrap gap-4">
          {["single", "married", "divorced", "widowed"].map((status) => (
            <button
              key={status}
              type="button"
              className={radioBtnClass(marital === status)}
              onClick={() => setMarital(status as any)}
            >
              <span className="flex items-center">
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                    marital === status
                      ? "border-white bg-white"
                      : "border-[#0A509F] bg-white"
                  }`}
                >
                  {marital === status && (
                    <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                  )}
                </span>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Employment Status */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8 w-full  ">
        <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
          What is your Employment Status?
        </div>
        <div className="flex flex-wrap gap-1">
          <button
            type="button"
            className={radioBtnClass(employment === "employed")}
            onClick={() => {
              setEmployment("employed");
              setEmploymentSub("");
            }}
          >
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                  employment === "employed"
                    ? "border-white bg-white"
                    : "border-[#0A509F] bg-white"
                }`}
              >
                {employment === "employed" && (
                  <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                )}
              </span>
              Employed
            </span>
          </button>
          <button
            type="button"
            className={radioBtnClass(employment === "self")}
            onClick={() => {
              setEmployment("self");
              setEmploymentSub("");
            }}
          >
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                  employment === "self"
                    ? "border-white bg-white"
                    : "border-[#0A509F] bg-white"
                }`}
              >
                {employment === "self" && (
                  <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                )}
              </span>
              Self Employed
            </span>
          </button>
          <button
            type="button"
            className={radioBtnClass(employment === "unemployed")}
            onClick={() => {
              setEmployment("unemployed");
              setEmploymentSub("");
            }}
          >
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                  employment === "unemployed"
                    ? "border-white bg-white"
                    : "border-[#0A509F] bg-white"
                }`}
              >
                {employment === "unemployed" && (
                  <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                )}
              </span>
              Unemployed
            </span>
          </button>
          <button
            type="button"
            className={radioBtnClass(employment === "retired")}
            onClick={() => {
              setEmployment("retired");
              setEmploymentSub("");
            }}
          >
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                  employment === "retired"
                    ? "border-white bg-white"
                    : "border-[#0A509F] bg-white"
                }`}
              >
                {employment === "retired" && (
                  <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                )}
              </span>
              Retired
            </span>
          </button>
        </div>
        {/* Sub-options for Self Employed */}
        {employment === "self" && (
          <div className="flex flex-wrap gap-4 mt-4">
            {employmentSubOptions.self.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setEmploymentSub(sub)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition text-base font-medium
                  ${
                    employmentSub === sub
                      ? "border-[#0A509F] text-[#0A509F] border-b-4 border-b-[#0A509F] bg-white"
                      : "border-[#E1EBF6] text-[#022538] hover:border-[#0A509F] bg-white"
                  }
                `}
                style={{
                  borderBottomWidth: employmentSub === sub ? "4px" : "1px",
                  fontWeight: employmentSub === sub ? 600 : 400,
                }}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    employmentSub === sub
                      ? "border-[#0A509F] bg-white"
                      : "border-[#BFD1EA] bg-white"
                  }`}
                >
                  {employmentSub === sub && (
                    <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                  )}
                </span>
                {sub}
              </button>
            ))}
          </div>
        )}
        {/* Sub-options for Unemployed */}
        {employment === "unemployed" && (
          <div className="flex flex-wrap gap-4 mt-4">
            {employmentSubOptions.unemployed.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setEmploymentSub(sub)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition text-base font-medium
                  ${
                    employmentSub === sub
                      ? "border-[#0A509F] text-[#0A509F] border-b-4 border-b-[#0A509F] bg-white"
                      : "border-[#E1EBF6] text-[#022538] hover:border-[#0A509F] bg-white"
                  }
                `}
                style={{
                  borderBottomWidth: employmentSub === sub ? "4px" : "1px",
                  fontWeight: employmentSub === sub ? 600 : 400,
                }}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    employmentSub === sub
                      ? "border-[#0A509F] bg-white"
                      : "border-[#BFD1EA] bg-white"
                  }`}
                >
                  {employmentSub === sub && (
                    <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                  )}
                </span>
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      <ProceedButton onClick={onProceed} onBack={onBack} />
    </div>
  );
}
