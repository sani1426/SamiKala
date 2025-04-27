import ProductGrid from "@/components/shared/Products/ProductGrid"
import { GetPaginating } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "products"
}

const Page = async () => {

    const products:ProductType[] = await GetPaginating(2)

  return (
    <section className="pt-14 pb-24 px-8 md:px-12">
      <h1 className="text-4xl mb-12 font-bold text-center">All Products</h1>
      <ProductGrid  products={products} />
    </section>
  )
}

export default Page