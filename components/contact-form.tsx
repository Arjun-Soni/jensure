"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

type InquiryCategory = "Product Inquiry" | "OEM/Manufacturing" | "Distribution/Dealership" | "Bulk Order" | "Other"

export function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState<InquiryCategory>("Product Inquiry")
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    specLink: "",
  })
  const [validationError, setValidationError] = useState("")

  const categories: InquiryCategory[] = [
    "Product Inquiry",
    "OEM/Manufacturing",
    "Distribution/Dealership",
    "Bulk Order",
    "Other",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear validation error when user starts typing
    if (validationError) setValidationError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setValidationError("Please fill in all required fields.")
      return
    }

    const emailBody = `Hello JENSURE Team,

I am ${formData.fullName}${formData.companyName ? ` from ${formData.companyName}` : ""}.

Contact Details:
- Email: ${formData.email}
- Phone: ${formData.phone}

I am reaching out regarding ${selectedCategory}.

${formData.message}

${formData.specLink ? `\nFor your reference, here is the specification/PO link: ${formData.specLink}` : ""}

Looking forward to hearing from you soon.

Best regards,
${formData.fullName}`

    const mailtoURL = `mailto:jensuremedex@gmail.com?subject=${encodeURIComponent(
      `${selectedCategory} - ${formData.fullName}`,
    )}&body=${encodeURIComponent(emailBody)}`

    console.log("[v0] mailto URL:", mailtoURL)

    window.open(mailtoURL, "_self")
  }

  return (
    <section id="inquiry-form" className="py-16 sm:py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0B3D69] via-[#006D77] to-[#2E8B57] bg-clip-text text-transparent">
            Send Us an Inquiry
          </h2>
          <p className="text-[#4a5c6a] text-lg">Choose your inquiry type and fill out the form below</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category Pills */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#0B3D69] to-[#006D77] text-white shadow-lg scale-105"
                    : "bg-white text-[#0B3D69] border-2 border-[#006D77]/20 hover:border-[#2E8B57]/40 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Form Card */}
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#006D77]/20">
            {/* Glassmorphic Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 via-transparent to-[#006D77]/5 rounded-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              {validationError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {validationError}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-[#0B3D69] font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-[#006D77]/20 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-[#0B3D69] font-semibold">
                    Company Name <span className="text-[#4a5c6a] text-xs">(Optional)</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="border-[#006D77]/20 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0B3D69] font-semibold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="border-[#006D77]/20 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#0B3D69] font-semibold">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91-XXXXXXXXXX"
                    className="border-[#006D77]/20 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    required
                  />
                </div>
              </div>

              {/* Inquiry Category (Display) */}
              <div className="space-y-2">
                <Label className="text-[#0B3D69] font-semibold">Inquiry Category</Label>
                <div className="px-4 py-3 bg-gradient-to-r from-[#0B3D69]/5 to-[#006D77]/5 rounded-lg border border-[#006D77]/20">
                  <span className="text-[#0B3D69] font-medium">{selectedCategory}</span>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#0B3D69] font-semibold">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  className="border-[#006D77]/20 focus:border-[#2E8B57] focus:ring-[#2E8B57] resize-none"
                  required
                />
              </div>

              {/* Optional Spec Link */}
              <div className="space-y-2">
                <Label htmlFor="specLink" className="text-[#0B3D69] font-semibold">
                  Link to Specification Sheet / PO <span className="text-[#4a5c6a] text-xs">(Optional)</span>
                </Label>
                <Input
                  id="specLink"
                  name="specLink"
                  type="url"
                  value={formData.specLink}
                  onChange={handleInputChange}
                  placeholder="https://example.com/spec-sheet"
                  className="border-[#006D77]/20 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2E8B57] to-[#006D77] text-white text-lg font-semibold py-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
