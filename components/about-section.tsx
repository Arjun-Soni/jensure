"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Eye, Target, Briefcase, Settings, Globe, CheckCircle } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Briefcase,
      title: "Product Categories",
    },
    {
      icon: Settings,
      title: "80,000+ SQ. FT. Manufacturing Facility",
    },
    {
      icon: Globe,
      title: "Global Presence",
    },
    {
      icon: CheckCircle,
      title: "Quality Commitment",
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-24 bg-white overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Content Grid */}
        <div className="relative mb-16 sm:mb-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#003D5C] mb-2 leading-tight">
                WHO
                <br />
                ARE WE
              </h2>
              {/* Cyan underline accent */}
              <div className="w-16 h-1 bg-[#00D9D9] mb-8" />

              {/* First paragraph */}
              <p className="text-base sm:text-lg text-[#003D5C] leading-relaxed mb-6 font-medium">
                JENSURE MEDEX PVT. LTD. is a trusted global manufacturer and exporter of high-quality single-use medical
                devices, delivering reliable healthcare solutions to international markets with precision and consistency.
              </p>

              {/* Second paragraph */}
              <p className="text-base sm:text-lg text-[#003D5C] leading-relaxed font-medium">
                Our commitment to excellence, affordability, and regulatory compliance positions us as a preferred partner
                for healthcare providers and distributors worldwide.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative will-change-transform"
            >
              {/* Image container with diagonal clip */}
              <div
                className="relative h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden shadow-xl"
                style={{
                  clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <Image
                  src="/images/jensure-engineer-img.jpeg"
                  alt="JENSURE manufacturing engineer in sterile facility"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Box - Teal gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 bg-gradient-to-r from-[#00748B] via-[#008899] to-[#00A8A8] rounded-2xl p-8 sm:p-10 mb-16 sm:mb-20 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`flex flex-col items-center text-center ${
                index < stats.length - 1 ? "sm:border-r border-white/20" : ""
              } py-4 sm:py-0`}
            >
              <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 stroke-1" />
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                {stat.title}
              </h3>
            </div>
          ))}
        </motion.div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#003D5C]">
                <Target className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003D5C] mb-2">OUR MISSION</h3>
              <p className="text-sm sm:text-base text-[#003D5C] leading-relaxed">
                To deliver dependable, high-quality medical devices that enhance patient care while maintaining global
                quality standards and innovation.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#003D5C]">
                <Eye className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003D5C] mb-2">OUR VISION</h3>
              <p className="text-sm sm:text-base text-[#003D5C] leading-relaxed">
                To become the leading global brand and OEM supplier trusted by healthcare organisations worldwide for
                precision-engineered medical devices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
