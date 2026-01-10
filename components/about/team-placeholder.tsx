"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export function TeamPlaceholder() {
  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0B3D69] to-[#2E8B57] flex items-center justify-center mx-auto mb-6">
            <Users className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h2>

          <p className="text-lg text-[#4a5c6a] leading-relaxed">
            Our leadership and engineering team will be introduced soon.
          </p>

          <motion.div
            className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <p className="text-sm text-[#4a5c6a]">Coming Soon - Leadership Profiles</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
