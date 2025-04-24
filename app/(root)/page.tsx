import GenderCollection from '@/components/shared/Products/GenderCollection'
import NewArrivalSlider from '@/components/shared/Products/NewArrivalsSlider'
import {  GetAllProduct } from '@/lib/actions/productActions'
import BestSeller from '@/section/BestSeller'
import HeroSection from '@/section/HeroSection'
import { ProductType } from '@/types/type'
import axios from "axios"


export default async function Home() {

  const {data} = await axios.get("https://sami-kala.vercel.app/api/products")
  const apiproduct : ProductType[] = data
  const products: ProductType[] = await GetAllProduct()
  console.log(products)
  return (
    <main>
      <HeroSection />
      <GenderCollection />
      <NewArrivalSlider />
      <BestSeller />
      <div>
        {products.map((item) => (
          <h1 key={item.name}>{item.name}</h1>
        ))}
      </div>
      <div>
        {apiproduct.map((item) => (
          <h1 key={item.name}>{item.name}</h1>
        ))}
      </div>
    </main>
  )
}
