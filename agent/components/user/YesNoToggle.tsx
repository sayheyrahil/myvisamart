import React from "react";

type YesNo = "yes" | "no";
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
    return (
        <div className="flex gap-4 mb-8">
            <button
                type="button"
                onClick={() => setSelected("yes")}
                className={`px-8 py-2 w-32 rounded-full flex items-center gap-2 text-lg font-medium border transition shadow-lg
                    ${selected === "yes"
                        ? "bg-[#0A509F] text-white border-[#0A509F] shadow"
                        : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"}
                `}
            >
                Yes
                {selected === "yes" && <ArrowSign />}
            </button>
            <button
                type="button"
                onClick={() => setSelected("no")}
                className={`px-8 py-2  w-32 rounded-full flex items-center gap-2 text-lg font-medium border transition
                    ${selected === "no"
                        ? "bg-[#0A509F] text-white border-[#0A509F] shadow"
                        : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"}
                `}
            >
                No
                {selected === "no" && <ArrowSign />}
            </button>
        </div>
    );
}
