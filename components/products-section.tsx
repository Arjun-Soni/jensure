"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    name: "IV Cannula",
    description: "Sterile infusion access device with advanced safety features for reliable vascular access.",
    specs: "Available in multiple gauges (14G-24G) with safety features and color-coded hubs",
    slug: "iv-cannula",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENFLON.jpeg",
  },
  {
    name: "3-Way Stop Cock",
    description: "Precision flow control valve for infusion therapy with leak-proof design.",
    specs: "Luer lock compatible, 360° rotation, transparent body for visual flow monitoring",
    slug: "3-way-stopcock",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY.jpeg",
  },
  {
    name: "IV Infusion Set",
    description: "Precision Flow Delivery with Sterile Infusion Integrity",
    specs: "Sterile, pyrogen-free, precise drip control, latex-free options available",
    slug: "iv-infusion-set",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Disposable%20Infusion%20set.jpeg",
  },
]

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" ref={ref} className="py-16 sm:py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#006D77] bg-clip-text text-transparent mb-4">
            Our Top Products
          </h2>
          <p className="text-base sm:text-lg text-[#4A5C6A] max-w-2xl mx-auto">
            Discover our most trusted medical devices used by healthcare professionals worldwide
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`}>
                <Card className="group overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-[#BFC8CC]/30 h-full cursor-pointer">
                  <div className="relative">
                    <div className="aspect-[3/2] bg-gradient-to-br from-[#F7FAFC] via-white to-[#E8F4F5] relative overflow-hidden ring-1 ring-[#006D77]/10 ring-inset">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#006D77]/5 via-transparent to-[#2E8B57]/5 pointer-events-none" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-[#006D77]/5 pointer-events-none" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D69]/95 via-[#006D77]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                      <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">{product.specs}</p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0B3D69] to-[#006D77] bg-clip-text text-transparent mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4A5C6A] mb-4 leading-relaxed">{product.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-[#006D77] text-[#006D77] hover:bg-gradient-to-r hover:from-[#0B3D69] hover:to-[#006D77] hover:text-white hover:border-transparent transition-all bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B3D69] to-[#006D77] text-white px-8 py-3 rounded-md text-base font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            Explore All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
