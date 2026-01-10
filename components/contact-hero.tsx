"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69] pt-32 pb-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-white to-[#2E8B57] bg-clip-text text-transparent">
            Get in Touch With Us
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            We're here to assist with product inquiries, OEM partnerships, and distribution requests.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
