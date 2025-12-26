import React, { useState, useEffect, useContext } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FormDataContext } from "@/context/FormDataContext";
import SponsorBasicDetailsForm from "./form/SponsorBasicDetailsForm";
import SponsorPassportDetailsForm from "./form/SponsorPassportDetailsForm";
import SponsorDocumentsForm from "./form/SponsorDocumentsForm";
import SponsorEmploymentForm from "./form/SponsorEmploymentForm";

const TABS = [
  { key: "basic", label: "Basic Details" },
  { key: "employment", label: "Employment Status" },
  { key: "documents", label: "Documents" },
  { key: "passport", label: "Passport details" },
];

export default function SponsorDetailModal({
  open,
  onClose,
  name,
  relation,
  idx,
}: {
  open: boolean;
  onClose: () => void;
  name: string;
  relation: string;
  idx: number;
}) {
  const { formData, dispatch } = useContext(FormDataContext);

  // Default sponsor data structure
  const defaultSponsorData = {
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    schengenVisa: "",
    maritalStatus: "",
    employmentType: "",
    companyName: "",
    photo: null as File | null,
    passportFile: null as File | null,
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    passportNumber: "",
    passportPlace: "",
    passportValidTill: "",
  };

  const [sponsorData, setSponsorData] = useState(defaultSponsorData);
  const [activeTab, setActiveTab] = useState("basic");

  useEffect(() => {
    if (open && typeof idx === "number") {
      dispatch({
        type: "SET_NO_OPTION_AT_INDEX",
        idx,
        value: {
          name,
          relation,
          ...sponsorData,
        },
      });
    }
    // Only run when open, idx, name, relation, or sponsorData changes
    // Remove formData.noOptions from dependencies to avoid infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sponsorData, open, name, relation, idx]);

  // Change handleChange to accept any string as field
  const handleChange = (field: string, value: any) => {
    setSponsorData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 min-w-[50%] min-h-[80%] max-w-[90vw] relative">
        <button
          className="absolute top-4 right-4 text-[#022538] text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 ">
          <span className="bg-[#E6F0FA] rounded-full flex items-center min-w-[280px] text-[#022538] font-medium text-base">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg text-center uppercase">
              {name
                ? name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                : ""}
            </div>
            <div className="ml-3">
              {name} ({relation})
            </div>
          </span>
        </div>
        {/* Tabs */}
        <div className="w-full border border-gray-200 rounded-3xl p-4">
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 font-medium text-sm border-b-2 ${
                  activeTab === tab.key
                    ? "border-brand text-brand bg-white"
                    : "border-transparent "
                }`}
                onClick={() => setActiveTab(tab.key)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-2">
            {activeTab === "basic" && (
              <SponsorBasicDetailsForm
                sponsorData={sponsorData}
                handleChange={handleChange}
              />
            )}
            {activeTab === "employment" && (
              <SponsorEmploymentForm
                sponsorData={sponsorData}
                handleChange={handleChange}
              />
            )}
            {activeTab === "documents" && (
              <SponsorDocumentsForm
                sponsorData={sponsorData}
                handleChange={handleChange}
              />
            )}
            {activeTab === "passport" && (
              <SponsorPassportDetailsForm
                sponsorData={sponsorData}
                handleChange={handleChange}
              />
            )}
          </div>
        </div>
        {/* Next Button */}
        <div className="flex justify-end mt-8">
          <button
            className="bg-brand text-white px-8 py-2 rounded-full flex items-center gap-2 hover:bg-[#174ea6] transition font-medium"
            type="button"
            onClick={onClose}
          >
            Next
            <MdKeyboardDoubleArrowRight size={33} />
          </button>
        </div>
      </div>
    </div>
  );
}
