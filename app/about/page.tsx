"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyOrigin } from "@/components/about/company-origin"
import { OEMDominance } from "@/components/about/oem-dominance"
import { FlagshipProducts } from "@/components/about/flagship-products"
import { VisionGlobal } from "@/components/about/vision-global"
import { ManufacturingCapability } from "@/components/about/manufacturing-capability"
import { TeamPlaceholder } from "@/components/about/team-placeholder"
import { GlobalTrust } from "@/components/about/global-trust"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fafc] to-white">
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <CompanyOrigin />
        <OEMDominance />
        <FlagshipProducts />
        <VisionGlobal />
        <ManufacturingCapability />
        <TeamPlaceholder />
        <GlobalTrust />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
