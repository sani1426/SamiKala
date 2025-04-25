import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import axios from 'axios'
import { ProductType } from '@/types/type'

async function NewArrivalSlider() {

  const { data } = await axios.get(
    'https://sami-kala.vercel.app/api/products/new-arrivals'
  )

  const NewArrivalItem: ProductType[] = data

  return (
    <section className='py-12 px-4 md:px-5 '>
      <h1 className='text-center text-3xl font-bold my-8'>
        Explore New Arraivals
      </h1>
      <p className='text-lg mb-8 text-center'>
        Discover latest styles stright Off the runway, freshly added to keep
        your wardob on the cutting edge of fashion.
      </p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {NewArrivalItem.map((product) => (
            <CarouselItem
              key={product.name}
              className='md:basis-1/3 lg:basis-1/5'
            >
              <div className='relative rounded-lg px-2 overflow-hidden'>
                <img
                  className='w-full h-full rounded-lg'
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                />
                <div
                  dir='ltr'
                  className='absolute bottom-2 w-full flex justify-between items-center px-2'
                >
                  <h1 className='text-white font-bold '>{product.name}</h1>
                  <p className='text-white text-sm'>${product.price}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
    </section>
  )
}

export default NewArrivalSlider
