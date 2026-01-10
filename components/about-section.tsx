"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Globe, Shield, Zap } from 'lucide-react'
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: "Sterile Manufacturing",
      description: "ISO-certified cleanroom facilities",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "CE & GMP compliant processes",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted by distributors worldwide",
    },
    {
      icon: Zap,
      title: "Precision Engineering",
      description: "Advanced medical device technology",
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F7FAFC] to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 lg:pr-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#006D77] bg-clip-text text-transparent mb-4 sm:mb-6">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#4A5C6A] leading-relaxed">
                JENSURE Medex Pvt. Ltd. is an OEM medical device manufacturer delivering sterile, precision-engineered
                solutions across infusion therapy and airway management. Our focus is on reliability, compliance, and
                global manufacturing excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative will-change-transform"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0B3D69] via-[#006D77] to-[#2E8B57] rounded-2xl blur-xl opacity-30" />

              {/* Image container with diagonal clip */}
              <div
                className="relative h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#006D77]/20"
                style={{
                  clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jensure_engineer_img-IyJscjVdV7XV3w3XIlHmZ9Crmz2gAt.jpeg"
                  alt="JENSURE manufacturing engineer in sterile facility"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0B3D69]/10" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 sm:px-6 sm:py-3 shadow-lg border border-[#006D77]/20">
                  <p className="text-xs sm:text-sm font-semibold text-[#0B3D69]">Precision Manufacturing Excellence</p>
                  <p className="text-[10px] sm:text-xs text-[#4A5C6A]">ISO-Certified Cleanroom Facility</p>
                </div>
              </div>
            </motion.div>
            {/* </CHANGE> */}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#BFC8CC]/20"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#0B3D69] to-[#006D77] flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1F33] mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#4A5C6A] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
