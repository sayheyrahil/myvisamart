import React from "react";

type Item = { key: string; value: string };
type Props = {
  visaInformation: Item[];
  onChange: (idx: number, field: "key" | "value", value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
};

const VisaInformation: React.FC<Props> = ({
  visaInformation,
  onChange,
  onAdd,
  onRemove,
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">Visa Information:</label>
    {visaInformation.map((item, idx) => (
      <div key={idx} className="flex gap-2 mb-2 items-center">
        <input
          type="text"
          value={item.key}
          onChange={e => onChange(idx, "key", e.target.value)}
          className="w-1/3 px-3 py-2 border rounded"
          placeholder={`Key ${idx + 1}`}
        />
        <input
          type="text"
          value={item.value}
          onChange={e => onChange(idx, "value", e.target.value)}
          className="w-2/3 px-3 py-2 border rounded"
          placeholder={`Value ${idx + 1}`}
        />
        <button
          type="button"
          onClick={() => onRemove(idx)}
          disabled={visaInformation.length === 1}
          className="text-white px-3 py-2 rounded-xl bg-brand"
        >
          Remove
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="text-white px-3 py-2 rounded-xl bg-brand"
    >
      Add Info
    </button>
  </div>
);

export default VisaInformation;
