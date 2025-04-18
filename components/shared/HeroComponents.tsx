import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Card from './Card'

const HeroComponents = () => {
  return (
    <Carousel
    plugins={[
        Autoplay({
          delay: 3000,
        })
    ]}
    opts={{
        align: "start",
        loop: true,
      }}
    >
    <CarouselContent>
      <CarouselItem className="w-screen h-screen">
        <Card src='/images/mens-collection.webp' title='لباس مردانه' />
      </CarouselItem>
      <CarouselItem className="w-screen h-screen">
      <Card src='/images/rabbit-hero.webp' title='فروشگاه سامی کالا' />
      </CarouselItem>
      <CarouselItem className="w-screen h-screen">
      <Card src='/images/womens-collection.webp' title='لباس  زنانه' />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
      <CarouselNext />
  </Carousel>
  )
}

export default HeroComponents
