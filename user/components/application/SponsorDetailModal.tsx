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

// Define required fields for each tab
const TAB_REQUIRED_FIELDS: Record<string, string[]> = {
  basic: [
    "firstName",
    "lastName",
    "fatherName",
    "motherName",
    "dob",
    "gender",
    "phone",
    "email",
    "address1",
    "city",
    "state",
    "country",
    "zip",
    "maritalStatus",
  ],
  employment: ["employmentType"], // <-- Only require employmentType
  documents: ["photo"],
  passport: [
    "passportNumber",
    "passportPlace",
    "passportValidTill",
    "passportFile",
  ],
};

// Add sample options for country, state, and city
const COUNTRY_OPTIONS = [
  { value: "India", label: "India" },
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
];
const STATE_OPTIONS = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "California", label: "California" },
  { value: "Ontario", label: "Ontario" },
  { value: "New South Wales", label: "New South Wales" },
  { value: "Bavaria", label: "Bavaria" },
];
const CITY_OPTIONS = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Toronto", label: "Toronto" },
  { value: "Sydney", label: "Sydney" },
  { value: "Munich", label: "Munich" },
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

    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    passportNumber: "",
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

  // Helper to check if a tab is complete
  const isTabComplete = (tabKey: string) => {
    const required = TAB_REQUIRED_FIELDS[tabKey] || [];
    return required.every((field) => {
      const value = sponsorData[field as keyof typeof sponsorData];
      if (value === null || value === undefined) return false;
      if (typeof value === "string") return value.trim() !== "";
      if (value instanceof File) return true;
      return !!value;
    });
  };

  // Helper to get next tab key
  const getNextTabKey = (currentKey: string) => {
    const idx = TABS.findIndex((t) => t.key === currentKey);
    if (idx >= 0 && idx < TABS.length - 1) return TABS[idx + 1].key;
    return null;
  };

  // Next button handler
  const handleNext = () => {
    const nextTab = getNextTabKey(activeTab);
    if (nextTab) {
      setActiveTab(nextTab);
    } else {
      onClose();
    }
  };

  if (!open) return null;

  console.log("Rendering SponsorDetailModal for:", isTabComplete(activeTab));
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
                className={`px-4 py-2 font-medium text-sm border-b-2 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? "border-brand text-brand bg-white"
                    : "border-transparent "
                }`}
                onClick={() => setActiveTab(tab.key)}
                type="button"
              >
                {tab.label}
                {isTabComplete(tab.key) && (
                  <span
                    className="ml-1 text-green-600 text-lg"
                    title="Completed"
                  >
                    ✔️
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-2"  style={{
        backgroundImage: "url('/application/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: '400px',
        // overflowX: 'auto',
      }}>
            {activeTab === "basic" && (
              <SponsorBasicDetailsForm
                sponsorData={sponsorData}
                handleChange={handleChange}
                countryOptions={COUNTRY_OPTIONS}
                stateOptions={STATE_OPTIONS}
                cityOptions={CITY_OPTIONS}
                useDropdowns={true}
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
        
        {/* Step Indicator */}
        <div className="flex justify-center mt-8 mb-2">
          {TABS.map((tab, i) => (
            <div key={tab.key} className="flex items-center">
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                  activeTab === tab.key
                    ? "bg-brand text-white"
                    : isTabComplete(tab.key)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i + 1}
              </span>
              {i < TABS.length - 1 && (
                <span className="mx-2 text-gray-400">→</span>
              )}
            </div>
          ))}
        </div>
        {/* Next Button */}
        <div className="flex justify-end mt-2">
          <button
            className={`bg-brand text-white px-8 py-2 rounded-full flex items-center gap-2 hover:bg-[#174ea6] transition font-medium ${
              !isTabComplete(activeTab) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={handleNext}
            disabled={!isTabComplete(activeTab)}
          >
            {getNextTabKey(activeTab) ? "Next" : "Finish"}
            <MdKeyboardDoubleArrowRight size={33} />
          </button>
        </div>
      </div>
    </div>
  );
}
