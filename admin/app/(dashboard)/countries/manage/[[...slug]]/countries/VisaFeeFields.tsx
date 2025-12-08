import React from "react";
import FieldInput from "@/components/common/FieldInput";

type FieldError = { key: string; message: string };
type Props = {
  form: {
    visa_fee_now?: string;
    service_fee_now?: string;
    visa_fee_later?: string;
    service_fee_later?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: FieldError[];
};

const VisaFeeFields: React.FC<Props> = ({ form, onChange, errors = [] }) => (
  <>
    <FieldInput
      label="Visa Fee Now"
      name="visa_fee_now"
      value={form.visa_fee_now}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors.filter((e) => e.key === "visa_fee_now").map(e => e.message)}
    />

    <FieldInput
      label="Service Fee Now"
      name="service_fee_now"
      value={form.service_fee_now}
      onChange={onChange}
      placeholder="Enter info"
      errors={errors.filter((e) => e.key === "service_fee_now").map(e => e.message)}
    />

    <FieldInput
      label="Visa Fee (Pay Later)"
      name="visa_fee_later"
      placeholder="Enter visa fee for pay later"
      value={form.visa_fee_later}
      onChange={onChange}
      errors={errors.filter((e) => e.key === "visa_fee_later").map(e => e.message)}
    />

    <FieldInput
      label="Service Fee (Pay Later)"
      name="service_fee_later"
      placeholder="Enter service fee for pay later"
      value={form.service_fee_later}
      onChange={onChange}
      errors={errors.filter((e) => e.key === "service_fee_later").map(e => e.message)}
    />
  </>
);

export default VisaFeeFields;
