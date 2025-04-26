import ProductGrid from "@/components/shared/Products/ProductGrid"
import { GetGenderCollecction } from "@/lib/actions/productActions"



const GenderTopWear = async () => {

    const productsGender = await GetGenderCollecction("Women",8)
  return (
    <section className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
            Top Wears For Women
        </h2>
        <ProductGrid products ={productsGender} />
    </section>
  )
}

export default GenderTopWear