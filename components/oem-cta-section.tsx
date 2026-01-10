"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function OemCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="oem" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
      {/* Animated Gradient Background - matching header */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69] animate-gradient-drift" />

      {/* IV Flow Lines Motif */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-16 bg-white"
            style={{
              left: `${15 + i * 15}%`,
              top: "-20px",
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, 15],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Partner with JENSURE for OEM Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed text-pretty">
            Bring your medical device vision to life with our world-class manufacturing and compliance systems.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#0B3D69] hover:bg-gradient-to-r hover:from-[#0B3D69] hover:to-[#2E8B57] hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
          >
            Request OEM Info
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
