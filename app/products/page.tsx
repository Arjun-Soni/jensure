import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsCatalogue } from "@/components/products-catalogue"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductsCatalogue />
      <Footer />
    </main>
  )
}
