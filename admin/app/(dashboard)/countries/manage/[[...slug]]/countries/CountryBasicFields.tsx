import React from "react";
import FieldInput from "@/components/common/FieldInput";

type FieldError = { key: string; message: string };
type Props = {
  dailCode: string;
  visaProcessTime: string;
  amount?: string;
  payLaterAmount?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: FieldError[];
};

const CountryBasicFields: React.FC<Props> = ({
  dailCode,
  visaProcessTime,
  amount,
  payLaterAmount,
  onChange,
  errors = [],
}) => (
  <>
    <FieldInput
      label="dail code"
      name="dail_code"
      placeholder="Enter dail code"
      value={dailCode}
      onChange={onChange}
      errors={errors.filter((e) => e.key === "dail_code").map(e => e.message)}
    />

    <FieldInput
      label="visa process time"
      name="visa_process_time"
      placeholder="Enter visa process time"
      value={visaProcessTime}
      onChange={onChange}
      errors={errors.filter((e) => e.key === "visa_process_time").map(e => e.message)}
    />
  </>
);

export default CountryBasicFields;
