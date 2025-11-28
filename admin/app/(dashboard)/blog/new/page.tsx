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
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }).max(100, {
    message: "Title cannot exceed 100 characters.",
  }),
  date: z.string().min(1, { message: "Date is required." }),
  shortDescription: z.string().min(5, { message: "Short description is required." }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  image: z.string().min(1, { message: "Image is required." }),
  status: z.enum(["active", "inactive"]),
})

export default function NewBlogPage() {
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
      title: "",
      date: "",
      shortDescription: "",
      description: "",
      image: "",
      status: "active",
    },
  })

  // Fetch blog data if editing
  React.useEffect(() => {
    getEditData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function getEditData() {
    if (id) {
      setIsEdit(true)
      try {
        let idpass = `?id=${id}`;

        const response = await axiosInstance.get(`${ENDPOINTS.blog_edit}${idpass}`)
        const data = response.data.data
        form.reset({
          title: data.title,
          date: data.date,
          shortDescription: data.shortDescription,
          description: data.description,
          image: data.image,
          status: data.status,
        })
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
        id && (values.id = id) // Add ID to values if editing
        // Update existing blog
      }
      // Create new blog
      await axiosInstance.post(ENDPOINTS.blog_store, values)
        .then((response) => {
          handleAxiosSuccess(toast, response, form)
        })
        .catch((error) => {
          handleAxiosError(toast, error)
        })
        .finally(() => {
          router.push("/blog")
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
          {isEdit ? "Edit Blog Post" : "New Blog Post"}
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog post title" {...field} />
                      </FormControl>
                      <FormDescription>
                        This will be displayed as the main title of your blog post.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="Select date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shortDescription"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter a short description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Featured Image</FormLabel>
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
                      <FormLabel>Content</FormLabel>
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
                  name="status"
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
              onClick={() => router.push("/blog")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update Post" : "Create Post")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}