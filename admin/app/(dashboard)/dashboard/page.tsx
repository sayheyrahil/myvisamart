'use client'
import { Metadata } from "next"
import React from "react"
 

export default function DashboardPage() {
  const [tab, setTab] = React.useState("overview")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      {/* Tabs */}
      <div>
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-t ${tab === "overview" ? "bg-white border-b-2 border-brand0 font-semibold" : "bg-gray-100"}`}
            onClick={() => setTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 rounded-t ${tab === "analytics" ? "bg-white border-b-2 border-brand0 font-semibold" : "bg-gray-100"}`}
            onClick={() => setTab("analytics")}
          >
            Analytics
          </button>
          <button
            className={`px-4 py-2 rounded-t ${tab === "reports" ? "bg-white border-b-2 border-brand0 font-semibold" : "bg-gray-100"}`}
            onClick={() => setTab("reports")}
          >
            Reports
          </button>
        </div>
        {/* Tab Content */}
        {tab === "overview" && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between pb-2">
                  <span className="text-sm font-medium">Total Blog Posts</span>
                  <span className="text-gray-400">
                    {/* BookOpen icon replacement */}
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M2 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z"/><path d="M8 2v16"/></svg>
                  </span>
                </div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-gray-400">+2 from last month</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between pb-2">
                  <span className="text-sm font-medium">CMS Pages</span>
                  <span className="text-gray-400">
                    {/* FileText icon replacement */}
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M4 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M8 6h4M8 10h4M8 14h4"/></svg>
                  </span>
                </div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-gray-400">+1 from last month</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between pb-2">
                  <span className="text-sm font-medium">Active Users</span>
                  <span className="text-gray-400">
                    {/* UserCheck icon replacement */}
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="8" cy="7" r="4"/><path d="M2 17v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"/><path d="M16 11l2 2 4-4"/></svg>
                  </span>
                </div>
                <div className="text-2xl font-bold">432</div>
                <p className="text-xs text-gray-400">+21% from last month</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between pb-2">
                  <span className="text-sm font-medium">Visitor Activity</span>
                  <span className="text-gray-400">
                    {/* Activity icon replacement */}
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </span>
                </div>
                <div className="text-2xl font-bold">+28%</div>
                <p className="text-xs text-gray-400">+14% from last month</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="bg-white rounded shadow p-4 col-span-4">
                <div className="mb-2">
                  <div className="text-lg font-semibold">Traffic Overview</div>
                  <div className="text-sm text-gray-500">Website visitor traffic for the last 30 days</div>
                </div>
                <div className="pl-2">
                  {/* Replace with your chart or a placeholder */}
                  <div className="h-48 flex items-center justify-center text-gray-400 border rounded bg-gray-50">[Chart Placeholder]</div>
                </div>
              </div>
              <div className="bg-white rounded shadow p-4 col-span-3">
                <div className="mb-2">
                  <div className="text-lg font-semibold">Recent Activities</div>
                  <div className="text-sm text-gray-500">Latest actions in the admin panel</div>
                </div>
                {/* Replace with your activities or a placeholder */}
                <div className="text-gray-400">[Recent Activities Placeholder]</div>
              </div>
            </div>
          </div>
        )}
        {tab === "analytics" && (
          <div className="space-y-4">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-2">
                <div className="text-lg font-semibold">Analytics</div>
                <div className="text-sm text-gray-500">Detailed statistics and user behavior</div>
              </div>
              <div className="h-[450px] flex items-center justify-center text-gray-400">
                Analytics content coming soon
              </div>
            </div>
          </div>
        )}
        {tab === "reports" && (
          <div className="space-y-4">
            <div className="bg-white rounded shadow p-4">
              <div className="mb-2">
                <div className="text-lg font-semibold">Reports</div>
                <div className="text-sm text-gray-500">Generated reports and exports</div>
              </div>
              <div className="h-[450px] flex items-center justify-center text-gray-400">
                Reports content coming soon
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}