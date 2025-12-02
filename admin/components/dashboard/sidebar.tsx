"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { Fragment, useState } from "react"

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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
         minHeight: "100vh",
        borderRight: "1px solid #e5e7eb",
        boxShadow: "2px 0 8px rgba(0,0,0,0.03)",
        padding: "8px 0",
      }}
      className={className }
      {...props}
    >
      {items.map((item) => (
        <div
          key={item.href}
          onMouseEnter={() => setHovered(item.href)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link href={item.href} style={{ textDecoration: "none" }}>
            <button
              type="button"
              style={{
                width: "100%",
                textAlign: "left",
                background: pathname === item.href ? "#0A509F" : "transparent",
                fontWeight: pathname === item.href ? 600 : 400,
                border: "none",
                padding: "8px 16px",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                transition: "background 0.15s",
                 boxShadow: pathname === item.href ? "0 1px 4px rgba(0,0,0,0.04)" : undefined,
                minHeight: 44,
                gap: 10,
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#0A509F")}
              onMouseOut={e => (e.currentTarget.style.background = pathname === item.href ? "#0A509F" : "transparent")}
            >
              {item.icon && <span style={{ marginRight: 10, fontSize: 20 }}>{item.icon}</span>}
              <span style={{ flex: 1 }}>{item.title}</span>
             
            </button>
          </Link>
          {item.submenu && item.submenu.length > 0 && (hovered === item.href || pathname.startsWith(`${item.href}/`)) && (
            <div
              style={{
                marginLeft: 24,
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                background: "#f4f6fa",
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                padding: 4,
                minWidth: 140,
              }}
            >
              {item.submenu.map((subitem) => (
                <Link key={subitem.href} href={subitem.href} style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: pathname === subitem.href ? "#e0e7ef" : "transparent",
                      fontWeight: pathname === subitem.href ? 600 : 400,
                      border: "none",
                      padding: "7px 14px",
                      borderRadius: 4,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "background 0.15s",
                      color: "#222",
                      gap: 8,
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = "#0A509F")}
                    onMouseOut={e => (e.currentTarget.style.background = pathname === subitem.href ? "#e0e7ef" : "transparent")}
                  >
                    {subitem.icon && <span style={{ marginRight: 8 }}>{subitem.icon}</span>}
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
      icon: <span style={{ fontSize: 18 }}>🏠</span>,
    },
  
    {
      title: "category",
      href: "/category",
      icon: <span style={{ fontSize: 18 }}>📂</span>,
    },
    {
      title: "destinations",
      href: "/destination",
      icon: <span style={{ fontSize: 18 }}>📂</span>,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <span style={{ fontSize: 18 }}>⚙️</span>,
      submenu: [
        {
          title: "Change Password",
          href: "/settings/password",
          icon: <span style={{ fontSize: 16 }}>🔑</span>,
        },
        {
          title: "CMS Pages",
          href: "/cms",
          icon: <span style={{ fontSize: 16 }}>📄</span>,
        },
      ],
    },
  ]

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 256,
          minHeight: "100vh",
           borderRight: "1px solid #e5e7eb",
          boxShadow: "2px 0 8px rgba(0,0,0,0.03)",
        }}
        className="md:flex bg-slate-900 rounded-xl text-white"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 0, padding: 0 }}>
          <SidebarNav items={sidebarNavItems} />
        </div>
      </div>
      {passData && (
        <div
          style={{
            display: "block",
            position: "fixed",
            width: 200,
            left: 0,
            top: 0,
            bottom: 0,
            background: "#f8fafd",
            borderRight: "1px solid #e5e7eb",
            boxShadow: "2px 0 8px rgba(0,0,0,0.03)",
            zIndex: 50,
            paddingTop: 0,
          }}
          className="md:hidden"
        >
          <SidebarNav items={sidebarNavItems} />
        </div>
      )}
    </Fragment>
  )
}