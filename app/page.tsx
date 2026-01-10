import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { OemCtaSection } from "@/components/oem-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <CertificationsSection />
      <ContactCtaSection />
      <OemCtaSection />
      <Footer />
    </main>
  )
}
