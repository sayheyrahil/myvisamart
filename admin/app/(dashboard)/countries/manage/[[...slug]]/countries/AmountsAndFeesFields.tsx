import React from "react";
import CountryBasicFields from "./CountryBasicFields";
import VisaFeeFields from "./VisaFeeFields";
import FieldInput from "@/components/common/FieldInput";
type FieldError = { key: string; message: string };
type Props = {
  form: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  uploading: boolean;
  setUploading: (val: boolean) => void;
  errors?: FieldError[]; // <-- use FieldError[]
};

const AmountsAndFeesFields: React.FC<Props> = ({
  form,
  onChange,
  uploading,
  setUploading,
  errors = [],
}) => (
  <>
    <CountryBasicFields
      dailCode={form.dail_code}
      visaProcessTime={form.visa_process_time}
      onChange={onChange}
      errors={errors}
    />
    <div className="mb-4">
      <VisaFeeFields form={form} onChange={onChange} errors={errors} />
    </div>
    <FieldInput
      label="subtitle"
      name="subtitle"
      placeholder="Enter subtitle"
      value={form.subtitle}
      onChange={onChange}
      errors={errors.filter((e) => e.key === "subtitle").map((e) => e.message)}
    />
    <FieldInput
      label="rating"
      name="rating"
      placeholder="Enter rating (e.g. 4.5)"
      value={form.rating}
      onChange={onChange}
      step="0.1"
      min="0"
      max="5"
      errors={errors.filter((e) => e.key === "rating").map((e) => e.message)}
    />
    <FieldInput
      label="Get a Guaranteed Visa On"
      name="get_a_guaranteed_visa_on"
      value={form.get_a_guaranteed_visa_on}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors
        .filter((e) => e.key === "get_a_guaranteed_visa_on")
        .map((e) => e.message)}
    />
    <FieldInput
      label="Check Appointment Availability"
      name="check_appointment_availability"
      value={form.check_appointment_availability}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors
        .filter((e) => e.key === "check_appointment_availability")
        .map((e) => e.message)}
    />
    <FieldInput
      label="Statistics on Visa Acceptance Rate"
      name="statistics_on_visa_acceptance_rate"
      value={form.statistics_on_visa_acceptance_rate}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors
        .filter((e) => e.key === "statistics_on_visa_acceptance_rate")
        .map((e) => e.message)}
    />

    <FieldInput
      label="Statistics on Visa Processing Time"
      name="statistics_on_visa_processing_time"
      value={form.statistics_on_visa_processing_time}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors
        .filter((e) => e.key === "statistics_on_visa_processing_time")
        .map((e) => e.message)}
    />

    <FieldInput
      label="Statistics on Visa Approval Rating"
      name="statistics_on_visa_approval_rating"
      value={form.statistics_on_visa_approval_rating}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors
        .filter((e) => e.key === "statistics_on_visa_approval_rating")
        .map((e) => e.message)}
    />
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
