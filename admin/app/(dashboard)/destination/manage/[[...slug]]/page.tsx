"use client"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import ImageUpload from "@/components/common/image-upload";
import { useRouter } from "next/navigation";

type DestinationForm = {
  name: string
  description: string
  image: string
  area: string
  is_top_destination: boolean
  is_popular: boolean
  amount: string
  later_amount: string
  countries: string[]
}

const pageTitleName = "destination";
export default function Page({ params: paramsPromise }: { params: any }) {
  const params = React.use(paramsPromise) as { slug?: string[] };
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [form, setForm] = useState<DestinationForm>({
    name: "",
    description: "",
    image: "",
    area: "",
    is_top_destination: false,
    is_popular: false,
    amount: "",
    later_amount: "",
    countries: [],
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [id, setId] = useState<number | null>(null)
 
  // Fetch data for edit
  const fetchData = useCallback(
    (id: number) => {
     const idpass = { id: id };
      axiosInstance.post(ENDPOINTS.destination_edit , idpass)
        .then((response: any) => {
          let data = response.data.data;
          setForm({
            name: data.name || "",
            description: data.description || "",
            image: data.image || "",
            area: data.area || "",
            is_top_destination: !!data.is_top_destination,
            is_popular: !!data.is_popular,
            amount: data.amount || "",
            later_amount: data.later_amount || "",
            countries: data.countries || [],
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

  const onSubmit = async (data: DestinationForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
    if (id) {
      submitData["id"] = id;
    }
    await axiosInstance.post(ENDPOINTS.destination_store, submitData)
      .then(async (response: any) => {
        setIsLoading(false);
        handleAxiosSuccess(response);
        setTimeout(() => {
          router.push("/destination");
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
    if (name === "countries" && multiple) {
      const selected: string[] = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value)
      setForm(prev => ({
        ...prev,
        countries: selected,
      }))
    } else {
      setForm(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }
  }

  function validate(): string {
    if (form.name.length < 2) return "Name must be at least 2 characters."
    if (form.name.length > 100) return "Name cannot exceed 100 characters."
    if (form.description.length < 10) return "Description must be at least 10 characters."
    if (!form.area) return "Area is required."
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
      area: "",
      is_top_destination: false,
      is_popular: false,
      amount: "",
      later_amount: "",
      countries: [],
    })
    setImagePreview("")
    setError("")
    setSuccess("")
    setIsEdit(false)
    setId(null)
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit Destination" : "New Destination"}
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
              placeholder="Enter Destination name"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
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
            Area:
            <select
              name="area"
              value={form.area}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            >
              <option value="">Select Area</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="America">America</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
            </select>
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
            Amount:
            <input
              type="text"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Later Amount:
            <input
              type="text"
              name="later_amount"
              value={form.later_amount}
              onChange={handleChange}
              placeholder="Enter later amount"
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
            />
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
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-brand"
              size={5}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Singapore">Singapore</option>
              <option value="Japan">Japan</option>
              <option value="South Africa">South Africa</option>
              {/* Add more countries as needed */}
            </select>
            <span className="text-xs text-gray-500">Hold Ctrl (Windows) or Command (Mac) to select multiple.</span>
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
            onClick={() => router.push("/destination")}
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