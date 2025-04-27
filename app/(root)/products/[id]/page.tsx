import ProductDetails from "@/components/shared/Products/ProductDetails";
import { GetProductDetails, GetSimilarProducts } from "@/lib/actions/productActions"
import { ProductType } from "@/types/type";


type ProductDetailsPageProp = {
  params: ProductDetailsPageParam;
};

type ProductDetailsPageParam = {
  id: number;
};


const page = async (props: ProductDetailsPageProp) => {

    const {id} = await props.params

    const product:ProductType = await GetProductDetails(id);

    const similarProducts:ProductType[] = await GetSimilarProducts(product._id)


  return (
    <section className="py-16 px-4 lg:px-0 bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-200">
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetails  SelectedProduct={product}  similarProducts={similarProducts}   />
    </section>
  )
}

export default page