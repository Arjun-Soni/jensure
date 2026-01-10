"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Globe2, TrendingUp, Users, Building2 } from "lucide-react"

const globalStats = [
  { icon: Globe2, value: "50+", label: "Countries Reached", color: "from-[#0B3D69] to-[#006D77]" },
  { icon: TrendingUp, value: "300%", label: "Growth Rate", color: "from-[#2E8B57] to-[#83C5BE]" },
  { icon: Users, value: "1000+", label: "Healthcare Partners", color: "from-[#006D77] to-[#0B3D69]" },
  { icon: Building2, value: "25+", label: "OEM Collaborations", color: "from-[#83C5BE] to-[#2E8B57]" },
]

export function VisionGlobal() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="vision" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0B3D69] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] bg-clip-text text-transparent mb-6 pb-2">
              Vision & Global Expansion
            </h2>

            <div className="space-y-4 text-[#4a5c6a] text-lg leading-relaxed">
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Network Background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  stroke="url(#circleGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="100"
                  stroke="url(#circleGradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="circleGradient">
                    <stop offset="0%" stopColor="#0B3D69" />
                    <stop offset="100%" stopColor="#2E8B57" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {globalStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    className="relative p-6 rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden"
                    animate={{
                      y: hoveredCard === index ? -8 : 0,
                      boxShadow:
                        hoveredCard === index
                          ? "0 20px 60px -15px rgba(11, 61, 105, 0.3)"
                          : "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color}`}
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Value with Counter Animation */}
                    <motion.div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <div className="text-sm text-[#4a5c6a] font-medium">{stat.label}</div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 blur-xl`}
                      animate={{
                        opacity: hoveredCard === index ? 0.2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Orbs */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#0B3D69]/20 to-[#2E8B57]/20 blur-sm"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
