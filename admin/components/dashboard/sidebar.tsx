"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { Fragment, useState } from "react"
import { FaHome, FaFolder, FaGlobe, FaQuestionCircle, FaMapMarkedAlt, FaCog, FaKey, FaFileAlt } from "react-icons/fa";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon?: React.ReactNode
    submenu?: {
      href: string
      title: string
      icon?: React.ReactNode
    }[]
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <nav
      className={`flex flex-col gap-0.5 min-h-screen border-r border-gray-200 shadow-[2px_0_8px_rgba(0,0,0,0.03)] py-2 ${className ?? ""}`}
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.href}
          onMouseEnter={() => setHovered(item.href)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link href={item.href} className="no-underline">
            <div
              className={`
                w-full text-left border-none px-4 py-2 rounded-md flex items-center cursor-pointer transition-colors min-h-[44px] gap-2.5
                ${pathname === item.href ? "bg-[#0A509F] font-semibold shadow-sm" : "bg-transparent font-normal"}
                hover:bg-[#0A509F]
              `}
            >
              {item.icon && <span className="mr-2.5 text-[20px]">{item.icon}</span>}
              <span className="flex-1 capitalize">{item.title}</span>
            </div>
          </Link>
          {item.submenu && item.submenu.length > 0 && (hovered === item.href || pathname.startsWith(`${item.href}/`)) && (
            <div
              className="ml-6 mt-0.5 flex flex-col gap-0.5 bg-[#f4f6fa] border border-gray-200 rounded-md shadow-md p-1 min-w-[140px]"
            >
              {item.submenu.map((subitem) => (
                <Link key={subitem.href} href={subitem.href} className="no-underline">
                  <button
                    type="button"
                    className={`
                      w-full text-left border-none px-3.5 py-[7px] rounded font-normal text-[14px] flex items-center cursor-pointer transition-colors gap-2
                      ${pathname === subitem.href ? "bg-[#e0e7ef] font-semibold" : "bg-transparent"}
                      hover:bg-[#0A509F] hover:text-white
                      text-[#222]
                    `}
                  >
                    {subitem.icon && <span className="mr-2">{subitem.icon}</span>}
                    <span>{subitem.title}</span>
                  </button>
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
      icon: <FaHome style={{ fontSize: 18 }} />,
    },
    {
      title: "category",
      href: "/category",
      icon: <FaFolder style={{ fontSize: 18 }} />,
    },
    {
      title: "countries",
      href: "/countries",
      icon: <FaGlobe style={{ fontSize: 18 }} />,
    },
    {
      title: "faq",
      href: "/faq",
      icon: <FaQuestionCircle style={{ fontSize: 18 }} />,
    },
    {
      title: "testimonials",
      href: "/testimonials",
      icon: <FaQuestionCircle style={{ fontSize: 18 }} />,
    },
    {
      title: "destinations",
      href: "/destination",
      icon: <FaMapMarkedAlt style={{ fontSize: 18 }} />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <FaCog style={{ fontSize: 18 }} />,
      submenu: [
        {
          title: "Change Password",
          href: "/settings/password",
          icon: <FaKey style={{ fontSize: 16 }} />,
        },
        {
          title: "CMS Pages",
          href: "/cms",
          icon: <FaFileAlt style={{ fontSize: 16 }} />,
        },
      ],
    },
  ]

  return (
    <Fragment>
      <div
        className="flex flex-col   min-h-screen   shadow-[2px_0_8px_rgba(0,0,0,0.03)] md:flex bg-slate-900 rounded-xl text-white"
      >
        <div className="flex flex-col gap-0 p-0">
          <SidebarNav items={sidebarNavItems} />
        </div>
      </div>
      {passData && (
        <div
          className="block fixed w-[200px] left-0 top-0 bottom-0 bg-[#f8fafd] border-r border-gray-200 shadow-[2px_0_8px_rgba(0,0,0,0.03)] z-50 pt-0 md:hidden"
        >
          <SidebarNav items={sidebarNavItems} />
        </div>
      )}
    </Fragment>
  )
}