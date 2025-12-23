import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import NoOptionRow from "./NoOptionRow";

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
        <div className=" ">
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
