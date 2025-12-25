"use client"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import ImageUpload from "@/components/common/image-upload";
import { useRouter } from "next/navigation";

type TestimonialsForm = {
  name: string
  description: string
  image: string
  designation: string
  company: string
  company_logo: string
  rating: number
}

const pageTitleName = "Testimonials";
export default function Page({ params: paramsPromise }: { params: any }) {
  const params = React.use(paramsPromise) as { slug?: string[] };
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [form, setForm] = useState<TestimonialsForm>({
    name: "",
    description: "",
    image: "",
    designation: "",
    company: "",
    company_logo: "",
    rating: 5,
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const [companyLogoPreview, setCompanyLogoPreview] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [id, setId] = useState<number | null>(null)
 
  // Fetch data for edit
  const fetchData = useCallback(
    (id: number) => {
     const idpass = { id: id };
      axiosInstance.post(ENDPOINTS.testimonials_edit , idpass)
        .then((response: any) => {
          let data = response.data.data;
          setForm({
            name: data.name || "",
            description: data.description || "",
            image: data.image || "",
            designation: data.designation || "",
            company: data.company || "",
            company_logo: data.company_logo || "",
            rating: data.rating || 5,
          });
          setImagePreview(data.image || "");
          setCompanyLogoPreview(data.company_logo || "");
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

  const onSubmit = async (data: TestimonialsForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
    if (id) {
      submitData["id"] = id;
    }
    await axiosInstance.post(ENDPOINTS.testimonials_store, submitData)
      .then(async (response: any) => {
        setIsLoading(false);
        handleAxiosSuccess(response);
        setTimeout(() => {
          router.push("/testimonials");
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
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }))
  }

  function validate(): string {
    if (form.name.length < 2) return "Name must be at least 2 characters."
    if (form.name.length > 100) return "Name cannot exceed 100 characters."
    if (form.description.length < 10) return "Description must be at least 10 characters."
    if (form.designation.length < 2) return "Designation is required."
    if (form.company.length < 2) return "Company is required."
    if (!form.image) return "Image is required."
    if (!form.company_logo) return "Company logo is required."
    if (form.rating < 1 || form.rating > 5) return "Rating must be between 1 and 5."
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
      designation: "",
      company: "",
      company_logo: "",
      rating: 5,
    })
    setImagePreview("")
    setCompanyLogoPreview("")
    setError("")
    setSuccess("")
    setIsEdit(false)
    setId(null)
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit Testimonials" : "New Testimonials"}
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
              placeholder="Enter name"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Designation:
            <input
              type="text"
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="Enter designation"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Company:
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Company Logo:
            <ImageUpload
              value={form.company_logo}
              preview={companyLogoPreview}
              onChange={(imgUrl, previewUrl) => {
                const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
                const preview = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
                setForm((prev) => ({ ...prev, company_logo: image }));
                setCompanyLogoPreview(preview);
              }}
              uploading={uploading}
              setUploading={setUploading}
              type="testimonial/company_logo"
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
                const image = Array.isArray(imgUrl) ? imgUrl[0] : imgUrl;
                const preview = Array.isArray(previewUrl) ? previewUrl[0] : previewUrl;
                setForm((prev) => ({ ...prev, image }));
                setImagePreview(preview);
              }}
              uploading={uploading}
              setUploading={setUploading}
              type="testimonial/image"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Description:
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows={4}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Rating:
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            >
              {[1,2,3,4,5].map(r => (
                <option key={r} value={r}>{r}</option>
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
            onClick={() => router.push("/category")}
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