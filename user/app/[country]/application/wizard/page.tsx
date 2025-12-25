"use client";
import React, { useState, useContext } from "react";
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
import { FormDataContext } from "@/context/FormDataContext";

export default function WizardPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const { formData, dispatch } = useContext(FormDataContext);


   const handleFormDataChange = <K extends keyof typeof formData>(
    key: K,
    value: typeof formData[K]
  ) => {
    dispatch({ type: "SET_FIELD", key, value });
  };

  const handleAddNoOption = () =>
    dispatch({ type: "ADD_NO_OPTION" });

  const handleRemoveNoOption = (idx: number) =>
    dispatch({ type: "REMOVE_NO_OPTION", idx });

  const handleNoOptionChange = (
    idx: number,
    field: "name" | "relation",
    value: string
  ) =>{

    console.log("handleNoOptionChange called with:", { idx, field, value });
       dispatch({ type: "UPDATE_NO_OPTION", idx, field, value });
  }


  const handleProceed = () => setStep((s) => s + 1);

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      {step === 1 && (
        <FullNameStep
          fullName={formData.noOptions[0]?.name}
          setFullName={(val: string) => handleNoOptionChange(0, "name", val)}
          onProceed={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <div className="flex flex-col items-center md:items-start w-full">
          <YesNoToggle
            selected={formData.selected}
            setSelected={(val: "yes" | "no" | null) =>
              handleFormDataChange("selected", val)
            }
            noOptions={formData.noOptions}
            handleNoOptionChange={handleNoOptionChange}
            handleRemoveNoOption={handleRemoveNoOption}
            handleAddNoOption={handleAddNoOption}
            handleProceed={handleProceed}
            onBack={() => setStep(1)}
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
          onBack={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <SponsorReviewStep
          noOptions={formData.noOptions}
          onBack={() => setStep(3)}
          onProceed={handleProceed}
        />
      )}

      {/* Step 5: Styled Review List */}
      {step === 5 && (
        <Step5ReviewList
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
