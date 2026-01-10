"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1))
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-gradient-to-r from-[#0B3D69]/95 to-[#006D77]/95 backdrop-blur-[10px] shadow-lg"
          : "bg-gradient-to-r from-[#0B3D69]/80 to-[#006D77]/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/images/jensure-logo.png"
              alt="JENSURE Medex"
              width={160}
              height={53}
              className="h-10 sm:h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className="text-white hover:text-[#2E8B57] transition-colors duration-300 ease-out relative group text-sm font-semibold tracking-wide"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2E8B57] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="/certifications"
            className="hidden lg:flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#2E8B57] to-[#006D77] text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out"
          >
            Request Certifications Info
          </Link>

          <button
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6 mt-4 border-t border-white/20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("/#")) {
                          e.preventDefault()
                          handleNavClick(item.href)
                        } else {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                      className="text-white hover:text-[#2E8B57] transition-colors duration-300 ease-out text-left text-base font-semibold tracking-wide block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/certifications"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#2E8B57] to-[#006D77] text-white text-sm font-medium hover:shadow-lg transition-all duration-300 ease-out"
                >
                  Request Certifications Info
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
