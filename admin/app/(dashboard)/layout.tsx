import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f6fa]">
      <div className="flex flex-1">
        {/* Sidebar with logo at the top */}
        <aside className="hidden md:flex flex-col w-44 min-h-screen bg-black border-r shadow-sm">
          <div className="flex items-center justify-center h-20 border-b">
            {/* Replace with your logo image or SVG */}
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-950">
            <DashboardSidebar />
          </div>
        </aside>
        <div className="flex flex-col flex-1 min-h-screen">
          {/* <DashboardHeader /> */}
          <main className="flex-1 p-4 md:p-4">
            <div className="max-w-6xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}