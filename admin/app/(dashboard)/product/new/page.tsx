"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import RichTextEditor from "@/components/common/rich-text-editor"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS, WEB_URL } from "@/lib/constants"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common"
import ImageUpload from "@/components/common/image-upload"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(100, {
    message: "Name cannot exceed 100 characters.",
  }),
  image: z.string().min(1, { message: "Image is required." }),
  productList: z.array(z.string()).min(1, { message: "At least one product image is required." }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  is_active: z.enum(["active", "inactive"]),
})

export default function NewProductPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [imageUploading, setImageUploading] = React.useState<boolean>(false)
  const [imagePreview, setImagePreview] = React.useState<string>("")
  const [productListUploading, setProductListUploading] = React.useState<boolean>(false)
  const [productListPreview, setProductListPreview] = React.useState<string[]>([])

  const id = searchParams.get("id")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      productList: [],
      description: "",
      is_active: "active",
    },
  })

  // Fetch product data if editing
  React.useEffect(() => {
    getEditData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function getEditData() {
    if (id) {
      setIsEdit(true)
      try {
        let idpass = `?id=${id}`;
        const response = await axiosInstance.get(`${ENDPOINTS.product_edit}${idpass}`)
        const data = response.data.data
        form.reset({
          name: data.name,
          image: data.image,
          productList: data.productList || [],
          description: data.description,
          is_active: data.is_active ? "active" : "inactive",
        })
        // Set preview with WEB_URL
        setImagePreview(data.image)
        setProductListPreview((data.productList || []))
      } catch (error) {
        handleAxiosError(toast, error)
      }
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const payload = {
        ...values,
        is_active: values.is_active === "active",
      }
      if (isEdit) {
        // @ts-ignore
        id && (payload.id = id)
      }
      await axiosInstance.post(ENDPOINTS.product_store, payload)
        .then((response) => {
          handleAxiosSuccess(toast, response, form)
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          router.push("/product")
        })
    } catch (error) {
      handleAxiosError(toast, error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          {isEdit ? "Edit Product" : "New Product"}
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      <FormDescription>
                        This will be displayed as the main name of your product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          value={field.value}
                          onChange={(urlOrUrls, previewOrPreviews) => {
                            // Always treat as string for single image
                            const url = Array.isArray(urlOrUrls) ? urlOrUrls[0] ?? "" : urlOrUrls;
                            const preview = Array.isArray(previewOrPreviews) ? previewOrPreviews[0] ?? "" : previewOrPreviews;
                            form.setValue("image", url)
                            setImagePreview(preview)
                          }}
                          uploading={imageUploading}
                          setUploading={setImageUploading}
                          preview={imagePreview}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productList"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Product Images</FormLabel>
                      <FormControl>
                        <ImageUpload
                          multiple
                          value={field.value}
                          onChange={(urlOrUrls, previewOrPreviews) => {
                            const urlsArray = Array.isArray(urlOrUrls) ? urlOrUrls : [urlOrUrls];
                            const previewsArray = Array.isArray(previewOrPreviews) ? previewOrPreviews : [previewOrPreviews];
                            form.setValue("productList", urlsArray)
                            setProductListPreview(previewsArray)
                          }}
                          uploading={productListUploading}
                          setUploading={setProductListUploading}
                          preview={productListPreview}
                        />
                      </FormControl>
                      <FormDescription>
                        Upload one or more images for this product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <RichTextEditor
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="is_active"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/product")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update Product" : "Create Product")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}