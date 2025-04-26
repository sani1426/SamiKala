import ProductGrid from "@/components/shared/Products/ProductGrid"
import { GetGenderCollecction } from "@/lib/actions/productActions"



const GenderTopWear = async () => {

    const productsGender = await GetGenderCollecction("Women",8)
  return (
    <section dir="ltr" className="container mx-auto py-20 ">
        <h2 className="text-3xl text-center font-bold mb-8">
            Top Wears For Women
        </h2>
        <ProductGrid products ={productsGender} />
    </section>
  )
}

export default GenderTopWear