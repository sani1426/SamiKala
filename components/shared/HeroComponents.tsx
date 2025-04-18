


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"

const HeroComponents = () => {
  return (
    <div>
       <Carousel className="w-full max-w-xs">
      <CarouselContent className="w-screen h-screen">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-screen h-screen">
            <Image src="/images/rabbit-hero.webp" alt="hero_image" fill />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default HeroComponents