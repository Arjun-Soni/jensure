"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69]" />

      <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-white will-change-transform"
            style={{
              left: `${20 + i * 20}%`,
              top: "-20px",
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, 20],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/jensure-hero-banner.png"
          alt="JENSURE medical professional with medical device"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D69]/80 via-[#006D77]/70 to-[#0B3D69]/90" />
      </div>

      <motion.div
        className="absolute right-0 top-0 h-full w-[60%] will-change-transform hidden md:block lg:hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 5% 100%)",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/jensure-hero-banner.png"
            alt="JENSURE medical professional with medical device"
            fill
            priority
            className="object-cover object-center"
            sizes="60vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006D77]/50 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Desktop hero image (lg screens and above) */}
      <motion.div
        className="absolute right-0 top-0 h-full w-[55%] xl:w-[50%] will-change-transform hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/jensure-hero-banner.png"
            alt="JENSURE medical professional with medical device"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 60vw, 50vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006D77]/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white max-w-2xl"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-balance"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(11, 61, 105, 0.6)",
              }}
            >
              <span className="lg:drop-shadow-none drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
                Medical Devices.
                <br />
                Manufacturing Industry.
              </span>
            </h1>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-8 text-white/95 leading-relaxed text-pretty"
              style={{
                textShadow: "1px 1px 6px rgba(0, 0, 0, 0.9)",
              }}
            >
              <span className="lg:drop-shadow-none drop-shadow-[0_0_15px_rgba(0,0,0,1)] bg-black/30 lg:bg-transparent px-2 lg:px-0 py-1.5 lg:py-0 rounded-md lg:rounded-none inline-block">
                From IV infusion sets to endotracheal tubes, our devices are manufactured to ensure sterility, safety,
                and dependable performance in critical care environments.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0B3D69] to-[#2E8B57] text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-150 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0B3D69] transition-all duration-150 bg-white/90 text-[#0B3D69] md:bg-transparent md:text-white w-full sm:w-auto text-sm sm:text-base"
                onClick={() => document.getElementById("oem")?.scrollIntoView({ behavior: "smooth" })}
              >
                OEM Partnerships
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Space for diagonal image */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
