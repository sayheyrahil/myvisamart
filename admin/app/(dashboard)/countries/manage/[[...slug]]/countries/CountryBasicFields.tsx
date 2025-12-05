import React from "react";

type Props = {
  dailCode: string;
  visaProcessTime: string;
 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CountryBasicFields: React.FC<Props> = ({
  dailCode,
  visaProcessTime,
  amount,
  payLaterAmount,
  onChange,
}) => (
  <>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Dail Code:
        <input
          type="text"
          name="dail_code"
          value={dailCode}
          onChange={onChange}
          placeholder="Enter dail code"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Visa Process Time:
        <input
          type="text"
          name="visa_process_time"
          value={visaProcessTime}
          onChange={onChange}
          placeholder="Enter visa process time"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
   
  </>
);

export default CountryBasicFields;
