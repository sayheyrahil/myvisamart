"use client"

import React, { useState, useRef, useEffect } from "react"

type BlogActionsProps = {
  post: any
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void,
  onChangeStatus?: (id: string, is_active: boolean) => void
}

export default function BlogActions({ post, onView, onEdit, onDelete, onChangeStatus }: BlogActionsProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          background: "none",
          border: "1px solid #ccc",
          borderRadius: 4,
          width: 32,
          height: 32,
          padding: 0,
          cursor: "pointer"
        }}
        aria-label="Open menu"
      >
        ⋮
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 36,
            minWidth: 160,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 6,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            zIndex: 100
          }}
        >
          <div style={{ padding: "8px 12px", fontWeight: "bold", borderBottom: "1px solid #eee" }}>
            Actions
          </div>
          {onView && (
            <button
              type="button"
              onClick={() => { setOpen(false); onView(post.id) }}
              style={{ display: "block", width: "100%", padding: "8px 12px", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
            >
              👁️ View
            </button>
          )}
          {onEdit && (
            <button
              type="button"
              onClick={() => { setOpen(false); onEdit(post.id) }}
              style={{ display: "block", width: "100%", padding: "8px 12px", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
            >
              ✏️ Edit
            </button>
          )}
          {(onView || onEdit) && <div style={{ borderTop: "1px solid #eee" }} />}
          {onChangeStatus && (
            <button
              type="button"
              onClick={() => { setOpen(false); onChangeStatus(post.id, post.is_active) }}
              style={{ display: "block", width: "100%", padding: "8px 12px", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
            >
              🔄 Change Status
            </button>
          )}
          {onChangeStatus && <div style={{ borderTop: "1px solid #eee" }} />}
          {onDelete && (
            <button
              type="button"
              onClick={() => { setOpen(false); onDelete(post.id) }}
              style={{ display: "block", width: "100%", padding: "8px 12px", background: "none", border: "none", textAlign: "left", color: "red", cursor: "pointer" }}
            >
              🗑️ Delete
            </button>
          )}
        </div>
      )}
    </div>
  )
}
