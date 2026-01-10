"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FlagshipProducts() {
  const products = [
    {
      image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENFLON.jpeg",
      name: "IV Cannula",
      subtitle: "Our Core Competency",
      description: "Precision-engineered vascular access devices with advanced safety features.",
    },
    {
      image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY.jpeg",
      name: "3-Way Stop Cock",
      subtitle: "Precision Fluid Control",
      description: "Leak-proof design for reliable infusion therapy management.",
    },
    {
      image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENLINE%20HIGH%20PRESSURE.jpeg",
      name: "Extension Line",
      subtitle: "High & Low Pressure Excellence",
      description: "Versatile solutions for diverse medical fluid delivery needs.",
    },
  ]

  return (
    <section className="py-20 bg-[#f7fafc] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-[#0B3D69]" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#2E8B57]" />
        <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-[#006D77]" />

        {/* Connecting lines */}
        <div className="absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#0B3D69] via-[#2E8B57] to-[#006D77]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] bg-clip-text text-transparent mb-4 pb-2">
            Flagship Products Showcase
          </h2>
          <p className="text-lg text-[#4a5c6a]">Our flagship categories define our engineering quality.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Glowing card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D69]/5 to-[#2E8B57]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Product Image with gradient overlay */}
                <div className="relative h-64 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent"
                    animate={{
                      borderColor: ["rgba(11, 61, 105, 0)", "rgba(46, 139, 87, 0.3)", "rgba(11, 61, 105, 0)"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-[#0B3D69] mb-2 group-hover:text-[#2E8B57] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#2E8B57] mb-4">{product.subtitle}</p>
                  <p className="text-[#4a5c6a] leading-relaxed">{product.description}</p>
                </div>

                {/* Connecting node indicator */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] shadow-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(11, 61, 105, 0.7)",
                      "0 0 0 8px rgba(11, 61, 105, 0)",
                      "0 0 0 0 rgba(11, 61, 105, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
