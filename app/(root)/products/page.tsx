import ProductGrid from "@/components/shared/Products/ProductGrid"
import { GetAllProduct } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "products"
}

const Page = async () => {

    const products:ProductType[] = await GetAllProduct()

  return (
    <section className="py-16 px-4 md:px-8">
      <h1 className="text-4xl mb-8 font-bold">All Products</h1>
      <ProductGrid  products={products} />
    </section>
  )
}

export default Page