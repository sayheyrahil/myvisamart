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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100, { message: "Name cannot exceed 100 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  designation: z.string().min(2, { message: "Designation is required." }),
  image: z.string().min(1, { message: "Image is required." }),
  star_count: z.coerce.number().min(1, { message: "Star count is required." }).max(5, { message: "Maximum 5 stars." }),
})

export default function NewHappyClientPage() {
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
      designation: "",
      image: "",
      star_count: 5,
    },
  })

  // Fetch happy client data if editing
  React.useEffect(() => {
    getEditData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function getEditData() {
    if (id) {
      setIsEdit(true)
      try {
        let idpass = `?id=${id}`;
        const response = await axiosInstance.get(`${ENDPOINTS.happy_client_edit}${idpass}`)
        const data = response.data.data
        form.reset({
          name: data.name,
          description: data.description,
          designation: data.designation,
          image: data.image,
          star_count: data.star_count,
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
      await axiosInstance.post(ENDPOINTS.happy_client_store, values)
        .then((response) => {
          handleAxiosSuccess(toast, response, form)
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          router.push("/happy-client")
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
          {isEdit ? "Edit Happy Client" : "New Happy Client"}
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
                        <Input placeholder="Enter client name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Designation</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter designation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="star_count"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Star Count</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={5}
                          placeholder="Enter star count (1-5)"
                          {...field}
                          value={field.value ?? ""}
                          onChange={e => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormDescription>
                        Number of stars (1 to 5).
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
                          onChange={(url: string, preview: string) => {
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
              onClick={() => router.push("/happy-client")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update Client" : "Create Client")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}