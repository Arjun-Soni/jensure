"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Factory, Globe, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description: "ISO-certified facilities with strict QC protocols.",
  },
  {
    icon: Award,
    title: "OEM Scalability",
    description: "Flexible capacity and customized production lines.",
  },
  {
    icon: Globe,
    title: "Global Standards Compliance",
    description: "CE & ISO-standard devices.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description: "Sterile, precision-assembled products ensuring patient safety.",
  },
]

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#0B3D69]/20 to-[#006D77]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-[#83C5BE]/20 to-[#006D77]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#006D77] bg-clip-text text-transparent mb-4 pb-2">
            Why Choose JENSURE
          </h2>
          <p className="text-lg text-[#4A5C6A] max-w-2xl mx-auto mt-4">
            Industry-leading manufacturing meets global quality standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#83C5BE] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative h-full p-8 rounded-2xl bg-white/80 backdrop-blur-md border-2 border-[#BFC8CC]/20 hover:border-[#006D77]/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D69]/5 via-transparent to-[#83C5BE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B3D69] to-[#006D77] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                    <Icon className="w-8 h-8 text-white relative z-10" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F33] mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-[#4A5C6A] leading-relaxed relative z-10">{feature.description}</p>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#83C5BE]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
