"use client"

import React, { useState } from "react"

export function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  function validate() {
    if (!currentPassword) return "Current password is required"
    if (newPassword.length < 8) return "Password must be at least 8 characters"
    if (!/[A-Z]/.test(newPassword)) return "Password must contain at least one uppercase letter"
    if (!/[a-z]/.test(newPassword)) return "Password must contain at least one lowercase letter"
    if (!/[0-9]/.test(newPassword)) return "Password must contain at least one number"
    if (newPassword !== confirmPassword) return "Passwords do not match"
    return ""
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSuccess("")
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setIsLoading(true)
    try {
      // Replace this with your API call
      // await axiosInstance.post(ENDPOINTS.change_password, { ... })
      setTimeout(() => {
        setIsLoading(false)
        setSuccess("Your password has been changed successfully.")
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
        // window.location.href = "/login"
      }, 1000)
    } catch {
      setIsLoading(false)
      setError("Something went wrong. Please try again later.")
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }} className="bg-white p-6 rounded-md shadow-md">
       {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      {success && <div style={{ color: "green", marginBottom: 8 }}>{success}</div>}
      <div style={{ marginBottom: 16 }}>
        <label>
          Current Password
          <div style={{ position: "relative" }}>
            <input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              style={{
                width: "100%",
                padding: "10px 40px 10px 10px",
                borderRadius: 6,
                border: "1px solid #d1d5db",
                fontSize: 16,
                outline: "none",
                boxSizing: "border-box"
              }}
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(v => !v)}
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                height: 24,
                width: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
              tabIndex={-1}
            >
              {showCurrentPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          New Password
          <div style={{ position: "relative" }}>
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              style={{
                width: "100%",
                padding: "10px 40px 10px 10px",
                borderRadius: 6,
                border: "1px solid #d1d5db",
                fontSize: 16,
                outline: "none",
                boxSizing: "border-box"
              }}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(v => !v)}
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                height: 24,
                width: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
              tabIndex={-1}
            >
              {showNewPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          Confirm Password
          <div style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
              style={{
                width: "100%",
                padding: "10px 40px 10px 10px",
                borderRadius: 6,
                border: "1px solid #d1d5db",
                fontSize: 16,
                outline: "none",
                boxSizing: "border-box"
              }}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(v => !v)}
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                height: 24,
                width: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
              tabIndex={-1}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </label>
      </div>
      <button type="submit" disabled={isLoading} style={{ width: "100%", padding: 8 }} className="bg-brand text-white">
        {isLoading ? "Changing password..." : "Change Password"}
      </button>
    </form>
  )
}