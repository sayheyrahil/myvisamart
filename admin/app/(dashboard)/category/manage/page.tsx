"use client"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common";
import { ENDPOINTS } from "@/lib/constants";
import ImageUpload from "@/components/common/image-upload";

type CategoryForm = {
  name: string
  description: string
  image: string
}

export default function Page({ params }: { params?: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [form, setForm] = useState<CategoryForm>({
    name: "",
    description: "",
    image: "",
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")
  const [id, setId] = useState<number | null>(null)
  const [pageTitleName, setPageTitleName] = useState<string>("category")

  // Fetch data for edit
  const fetchData = useCallback(
    (id: number) => {
      let idpass = `?id=${id}`;
      axiosInstance.get(ENDPOINTS.category_edit + idpass)
        .then((response: any) => {
          let data = response.data.data;
          setForm({
            name: data.name || "",
            description: data.description || "",
            image: data.image || "",
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
    let editId: number | null = null;
    if (typeof window !== "undefined") {
      // Try to get id from query string (?id=...)
      const urlParams = new URLSearchParams(window.location.search);
      const idParam = urlParams.get("id");
      if (idParam && !isNaN(Number(idParam))) {
        editId = Number(idParam);
        setId(editId);
        fetchData(editId);
      }
    }
    setPageTitleName("category");
  }, [fetchData]);

  const onSubmit = async (data: CategoryForm) => {
    setIsLoading(true);
    const submitData: any = { ...data };
    if (id) {
      submitData["id"] = id;
    }
    await axiosInstance.post(ENDPOINTS.category_store, submitData)
      .then(async (response: any) => {
        setIsLoading(false);
        handleAxiosSuccess(response);
        setTimeout(() => {
          window.location.href = `/${pageTitleName}`;
        }, 1000);
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
      [name]: value,
    }))
  }

  function validate(): string {
    if (form.name.length < 2) return "Name must be at least 2 characters."
    if (form.name.length > 100) return "Name cannot exceed 100 characters."
    if (form.description.length < 10) return "Description must be at least 10 characters."
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
        {isEdit ? "Edit Category" : "New Category"}
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
              placeholder="Enter category name"
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
              // @ts-ignore
              onChange={(imgUrl: string, previewUrl: string) => {
                setForm((prev) => ({ ...prev, image: imgUrl }))
                setImagePreview(previewUrl)
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
            onClick={() => (window.location.href = "/category")}
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