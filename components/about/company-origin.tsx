"use client"

import { motion } from "framer-motion"

export function CompanyOrigin() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Product Mesh Animation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B3D69" />
              <stop offset="100%" stopColor="#2E8B57" />
            </linearGradient>
          </defs>
          <circle cx="50%" cy="30%" r="80" fill="url(#meshGradient)" opacity="0.3" />
          <circle cx="60%" cy="60%" r="60" fill="url(#meshGradient)" opacity="0.3" />
          <circle cx="40%" cy="80%" r="70" fill="url(#meshGradient)" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] bg-clip-text text-transparent mb-6 pb-2">
            Company Origin & Story
          </h2>

          <div className="space-y-4 text-[#4a5c6a] text-lg leading-relaxed">
            <p className="font-semibold text-[#0B3D69]">Year Founded: 2025</p>

            <p>
              Founded in Jabalpur, Madhya Pradesh, JENSURE Medex Pvt. Ltd. began with a singular mission — to deliver
              world-class medical devices with manufacturing consistency, precision, and OEM-grade quality.
            </p>

            <p>
              From our state-of-the-art facility, we combine cutting-edge technology with rigorous quality control to
              serve global healthcare markets with reliable, sterile medical solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
