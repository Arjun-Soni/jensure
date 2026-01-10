"use client"

import { motion } from "framer-motion"
import { Factory, ShieldCheck, Globe } from "lucide-react"

export function OEMDominance() {
  const highlights = [
    {
      icon: Factory,
      title: "OEM Manufacturing Expertise",
      description: "Decades of combined engineering experience delivering precision medical devices for global brands.",
    },
    {
      icon: ShieldCheck,
      title: "Consistency & Compliance",
      description: "ISO certified processes ensuring every product meets international regulatory standards.",
    },
    {
      icon: Globe,
      title: "Scalable Global Partnerships",
      description: "Flexible production pipelines designed to grow with your market demands.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69]">
      {/* Subtle Moving Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">OEM Manufacturing Dominance</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            JENSURE specialises in OEM manufacturing for global brands, offering reliable production pipelines, strict
            quality adherence, and customisation for international markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E8B57] to-[#006D77] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
