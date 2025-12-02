"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState, useRef, useEffect } from "react"

export function DashboardHeader() {
  const pathname = usePathname()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [userMenuOpen])

  return (
    <header style={{
      zIndex: 30,
      display: "flex",
      alignItems: "center",
      gap: 16,
      height: 64,
       padding: "0 24px"
    }}>
      {/* Sidebar toggle (mobile) */}
    
      
      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "flex-end", flex: 1 }}>
       
        {/* User menu */}
        <div style={{ position: "relative" }} ref={userMenuRef}>
          <button
            type="button"
            style={{
              border: "1px solid #ccc",
              borderRadius: "50%",
              background: "#fff",
              width: 40,
              height: 40,
              cursor: "pointer"
            }}
            aria-label="Toggle user menu"
            onClick={() => setUserMenuOpen(v => !v)}
          >
            <span style={{ fontSize: 22 }}>👤</span>
          </button>
          {userMenuOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 48,
                minWidth: 180,
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: 6,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                zIndex: 100
              }}
            >
              <div style={{ padding: "8px 12px", fontWeight: "bold", borderBottom: "1px solid #eee" }}>
                My Account
              </div>
              <div>
                <a
                  href="/dashboard/settings/password"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px 12px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    textDecoration: "none",
                    color: "#222",
                    cursor: "pointer"
                  }}
                  onClick={() => setUserMenuOpen(false)}
                >
                  Change Password
                </a>
                <a
                  href="/dashboard/settings/logout"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "8px 12px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    textDecoration: "none",
                    color: "#222",
                    cursor: "pointer"
                  }}
                  onClick={() => setUserMenuOpen(false)}
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}