"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Address",
      content: "No 622, Civic Centre, Marhatal, Jabalpur,\nMadhya Pradesh 482002\n(Opp. Gurunanak School)",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "jensuremedex@gmail.com",
      link: "mailto:jensuremedex@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91-XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "9:30 AM – 7:30 PM\nOpen 7 Days a Week",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0B3D69] via-[#006D77] to-[#2E8B57] bg-clip-text text-transparent">
            Contact Information
          </h2>
          <p className="text-[#4a5c6a] text-lg">Reach out to us through any of these channels</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            const content = detail.link ? (
              <a href={detail.link} className="text-[#0B3D69] hover:text-[#2E8B57] transition-colors duration-200">
                {detail.content}
              </a>
            ) : (
              <span className="text-[#0B3D69]">{detail.content}</span>
            )

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#006D77]/10 hover:border-[#2E8B57]/30 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B3D69] to-[#006D77] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-[#0B3D69] mb-2">{detail.title}</h3>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{content}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
