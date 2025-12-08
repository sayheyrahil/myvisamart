"use client";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"; // <-- Fix import
type faqForm = {
  name: string;
  question: string;
  answer: string;
  type: string[]; // allow multiple types
  slug: string;
  is_active?: boolean;
  is_deleted?: boolean;
};

const pageTitleName = "faq";
const typeOptions = [
  { value: "user_home", label: "User Home" },
  { value: "agent_home", label: "Agent Home" },
  { value: "country_detail", label: "Country Detail" },
  { value: "us_visa_mock_interview", label: "Visamart-US Visa Mock Interview" },
  { value: "transparency_hub", label: "Visamart-Transparency Hub" },
  { value: "ds_160", label: "DS-160" },
  {
    value: "schengen_appointment_checker",
    label: "Schengen Appointment Checker",
  },
  { value: "schengen_cover_letter", label: "Schengen Cover Letter" },
  { value: "schengen_invitation_letter", label: "Schengen Invitation Letter" },
  { value: "uae_visa_status_online", label: "UAE Visa Status Online" },
  {
    value: "vietnam_visa_status_checker",
    label: "Vietnam Visa Status Checker",
  },
  { value: "visa_eligibility_quiz", label: "Visa Eligibility Quiz" },
  { value: "visa_glossary", label: "Visa Glossary" },
  {
    value: "visa_glossary_adjustment_of_status",
    label: "Visa Glossary Adjustment of Status",
  },
  { value: "visa_photo_maker", label: "Visa Photo Maker" },
];

export default function Page({ params: paramsPromise }: { params: any }) {
  const params = React.use(paramsPromise) as { slug?: string[] };

  const router = useRouter(); // <-- Fix usage
  const searchParams = useSearchParams();
  const countryName = searchParams.get("country_name");

  useEffect(() => {
    if (countryName && form.type.length === 0) {
      setForm((prev) => ({
        ...prev,
        type: [countryName],
      }));
    }
  }, [countryName]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [form, setForm] = useState<faqForm>({
    name: "",
    question: "",
    answer: "",
    type: [],
    slug: "",
    is_active: true,
    is_deleted: false,
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [id, setId] = useState<number | null>(null);

  // Fetch data for edit
  const fetchData = useCallback((id: number) => {
    const idpass = { id: id };
    axiosInstance
      .post(ENDPOINTS.faq_edit, idpass)
      .then((response: any) => {
        let data = response.data.data;
        setForm({
          name: data.name || "",
          question: data.question || "",
          answer: data.answer || "",
          type: data.type || "",
          slug: data.slug || "",
          is_active: data.is_active,
          is_deleted: data.is_deleted,
        });
        setIsEdit(true);
      })
      .catch((error: any) => {
        if (error.response) {
          handleAxiosError(error);
        }
      });
  }, []);

  useEffect(() => {
    const dynamicId = params.slug?.[0] || null;
    if (dynamicId) {
      setId(dynamicId as unknown as number);
      fetchData(dynamicId as unknown as number);
    }
  }, [fetchData]);

  const onSubmit = async (data: faqForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
    if (id) {
      submitData["id"] = id;
    }
    if (countryName) {
      submitData["country_name"] = countryName;
    }
    // Convert type array to comma-separated string if backend expects string
    submitData.type = Array.isArray(submitData.type)
      ? submitData.type.join(",")
      : submitData.type;
    await axiosInstance
      .post(ENDPOINTS.faq_store, submitData)
      .then(async (response: any) => {
        setIsLoading(false);
        handleAxiosSuccess(response);
        setTimeout(() => {
           router.back();
        }, 100);
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.log(error);
        if (error.response) {
          handleAxiosError(error);
        }
      });
  };

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type, checked, multiple, options } = e.target;
    if (name === "type" && multiple) {
      const selected: string[] = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) selected.push(options[i].value);
      }
      setForm((prev) => ({
        ...prev,
        type: selected,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  }

  function validate(): string {
    if (form.question.length < 5)
      return "Question must be at least 5 characters.";
    if (form.answer.length < 5) return "Answer must be at least 5 characters.";
    if (!form.type || form.type.length === 0) return "Type is required.";
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    onSubmit(form);
  }

  function onReset() {
    setForm({
      name: "",
      question: "",
      answer: "",
      type: [],
      slug: "",
      is_active: true,
      is_deleted: false,
    });
    setError("");
    setSuccess("");
    setIsEdit(false);
    setId(null);
  }

  return (
    <div className=" p-6 bg-white rounded-md shadow">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit FAQ" : "New FAQ"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Question:
            <input
              type="text"
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Enter question"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Answer:
            <textarea
              name="answer"
              value={form.answer}
              onChange={handleChange}
              placeholder="Enter answer"
              rows={3}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        {/* Fix conditional rendering for Type field */}
        {!countryName && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Type:
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                multiple
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
                style={{ minHeight: 120 }}
              >
                {typeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <small className="text-gray-500">
                Hold Ctrl (Windows) or Cmd (Mac) to select multiple
              </small>
            </label>
          </div>
        )}

        {error && <div className="text-red-600 mb-4">{error}</div>}
        {success && <div className="text-green-600 mb-4">{success}</div>}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
            disabled={isLoading}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/faq")}
            className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark"
            disabled={isLoading}
          >
            {isLoading
              ? isEdit
                ? "Updating..."
                : "Creating..."
              : isEdit
              ? "Update"
              : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
