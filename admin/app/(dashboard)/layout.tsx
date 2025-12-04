'use client';
import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f6fa]">
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-44 min-h-screen bg-black border-r shadow-sm">
          <div className="flex items-center justify-center h-20 border-b">
            {/* Replace with your logo image or SVG */}
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-950">
            <DashboardSidebar />
          </div>
        </aside>
        {/* Mobile Sidebar Toggle Button */}
        <button
          className="md:hidden fixed top-4 left-4 z-30 bg-black text-white rounded p-2 shadow"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          {/* Hamburger icon */}
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile Sidebar Drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="flex flex-col w-64 min-h-screen bg-black border-r shadow-sm">
              <div className="flex items-center justify-between h-20 border-b px-4">
                <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
                <button
                  className="text-white ml-2"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  {/* Close icon */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto bg-gray-950">
                <DashboardSidebar />
              </div>
            </div>
            {/* Overlay to close sidebar */}
            <div
              className="flex-1 bg-black bg-opacity-40"
              onClick={() => setSidebarOpen(false)}
            />
          </div>
        )}
        <div className="flex flex-col flex-1 min-h-screen">
          {/* <DashboardHeader /> */}
          <main className="flex-1 p-0 md:p-4">
            <div className=" w-full">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}