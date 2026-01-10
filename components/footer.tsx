"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }, // Updated to link to dedicated About page
    { name: "Certifications", href: "/certifications" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const productLinks = [
    { name: "IV Cannula", href: "/products/iv-cannula#top" },
    { name: "3-Way Stop Cock", href: "/products/3-way-stopcock#top" },
    { name: "Extension Line", href: "/products/extension-line#top" },
    { name: "Urine Collection Bag", href: "/products/urine-collection-bag#top" },
    { name: "Endotracheal Tube", href: "/products/endotracheal-tube#top" },
    { name: "Foley Catheter", href: "/products/foley-catheter#top" },
  ]

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69] text-white"
    >
      {/* Subtle Shimmer Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <Image
                src="/images/jensure-logo.png"
                alt="JENSURE Medex"
                width={180}
                height={60}
                className={`h-10 sm:h-12 w-auto brightness-0 invert mb-4 transition-all duration-300 ${
                  isLogoHovered ? "scale-110 drop-shadow-[0_0_15px_rgba(46,139,87,0.8)]" : ""
                }`}
              />
              {isLogoHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/20 to-transparent blur-xl animate-pulse" />
              )}
            </div>
            <p className="text-white/80 text-sm leading-relaxed">Precision OEM Medical Devices</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-[#2E8B57] transition-colors text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3">Products</h3>
            <ul className="space-y-1.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-[#2E8B57] transition-colors text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-xs leading-relaxed">
                  No 622, Civic Centre, Marhatal, Jabalpur, MP 482002
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2E8B57] flex-shrink-0" />
                <a
                  href="mailto:jensuremedex@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-xs break-all"
                >
                  jensuremedex@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-xs">© 2025 JENSURE Medex Pvt. Ltd. | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
