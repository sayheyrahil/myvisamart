import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filters: string[];
};

const ContinentSelect: React.FC<Props> = ({ value, onChange, filters }) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">
      Continent:
      <select
        name="continent"
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
      >
        <option value="">Select continent</option>
        {filters.map((continent) => (
          <option key={continent} value={continent}>{continent}</option>
        ))}
      </select>
    </label>
  </div>
);

export default ContinentSelect;
