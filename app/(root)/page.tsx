import GenderCollection from "@/components/shared/Products/GenderCollection";
import NewArrivalSlider from "@/components/shared/Products/NewArrivalsSlider";
import HeroSection from "@/section/HeroSection";



export default function Home() {
  return (
<main>
  <HeroSection />
  <GenderCollection />
  <NewArrivalSlider />
</main>
  );
}
