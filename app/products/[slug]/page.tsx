import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { notFound } from "next/navigation"

const validSlugs = [
  "iv-cannula",
  "3-way-stopcock",
  "extension-line",
  "urine-collection-bag",
  "endotracheal-tube",
  "foley-catheter",
  "iv-infusion-set",
]

export function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail slug={slug} />
      <Footer />
    </main>
  )
}
