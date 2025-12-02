"use client"

import React, { useState } from "react"

export function ResetPasswordForm() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  function validate() {
    if (password.length < 8) return "Password must be at least 8 characters"
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter"
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter"
    if (!/[0-9]/.test(password)) return "Password must contain at least one number"
    if (password !== confirmPassword) return "Passwords do not match"
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
      setTimeout(() => {
        setIsLoading(false)
        setSuccess("Your password has been reset. You can now log in with your new password.")
        setPassword("")
        setConfirmPassword("")
        // window.location.href = "/login"
      }, 1000)
    } catch {
      setIsLoading(false)
      setError("Something went wrong. Please try again later.")
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Reset Password</h2>
      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
      {success && <div style={{ color: "green", marginBottom: 8 }}>{success}</div>}
      <div style={{ marginBottom: 16 }}>
        <label>
          New Password
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your new password"
              style={{ width: "100%", paddingRight: 40 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: 40,
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
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
              style={{ width: "100%", paddingRight: 40 }}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(v => !v)}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                width: 40,
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              tabIndex={-1}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </label>
      </div>
      <button type="submit" disabled={isLoading} style={{ width: "100%", padding: 8 }}>
        {isLoading ? "Resetting password..." : "Reset password"}
      </button>
    </form>
  )
}