

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { NewArrivalItem } from "@/lib/constance"

 function NewArrivalSlider() {
  return (
    <section className="pt-5">
        <h1 className="text-center text-3xl">New Arrivall Product</h1>
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {NewArrivalItem.map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-2">
                <img src={_.images} alt={_.altText}  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}

export default  NewArrivalSlider