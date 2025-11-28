"use client"

import { Metadata } from "next"
import { useEffect } from "react"
import { axiosInstance } from "@/lib/axios-instance"
import { ENDPOINTS } from "@/lib/constants"

 
export default function ChangePasswordPage() {
  useEffect(() => {
    const logout = async () => {
      try {
        await axiosInstance.post(ENDPOINTS.logout) // Adjust endpoint as needed
      } catch (e) {
        // Optionally handle error
      } finally {
        localStorage.clear()
        window.location.href = "/login" // Redirect to login page
        // Optionally redirect or show a message
      }
    }
    logout()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight"> Logout</h1>
      </div>
      
    </div>
  )
}