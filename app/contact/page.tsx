import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us - JENSURE Medex Pvt. Ltd.",
  description: "Get in touch with JENSURE Medex for product inquiries, OEM partnerships, and distribution requests.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc]">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <Footer />
    </main>
  )
}
