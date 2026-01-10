"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] bg-clip-text text-transparent mb-6">
            Have a question or partnership inquiry?
          </h2>

          <p className="text-lg text-[#4a5c6a] mb-8">
            We're here to discuss how JENSURE can support your OEM medical device manufacturing needs.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
