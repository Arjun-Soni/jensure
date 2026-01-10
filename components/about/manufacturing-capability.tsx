"use client"

import { motion } from "framer-motion"
import { Cog, ShieldCheck, Building2, TrendingUp } from "lucide-react"

export function ManufacturingCapability() {
  const capabilities = [
    {
      icon: Cog,
      title: "Production Line Automation",
      description: "Advanced automated systems ensuring consistent quality and high-volume output.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Multi-stage inspection protocols meeting international medical device standards.",
    },
    {
      icon: Building2,
      title: "Sterile Environment Philosophy",
      description: "Cleanroom facilities maintaining ISO-certified sterile manufacturing conditions.",
    },
    {
      icon: TrendingUp,
      title: "Scalability for Large OEM Orders",
      description: "Flexible production capacity designed to scale with your business growth.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69] relative overflow-hidden">
      {/* Blueprint Lines Animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
              <circle cx="0" cy="0" r="2" fill="white" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      {/* Machinery Silhouettes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Cog className="absolute top-10 left-10 w-32 h-32 text-white" />
        <Building2 className="absolute bottom-10 right-10 w-32 h-32 text-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Manufacturing Capability</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            State-of-the-art facilities and processes designed for precision OEM manufacturing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2E8B57] to-[#006D77] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
