"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OEMDominance } from "@/components/about/oem-dominance"
import { VisionGlobal } from "@/components/about/vision-global"
import { ManufacturingCapability } from "@/components/about/manufacturing-capability"
import { GlobalTrust } from "@/components/about/global-trust"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fafc] to-white">
      <Navbar />
      <main className="pt-8">
        <AboutHero />
        <OEMDominance />
        <VisionGlobal />
        <ManufacturingCapability />
        <GlobalTrust />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
