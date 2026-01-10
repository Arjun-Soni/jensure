"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function ContactCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleContactClick = () => {
    // Navigate to contact page and scroll to form
    window.location.href = "/contact#contact-form"
  }

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Premium gradient background matching the existing theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69]" />

      {/* Subtle animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Glassmorphic card with glow effect */}
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8B57]/30 to-[#006D77]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 via-transparent to-[#006D77]/5 rounded-3xl pointer-events-none" />

              <div className="relative text-center space-y-6">
                {/* Main heading with gradient text */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Have a query?{" "}
                  <span className="bg-gradient-to-r from-[#2E8B57] to-[#00CED1] bg-clip-text text-transparent">
                    We're here to assist.
                  </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                >
                  Reach out to us for product information, OEM partnerships, distribution inquiries, or any support you
                  need.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E8B57] to-[#006D77] hover:from-[#27764a] hover:to-[#005a63] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-[0_0_40px_rgba(46,139,87,0.5)] hover:scale-105 transition-all duration-300 group"
                  >
                    Write to Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
