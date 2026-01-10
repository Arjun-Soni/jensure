"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "iv-cannula",
    name: "IV Cannula",
    series: "JENFLON",
    tagline: "Precision IV access with optimal flow rates",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENFLON.jpeg",
  },
  {
    id: "3-way-stopcock",
    name: "3-Way Stop Cock",
    series: "JENWAY",
    tagline: "Reliable flow control for infusion therapy",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENWAY.jpeg",
  },
  {
    id: "extension-line",
    name: "Extension Line",
    series: "JENLINE",
    tagline: "Flexible extension solutions for IV therapy",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENLINE%20HIGH%20PRESSURE.jpeg",
  },
  {
    id: "iv-infusion-set",
    name: "IV Infusion Set",
    series: "JENSURE IV INFUSION SET",
    tagline: "Precision Flow Delivery with Sterile Infusion Integrity",
    image: "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/Disposable%20Infusion%20set.jpeg",
  },
  {
    id: "urine-collection-bag",
    name: "Urine Collection Bag",
    series: "JENURO",
    tagline: "Hygienic urine collection systems",
    image:
      "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/JENURO%20With%20T-Type%20Bottom%20Outlet.jpeg",
  },
  {
    id: "endotracheal-tube",
    name: "Endotracheal Tube",
    series: "JENSURE ENDOTRACHEAL TUBE",
    tagline: "Secure airway management solutions",
    image:
      "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/ENDOTRACHEAL%20TUBE%20(CUFFED).jpeg",
  },
  {
    id: "foley-catheter",
    name: "Foley Catheter",
    series: "JENSURE FOLEY BALLOON CATHETER",
    tagline: "Comfortable urinary catheterization",
    image:
      "https://raw.githubusercontent.com/jensuremedex/my-images/refs/heads/main/LATEX%20FOLEY%20BALLOON%20CATHETER%202%20WAY%20%26%203%20WAY.jpeg",
  },
]

export function ProductsCatalogue() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B3D69] mb-4 text-balance">Our Products</h1>
          <p className="text-lg sm:text-xl text-[#4A5C6A] max-w-2xl mx-auto text-balance">
            Precision-Engineered Medical Devices
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[3/2] bg-gradient-to-br from-[#E8F4F5] via-white to-[#F0F8F8] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#006D77]/8 via-transparent to-[#2E8B57]/8 group-hover:from-[#006D77]/10 group-hover:to-[#2E8B57]/10 transition-all duration-500 pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#006D77]/5 pointer-events-none" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-[#006D77] mb-2 tracking-wide uppercase">
                      {product.series}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3D69] mb-2 group-hover:text-[#006D77] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#4A5C6A] mb-4 leading-relaxed">{product.tagline}</p>

                    {/* View Details Button */}
                    <div className="flex items-center text-[#006D77] font-semibold text-sm group-hover:text-[#2E8B57] transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
