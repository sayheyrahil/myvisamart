import React from "react";
import CountryBasicFields from "./CountryBasicFields";
import VisaFeeFields from "./VisaFeeFields";

type Props = {
  form: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
};

const AmountsAndFeesFields: React.FC<Props> = ({
  form,
  onChange,
  uploading,
  setUploading,
}) => (
  <>
    <CountryBasicFields
      dailCode={form.dail_code}
      visaProcessTime={form.visa_process_time}
      amount={form.amount}
      payLaterAmount={form.pay_later_amount}
      onChange={onChange}
    />
    <div className="mb-4">
      <VisaFeeFields
        form={form}
        onChange={onChange}
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Subtitle:
        <input
          type="text"
          name="subtitle"
          value={form.subtitle}
          onChange={onChange}
          placeholder="Enter subtitle"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Rating:
        <input
          type="number"
          name="rating"
          value={form.rating}
          onChange={onChange}
          step="0.1"
          min="0"
          max="5"
          placeholder="Enter rating (e.g. 4.5)"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Get a Guaranteed Visa On:
        <input
          type="text"
          name="get_a_guaranteed_visa_on"
          value={form.get_a_guaranteed_visa_on}
          onChange={onChange}
          placeholder="Enter info"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Check Appointment Availability:
        <input
          type="text"
          name="check_appointment_availability"
          value={form.check_appointment_availability}
          onChange={onChange}
          placeholder="Enter info"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Statistics on Visa Processing Time:
        <input
          type="text"
          name="statistics_on_visa_processing_time"
          value={form.statistics_on_visa_processing_time}
          onChange={onChange}
          placeholder="Enter info"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-1">
        Statistics on Visa Approval Rating:
        <input
          type="text"
          name="statistics_on_visa_approval_rating"
          value={form.statistics_on_visa_approval_rating}
          onChange={onChange}
          placeholder="Enter info"
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="is_top_destination"
          checked={form.is_top_destination}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-brand"
        />
        <span className="ml-2 font-medium">Is Top Destination</span>
      </label>
    </div>
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="is_popular"
          checked={form.is_popular}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-brand"
        />
        <span className="ml-2 font-medium">Is Popular</span>
      </label>
    </div>
  </>
);

export default AmountsAndFeesFields;
