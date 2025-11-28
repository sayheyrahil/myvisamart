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
import { ENDPOINTS } from "@/lib/constants"
import { handleAxiosError, handleAxiosSuccess } from "@/lib/common"
import ImageUpload from "@/components/common/image-upload"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(100, {
    message: "Name cannot exceed 100 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  image: z.string().min(1, { message: "Image is required." }),
})

export default function NewOurServicePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [imageUploading, setImageUploading] = React.useState<boolean>(false)
  const [imagePreview, setImagePreview] = React.useState<string>("")

  const id = searchParams.get("id")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
    },
  })

  // Fetch service data if editing
  React.useEffect(() => {
    getEditData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function getEditData() {
    if (id) {
      setIsEdit(true)
      try {
        let idpass = `?id=${id}`;
        const response = await axiosInstance.get(`${ENDPOINTS.our_service_edit}${idpass}`)
        const data = response.data.data
        form.reset({
          name: data.name,
          description: data.description,
          image: data.image,
        })
        setImagePreview(data.image)
      } catch (error) {
        handleAxiosError(toast, error)
      }
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      if (isEdit) {
        // @ts-ignore
        id && (values.id = id)
      }
      await axiosInstance.post(ENDPOINTS.our_service_store, values)
        .then((response) => {
          handleAxiosSuccess(toast, response, form)
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          router.push("/our-service")
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
          {isEdit ? "Edit Service" : "New Service"}
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
                        <Input placeholder="Enter service name" {...field} />
                      </FormControl>
                      <FormDescription>
                        This will be displayed as the main name of your service.
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
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/our-service")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update Service" : "Create Service")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}