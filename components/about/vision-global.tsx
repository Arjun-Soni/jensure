"use client"

import { motion } from "framer-motion"

export function VisionGlobal() {
  return (
    <section id="vision" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0B3D69] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] bg-clip-text text-transparent mb-8 pb-2">
            Vision & Global Expansion
          </h2>

          <div className="space-y-6 text-[#4a5c6a] text-lg leading-relaxed">
            <p>
              Our vision is clear: to become a leading global OEM supplier trusted by healthcare organizations
              worldwide.
            </p>

            <p>
              We are expanding our supply chains internationally, building strategic partnerships, and investing in
              cutting-edge manufacturing infrastructure to meet the evolving needs of the global healthcare industry.
            </p>

            <p>
              Our long-term focus remains on innovation, reliability, and capacity building — ensuring we deliver
              excellence at every scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
