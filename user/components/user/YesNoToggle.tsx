import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

type YesNo = "yes" | "no";
type NoOption = { name: string; relation: string };
type Props = {
  selected: YesNo | null;
  setSelected: (v: YesNo) => void;
};

function ArrowSign() {
  return (
    <span className="ml-2 w-5 h-5 flex items-center justify-center rounded-full border-2 border-white bg-white">
      <svg
        className="w-3 h-3 text-[#0A509F]"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 16 16"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5l3 3 5-5" />
      </svg>
    </span>
  );
}

export default function YesNoToggle({ selected, setSelected }: Props) {
  const [noOptions, setNoOptions] = useState<NoOption[]>([
    { name: "", relation: "" },
  ]);

  const handleAddNoOption = () =>
    setNoOptions([...noOptions, { name: "", relation: "" }]);
  const handleRemoveNoOption = (idx: number) =>
    setNoOptions(noOptions.filter((_, i) => i !== idx));
  const handleNoOptionChange = (
    idx: number,
    field: "name" | "relation",
    value: string
  ) =>
    setNoOptions(
      noOptions.map((opt, i) => (i === idx ? { ...opt, [field]: value } : opt))
    );

  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Toggle buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setSelected("yes")}
          className={`px-8 py-2 w-32 rounded-full flex items-center gap-2 text-lg font-medium border transition shadow-lg
                        ${
                          selected === "yes"
                            ? "bg-[#0A509F] text-white border-[#0A509F] shadow"
                            : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"
                        }
                    `}
        >
          Yes
          {selected === "yes" && <ArrowSign />}
        </button>
        <button
          type="button"
          onClick={() => setSelected("no")}
          className={`px-8 py-2 w-32 rounded-full flex items-center gap-2 text-lg font-medium border transition
                        ${
                          selected === "no"
                            ? "bg-[#0A509F] text-white border-[#0A509F] shadow"
                            : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"
                        }
                    `}
        >
          No
          {selected === "no" && <ArrowSign />}
        </button>
      </div>

      {/* If "no" is selected, show options to add/manage "no" options */}
      {selected === "no" && (
        <div className="flex gap-2">
          {noOptions.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center w-full mb-2 gap-4 rounded-lg"
            >
              <div className="flex flex-1">
                <input
                  type="text"
                  value={option.name}
                  onChange={(e) =>
                    handleNoOptionChange(idx, "name", e.target.value)
                  }
                  placeholder="Enter Name"
                  className="flex-1 border border-[#BFD1EA] px-6 py-4 text-lg outline-none bg-white rounded-l-full"
                />
                <select
                  value={option.relation}
                  onChange={(e) =>
                    handleNoOptionChange(idx, "relation", e.target.value)
                  }
                  className="border border-[#BFD1EA] bg-[#F8FBFF] rounded-r-full rounded-l-none text-[#022538] px-3 py-4 text-lg outline-none"
                >
                  <option value="">Relation</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {noOptions.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveNoOption(idx)}
                  className="text-red-500 px-2 text-2xl bg-brand rounded-full"
                  tabIndex={-1}
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <div
            onClick={handleAddNoOption}
            className="bg-[#0A509F] m-2 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-[#BFD1EA]"
            tabIndex={-1}
          >
            <FiPlus />
          </div>
        </div>
      )}
    </div>
  );
}
