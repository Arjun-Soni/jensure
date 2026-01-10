import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - JENSURE Medex Pvt. Ltd.",
  description: "Stay updated with the latest news, insights, and developments from JENSURE Medex.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B3D69] via-[#006D77] to-[#0B3D69]">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl text-white/80">Stay informed about medical device innovations and industry updates</p>
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
                Our blog section is currently under development. Check back soon for the latest articles, industry
                insights, and company updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
