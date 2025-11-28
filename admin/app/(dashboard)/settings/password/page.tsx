import { Metadata } from "next"
import { ChangePasswordForm } from "@/components/auth/change-password-form"

export const metadata: Metadata = {
  title: "Change Password | Admin Panel",
  description: "Change your password",
}

export default function ChangePasswordPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Change Password</h1>
      </div>
      <div className="max-w-md">
        <ChangePasswordForm />
      </div>
    </div>
  )
}