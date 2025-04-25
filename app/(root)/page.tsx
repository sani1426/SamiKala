import GenderCollection from '@/components/shared/Products/GenderCollection'
import NewArrivalSlider from '@/components/shared/Products/NewArrivalsSlider'
import axios from "axios"
import BestSeller from '@/section/BestSeller'
import HeroSection from '@/section/HeroSection'
import { ProductType } from '@/types/type'



export default async function Home() {

const {data} = await axios.get("https://sami-kala.vercel.app/api/products")

const apiproduct:ProductType[] = await data

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
