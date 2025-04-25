import GenderCollection from '@/components/shared/Products/GenderCollection'
import NewArrivalSlider from '@/components/shared/Products/NewArrivalsSlider'
import { GetAllProduct } from '@/lib/actions/productActions'
import BestSeller from '@/section/BestSeller'
import HeroSection from '@/section/HeroSection'
import { ProductType } from '@/types/type'



export default async function Home() {

const apiproduct: ProductType[] = await GetAllProduct()
  console.log(apiproduct)
  return (
    <main>
      <HeroSection />
      <GenderCollection />
      <NewArrivalSlider />
      <BestSeller />
    
      <div>
        {apiproduct.map((item) => (
          <h1 key={item.name}>{item.name}</h1>
        ))}
      </div>
    </main>
  )
}
