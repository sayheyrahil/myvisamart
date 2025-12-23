import React from "react";

type NoOption = { name: string; relation: string };

type NoOptionRowProps = {
  option: NoOption;
  idx: number;
  handleNoOptionChange: (idx: number, field: "name" | "relation", value: string) => void;
  handleRemoveNoOption: (idx: number) => void;
  canRemove: boolean;
};

export default function NoOptionRow({
  option,
  idx,
  handleNoOptionChange,
  handleRemoveNoOption,
  canRemove,
}: NoOptionRowProps) {
  return (
    <div className="flex items-center w-full mb-2 gap-4 rounded-lg">
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
      {canRemove && (
        <button
          type="button"
          onClick={() => handleRemoveNoOption(idx)}
          className="text-red-500 px-4 py-2 text-2xl bg-brand rounded-full"
          tabIndex={-1}
        >
          ×
        </button>
      )}
    </div>
  );
}
