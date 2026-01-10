"use client"

import { motion } from "framer-motion"

export function GlobalTrust() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0B3D69] to-[#006D77] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold text-white text-center leading-relaxed"
        >
          Committed to precision, reliability, and long-term OEM partnerships worldwide.
        </motion.p>
      </div>
    </section>
  )
}
