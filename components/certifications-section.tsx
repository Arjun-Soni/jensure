"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, CheckCircle, FileCheck } from "lucide-react"

const certifications = [
  {
    icon: Award,
    name: "ISO Certified",
    description:
      "ISO 13485:2016 certified manufacturing facility ensuring quality management systems for medical devices.",
  },
  {
    icon: CheckCircle,
    name: "CE Compliant",
    description:
      "CE marking compliance demonstrating conformity with EU health, safety, and environmental protection standards.",
  },
  {
    icon: FileCheck,
    name: "GMP Certified",
    description:
      "Good Manufacturing Practice certification ensuring products are consistently produced and controlled according to quality standards.",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0B3D69] via-[#0B3D69]/95 to-[#006D77]"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-[#83C5BE]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Certifications & Compliance
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Our commitment to quality and safety is backed by international certifications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-[#83C5BE]/30 to-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#83C5BE]/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#83C5BE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                  <cert.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />

                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 border-2 border-white rounded-2xl"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 relative z-10">{cert.name}</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed relative z-10">{cert.description}</p>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
