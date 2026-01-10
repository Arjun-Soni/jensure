"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  const handleScrollToVision = () => {
    const visionSection = document.querySelector("#vision")
    visionSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(46,139,87,0.15),transparent_70%)] animate-gradient-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,109,119,0.2),transparent_70%)] animate-gradient-drift" />

      {/* Abstract Medical-Tech Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Product Silhouettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full border-2 border-[#2E8B57]/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-[#2E8B57] bg-clip-text text-transparent">
              Engineering Precision.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#2E8B57] to-white bg-clip-text text-transparent">
              Manufacturing Trust.
            </span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JENSURE Medex Pvt. Ltd., an emerging OEM manufacturer from Jabalpur, India, shaping global medical device
            standards since 2025.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={handleScrollToVision}
              size="lg"
              className="bg-gradient-to-r from-[#2E8B57] to-[#006D77] text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Our Vision
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
