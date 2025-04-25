'use client'

import { ProductType, } from '@/types/type'
import { useState } from 'react'



const ProductDetailImages = ( {SelectProduct}: {SelectProduct :  ProductType}) => {
  const [mainImage, setMainImage] = useState(SelectProduct.images[0]?.url)
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='hidden md:flex flex-col gap-4 mr-6'>
        {SelectProduct.images.map((_, index) => {
          return (
            <img
              onClick={() => {
                setMainImage(_.url)
              }}
              key={index}
              src={_.url}
              alt={_.altText}
              className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
            />
          )
        })}
      </div>
      <div className='md:w-full h-full'>
        <div className='mb-4 w-full h-full'>
          <img
            src={mainImage}
            alt='main product'
            className='w-full h-auto object-cover rounded-lg'
          />
        </div>
      </div>
      {/*  mobile version */}

      <div className='md:hidden flex overscroll-x-scroll gap-4'>
        {SelectProduct.images.map((_, index) => {
          return (
            <img
              onClick={() => {
                setMainImage(_.url)
              }}
              key={index}
              src={_.url}
              alt={_.altText}
              className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetailImages
