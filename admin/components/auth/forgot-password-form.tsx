"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS } from "@/lib/constants"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

export function ForgotPasswordForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // Call the forgot password API endpoint using axios instance
      await axiosInstance.post(ENDPOINTS.forget_password, { email: values.email })

      toast({
        title: "Password reset email sent",
        description: "Check your email for a link to reset your password.",
      })
      setIsSubmitted(true)
    } catch (error: any) {

      let errorMessage = "An unexpected error occurred."
      if (error && error.response) {
        // Handle specific error responses from the API
        if (error.response.status === 404) {
          errorMessage = error.response.data?.message || "Email not found."
        } else {
          errorMessage = error.response.data?.message || "An unexpected error occurred."
        }
      }
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-primary">
            If an account exists with that email, we've sent instructions to reset your password.
          </p>
        </div>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => setIsSubmitted(false)}
        >
          Try with a different email
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Sending reset link..." : "Send reset link"}
        </Button>
      </form>
    </Form>
  )
}