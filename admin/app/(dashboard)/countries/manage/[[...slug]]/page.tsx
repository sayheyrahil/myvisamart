"use client"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import ImageUpload from "@/components/common/image-upload";
import { useRouter } from "next/navigation";

import Editor from "@/components/common/Editor";
type countriesForm = {
  name: string
  description: string
  image: string
  country: string
  icon: string
  dail_code: string
  detail: string
  visa_process_time: string
  amount: string
  pay_later_amount: string
  is_top_destination: boolean
  is_popular: boolean
  countries: string[]
  transit_timeline: { icon: string; title: string; description: string }[]
  required_documents: { title: string; description: string; icon: string }[]
  visa_information: { key: string; value: string }[]
  continent: string
  visa_fee_now?: string;
  service_fee_now?: string;
  visa_fee_later?: string;
  service_fee_later?: string;
}

const pageTitleName = "countries";
export default function Page({ params: paramsPromise }: { params: any }) {
  const params = React.use(paramsPromise) as { slug?: string[] };
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [form, setForm] = useState<countriesForm>({
    name: "",
    description: "",
    image: "",
    icon: "",
    dail_code: "",
    detail: "",
    visa_process_time: "",
    amount: "",
    pay_later_amount: "",
    is_top_destination: false,
    is_popular: false,
    countries: [],
    transit_timeline: [{ icon: "", title: "", description: "" }],
    required_documents: [{ title: "", description: "", icon: "" }],
    visa_information: [{ key: "", value: "" }],
    continent: "",
    visa_fee_now: "",
    service_fee_now: "",
    visa_fee_later: "",
    service_fee_later: "",
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const [imageIconPreview, setImageIconPreview] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [id, setId] = useState<number | null>(null)
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const filters = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia",
  ];
 
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

  const onSubmit = async (data: countriesForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
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
    await axiosInstance.post(ENDPOINTS.countries_store, submitData)
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

  function validate(): string {
    if (form.name.length < 2) return "Name must be at least 2 characters."
    if (form.name.length > 100) return "Name cannot exceed 100 characters."
    if (form.description.length < 10) return "Description must be at least 10 characters."
    if (!form.icon) return "Icon is required."
    if (!form.dail_code) return "Dail code is required."
    if (!form.detail) return "Detail is required."
    if (!form.visa_process_time) return "Visa process time is required."
    if (!form.amount) return "Amount is required."
    if (!form.pay_later_amount) return "Pay later amount is required."
    if (!form.continent) return "Continent is required."
    // if (!form.image) return "Image is required."
    // Optionally validate countries selection
    // if (!form.countries || form.countries.length === 0) return "At least one country must be selected."
    return ""
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSuccess("")
    const err = validate()
    if (err) {
      setError(err)
      return
    }
    onSubmit(form)
  }

  function onReset() {
    setForm({
      name: "",
      description: "",
      image: "",
      icon: "",
      dail_code: "",
      detail: "",
      visa_process_time: "",
      amount: "",
      pay_later_amount: "",
      is_top_destination: false,
      is_popular: false,
      countries: [],
      transit_timeline: [{ icon: "", title: "", description: "" }],
      required_documents: [{ title: "", description: "", icon: "" }],
      visa_information: [{ key: "", value: "" }],
      continent: "",
      visa_fee_now: "",
      service_fee_now: "",
      visa_fee_later: "",
      service_fee_later: "",
    })
    setImagePreview("")
    setError("")
    setSuccess("")
    setIsEdit(false)
    setId(null)
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

   return (
    <div className=" p-6 bg-white rounded-md shadow">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit countries" : "New countries"}
      </h1>
      <form onSubmit={handleSubmit}>
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

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Image:
            <ImageUpload
              value={form.image}
              preview={imagePreview}
              onChange={(imgUrl, previewUrl) => {
                // Always set both image and preview, even on first upload
                const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
                const preview = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
                setForm((prev) => ({ ...prev, image }));
                setImagePreview(preview && preview.length > 0 ? preview : image); // fallback to image if preview is missing or empty
              }}
              uploading={uploading}
              setUploading={setUploading}
              type="countries"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Description:

            <Editor 
              value={form.description}
              onChange={(value: string) =>
                setForm((prev) => ({ ...prev, description: value }))
              }
            />
         
          </label>
        </div>
        
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Icon:
              <ImageUpload
              value={form.icon}
              preview={imageIconPreview}
              onChange={(imgUrl, previewUrl) => {
                // Always set both image and preview, even on first upload
                const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
                const preview = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
                setForm((prev) => ({ ...prev, icon: image }));
                setImageIconPreview(preview && preview.length > 0 ? preview : image); // fallback to image if preview is missing or empty
              }}
              uploading={uploading}
              setUploading={setUploading}
              type="countries_icon"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Dail Code:
            <input
              type="text"
              name="dail_code"
              value={form.dail_code}
              onChange={handleChange}
              placeholder="Enter dail code"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Detail:
            <textarea
              name="detail"
              value={form.detail}
              onChange={handleChange}
              placeholder="Enter detail"
              rows={3}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Visa Process Time:
            <input
              type="text"
              name="visa_process_time"
              value={form.visa_process_time}
              onChange={handleChange}
              placeholder="Enter visa process time"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Amount:
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Pay Later Amount:
            <input
              type="number"
              name="pay_later_amount"
              value={form.pay_later_amount}
              onChange={handleChange}
              placeholder="Enter pay later amount"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        {/* Visa Fee & Service Fee Fields */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Visa Fee (Pay Now):
            <input
              type="number"
              name="visa_fee_now"
              value={form.visa_fee_now}
              onChange={handleChange}
              placeholder="Enter visa fee for pay now"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Service Fee (Pay Now):
            <input
              type="number"
              name="service_fee_now"
              value={form.service_fee_now}
              onChange={handleChange}
              placeholder="Enter service fee for pay now"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Visa Fee (Pay Later):
            <input
              type="number"
              name="visa_fee_later"
              value={form.visa_fee_later}
              onChange={handleChange}
              placeholder="Enter visa fee for pay later"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Service Fee (Pay Later):
            <input
              type="number"
              name="service_fee_later"
              value={form.service_fee_later}
              onChange={handleChange}
              placeholder="Enter service fee for pay later"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="is_top_destination"
              checked={form.is_top_destination}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-brand"
            />
            <span className="ml-2 font-medium">Is Top Destination</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="is_popular"
              checked={form.is_popular}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-brand"
            />
            <span className="ml-2 font-medium">Is Popular</span>
          </label>
        </div>
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

        {/* Transit Timeline */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Transit Timeline:</label>
          {form.transit_timeline.map((item, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <div className="flex flex-col gap-2 w-full">
                {/* Icon */}
                <ImageUpload
                  value={item.icon}
                  preview={item.icon}
                  onChange={(imgUrl, previewUrl) => {
                    const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
                    handleTransitTimelineChange(idx, "icon", image);
                  }}
                  uploading={uploading}
                  setUploading={setUploading}
                  type="transit_timeline_icon"
                />
                {/* Title */}
                <input
                  type="text"
                  value={item.title}
                  onChange={e => handleTransitTimelineChange(idx, "title", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Step ${idx + 1} Title`}
                />
                {/* Description */}
                <input
                  type="text"
                  value={item.description}
                  onChange={e => handleTransitTimelineChange(idx, "description", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Step ${idx + 1} Description`}
                />
              </div>
              <button
                type="button"
                onClick={() => handleTransitTimelineRemove(idx)}
                disabled={form.transit_timeline.length === 1}
                className="text-white px-3 py-2 rounded-xl bg-brand"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleTransitTimelineAdd}
            className="text-white px-3 py-2 rounded-xl bg-brand"
          >
            Add Step
          </button>
        </div>
        {/* Required Documents */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Required Documents:</label>
          {form.required_documents.map((item, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <div className="flex flex-col gap-2 w-full">
                {/* Title */}
                <input
                  type="text"
                  value={item.title}
                  onChange={e => handleRequiredDocChange(idx, "title", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Document ${idx + 1} Title`}
                />
                {/* Description */}
                <input
                  type="text"
                  value={item.description}
                  onChange={e => handleRequiredDocChange(idx, "description", e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={`Document ${idx + 1} Description`}
                />
                {/* Icon */}
                <ImageUpload
                  value={item.icon}
                  preview={item.icon}
                  onChange={(imgUrl, previewUrl) => {
                    const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
                    handleRequiredDocChange(idx, "icon", image);
                  }}
                  uploading={uploading}
                  setUploading={setUploading}
                  type="required_document_icon"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRequiredDocRemove(idx)}
                disabled={form.required_documents.length === 1}
                className="text-white px-3 py-2 rounded-xl bg-brand"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleRequiredDocAdd}
            className="text-white px-3 py-2 rounded-xl bg-brand"
          >
            Add Document
          </button>
        </div>
        {/* Visa Information */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Visa Information:</label>
          {form.visa_information.map((item, idx) => (
            <div key={idx} className="flex gap-2 mb-2 items-center">
              <input
                type="text"
                value={item.key}
                onChange={e => handleVisaInfoChange(idx, "key", e.target.value)}
                className="w-1/3 px-3 py-2 border rounded"
                placeholder={`Key ${idx + 1}`}
              />
              <input
                type="text"
                value={item.value}
                onChange={e => handleVisaInfoChange(idx, "value", e.target.value)}
                className="w-2/3 px-3 py-2 border rounded"
                placeholder={`Value ${idx + 1}`}
              />
              <button
                type="button"
                onClick={() => handleVisaInfoRemove(idx)}
                disabled={form.visa_information.length === 1}
                className="text-white px-3 py-2 rounded-xl bg-brand"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleVisaInfoAdd}
            className="text-white px-3 py-2 rounded-xl bg-brand"
          >
            Add Info
          </button>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Continent:
            <select
              name="continent"
              value={form.continent}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Select continent</option>
              {filters.map((continent) => (
                <option key={continent} value={continent}>{continent}</option>
              ))}
            </select>
          </label>
        </div>

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
          <button
            type="submit"
            className="px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark"
            disabled={isLoading}
          >
            {isLoading ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update" : "Create")}
          </button>
        </div>
      </form>
    </div>
  )
}