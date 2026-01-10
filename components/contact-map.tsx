"use client"

import { motion } from "framer-motion"

export function ContactMap() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0B3D69] via-[#006D77] to-[#2E8B57] bg-clip-text text-transparent">
            Find Us on the Map
          </h2>
          <p className="text-[#4a5c6a] text-lg">Visit our facility in Jabalpur, Madhya Pradesh</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#006D77]/20 hover:border-[#2E8B57]/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 to-transparent pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.25514108852371!2d79.9354998394847!3d23.167197716513982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afd36bd2c359%3A0x998c8a289cbe4320!2sTVS%20-%20Singhai%20Motocorp%20LLP!5e0!3m2!1sen!2sin!4v1763791147945!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
