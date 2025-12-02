"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS } from "@/lib/constants"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

export function ForgotPasswordForm() {
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
        <button
          className="w-full px-4 py-2 rounded border bg-white hover:bg-gray-100"
          type="button"
          onClick={() => setIsSubmitted(false)}
        >
          Try with a different email
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        await onSubmit({ email });
      }}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <div>
        <label htmlFor="email" className="block font-medium mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
      <button
        className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sending reset link..." : "Send reset link"}
      </button>
    </form>
  )
}