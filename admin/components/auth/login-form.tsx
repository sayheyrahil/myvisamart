"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
 import { Eye, EyeOff } from "lucide-react"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS } from "@/lib/constants"
import { handleAxiosError } from "@/lib/common"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
})


export function LoginForm() {
  const router = useRouter()
   const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    console.log("Submitting login form with values:", values);
    await axiosInstance
      .post(ENDPOINTS.login, values)
      .then(async (response: any) => {
        const data = response.data.data;

        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem("j_access_token", data.access_token);
            localStorage.setItem("profile", JSON.stringify(data));
            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Small delay to ensure storage completion
          } catch (error) {
            console.error("Error setting localStorage", error);
          }
        }

        window.location.href = '/dashboard'; // Redirect to dashboard after login
       
      })
      .catch((error: any) => {
        handleAxiosError( error)

      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        await onSubmit({ email, password });
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
      <div>
        <label htmlFor="password" className="block font-medium mb-1">Password</label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            type="button"
            className="absolute right-0 top-0 h-full px-3 py-1 text-gray-400"
            tabIndex={-1}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      <button
        className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  )
}