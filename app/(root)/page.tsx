import GenderCollection from "@/components/shared/Products/GenderCollection";
import NewArrivalSlider from "@/components/shared/Products/NewArrivalsSlider";
import { GetAllProduct } from "@/lib/actions/productActions";
import BestSeller from "@/section/BestSeller";
import HeroSection from "@/section/HeroSection";



export default async function Home() {
  const products = await GetAllProduct();
  console.log(products);
  return (
<main>
  <HeroSection />
  <GenderCollection />
  <NewArrivalSlider />
  <BestSeller />
</main>
  );
}
