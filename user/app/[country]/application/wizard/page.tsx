"use client";
import React, { useState } from "react";
import ProceedButton from "@/components/application/ProceedButton";
import FullNameStep from "@/components/application/FullNameStep";
import YesNoToggle from "@/components/application/YesNoToggle";
import SponsorStep from "@/components/application/SponsorStep";
import ReviewStep from "@/components/application/ReviewStep";
import TravelDatesStep from "@/components/application/TravelDatesStep";
import CountriesStep from "@/components/application/CountriesStep";
import PaymentStep from "@/components/application/PaymentStep";
import SponsorReviewStep from "@/components/application/SponsorReviewStep";
import Step5ReviewList from "@/components/application/Step5ReviewList";
import { useRouter } from "next/navigation";

export default function WizardPage() {
  const [step, setStep] = useState(1);

  const [noOptions, setNoOptions] = useState<
    { name: string; relation: string }[]
  >([{ name: "", relation: "" }]);
  const router = useRouter();
  // Define types for formData
  type NoOption = { name: string; relation: string };
  type Address = {
    flat: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  type FormData = {
    fullName: string;
    selectedSponsor: "self" | "other";
    noOptions: NoOption[];
    schengen: "yes" | "no";
    marital: "single" | "married" | "divorced" | "widowed";
    employment: "employed" | "self" | "unemployed" | "retired";
    employmentSub: string;
    selected: "yes" | "no" | null;
    address: Address;
    // ...add more fields as needed for other steps
  };

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    selectedSponsor: "self",
    noOptions: [], // <-- Initialize with one empty object
    schengen: "yes",
    marital: "single",
    employment: "employed",
    employmentSub: "",
    selected: null,
    address: {
      flat: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const handleFormDataChange = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // For noOptions array
  const handleAddNoOption = () =>
    setFormData((prev) => ({
      ...prev,
      noOptions: [...prev.noOptions, { name: "", relation: "" }],
    }));

  const handleRemoveNoOption = (idx: number) =>
    setFormData((prev) => ({
      ...prev,
      noOptions: prev.noOptions.filter((_, i) => i !== idx),
    }));

  const handleNoOptionChange = (
    idx: number,
    field: "name" | "relation",
    value: string
  ) =>
    setFormData((prev) => ({
      ...prev,
      noOptions: prev.noOptions.map((opt, i) =>
        i === idx ? { ...opt, [field]: value } : opt
      ),
    }));

  console.log("Form Data:", formData);
  const handleProceed = () => setStep((s) => s + 1);
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      {step === 1 && (
        <FullNameStep
          fullName={formData.fullName}
          setFullName={(val: string) => handleFormDataChange("fullName", val)}
          onProceed={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <div className="flex flex-col items-center md:items-start w-full">
          <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] leading-[40px] sm:leading-[52px] md:leading-[60px] lg:leading-[60px] text-[#85ABDB] mb-6 text-center md:text-left">
            Traveling with <br />
            <span className="text-[#022538] font-semibold">others?</span>
          </div>
          <YesNoToggle
            selected={formData.selected}
            setSelected={(val: "yes" | "no" | null) =>
              handleFormDataChange("selected", val)
            }
            noOptions={formData.noOptions}
            handleNoOptionChange={handleNoOptionChange}
            handleRemoveNoOption={handleRemoveNoOption}
            handleAddNoOption={handleAddNoOption}
          />
          {formData.selected === "yes" &&
            formData.noOptions.some(
              (opt) => !opt.relation || opt.relation.trim() === ""
            ) && (
              <div className="text-red-500 text-sm my-2">
                Please add a relation for each person before proceeding.
              </div>
            )}
          <ProceedButton
            onBack={() => setStep(1)}
            onClick={handleProceed}
            disabled={
              formData.selected === "yes" &&
              formData.noOptions.some(
                (opt) => !opt.relation || opt.relation.trim() === ""
              )
            }
          />
        </div>
      )}

      {step === 3 && (
        <SponsorStep
          selectedSponsor={formData.selectedSponsor}
          setSelectedSponsor={(val: "self" | "other") =>
            handleFormDataChange("selectedSponsor", val)
          }
          noOptions={formData.noOptions}
          handleNoOptionChange={handleNoOptionChange}
          handleRemoveNoOption={handleRemoveNoOption}
          handleAddNoOption={handleAddNoOption}
          handleProceed={handleProceed}
          fullName={formData.fullName}
          onBack={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <SponsorReviewStep
          noOptions={formData.noOptions}
          fullName={formData.fullName}
          onBack={() => setStep(3)}
          onProceed={handleProceed}
        />
      )}

      {/* Step 5: Styled Review List */}
      {step === 5 && (
        <Step5ReviewList
          fullName={formData.fullName}
          noOptions={formData.noOptions}
          onBack={() => setStep(4)}
          onProceed={handleProceed}
        />
      )}

      {/* {step === 8 && <EssentialDocumentsStep onProceed={handleProceed} onBack={() => setStep(7)} />} */}
      {step === 6 && (
        <ReviewStep onProceed={handleProceed} onBack={() => setStep(8)} />
      )}
      {step === 7 && <TravelDatesStep onProceed={handleProceed} />}

      {step === 8 && (
        <CountriesStep onProceed={handleProceed} onBack={() => setStep(10)} />
      )}
      {step === 9 && <PaymentStep onProceed={() => router.push("/home")} />}
    </div>
  );
}
