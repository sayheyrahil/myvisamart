import React, { useState, useEffect, useContext } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FormDataContext } from "@/context/FormDataContext";

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
    if (open) {
      if (typeof idx === "number") {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sponsorData, open, name, relation, formData.noOptions]);

  const handleChange = (field: keyof typeof sponsorData, value: any) => {
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
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Phone Number
                  </label>
                  <div className="flex items-center border rounded px-2 py-1">
                    <span className="mr-2">🇮🇳</span>
                    <input
                      className="w-full outline-none bg-transparent"
                      placeholder="Phone Number"
                      value={sponsorData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Email*
                  </label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    placeholder="Email"
                    value={sponsorData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Address Line 1
                  </label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    placeholder="Address Line 1"
                    value={sponsorData.address1}
                    onChange={(e) => handleChange("address1", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Address Line 2
                  </label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    placeholder="Address Line 2"
                    value={sponsorData.address2}
                    onChange={(e) => handleChange("address2", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    City*
                  </label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={sponsorData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                  >
                    <option value="">Select</option>
                    {/* Add city options here */}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    State*
                  </label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={sponsorData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                  >
                    <option value="">Select</option>
                    {/* Add state options here */}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Country*
                  </label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={sponsorData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  >
                    <option value="">Select</option>
                    {/* Add country options here */}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Zip Code*
                  </label>
                  <input
                    className="w-full border rounded px-2 py-1"
                    placeholder="Zip Code"
                    value={sponsorData.zip}
                    onChange={(e) => handleChange("zip", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Have Schengen Visa?
                  </label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={sponsorData.schengenVisa}
                    onChange={(e) =>
                      handleChange("schengenVisa", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Marital Status
                  </label>
                  <select
                    className="w-full border rounded px-2 py-1"
                    value={sponsorData.maritalStatus}
                    onChange={(e) =>
                      handleChange("maritalStatus", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
              </form>
            )}
            {activeTab === "employment" && (
              <div className="py-4">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Employment Type*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Employment Type"
                      value={sponsorData.employmentType}
                      onChange={(e) =>
                        handleChange("employmentType", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Company Name
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Company Name"
                      value={sponsorData.companyName}
                      onChange={(e) =>
                        handleChange("companyName", e.target.value)
                      }
                    />
                  </div>
                </form>
              </div>
            )}
            {activeTab === "documents" && (
              <div className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo Upload */}
                  <div>
                    <label className="block text-xs font-medium mb-2">
                      Photo
                    </label>
                    <div className="border rounded-lg bg-[#F7FAFC] flex items-center px-4 py-3">
                      <input
                        type="file"
                        className="hidden"
                        id="photo-upload"
                        onChange={(e) =>
                          handleChange("photo", e.target.files?.[0] || null)
                        }
                      />
                      <label
                        htmlFor="photo-upload"
                        className="flex-1 cursor-pointer text-gray-400"
                      >
                        Upload
                      </label>
                      <span className="ml-2">
                        <svg width="24" height="24" fill="none">
                          <path
                            d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2M7 12l5 5 5-5M12 17V4"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* Passport Upload */}
                  <div>
                    <label className="block text-xs font-medium mb-2">
                      Passport
                    </label>
                    <div className="border rounded-lg bg-[#F7FAFC] flex items-center px-4 py-3">
                      <input
                        type="file"
                        className="hidden"
                        id="passport-upload"
                        onChange={(e) =>
                          handleChange(
                            "passportFile",
                            e.target.files?.[0] || null
                          )
                        }
                      />
                      <label
                        htmlFor="passport-upload"
                        className="flex-1 cursor-pointer text-gray-400"
                      >
                        Upload
                      </label>
                      <span className="ml-2">
                        <svg width="24" height="24" fill="none">
                          <path
                            d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2M7 12l5 5 5-5M12 17V4"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "passport" && (
              <div className="py-4">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      First Name*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="First Name"
                      value={sponsorData.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Last Name*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Last Name"
                      value={sponsorData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Father's Name*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Father's Name"
                      value={sponsorData.fatherName}
                      onChange={(e) =>
                        handleChange("fatherName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Mother's Name*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Mother's Name"
                      value={sponsorData.motherName}
                      onChange={(e) =>
                        handleChange("motherName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Date of Birth*
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                      placeholder="Date of Birth"
                      value={sponsorData.dob}
                      onChange={(e) => handleChange("dob", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Gender*
                    </label>
                    <select
                      className="w-full border rounded px-2 py-1"
                      value={sponsorData.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                      <option value="OTHER">OTHER</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Passport Number*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Passport Number"
                      value={sponsorData.passportNumber}
                      onChange={(e) =>
                        handleChange("passportNumber", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Passport place of issue*
                    </label>
                    <input
                      className="w-full border rounded px-2 py-1"
                      placeholder="Passport place of issue"
                      value={sponsorData.passportPlace}
                      onChange={(e) =>
                        handleChange("passportPlace", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Passport valid till*
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded px-2 py-1"
                      placeholder="Passport valid till"
                      value={sponsorData.passportValidTill}
                      onChange={(e) =>
                        handleChange("passportValidTill", e.target.value)
                      }
                    />
                  </div>
                </form>
              </div>
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
