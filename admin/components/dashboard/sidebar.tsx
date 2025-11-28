"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Settings, BookOpen, PanelLeft } from "lucide-react"
import { Fragment, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
    submenu?: {
      href: string
      title: string
    }[]
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <nav className={cn("grid gap-1", className)} {...props}>
      {items.map((item) => (
        <div
          key={item.href}
          onMouseEnter={() => setHovered(item.href)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                (pathname === item.href || pathname.startsWith(`${item.href}/`)) &&
                "bg-muted font-medium"
              )}
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </Button>
          </Link>
          {item.submenu && item.submenu.length > 0 && (hovered === item.href || pathname.startsWith(`${item.href}/`)) && (
            <div className="ml-4 mt-1 grid gap-1">
              {item.submenu.map((subitem: { href: string; title: string; icon?: React.ReactNode }) => (
                <Link key={subitem.href} href={subitem.href}>
                  <Button
                    variant={pathname === subitem.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start text-sm",
                      pathname === subitem.href && "bg-muted font-medium"
                    )}
                  >
                    {subitem.icon && subitem.icon}
                    <span className="ml-2">{subitem.title}</span>
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export function DashboardSidebar({ passData }: { passData?: boolean }) {
  const sidebarNavItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Blog Posts",
      href: "/blog",
      icon: <BookOpen className="h-5 w-5" />,
    },

    {
      title: "Gallery",
      href: "/gallery",
      icon: <PanelLeft className="h-5 w-5" />,
    },
    // {
    //   title: "Blog Posts",
    //   href: "/blog",
    //   icon: <BookOpen className="h-5 w-5" />,
    // },

    // {
    //   title: "Happy Clients",
    //   href: "/happy-client",
    //   icon: <BookOpen className="h-5 w-5" />,
    // },
    // {
    //   title: "Our Services",
    //   href: "/our-service",
    //   icon: <BookOpen className="h-5 w-5" />,
    // },
    // {
    //   title: "portfolio",
    //   href: "/portfolio",
    //   icon: <BookOpen className="h-5 w-5" />,
    // },
    // {
    //   title: "products",
    //   href: "/product",
    //   icon: <BookOpen className="h-5 w-5" />,
    // },
    // {
    //   title: "Team",
    //   href: "/team",
    //   icon: <BookOpen className="h-5 w-5" />,
    // },

    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
      submenu: [
        {
          title: "Change Password",
          href: "/settings/password",
          icon: <FileText className="h-5 w-5" />,

        },

        {
          title: "CMS Pages",
          href: "/cms",
          icon: <FileText className="h-5 w-5" />,
        },
      ],
    },
  ]

  return (
    <Fragment>
      <div className="hidden w-64 flex-col md:flex bg-muted-100 min-h-screen border-r border-border">
        <div className="flex flex-col gap-4 p-4">
          <SidebarNav items={sidebarNavItems} />
        </div>
      </div>
      {passData && (
        <div className="md:hidden fixed  w-40 left-0 right-0 bg-muted-100 border-t border-border z-50">
          <SidebarNav items={sidebarNavItems} />
        </div>
      )}
    </Fragment>
  )
}