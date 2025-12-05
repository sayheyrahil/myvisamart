import React from "react";

type Props = {
  form: {
    visa_process_time: string;
    amount: string;
    pay_later_amount: string;
    visa_fee_now?: string;
    service_fee_now?: string;
    visa_fee_later?: string;
    service_fee_later?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const VisaFeeFields: React.FC<Props> = ({ form, onChange }) => (
  <>
 
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Visa Fee (Pay Now):
        <input
          type="number"
          name="visa_fee_now"
          value={form.visa_fee_now}
          onChange={onChange}
          placeholder="Enter visa fee for pay now"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Service Fee (Pay Now):
        <input
          type="number"
          name="service_fee_now"
          value={form.service_fee_now}
          onChange={onChange}
          placeholder="Enter service fee for pay now"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Visa Fee (Pay Later):
        <input
          type="number"
          name="visa_fee_later"
          value={form.visa_fee_later}
          onChange={onChange}
          placeholder="Enter visa fee for pay later"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Service Fee (Pay Later):
        <input
          type="number"
          name="service_fee_later"
          value={form.service_fee_later}
          onChange={onChange}
          placeholder="Enter service fee for pay later"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
  </>
);

export default VisaFeeFields;
