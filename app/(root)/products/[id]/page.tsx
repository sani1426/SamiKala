import ProductDetails from "@/components/shared/Products/ProductDetails";
import { GetProductDetails, GetSimilarProducts } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type";




const page = async ({
  params,
}: {
  params: Promise<{ id: number }>}) => {

    const {id} = await  params

    const product:ProductType = await GetProductDetails(id);

    const similarProducts:ProductType[] = await GetSimilarProducts(product._id)


  return (
    <section className="pt-3 pb-16 px-4 lg:px-0 bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-200">
        <ProductDetails  SelectedProduct={product}  similarProducts={similarProducts}   />
    </section>
  )
}

export default page