"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, CheckCircle2 } from "lucide-react"
import { productData } from "@/lib/product-data"
import Image from "next/image"

interface ProductDetailProps {
  slug: string
}

export function ProductDetail({ slug }: ProductDetailProps) {
  const product = productData[slug]
  const [activeVariant, setActiveVariant] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  if (!product) return null

  const currentVariant = product.variants[activeVariant]

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[#F7FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Product Image and Variants */}
            <div>
              {/* Product Image with variant-specific placeholder */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVariant}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/2] bg-gradient-to-br from-[#F7FAFC] via-white to-[#E8F4F5] rounded-2xl shadow-lg overflow-hidden mb-6 group"
                >
                  {currentVariant.image ? (
                    <>
                      <Image
                        src={currentVariant.image || "/placeholder.svg"}
                        alt={`${currentVariant.name} - ${product.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#006D77]/5 via-transparent to-[#2E8B57]/5 pointer-events-none" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F7FAFC] to-[#BFC8CC]/20" />
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <p className="text-[#4A5C6A]/60 text-center text-lg font-medium">
                          {product.name} - {currentVariant.name}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Variant Tabs */}
              {product.variants.length > 1 && (
                <div>
                  <h3 className="text-xl font-bold text-[#0B3D69] mb-4">Available Variants</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveVariant(index)}
                        className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm ${
                          activeVariant === index
                            ? "bg-gradient-to-r from-[#0B3D69] to-[#006D77] text-white shadow-lg scale-105"
                            : "bg-white text-[#0B3D69] border-2 border-[#BFC8CC] hover:border-[#006D77]"
                        }`}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Product Info */}
            <div>
              <div className="text-sm font-semibold text-[#006D77] mb-2 tracking-wide uppercase">{product.series}</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D69] mb-4 text-balance">
                {product.name}
              </h1>
              <p className="text-lg text-[#4A5C6A] leading-relaxed text-balance mb-6">{product.tagline}</p>

              {/* Variant Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVariant}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h2 className="text-xl font-bold text-[#0B3D69] mb-3">{currentVariant.name}</h2>
                  <p className="text-[#4A5C6A] leading-relaxed">{currentVariant.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Common Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#0B3D69] mb-6">Common Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.commonFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A5C6A] leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specification Chart */}
        {currentVariant.specifications && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#0B3D69] mb-6">Technical Specifications</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0B3D69] to-[#006D77]">
                      {currentVariant.specifications.headers.map((header, index) => (
                        <th
                          key={index}
                          className="px-4 py-4 text-left text-sm font-semibold text-white uppercase tracking-wide"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentVariant.specifications.rows.map((row, rowIndex) => (
                      <motion.tr
                        key={rowIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: rowIndex * 0.05 }}
                        className="border-b border-[#BFC8CC]/30 hover:bg-[#F7FAFC] transition-colors"
                      >
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-4 text-sm text-[#4A5C6A]">
                            {cellIndex === 1 ? (
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-4 h-4 rounded-full border border-gray-300"
                                  style={{ backgroundColor: cell.toLowerCase() }}
                                />
                                <span className="font-medium">{cell}</span>
                              </div>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Download CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69] rounded-2xl shadow-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">Need More Information?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Download our detailed product sheet or contact our OEM team for custom manufacturing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0B3D69] hover:bg-[#F7FAFC] transition-all duration-200 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Product Sheet (PDF)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B3D69] transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact OEM Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
