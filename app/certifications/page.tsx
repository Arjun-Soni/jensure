import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Certifications - JENSURE Medex Pvt. Ltd.",
  description: "View our quality certifications and compliance standards.",
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69]">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Compliance</h1>
            <p className="text-xl text-white/80">Quality standards that drive our commitment to excellence</p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-[#006D77]/10">
              <h2 className="text-2xl font-bold text-[#0B3D69] mb-4">Coming Soon</h2>
              <p className="text-[#4a5c6a] text-lg">
                Our detailed certifications page is currently under development. We maintain ISO, CE, and GMP
                certifications to ensure the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
