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
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const [imageIconPreview, setImageIconPreview] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [id, setId] = useState<number | null>(null)
 
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

  const onSubmit = async (data: countriesForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
    if (id) {
      submitData["id"] = id;
    }
    // Convert amount fields to number
    submitData.amount = Number(submitData.amount) || 0;
    submitData.pay_later_amount = Number(submitData.pay_later_amount) || 0;
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
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
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
    // if (!form.image) return "Image is required."
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
    })
    setImagePreview("")
    setError("")
    setSuccess("")
    setIsEdit(false)
    setId(null)
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