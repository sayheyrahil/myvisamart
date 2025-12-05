"use client"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Editor from "@/components/common/Editor";

import ImageUpload from "@/components/common/image-upload";
import VideoUpload from "@/components/common/video-upload"; // <-- Add this import

import ContinentSelect from "./countries/ContinentSelect";
import DocumentsRequiredProcess from "./countries/DocumentsRequiredProcess";
import VisaInformation from "./countries/VisaInformation";
import RequiredDocuments from "./countries/RequiredDocuments";
import TransitTimeline from "./countries/TransitTimeline";
import VisaFeeFields from "./countries/VisaFeeFields";
import CountryImages from "./countries/CountryImages";
import CountryDetailDescription from "./countries/CountryDetailDescription";
import CountryBasicFields from "./countries/CountryBasicFields";

import AmountsAndFeesFields from "./countries/AmountsAndFeesFields";
import RejectionReasons from "./countries/RejectionReasons";
import WhyReasons from "./countries/WhyReasons";

type countriesForm = {
  name: string
  description: string
  image: string
  icon: string
  video: string
  dail_code: string
  detail: string
  visa_process_time: string
  is_active: boolean
  is_deleted: boolean
  createdAt?: string
  updatedAt?: string
  slug: string
  is_top_destination: boolean
  is_popular: boolean
  countries: string[]
  subtitle: string
  rating: number
  continent: string
  required_documents: { title: string; description: string; icon: string }[]
  visa_information: { key: string; value: string }[]
  transit_timeline: { icon: string; title: string; description: string }[]
  visa_fee_now?: string
  service_fee_now?: string
  visa_fee_later?: string
  service_fee_later?: string
  documents_required_process: { title: string; description: string }[]
  partners_we_work_with: any[]
  rejection_reasons: any[]
  chances_of_approval_for_this: string
  chances_of_approval_for_other: string
  how_we_reviewed_this_page_sources: string
  how_we_reviewed_this_page_history: string
  get_a_guaranteed_visa_on: string
  check_appointment_availability: string
  statistics_on_visa_processing_time: string
  statistics_on_visa_approval_rating: string
  visa_approval_comparison: {
    atlys_percentage: string
    overall_percentage: string
    rows: any[]
  }
  what_you_get: any[]
}

const steps = [
  { label: "Basic Info" },
  { label: "Images" },
  { label: "Video" }, // <-- Add this step
  { label: "Details & Description" },
  { label: "Amounts & Fees" },
  { label: "Country Selection" },
  { label: "Transit Timeline" },
  { label: "Required Documents" },
  { label: "Visa Information" },
  { label: "Continent" },
  { label: "Documents Required & Process" },
  { label: "What You Get Images" },
  { label: "Partners We Work With Images" }, // <-- Add this step
  { label: "Rejection Reasons" }, // <-- Add this step
  { label: "Why Reasons" }, // <-- Add this step
];

const pageTitleName = "countries";
export default function Page({ params: paramsPromise }: { params: any }) {
  const params = React.use(paramsPromise) as { slug?: string[] };
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string>("")
  const [imageIconPreview, setImageIconPreview] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [id, setId] = useState<number | null>(null)
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0);
  const [whatYouGetPreviews, setWhatYouGetPreviews] = useState<string[]>([]); // For image previews
  const [videoPreview, setVideoPreview] = useState<string>("");
  const [partnersWeWorkWithPreviews, setPartnersWeWorkWithPreviews] = useState<string[]>([]); // For partners images
  const [rejectionReasons, setRejectionReasons] = useState(
    [{ icon: "", title: "", description: "" }]
  );
  const [whyReasons, setWhyReasons] = useState([{ icon: "", title: "", description: "" }]);

  const filters = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia",
  ];
 
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [form, setForm] = useState<countriesForm>({
    name: "",
    description: "",
    image: "",
    icon: "",
    video: "",
    dail_code: "",
    detail: "",
    visa_process_time: "",
    is_active: true,
    is_deleted: false,
    createdAt: "",
    updatedAt: "",
    slug: "",
    is_top_destination: false,
    is_popular: false,
    countries: [],
    subtitle: "",
    rating: 0,
    continent: "",
    required_documents: [{ title: "", description: "", icon: "" }],
    visa_information: [{ key: "", value: "" }],
    transit_timeline: [{ icon: "", title: "", description: "" }],
    visa_fee_now: "",
    service_fee_now: "",
    visa_fee_later: "",
    service_fee_later: "",
    documents_required_process: [{ title: "", description: "" }],
    partners_we_work_with: [],
    rejection_reasons: [],
    chances_of_approval_for_this: "",
    chances_of_approval_for_other: "",
    how_we_reviewed_this_page_sources: "",
    how_we_reviewed_this_page_history: "",
    get_a_guaranteed_visa_on: "",
    check_appointment_availability: "",
    statistics_on_visa_processing_time: "",
    statistics_on_visa_approval_rating: "",
    visa_approval_comparison: {
      atlys_percentage: "",
      overall_percentage: "",
      rows: [],
    },
    what_you_get: [],
  })

  // Fetch data for edit
  const fetchData = useCallback(
    (id: number) => {
      const idpass = { id: id };
      axiosInstance.post(ENDPOINTS.countries_edit , idpass)
        .then((response: any) => {
          let data = response.data.data;
          setForm({
            name: data.name || "",
            description: data.description || "",
            image: data.image || "",
            country: data.country || "",
            icon: data.icon || "",
            video: data.video || "",
            dail_code: data.dail_code || "",
            detail: data.detail || "",
            visa_process_time: data.visa_process_time || "",
            amount: data.amount ? String(data.amount) : "",
            pay_later_amount: data.pay_later_amount ? String(data.pay_later_amount) : "",
            is_top_destination: !!data.is_top_destination,
            is_popular: !!data.is_popular,
            countries: Array.isArray(data.countries) ? data.countries : [],
            transit_timeline: Array.isArray(data.transit_timeline)
              ? data.transit_timeline.map((item: any) => ({
                  icon: item.icon || "",
                  title: item.title || "",
                  description: item.description || "",
                }))
              : [{ icon: "", title: "", description: "" }],
            required_documents: Array.isArray(data.required_documents)
              ? data.required_documents.map((item: any) => ({
                  title: item.title || "",
                  description: item.description || "",
                  icon: item.icon || "",
                }))
              : [{ title: "", description: "", icon: "" }],
            visa_information: Array.isArray(data.visa_information)
              ? data.visa_information.map((item: any) =>
                  typeof item === "object" && item !== null
                    ? { key: item.key || "", value: item.value || "" }
                    : { key: "", value: String(item) }
                )
              : [{ key: "", value: "" }],
            continent: data.continent || "",
            visa_fee_now: data.visa_fee_now ? String(data.visa_fee_now) : "",
            service_fee_now: data.service_fee_now ? String(data.service_fee_now) : "",
            visa_fee_later: data.visa_fee_later ? String(data.visa_fee_later) : "",
            service_fee_later: data.service_fee_later ? String(data.service_fee_later) : "",
            documents_required_process: Array.isArray(data.documents_required_process)
              ? data.documents_required_process.map((item: any) => ({
                  title: item.title || "",
                  description: item.description || "",
                }))
              : [{ title: "", description: "" }],
            is_active: !!data.is_active,
            is_deleted: !!data.is_deleted,
            createdAt: data.createdAt || "",
            updatedAt: data.updatedAt || "",
            slug: data.slug || "",
            subtitle: data.subtitle || "",
            rating: data.rating ? Number(data.rating) : 0,
            partners_we_work_with: Array.isArray(data.partners_we_work_with) ? data.partners_we_work_with : [],
            rejection_reasons: Array.isArray(data.rejection_reasons) ? data.rejection_reasons : [],
            chances_of_approval_for_this: data.chances_of_approval_for_this ? String(data.chances_of_approval_for_this) : "",
            chances_of_approval_for_other: data.chances_of_approval_for_other ? String(data.chances_of_approval_for_other) : "",
            how_we_reviewed_this_page_sources: data.how_we_reviewed_this_page_sources || "",
            how_we_reviewed_this_page_history: data.how_we_reviewed_this_page_history || "",
            get_a_guaranteed_visa_on: data.get_a_guaranteed_visa_on || "",
            check_appointment_availability: data.check_appointment_availability || "",
            statistics_on_visa_processing_time: data.statistics_on_visa_processing_time || "",
            statistics_on_visa_approval_rating: data.statistics_on_visa_approval_rating || "",
            visa_approval_comparison: data.visa_approval_comparison || { atlys_percentage: "", overall_percentage: "", rows: [] },
            what_you_get: Array.isArray(data.what_you_get) ? data.what_you_get : [],
          });
          setImagePreview(data.image || "");
          setIsEdit(true);
        })
        .catch((error: any) => {
          if (error.response) {
            handleAxiosError(error);
          }
        });
    },
    []
  );

  useEffect(() => {
    const dynamicId = params.slug?.[0] || null;

     if (dynamicId) {
      setId(dynamicId as unknown as number);
      fetchData(dynamicId as unknown as number);
    }

  }, [fetchData]);

  // Fetch country names for select options
  useEffect(() => {
     axiosInstance.post(ENDPOINTS.country_names_active)
      .then((response: any) => {
        setCountryOptions(response.data.data || []);
      })
      .catch(() => {
        setCountryOptions([]);
      });
  }, []);

  // Handler for uploading multiple images for what_you_get
  function handleWhatYouGetImagesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    // For preview
    const previews = files.map(file => URL.createObjectURL(file));
    setWhatYouGetPreviews(previews);

    // For form data (store as array of File or base64, depending on backend)
    setForm(prev => ({
      ...prev,
      what_you_get: files,
    }));
  }

  // Clean up previews on unmount
  useEffect(() => {
    return () => {
      whatYouGetPreviews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [whatYouGetPreviews]);

  const onSubmit = async (data: countriesForm) => {
    setIsLoading(true);
    const submitData: any = { ...data }
    submitData.rating = Number(data.rating) || 0
    submitData.visa_fee_now = Number(data.visa_fee_now) || 0
    submitData.service_fee_now = Number(data.service_fee_now) || 0
    submitData.visa_fee_later = Number(data.visa_fee_later) || 0
    submitData.service_fee_later = Number(data.service_fee_later) || 0
    submitData.chances_of_approval_for_this = Number(data.chances_of_approval_for_this) || 0
    submitData.chances_of_approval_for_other = Number(data.chances_of_approval_for_other) || 0
    if (id) {
      submitData["id"] = id;
    }
    // Convert amount fields to number
    submitData.amount = Number(submitData.amount) || 0;
    submitData.pay_later_amount = Number(submitData.pay_later_amount) || 0;
    submitData.visa_fee_now = Number(data.visa_fee_now) || 0;
    submitData.service_fee_now = Number(data.service_fee_now) || 0;
    submitData.visa_fee_later = Number(data.visa_fee_later) || 0;
    submitData.service_fee_later = Number(data.service_fee_later) || 0;
    submitData.is_top_destination = !!data.is_top_destination;
    submitData.is_popular = !!data.is_popular;
    submitData.countries = Array.isArray(data.countries) ? data.countries : [];
    submitData.transit_timeline = data.transit_timeline.map((item) => ({
      icon: item.icon,
      title: item.title,
      description: item.description,
    }));
    submitData.required_documents = data.required_documents.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
    }));
    submitData.visa_information = data.visa_information.map((item) => ({
      key: item.key,
      value: item.value,
    }));
    submitData.documents_required_process = data.documents_required_process.map((item) => ({
      title: item.title,
      description: item.description,
    }));
    // Handle what_you_get images (convert to FormData if needed)
    let formDataToSend: any = submitData;
    if (submitData.what_you_get && Array.isArray(submitData.what_you_get) && submitData.what_you_get[0] instanceof File) {
      // Use FormData for file upload
      const fd = new FormData();
      Object.entries(submitData).forEach(([key, value]) => {
        if (key === "what_you_get") {
          (value as File[]).forEach((file, idx) => {
            fd.append(`what_you_get[]`, file);
          });
        } else if (typeof value === "object" && value !== null) {
          fd.append(key, JSON.stringify(value));
        } else {
          fd.append(key, value as any);
        }
      });
      formDataToSend = fd;
    }

    await axiosInstance.post(ENDPOINTS.countries_store, formDataToSend, {
      headers: formDataToSend instanceof FormData ? { "Content-Type": "multipart/form-data" } : undefined,
    })
      .then(async (response: any) => {
        setIsLoading(false);
        handleAxiosSuccess(response);
        setTimeout(() => {
          router.push("/countries");
        }, 100);
      })
      .catch((error: any) => {
        setIsLoading(false);
         if (error.response) {
           handleAxiosError(error);
        }
      });
  };

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type, checked, multiple, options } = e.target
    if (type === "checkbox") {
      setForm(prev => ({
        ...prev,
        [name]: checked,
      }))
    } else if (multiple) {
      const selected: string[] = []
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) selected.push(options[i].value)
      }
      setForm(prev => ({
        ...prev,
        [name]: selected,
      }))
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  // Step validation
  function validateStep(currentStep: number): string {
    switch (currentStep) {
      case 0:
        if (form.name.length < 2) return "Name must be at least 2 characters.";
        if (form.name.length > 100) return "Name cannot exceed 100 characters.";
        break;
      case 1:
        if (form.icon.length < 10) return "Icon is required.";
        // if (!form.image) return "Image is required."
        break;
      case 2:
        if (form.description.length < 10) return "Description must be at least 10 characters.";
        if (!form.detail) return "Detail is required.";
        break;
      case 3:
        if (!form.dail_code) return "Dail code is required.";
        if (!form.visa_process_time) return "Visa process time is required.";
        if (!form.amount) return "Amount is required.";
        if (!form.pay_later_amount) return "Pay later amount is required.";
        break;
      case 4:
        // Optionally validate countries selection
        // if (!form.countries || form.countries.length === 0) return "At least one country must be selected."
        break;
      case 8:
        if (!form.continent) return "Continent is required.";
        break;
      default:
        break;
    }
    return "";
  }

  const handleNext = () => {
    setError("");
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }
    setStep(prev => Math.min(prev + 1, steps.length - 1));
  }

  const handlePrev = () => {
    setError("");
    setStep(prev => Math.max(prev - 1, 0));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Validate all steps before submit
    for (let i = 0; i < steps.length; i++) {
      const err = validateStep(i);
      if (err) {
        setError(`Step ${i + 1}: ${err}`);
        setStep(i);
        return;
      }
    }
    onSubmit(form);
  }

  function onReset() {
    setForm({
      name: "",
      description: "",
      image: "",
      icon: "",
      video: "",
      dail_code: "",
      detail: "",
      visa_process_time: "",
      is_active: true,
      is_deleted: false,
      createdAt: "",
      updatedAt: "",
      slug: "",
      is_top_destination: false,
      is_popular: false,
      countries: [],
      subtitle: "",
      rating: 0,
      continent: "",
      required_documents: [{ title: "", description: "", icon: "" }],
      visa_information: [{ key: "", value: "" }],
      transit_timeline: [{ icon: "", title: "", description: "" }],
      visa_fee_now: "",
      service_fee_now: "",
      visa_fee_later: "",
      service_fee_later: "",
      documents_required_process: [{ title: "", description: "" }],
      partners_we_work_with: [],
      rejection_reasons: [],
      chances_of_approval_for_this: "",
      chances_of_approval_for_other: "",
      how_we_reviewed_this_page_sources: "",
      how_we_reviewed_this_page_history: "",
      get_a_guaranteed_visa_on: "",
      check_appointment_availability: "",
      statistics_on_visa_processing_time: "",
      statistics_on_visa_approval_rating: "",
      visa_approval_comparison: {
        atlys_percentage: "",
        overall_percentage: "",
        rows: [],
      },
      what_you_get: [],
    })
    setImagePreview("")
    setError("")
    setSuccess("")
    setIsEdit(false)
    setId(null)
    setStep(0);
    setWhatYouGetPreviews([]);
  }

  // Helper to handle array textbox changes
  function handleArrayChange(field: keyof countriesForm, idx: number, value: string) {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === idx ? value : item)),
    }));
  }
  function handleArrayAdd(field: keyof countriesForm) {
    setForm(prev => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  }
  function handleArrayRemove(field: keyof countriesForm, idx: number) {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== idx),
    }));
  }
  function handleVisaInfoChange(idx: number, field: "key" | "value", value: string) {
    setForm((prev) => ({
      ...prev,
      visa_information: prev.visa_information.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleVisaInfoAdd() {
    setForm((prev) => ({
      ...prev,
      visa_information: [...prev.visa_information, { key: "", value: "" }],
    }));
  }
  function handleVisaInfoRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      visa_information: prev.visa_information.length === 1
        ? [{ key: "", value: "" }]
        : prev.visa_information.filter((_, i) => i !== idx),
    }));
  }
  function handleRequiredDocChange(idx: number, field: "title" | "description" | "icon", value: string) {
    setForm((prev) => ({
      ...prev,
      required_documents: prev.required_documents.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleRequiredDocAdd() {
    setForm((prev) => ({
      ...prev,
      required_documents: [...prev.required_documents, { title: "", description: "", icon: "" }],
    }));
  }
  function handleRequiredDocRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      required_documents: prev.required_documents.length === 1
        ? [{ title: "", description: "", icon: "" }]
        : prev.required_documents.filter((_, i) => i !== idx),
    }));
  }
  function handleTransitTimelineChange(idx: number, field: "icon" | "title" | "description", value: string) {
    setForm((prev) => ({
      ...prev,
      transit_timeline: prev.transit_timeline.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleTransitTimelineAdd() {
    setForm((prev) => ({
      ...prev,
      transit_timeline: [...prev.transit_timeline, { icon: "", title: "", description: "" }],
    }));
  }
  function handleTransitTimelineRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      transit_timeline: prev.transit_timeline.length === 1
        ? [{ icon: "", title: "", description: "" }]
        : prev.transit_timeline.filter((_, i) => i !== idx),
    }));
  }

  // Handler for Documents Required & Process
  function handleDocumentsRequiredProcessChange(idx: number, field: "title" | "description", value: string) {
    setForm((prev) => ({
      ...prev,
      documents_required_process: prev.documents_required_process.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleDocumentsRequiredProcessAdd() {
    setForm((prev) => ({
      ...prev,
      documents_required_process: [...prev.documents_required_process, { title: "", description: "" }],
    }));
  }
  function handleDocumentsRequiredProcessRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      documents_required_process: prev.documents_required_process.length === 1
        ? [{ title: "", description: "" }]
        : prev.documents_required_process.filter((_, i) => i !== idx),
    }));
  }

  // Sync form.rejection_reasons <-> local rejectionReasons state
  useEffect(() => {
    if (Array.isArray(form.rejection_reasons) && form.rejection_reasons.length > 0) {
      setRejectionReasons(form.rejection_reasons);
    }
  }, [form.rejection_reasons]);

  function handleRejectionReasonsChange(idx: number, field: "icon" | "title" | "description", value: string) {
    setRejectionReasons(prev =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
    setForm(prev => ({
      ...prev,
      rejection_reasons: rejectionReasons.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleRejectionReasonsAdd() {
    setRejectionReasons(prev => [...prev, { icon: "", title: "", description: "" }]);
    setForm(prev => ({
      ...prev,
      rejection_reasons: [...rejectionReasons, { icon: "", title: "", description: "" }],
    }));
  }
  function handleRejectionReasonsRemove(idx: number) {
    const updated = rejectionReasons.length === 1
      ? [{ icon: "", title: "", description: "" }]
      : rejectionReasons.filter((_, i) => i !== idx);
    setRejectionReasons(updated);
    setForm(prev => ({
      ...prev,
      rejection_reasons: updated,
    }));
  }

  // Sync form.why <-> local whyReasons state
  useEffect(() => {
    if (Array.isArray(form.why) && form.why.length > 0) {
      setWhyReasons(form.why);
    }
  }, [form.why]);

  function handleWhyReasonsChange(idx: number, field: "icon" | "title" | "description", value: string) {
    setWhyReasons(prev =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
    setForm(prev => ({
      ...prev,
      why: whyReasons.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleWhyReasonsAdd() {
    setWhyReasons(prev => [...prev, { icon: "", title: "", description: "" }]);
    setForm(prev => ({
      ...prev,
      why: [...whyReasons, { icon: "", title: "", description: "" }],
    }));
  }
  function handleWhyReasonsRemove(idx: number) {
    const updated = whyReasons.length === 1
      ? [{ icon: "", title: "", description: "" }]
      : whyReasons.filter((_, i) => i !== idx);
    setWhyReasons(updated);
    setForm(prev => ({
      ...prev,
      why: updated,
    }));
  }

   return (
    <div className=" p-6 bg-white rounded-md shadow">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit countries" : "New countries"}
      </h1>
      {/* Stepper UI */}
      <div className="flex mb-6 gap-2">
        {steps.map((s, idx) => (
          <div
            key={s.label}
            className={`p-2 rounded-lg text-sm font-medium cursor-pointer flex items-center justify-center
              ${step === idx ? "bg-brand text-white" : "bg-gray-200 text-brand"}
            `}
            onClick={() => setStep(idx)}
          >
            {idx + 1}. {s.label}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {/* Step 0: Basic Info */}
        {step === 0 && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Name:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter countries name"
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </label>
          </div>
        )}
        {/* Step 1: Images */}
        {step === 1 && (
          <div className="mb-4">
            <CountryImages
              icon={form.icon}
              image={form.image}
              imageIconPreview={imageIconPreview}
              imagePreview={imagePreview}
              setIcon={icon => setForm(prev => ({ ...prev, icon }))}
              setImage={image => setForm(prev => ({ ...prev, image }))}
              setImageIconPreview={setImageIconPreview}
              setImagePreview={setImagePreview}
              uploading={uploading}
              setUploading={setUploading}
            />
          </div>
        )}
        {/* Step 2: Video */}
        {step === 2 && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Upload Video:
              <VideoUpload
                value={form.video}
                preview={videoPreview}
                onChange={(videoUrl, previewUrl) => {
                  setForm(prev => ({ ...prev, video: videoUrl }));
                  setVideoPreview(previewUrl || videoUrl);
                }}
                uploading={uploading}
                setUploading={setUploading}
                type="countries"
              />
            </label>
            <span className="text-xs text-gray-500">Upload a video file (mp4, webm, etc).</span>
          </div>
        )}
        {/* Step 3: Details & Description */}
        {step === 3 && (
          <CountryDetailDescription
            detail={form.detail}
            description={form.description}
            onDetailChange={handleChange}
            onDescriptionChange={value => setForm(prev => ({ ...prev, description: value }))}
          />
        )}
        {/* Step 4: Amounts & Fees */}
        {step === 4 && (
          <AmountsAndFeesFields
            form={form}
            onChange={handleChange}
            uploading={uploading}
            setUploading={setUploading}
          />
          {/* Chances of Approval Fields */}
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Chances of Approval For This:
              <input
                type="text"
                name="chances_of_approval_for_this"
                value={form.chances_of_approval_for_this}
                onChange={handleChange}
                placeholder="Enter chances of approval for this"
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Chances of Approval For Other:
              <input
                type="text"
                name="chances_of_approval_for_other"
                value={form.chances_of_approval_for_other}
                onChange={handleChange}
                placeholder="Enter chances of approval for other"
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </label>
          </div>
        )}
        {/* Step 5: Country Selection */}
        {step === 5 && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Country Name:
              <select
                name="countries"
                multiple
                value={form.countries}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                size={5}
              >
                {countryOptions.map((country) => (
                  <option key={country.id} value={country.id}>{country.name}</option>
                ))}
              </select>
              <span className="text-xs text-gray-500">Hold Ctrl (Windows) or Command (Mac) to select multiple.</span>
            </label>
          </div>
        )}
        {/* Step 6: Transit Timeline */}
        {step === 6 && (
          <div className="mb-4">
             <TransitTimeline
              transitTimeline={form.transit_timeline}
              onChange={handleTransitTimelineChange}
              onAdd={handleTransitTimelineAdd}
              onRemove={handleTransitTimelineRemove}
              uploading={uploading}
              setUploading={setUploading}
            />
          </div>
        )}
        {/* Step 7: Required Documents */}
        {step === 7 && (
          <div className="mb-4">
             <RequiredDocuments
              requiredDocuments={form.required_documents}
              onChange={handleRequiredDocChange}
              onAdd={handleRequiredDocAdd}
              onRemove={handleRequiredDocRemove}
              uploading={uploading}
              setUploading={setUploading}
            />
          </div>
        )}
        {/* Step 8: Visa Information */}
        {step === 8 && (
          <div className="mb-4">
             <VisaInformation
              visaInformation={form.visa_information}
              onChange={handleVisaInfoChange}
              onAdd={handleVisaInfoAdd}
              onRemove={handleVisaInfoRemove}
            />
          </div>
        )}
        {/* Step 9: Continent */}
        {step === 9 && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
               <ContinentSelect
                value={form.continent}
                onChange={handleChange}
                filters={filters}
              />
            </label>
          </div>
        )}
        {/* Step 10: Documents Required & Process */}
        {step === 10 && (
          <div className="mb-4">
             <DocumentsRequiredProcess
              documentsRequiredProcess={form.documents_required_process}
              onChange={handleDocumentsRequiredProcessChange}
              onAdd={handleDocumentsRequiredProcessAdd}
              onRemove={handleDocumentsRequiredProcessRemove}
            />
          </div>
        )}
        {/* Step 11: What You Get Images */}
        {step === 11 && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Upload What You Get Images:
              <ImageUpload
                value={form.what_you_get}
                preview={whatYouGetPreviews}
                multiple
                onChange={(imgUrls, previewUrls) => {
                  setForm(prev => ({
                    ...prev,
                    what_you_get: Array.isArray(imgUrls) ? imgUrls : [imgUrls],
                  }));
                  setWhatYouGetPreviews(Array.isArray(previewUrls) ? previewUrls : [previewUrls]);
                }}
                uploading={uploading}
                setUploading={setUploading}
                type="countries"
              />
            </label>
            <span className="text-xs text-gray-500">You can upload multiple images.</span>
          </div>
        )}
        {/* Step 12: Partners We Work With Images */}
        {step === 12 && (
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Upload Partners We Work With Images:
              <ImageUpload
                value={form.partners_we_work_with}
                preview={partnersWeWorkWithPreviews}
                multiple
                onChange={(imgUrls, previewUrls) => {
                  setForm(prev => ({
                    ...prev,
                    partners_we_work_with: Array.isArray(imgUrls) ? imgUrls : [imgUrls],
                  }));
                  setPartnersWeWorkWithPreviews(Array.isArray(previewUrls) ? previewUrls : [previewUrls]);
                }}
                uploading={uploading}
                setUploading={setUploading}
                type="partners_we_work_with"
              />
            </label>
            <span className="text-xs text-gray-500">You can upload multiple images.</span>
          </div>
        )}
        {/* Step 13: Rejection Reasons */}
        {step === 13 && (
          <div className="mb-4">
            <RejectionReasons
              rejectionReasons={rejectionReasons}
              onChange={handleRejectionReasonsChange}
              onAdd={handleRejectionReasonsAdd}
              onRemove={handleRejectionReasonsRemove}
              uploading={uploading}
              setUploading={setUploading}
            />
          </div>
        )}
        {/* Step 14: Why Reasons */}
        {step === 14 && (
          <div className="mb-4">
            <WhyReasons
              whyReasons={whyReasons}
              onChange={handleWhyReasonsChange}
              onAdd={handleWhyReasonsAdd}
              onRemove={handleWhyReasonsRemove}
              uploading={uploading}
              setUploading={setUploading}
            />
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
            onClick={() => router.push("/countries")}
            className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
            disabled={isLoading}
          >
            Cancel
          </button>
          {step > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
              disabled={isLoading}
            >
              Previous
            </button>
          )}
          {step < steps.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark"
              disabled={isLoading}
            >
              Next
            </button>
          )}
          {step === steps.length - 1 && (
            <button
              type="submit"
              className="px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark"
              disabled={isLoading}
            >
              {isLoading ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update" : "Create")}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}