import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string[];
  placeholder?: string;
  type?: string;
  step?: string;
  min?: string;
  max?: string;
};

const FieldInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange,
  errors = [],
  placeholder = "",
  type = "text",
  step,
  min,
  max,
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">
      {label}
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 ${
          errors.length > 0 ? "border-red-500" : ""
        }`}
        {...(step ? { step } : {})}
        {...(min ? { min } : {})}
        {...(max ? { max } : {})}
      />
      {errors.map((e, i) => (
        <div key={i} className="text-red-600 text-sm mt-1">
          {e}
        </div>
      ))}
    </label>
  </div>
);

export default FieldInput;
