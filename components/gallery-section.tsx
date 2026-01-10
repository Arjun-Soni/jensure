"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const galleryItems = [
  { label: "Factory Floor", type: "Manufacturing facility" },
  { label: "Exhibition Booth", type: "Trade show presence" },
  { label: "Quality Control", type: "Testing laboratory" },
  { label: "Team Meeting", type: "Our professionals" },
  { label: "Production Line", type: "Assembly process" },
  { label: "Packaging Area", type: "Sterile packaging" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" ref={ref} className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#006D77] bg-clip-text text-transparent mb-4">
            Inside JENSURE
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <div
                className="w-full h-full bg-gradient-to-br from-[#0B3D69]/10 to-[#006D77]/10 flex flex-col items-center justify-center"
                data-placeholder="true"
              >
                <p className="text-[#0B1F33] font-bold text-lg mb-2">{item.label}</p>
                <p className="text-[#4A5C6A] text-sm">{item.type}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D69]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">View in Gallery</p>
              </div>

              {/* Zoom Effect */}
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
