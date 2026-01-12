"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  const handleScrollToVision = () => {
    const visionSection = document.querySelector("#vision")
    visionSection?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-16 sm:py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7fafc] via-[#e8f4f8] to-[#f0f6ff]" />

      {/* Animated gradient background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left accent */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#0B3D69]/5 to-[#006D77]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />

        {/* Center accent */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-[#006D77]/4 to-[#2E8B57]/4 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

        {/* Bottom-right accent */}
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-tl from-[#0B3D69]/3 to-[#2E8B57]/3 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* Decorative grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0B3D69] via-[#006D77] to-[#2E8B57] bg-clip-text text-transparent mb-8 leading-tight will-change-transform"
          >
            JENSURE MEDEX PVT. LTD.
            <br />
            <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl">Global Healthcare Solutions</span>
          </motion.h1>

          <motion.div variants={containerVariants} className="space-y-6 text-[#4a5c6a] text-lg leading-relaxed">
            <motion.p variants={itemVariants} className="will-change-transform">
              JENSURE MEDEX PVT. LTD. is a trusted global manufacturer and exporter of high-quality single-use medical
              devices, delivering reliable healthcare solutions to international markets with precision and consistency.
              Our commitment to excellence, affordability, and regulatory compliance positions us as a preferred partner
              for healthcare providers and distributors worldwide.
            </motion.p>

            <motion.p variants={itemVariants} className="will-change-transform">
              We serve corporate hospital chains, healthcare networks, and medical distributors across India and
              multiple overseas markets. Designed to meet international quality standards, our products are manufactured
              using advanced processes that ensure safety, performance, and consistency, batch after batch.
            </motion.p>

            <motion.p variants={itemVariants} className="will-change-transform">
              Innovation and quality drive our global success. Through continuous research, development, and process
              optimization, we introduce medical devices that address real-world clinical needs while aligning with
              evolving global healthcare regulations. Even in dynamic market conditions, our focus remains steadfast:
              delivering dependable products that enhance patient care and build long-term trust.
            </motion.p>

            <motion.p variants={itemVariants} className="will-change-transform">
              Our export operations are supported by efficient supply chain management, scalable manufacturing
              capabilities, and responsive customer service, ensuring timely delivery and seamless collaboration across
              borders.
            </motion.p>

            <motion.p variants={itemVariants} className="will-change-transform">
              At Jensure Medex, we value long-term partnerships built on transparency, loyalty, and shared growth. By
              empowering our skilled workforce and maintaining a culture of excellence, we consistently deliver value to
              our global customers and contribute meaningfully to healthcare advancement worldwide.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
