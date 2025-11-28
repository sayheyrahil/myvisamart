"use client"

import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"
import { CircleUser, FileEdit, FilePlus, FileX } from "lucide-react"

type Activity = {
  id: string
  user: string
  action: string
  type: "blog" | "cms" | "user"
  timestamp: Date
  entity?: string
}

const activities: Activity[] = [
  {
    id: "1",
    user: "Admin",
    action: "created",
    type: "blog",
    entity: "Top 10 SEO Tips",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
  },
  {
    id: "2",
    user: "John",
    action: "updated",
    type: "cms",
    entity: "About Us",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: "3",
    user: "Lisa",
    action: "deleted",
    type: "blog",
    entity: "Outdated Post",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: "4",
    user: "Admin",
    action: "updated",
    type: "blog",
    entity: "Digital Marketing Trends",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: "5",
    user: "Admin",
    action: "created",
    type: "cms",
    entity: "Contact Us",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
]

export function RecentActivities() {
  const getActivityIcon = (activity: Activity) => {
    if (activity.action === "created") {
      return <FilePlus className="h-4 w-4" />
    } else if (activity.action === "updated") {
      return <FileEdit className="h-4 w-4" />
    } else if (activity.action === "deleted") {
      return <FileX className="h-4 w-4" />
    }
    return null
  }

  const getActivityClass = (activity: Activity) => {
    if (activity.action === "created") {
      return "bg-green-500/20 text-green-600 dark:bg-green-500/10 dark:text-green-400"
    } else if (activity.action === "updated") {
      return "bg-blue-500/20 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
    } else if (activity.action === "deleted") {
      return "bg-red-500/20 text-red-600 dark:bg-red-500/10 dark:text-red-400"
    }
    return "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
              getActivityClass(activity)
            )}
          >
            {getActivityIcon(activity)}
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
              {activity.type === "blog" ? "blog post" : "page"}{" "}
              <span className="font-semibold">{activity.entity}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}