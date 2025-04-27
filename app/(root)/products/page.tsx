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
    <section>
      <ProductGrid  products={products} />
    </section>
  )
}

export default Page