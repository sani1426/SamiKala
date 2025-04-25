import ProductDetails from "@/components/shared/Products/ProductDetails"
import { GetBestSeller } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type"





const BestSeller = async  () => {


    const bestSeller:ProductType = await GetBestSeller()

  return (
    <section className="py-16 px-4 lg:px-0 bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-200">
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetails  SelectedProduct={bestSeller}   />
    </section>
  )
}

export default BestSeller