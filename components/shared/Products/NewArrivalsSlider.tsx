import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { NewArrivalItem } from '@/lib/constance'

function NewArrivalSlider() {
  return (
    <section className='py-12 px-4 md:px-10 overflow-hidden'>
      <h1 className='text-center text-3xl font-bold my-8'>
        Explore New Arraivals
      </h1>
      <p className='text-lg mb-8 text-center'>
        Discover latest styles stright Off the runway, freshly added to keep
        your wardob on the cutting edge of fashion.
      </p>
      <Carousel className='w-full '>
        {NewArrivalItem.map((_, index) => (
          <CarouselContent key={index} className='-ml-1'>
            <CarouselItem className='pl-1 md:basis-1/3 lg:basis-1/4'>
   
                <Card>
                  <CardContent className='flex  items-center justify-center p-2'>
                    <div dir='ltr' className='relative '>
                      <img
                        className='w-full h-full'
                        src={_.images}
                        alt={_.altText}
                      />
                      <div className='flex w-full items-center justify-between absolute bottom-3 px-3'>
                        <h1 className=''>{_.name}</h1>
                        <p className='text-sm'>{_.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

            </CarouselItem>
          </CarouselContent>
        ))}

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default NewArrivalSlider
