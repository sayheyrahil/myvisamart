"use client";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import { useRouter } from "next/navigation";

import ImageUpload from "@/components/common/image-upload";
import VideoUpload from "@/components/common/video-upload"; // <-- Add this import
import VisaApprovalComparisonForm from "./countries/VisaApprovalComparisonForm";

import ContinentSelect from "./countries/ContinentSelect";
import DocumentsRequiredProcess from "./countries/DocumentsRequiredProcess";
import VisaInformation from "./countries/VisaInformation";
import RequiredDocuments from "./countries/RequiredDocuments";
import TransitTimeline from "./countries/TransitTimeline";
import CountryImages from "./countries/CountryImages";
import CountryDetailDescription from "./countries/CountryDetailDescription";

import AmountsAndFeesFields from "./countries/AmountsAndFeesFields";
import RejectionReasons from "./countries/RejectionReasons";
import WhyReasons from "./countries/WhyReasons";
import FieldInput from "@/components/common/FieldInput";
import Why from "./countries/Why";
import CountrySelectionSection from "./countries/CountrySelectionSection";

type countriesForm = {
  name: string;
  description: string;
  image: string;
  flag: string;
  avatar: string;
  round_image: string;
  video: string;
  dail_code: string;
  detail: string;
  visa_process_time: string;
  is_active: boolean;
  is_deleted: boolean;
  createdAt?: string;
  updatedAt?: string;
  slug: string;
  is_top_destination: boolean;
  is_popular: boolean;
  countries: string[];
  subtitle: string;
  rating: number;
  continent: string;
  required_documents: { title: string; description: string; icon: string }[];
  visa_information: { key: string; value: string }[];
  transit_timeline: { icon: string; title: string; description: string }[];
  visa_fee_now?: string;
  service_fee_now?: string;
  visa_fee_later?: string;
  service_fee_later?: string;
  documents_required_process: { title: string; description: string }[];
  partners_we_work_with: any[];
  rejection_reasons: any[];
  chances_of_approval_for_this: string;
  chances_of_approval_for_other: string;
  how_we_reviewed_this_page_sources: string;
  how_we_reviewed_this_page_history: string;
  get_a_guaranteed_visa_on: string;
  check_appointment_availability: string;
  statistics_on_visa_processing_time: string;
  statistics_on_visa_approval_rating: string;
  visa_approval_comparison: {
    atlys_percentage: string;
    overall_percentage: string;
    rows: any[];
  };
  what_you_get: any[];
  why: { icon: string; title: string; description: string }[];
  
};

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
  { label: "Why This" },
];

const pageTitleName = "countries";
export default function Page({ params: paramsPromise }: { params: any }) {
  const params = React.use(paramsPromise) as { slug?: string[] };
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageFlagPreview, setImageFlagPreview] = useState<string>("");
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [roundImagePreview, setRoundImagePreview] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [id, setId] = useState<number | null>(null);
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0);
  const [whatYouGetPreviews, setWhatYouGetPreviews] = useState<string[]>([]); // For image previews
  const [videoPreview, setVideoPreview] = useState<string>("");
  const [partnersWeWorkWithPreviews, setPartnersWeWorkWithPreviews] = useState<
    string[]
  >([]); // For partners images
  const [rejectionReasons, setRejectionReasons] = useState([
    { icon: "", title: "", description: "" },
  ]);
  const [whyReasons, setWhyReasons] = useState([
    { icon: "", title: "", description: "" },
  ]);
  const [why, setWhy] = useState([{ icon: "", title: "", description: "" }]);

  const filters = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia",
  ];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [form, setForm] = useState<countriesForm>({
    name: "",
    description: "",
    image: "",
    round_image: "",
    flag: "",
    avatar: "",
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
    why: [],
  });

  // Fetch data for edit
  const fetchData = useCallback((id: number) => {
    const idpass = { id: id };
    axiosInstance
      .post(ENDPOINTS.countries_edit, idpass)
      .then((response: any) => {
        let data = response.data.data;
        setForm({
          name: data.name || "",
          description: data.description || "",
          image: data.image || "",
          flag: data.flag || "",
          avatar: data.avatar || "",
          round_image: data.round_image || "",
          video: data.video || "",
          dail_code: data.dail_code || "",
          detail: data.detail || "",
          visa_process_time: data.visa_process_time || "",

          is_top_destination: !!data.is_top_destination,
          is_popular: !!data.is_popular,
          countries: data.countries || [],
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
          service_fee_now: data.service_fee_now
            ? String(data.service_fee_now)
            : "",
          visa_fee_later: data.visa_fee_later
            ? String(data.visa_fee_later)
            : "",
          service_fee_later: data.service_fee_later
            ? String(data.service_fee_later)
            : "",
          documents_required_process: Array.isArray(
            data.documents_required_process
          )
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
          partners_we_work_with: Array.isArray(data.partners_we_work_with)
            ? data.partners_we_work_with
            : [],
          rejection_reasons: Array.isArray(data.rejection_reasons)
            ? data.rejection_reasons
            : [],
          chances_of_approval_for_this: data.chances_of_approval_for_this
            ? String(data.chances_of_approval_for_this)
            : "",
          chances_of_approval_for_other: data.chances_of_approval_for_other
            ? String(data.chances_of_approval_for_other)
            : "",
          how_we_reviewed_this_page_sources:
            data.how_we_reviewed_this_page_sources || "",
          how_we_reviewed_this_page_history:
            data.how_we_reviewed_this_page_history || "",
          get_a_guaranteed_visa_on: data.get_a_guaranteed_visa_on || "",
          check_appointment_availability:
            data.check_appointment_availability || "",
          statistics_on_visa_processing_time:
            data.statistics_on_visa_processing_time || "",
          statistics_on_visa_approval_rating:
            data.statistics_on_visa_approval_rating || "",
          visa_approval_comparison: data.visa_approval_comparison || {
            atlys_percentage: "",
            overall_percentage: "",
            rows: [],
          },
          what_you_get: Array.isArray(data.what_you_get)
            ? data.what_you_get
            : [],

          why: Array.isArray(data.why)
            ? data.why.map((item: any) => ({
                icon: item.icon || "",
                title: item.title || "",
                description: item.description || "",
              }))
            : [{ icon: "", title: "", description: "" }],
        });
        setImagePreview(data.image || "");
        setIsEdit(true);
        setPartnersWeWorkWithPreviews(
          Array.isArray(data.partners_we_work_with)
            ? data.partners_we_work_with
            : [data.partners_we_work_with]
        );
        setWhatYouGetPreviews(
          Array.isArray(data.what_you_get)
            ? data.what_you_get
            : [data.what_you_get]
        );

        setWhy(Array.isArray(data.why) ? data.why : [{ icon: "", title: "", description: "" }]);
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

  // Fetch country names for select options
  useEffect(() => {
    axiosInstance
      .post(ENDPOINTS.country_names_active)
      .then((response: any) => {
        setCountryOptions(response.data.data || []);
      })
      .catch(() => {
        setCountryOptions([]);
      });
  }, []);

  // Clean up previews on unmount
  useEffect(() => {
    return () => {
      whatYouGetPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [whatYouGetPreviews]);

  const onSubmit = async (data: countriesForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
    submitData.rating = Number(data.rating) || 0;
    submitData.visa_fee_now = Number(data.visa_fee_now) || 0;
    submitData.service_fee_now = Number(data.service_fee_now) || 0;
    submitData.visa_fee_later = Number(data.visa_fee_later) || 0;
    submitData.service_fee_later = Number(data.service_fee_later) || 0;
    submitData.chances_of_approval_for_this =
      Number(data.chances_of_approval_for_this) || 0;
    submitData.chances_of_approval_for_other =
      Number(data.chances_of_approval_for_other) || 0;
    if (id) {
      submitData["id"] = id;
    }
    // Convert amount fields to number

    submitData.visa_fee_now = Number(data.visa_fee_now) || 0;
    submitData.service_fee_now = Number(data.service_fee_now) || 0;
    submitData.visa_fee_later = Number(data.visa_fee_later) || 0;
    submitData.service_fee_later = Number(data.service_fee_later) || 0;
    submitData.is_top_destination = !!data.is_top_destination;
    submitData.is_popular = !!data.is_popular;
    submitData.countries = JSON.stringify(data.countries || []);
    submitData.transit_timeline = data.transit_timeline.map((item) => ({
      icon: item.icon,
      title: item.title,
      description: item.description,
    }));
    if (
      Array.isArray(submitData.transit_timeline) &&
      submitData.transit_timeline.length === 1 &&
      Object.values(submitData.transit_timeline[0]).every((v) => v === "")
    ) {
      delete submitData.transit_timeline;
    }

    submitData.required_documents = data.required_documents.map((item) => ({
      title: item.title,
      description: item.description,
      icon: item.icon,
    }));
    if (
      Array.isArray(submitData.required_documents) &&
      submitData.required_documents.length === 1 &&
      Object.values(submitData.required_documents[0]).every((v) => v === "")
    ) {
      delete submitData.required_documents;
    }

    submitData.visa_information = data.visa_information.map((item) => ({
      key: item.key,
      value: item.value,
    }));
    if (
      Array.isArray(submitData.visa_information) &&
      submitData.visa_information.length === 1 &&
      Object.values(submitData.visa_information[0]).every((v) => v === "")
    ) {
      delete submitData.visa_information;
    }

    submitData.documents_required_process = data.documents_required_process.map(
      (item) => ({
        title: item.title,
        description: item.description,
      })
    );
    if (
      Array.isArray(submitData.documents_required_process) &&
      submitData.documents_required_process.length === 1 &&
      Object.values(submitData.documents_required_process[0]).every(
        (v) => v === ""
      )
    ) {
      delete submitData.documents_required_process;
    }
    // Handle what_you_get images (convert to FormData if needed)
    // Remove rejection_reasons if only one empty object
    if (
      Array.isArray(submitData.rejection_reasons) &&
      submitData.rejection_reasons.length === 1 &&
      Object.values(submitData.rejection_reasons[0]).every((v) => v === "")
    ) {
      delete submitData.rejection_reasons;
    }
    if (
      Array.isArray(submitData.why) &&
      submitData.why.length === 1 &&
      Object.values(submitData.why[0]).every((v) => v === "")
    ) {
      delete submitData.why;
    }

    // Remove why if only one empty object
    if (
      Array.isArray(submitData.why) &&
      submitData.why.length === 1 &&
      Object.values(submitData.why[0]).every((v) => v === "")
    ) {
      delete submitData.why;
    }

    let formDataToSend: any = submitData;
    if (
      submitData.what_you_get &&
      Array.isArray(submitData.what_you_get) &&
      submitData.what_you_get[0] instanceof File
    ) {
      // Use FormData for file upload
      const fd = new FormData();
      Object.entries(submitData).forEach(([key, value]) => {
        // Remove empty rejection_reasons/why from FormData as well
        if (
          (key === "rejection_reasons" || key === "why") &&
          Array.isArray(value) &&
          value.length === 1 &&
          Object.values(value[0]).every((v) => v === "")
        ) {
          return; // skip
        }
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

    await axiosInstance
      .post(ENDPOINTS.countries_store, formDataToSend, {
        headers:
          formDataToSend instanceof FormData
            ? { "Content-Type": "multipart/form-data" }
            : undefined,
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if ((e.target as HTMLSelectElement).multiple) {
      const options = (e.target as HTMLSelectElement).options;
      const selected: string[] = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) selected.push(options[i].value);
      }
      setForm((prev) => ({
        ...prev,
        [name]: selected,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  // Replace errors state with array of objects: { key: string, message: string }
  type FieldError = { key: string; message: string };
  const [errors, setErrors] = useState<FieldError[]>([]);

  // Step validation
  function validateStep(currentStep: number): FieldError[] {
    const errs: FieldError[] = [];
    switch (currentStep) {
      case 0:
        if (form.name.length < 2)
          errs.push({
            key: "name",
            message: "Name must be at least 2 characters.",
          });
        if (form.name.length > 100)
          errs.push({
            key: "name",
            message: "Name cannot exceed 100 characters.",
          });

      case 1:
        if (!form.image)
          errs.push({ key: "image", message: "Image is required." });

      case 4:
        if (!form.get_a_guaranteed_visa_on)
          errs.push({
            key: "get_a_guaranteed_visa_on",
            message: "Get a Guaranteed Visa On is required.",
          });
        if (!form.visa_fee_now || isNaN(Number(form.visa_fee_now))) {
          errs.push({
            key: "visa_fee_now",
            message: "Visa Fee Now is required and must be a number.",
          });
        }
        if (!form.service_fee_now || isNaN(Number(form.service_fee_now))) {
          errs.push({
            key: "service_fee_now",
            message: "Service Fee Now is required and must be a number.",
          });
        }
        if (!form.visa_fee_later || isNaN(Number(form.visa_fee_later))) {
          errs.push({
            key: "visa_fee_later",
            message: "Visa Fee Later is required and must be a number.",
          });
        }
        if (!form.service_fee_later || isNaN(Number(form.service_fee_later))) {
          errs.push({
            key: "service_fee_later",
            message: "Service Fee Later is required and must be a number.",
          });
        }

      default:
        break;
    }
    return errs;
  }

  const handleNext = () => {
    setErrors([]);
    const errs = validateStep(step);
    if (errs.length > 0) {
      setErrors(errs);
      // return; // <-- prevents going to next step if errors exist
    }
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setErrors([]);
    setStep((prev) => Math.max(prev - 1, 0));
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);
    setSuccess("");
    // Validate all steps before submit
    for (let i = 0; i < steps.length; i++) {
      const errs = validateStep(i);
      if (errs.length > 0) {
        setErrors(errs);
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
      flag: "",
      avatar: "",
      round_image: "",
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
      why: [{ icon: "", title: "", description: "" }], // <-- Add this line
    });
    setImagePreview("");
    setError("");
    setSuccess("");
    setIsEdit(false);
    setId(null);
    setStep(0);
    setWhatYouGetPreviews([]);
  }

  function handleVisaInfoChange(
    idx: number,
    field: "key" | "value",
    value: string
  ) {
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
      visa_information:
        prev.visa_information.length === 1
          ? [{ key: "", value: "" }]
          : prev.visa_information.filter((_, i) => i !== idx),
    }));
  }
  function handleRequiredDocChange(
    idx: number,
    field: "title" | "description" | "icon",
    value: string
  ) {
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
      required_documents: [
        ...prev.required_documents,
        { title: "", description: "", icon: "" },
      ],
    }));
  }
  function handleRequiredDocRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      required_documents:
        prev.required_documents.length === 1
          ? [{ title: "", description: "", icon: "" }]
          : prev.required_documents.filter((_, i) => i !== idx),
    }));
  }
  function handleTransitTimelineChange(
    idx: number,
    field: "icon" | "title" | "description",
    value: string
  ) {
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
      transit_timeline: [
        ...prev.transit_timeline,
        { icon: "", title: "", description: "" },
      ],
    }));
  }
  function handleTransitTimelineRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      transit_timeline:
        prev.transit_timeline.length === 1
          ? [{ icon: "", title: "", description: "" }]
          : prev.transit_timeline.filter((_, i) => i !== idx),
    }));
  }

  // Handler for Documents Required & Process
  function handleDocumentsRequiredProcessChange(
    idx: number,
    field: "title" | "description",
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      documents_required_process: prev.documents_required_process.map(
        (item, i) => (i === idx ? { ...item, [field]: value } : item)
      ),
    }));
  }
  function handleDocumentsRequiredProcessAdd() {
    setForm((prev) => ({
      ...prev,
      documents_required_process: [
        ...prev.documents_required_process,
        { title: "", description: "" },
      ],
    }));
  }
  function handleDocumentsRequiredProcessRemove(idx: number) {
    setForm((prev) => ({
      ...prev,
      documents_required_process:
        prev.documents_required_process.length === 1
          ? [{ title: "", description: "" }]
          : prev.documents_required_process.filter((_, i) => i !== idx),
    }));
  }

  // Sync form.rejection_reasons <-> local rejectionReasons state
  useEffect(() => {
    if (
      Array.isArray(form.rejection_reasons) &&
      form.rejection_reasons.length > 0
    ) {
      setRejectionReasons(form.rejection_reasons);
    }
  }, [form.rejection_reasons]);

  function handleRejectionReasonsChange(
    idx: number,
    field: "icon" | "title" | "description",
    value: string
  ) {
    setRejectionReasons((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
    setForm((prev) => ({
      ...prev,
      rejection_reasons: rejectionReasons.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleRejectionReasonsAdd() {
    setRejectionReasons((prev) => [
      ...prev,
      { icon: "", title: "", description: "" },
    ]);
    setForm((prev) => ({
      ...prev,
      rejection_reasons: [
        ...rejectionReasons,
        { icon: "", title: "", description: "" },
      ],
    }));
  }
  function handleRejectionReasonsRemove(idx: number) {
    const updated =
      rejectionReasons.length === 1
        ? [{ icon: "", title: "", description: "" }]
        : rejectionReasons.filter((_, i) => i !== idx);
    setRejectionReasons(updated);
    setForm((prev) => ({
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

  function handleWhyReasonsChange(
    idx: number,
    field: "icon" | "title" | "description",
    value: string
  ) {
    setWhyReasons((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
    setForm((prev) => ({
      ...prev,
      why: whyReasons.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleWhyReasonsAdd() {
    setWhyReasons((prev) => [
      ...prev,
      { icon: "", title: "", description: "" },
    ]);
    setForm((prev) => ({
      ...prev,
      why: [...whyReasons, { icon: "", title: "", description: "" }],
    }));
  }
  function handleWhyReasonsRemove(idx: number) {
    const updated =
      whyReasons.length === 1
        ? [{ icon: "", title: "", description: "" }]
        : whyReasons.filter((_, i) => i !== idx);
    setWhyReasons(updated);
    setForm((prev) => ({
      ...prev,
      why: updated,
    }));
  }

  function handleWhyChange(
    idx: number,
    field: "icon" | "title" | "description",
    value: string
  ) {
    setWhy((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
    setForm((prev) => ({
      ...prev,
      why: why.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  }
  function handleWhyAdd() {
    setWhy((prev) => [...prev, { icon: "", title: "", description: "" }]);
    setForm((prev) => ({
      ...prev,
      why: [...why, { icon: "", title: "", description: "" }],
    }));
  }
  function handleWhyRemove(idx: number) {
    const updated =
      why.length === 1
        ? [{ icon: "", title: "", description: "" }]
        : why.filter((_, i) => i !== idx);
    setWhy(updated);
    setForm((prev) => ({
      ...prev,
      why: updated,
    }));
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="p-6 bg-white rounded-md shadow">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit countries" : "New countries"}
      </h1>
      {/* Hamburger for mobile and mid screens */}
      <div className="  mb-2">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-brand border-brand focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            className="h-5 w-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Steps
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Sidebar Drawer for mobile and mid screens */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-30"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-40 flex flex-col p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">Steps</span>
                <button
                  type="button"
                  className="text-gray-600 hover:text-black"
                  onClick={() => setSidebarOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-2 overflow-y-auto">
                {steps.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`p-2 rounded-lg text-sm font-medium cursor-pointer flex items-center
                      ${
                        step === idx
                          ? "bg-brand text-white"
                          : "bg-gray-200 text-brand"
                      }
                      transition-colors duration-150
                      ${step === idx ? "shadow-md" : ""}
                    `}
                    onClick={() => {
                      setStep(idx);
                      setSidebarOpen(false);
                    }}
                  >
                    <span className="font-bold mr-2">{idx + 1}.</span> {s.label}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Main Form Content */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            {/* Step 0: Basic Info */}
            {step === 0 && (
              <FieldInput
                label="Name"
                name="name"
                placeholder="Enter country name"
                value={form.name}
                onChange={handleChange}
                errors={errors
                  .filter((e) => e.key === "name")
                  .map((e) => e.message)}
              />
            )}
            {/* Step 1: Images */}
            {step === 1 && (
              <div className="mb-4">
                <CountryImages
                  flag={form.flag}
                  avatar={form.avatar}
                  image={form.image}
                  imageFlagPreview={imageFlagPreview}
                  avatarPreview={avatarPreview}
                  imagePreview={imagePreview}
                  setFlag={(flag) => setForm((prev) => ({ ...prev, flag }))}
                  setAvatar={(avatar) => setForm((prev) => ({ ...prev, avatar }))}
                  setImage={(image) => setForm((prev) => ({ ...prev, image }))}
                  setImageFlagPreview={setImageFlagPreview}
                  setAvatarPreview={setAvatarPreview}
                  setImagePreview={setImagePreview}
                  uploading={uploading}
                  setUploading={setUploading}
                  errors={errors
                    .filter((e) => e.key === "image")
                    .map((e) => e.message)}


                    roundImage={form.round_image}
                 
                    roundImagePreview={roundImagePreview}
                    setRoundImage={(round_image) => setForm((prev) => ({ ...prev, round_image }))}
                    setRoundImagePreview={setRoundImagePreview}
                />
              </div>
            )}
            {step === 2 && (
              <div className="mb-4">
                <label className="block font-medium mb-1">
                  Upload Video:
                  <VideoUpload
                    value={form.video}
                    preview={videoPreview}
                    onChange={(videoUrl, previewUrl) => {
                      setForm((prev) => ({ ...prev, video: videoUrl }));
                      setVideoPreview(previewUrl || videoUrl);
                    }}
                    uploading={uploading}
                    setUploading={setUploading}
                    type="countries/video"
                  />
                </label>
                <span className="text-xs text-gray-500">
                  Upload a video file (mp4, webm, etc).
                </span>
              </div>
            )}

            {step === 3 && (
              <CountryDetailDescription
                detail={form.detail}
                description={form.description}
                onDetailChange={handleChange}
                onDescriptionChange={(value) =>
                  setForm((prev) => ({ ...prev, description: value }))
                }
              />
            )}

            {step === 4 && (
              <>
                <AmountsAndFeesFields
                  form={form}
                  onChange={handleChange}
                  uploading={uploading}
                  setUploading={setUploading}
                  errors={errors}
                />
                <FieldInput
                  label="Chances of Approval For This"
                  name="chances_of_approval_for_this"
                  placeholder="Enter chances of approval for this"
                  value={form.chances_of_approval_for_this}
                  onChange={handleChange}
                  errors={errors
                    .filter((e) => e.key === "chances_of_approval_for_this")
                    .map((e) => e.message)}
                />
                <FieldInput
                  label="Chances of Approval For Other"
                  name="chances_of_approval_for_other"
                  placeholder="Enter chances of approval for other"
                  value={form.chances_of_approval_for_other}
                  onChange={handleChange}
                  errors={errors
                    .filter((e) => e.key === "chances_of_approval_for_other")
                    .map((e) => e.message)}
                />
                {/* Visa Approval Comparison Form */}
                <div className="mb-4">
                  <VisaApprovalComparisonForm
                    value={form.visa_approval_comparison}
                    onChange={(val) =>
                      setForm((prev: any) => ({
                        ...prev,
                        visa_approval_comparison: val,
                      }))
                    }
                  />
                </div>
              </>
            )}
            {/* Step 5: Country Selection */}
            {step === 5 && (
              <CountrySelectionSection
                countryOptions={countryOptions}
                countries={form.countries}
                onCountriesChange={(selected: string[]) =>
                  setForm((prev) => ({ ...prev, countries: selected }))
                }
                howWeReviewedSources={form.how_we_reviewed_this_page_sources}
                onHowWeReviewedSourcesChange={(value: string) =>
                  setForm((prev) => ({
                    ...prev,
                    how_we_reviewed_this_page_sources: value,
                  }))
                }
                howWeReviewedHistory={form.how_we_reviewed_this_page_history}
                onHowWeReviewedHistoryChange={(value: string) =>
                  setForm((prev) => ({
                    ...prev,
                    how_we_reviewed_this_page_history: value,
                  }))
                }
              />
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
                      setForm((prev) => ({
                        ...prev,
                        what_you_get: Array.isArray(imgUrls)
                          ? imgUrls
                          : [imgUrls],
                      }));
                      setWhatYouGetPreviews(
                        Array.isArray(previewUrls) ? previewUrls : [previewUrls]
                      );
                    }}
                    uploading={uploading}
                    setUploading={setUploading}
                    type="countries"
                  />
                </label>
                <span className="text-xs text-gray-500">
                  You can upload multiple images.
                </span>
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
                      setForm((prev) => ({
                        ...prev,
                        partners_we_work_with: Array.isArray(imgUrls)
                          ? imgUrls
                          : [imgUrls],
                      }));
                      setPartnersWeWorkWithPreviews(
                        Array.isArray(previewUrls) ? previewUrls : [previewUrls]
                      );
                    }}
                    uploading={uploading}
                    setUploading={setUploading}
                    type="partners_we_work_with"
                  />
                </label>
                <span className="text-xs text-gray-500">
                  You can upload multiple images.
                </span>
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
          
            {/* Step 15: Why This */}
            {step === 15 && (
              <div className="mb-4">
                <Why
                  why={why}
                  onChange={handleWhyChange}
                  onAdd={handleWhyAdd}
                  onRemove={handleWhyRemove}
                  uploading={uploading}
                  setUploading={setUploading}
                />
              </div>
            )}

            {errors.length > 0 &&
              ![
                "name",
                "image",
                "get_a_guaranteed_visa_on",
                "visa_fee_now",
                "service_fee_now",
                "visa_fee_later",
                "service_fee_later",
                "chances_of_approval_for_this",
                "chances_of_approval_for_othr",
              ].some((key) => errors.some((e) => e.key === key)) && (
                <div className="text-red-600 mb-4">
                  {errors.map((e, i) => (
                    <div key={i}>{e.message}</div>
                  ))}
                </div>
              )}
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
                  {isLoading
                    ? isEdit
                      ? "Updating..."
                      : "Creating..."
                    : isEdit
                    ? "Update"
                    : "Create"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
