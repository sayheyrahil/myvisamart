"use client";
import React, { useState } from "react";
import ProceedButton from "@/components/application/ProceedButton";
import FullNameStep from "@/components/application/FullNameStep";
import YesNoToggle from "@/components/application/YesNoToggle";
import SchengenMaritalEmploymentStep from "@/components/application/SchengenMaritalEmploymentStep";
import SponsorStep from "@/components/application/SponsorStep";
import AddressStep from "@/components/application/AddressStep";
import EssentialDocumentsStep from "@/components/application/EssentialDocumentsStep";
import ReviewStep from "@/components/application/ReviewStep";
import TravelDatesStep from "@/components/application/TravelDatesStep";
import CountriesStep from "@/components/application/CountriesStep";
import PaymentStep from "@/components/application/PaymentStep";

export default function WizardPage() {
    const [step, setStep] = useState(1);

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
        noOptions: [{ name: "", relation: "" }],
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
        // ...add more fields as needed for other steps
    });

    console.log("Current Form Data:", formData);
    // Generic handler for any field, with type safety
    const handleFormDataChange = <K extends keyof FormData>(key: K, value: FormData[K]) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // For nested address
    const handleAddressChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                [field]: value,
            },
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

    const employmentSubOptions: Record<string, string[]> = {
        self: ["Run a Business", "Freelancer", "Stock Trader", "Self Employed"],
        unemployed: ["Student", "Home-maker", "Unemployed"],
    };

    const handleProceed = () => setStep((s) => s + 1);

    // You can always access all data in formData
    // console.log(formData);

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
                        setSelected={(val: "yes" | "no" | null) => handleFormDataChange("selected", val)}
                    />
                    <ProceedButton onBack={() => setStep(1)} onClick={handleProceed} />
                </div>
            )}

            {step === 3 && (
                <SponsorStep
                    selectedSponsor={formData.selectedSponsor}
                    setSelectedSponsor={(val: "self" | "other") => handleFormDataChange("selectedSponsor", val)}
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
                <SchengenMaritalEmploymentStep
                    schengen={formData.schengen}
                    setSchengen={(val: "yes" | "no") => handleFormDataChange("schengen", val)}
                    marital={formData.marital}
                    setMarital={(val: "single" | "married" | "divorced" | "widowed") => handleFormDataChange("marital", val)}
                    employment={formData.employment}
                    setEmployment={(val: "employed" | "self" | "unemployed" | "retired") => handleFormDataChange("employment", val)}
                    employmentSub={formData.employmentSub}
                    setEmploymentSub={(val: string) => handleFormDataChange("employmentSub", val)}
                    employmentSubOptions={employmentSubOptions}
                    onProceed={handleProceed}
                    onBack={() => setStep(3)}
                />
            )}

            {step === 5 && (
                <AddressStep
                    address={formData.address}
                    setAddress={(addr: typeof formData.address) => handleFormDataChange("address", addr)}
                    onProceed={handleProceed}
                    onBack={() => setStep(4)}
                />
            )}
            {step === 6 && <EssentialDocumentsStep onProceed={handleProceed} onBack={() => setStep(5)} />}
            {step === 7 && <ReviewStep onProceed={handleProceed} onBack={() => setStep(6)} />}
            {step === 8 && <TravelDatesStep onProceed={handleProceed}   />}
            {step === 9 && <CountriesStep onProceed={handleProceed} onBack={() => setStep(8)} />}
            {step === 10 && <PaymentStep onProceed={handleProceed}   />}
        </div>
    );
}
