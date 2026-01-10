"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}

export { ClientLayout }
export default ClientLayout
