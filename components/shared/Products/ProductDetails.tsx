"use client"
import { toast } from "sonner"



import { Button } from '@/components/ui/button'
import ProductDetailImages from './ProductDetailImages'
import { useState } from 'react'

const SelectedProduct = {
  _id : "iam id",
  name: 'Stylish Jacket',
  price: 120,
  discountPrice: 150,
  description: 'This is a stylish jacket prfect for any occasion',
  brand: 'FashionBrand',
  material: 'Leather',
  size: ['S', 'M', 'L', 'XL'],
  colors: ['Red', 'Black'],
  images: [
    {
      url: 'https://picsum.photos/500/500?random=1',
      altText: 'stylish jacket 1',
    },
    {
      url: 'https://picsum.photos/500/500?random=2',
      altText: 'stylish jacket 2',
    },
  ],
}

const ProductDetails = () => {

const [selectedColor , setSelectedColor] = useState("")
const [selectedSize , setSelectedSize] = useState("")
const [quantity , setQuantity] = useState(1)
const [disable , setDisable] = useState(false)

const AddingToCart = () => {
  if (!selectedSize || !selectedColor) {
    toast.error("plese select a size and color before adding to cart" , {
      duration: 1000
    });
    return;
  }

  setDisable(true)
  setTimeout(() => {
    toast.success('product added to cart' , {duration:100})

    setDisable(false)
  },500 );
}


  return (
    <div dir='ltr' className='p-6'>
      <div className='max-w-6xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-lg'>
        <div className='flex flex-col md:flex-row'>
          <ProductDetailImages   SelectProduct={SelectedProduct} />
          <div className='md:w-1/2 md:ml-10'>
            <h1 className='text-2xl text-slate-950 dark:text-slate-50 md:text-3xl font-semibold mb-2'>
              {SelectedProduct.name}
            </h1>
            <p className='text-lg mb-1 line-through text-slate-700 dark:text-slate-300'>
              {SelectedProduct.price &&
                `${SelectedProduct.price}`}
            </p>
            <p className='text-xl mb-2 text-slate-900 dark:slate-100 '>
              $ {SelectedProduct.discountPrice}
            </p>
            <p className='mb-4 text-slate-700 dark:text-slate-300'>
              {SelectedProduct.description}
            </p>
            <div className='mb-4'>
              <p>Color :</p>
              <div className='flex gap-2 mt-2'>
                {SelectedProduct.colors.map((color, index) => (
                  <button
                  onClick={()=> setSelectedColor(color)}
                    key={index}
                    className={ `${selectedColor === color ? "border-4 border-sky-600 dark:border-white" : ""}  w-8 h-8 rounded-full border`}
                    style={{
                      background: color.toLocaleLowerCase(),
                      filter: 'brightness(0.5)',
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className='mb-4'>
              <p>Size :</p>
              <div className='flex gap-2 mt-2'>
                {SelectedProduct.size.map((size) => (
                  <button
                  onClick={()=> setSelectedSize(size)}
                    key={size}
                    className={`${selectedSize === size ?  "bg-black text-white dark:bg-white dark:text-black" : "bg-white text-black dark:bg-black dark:text-white"}  px-4 py-2 rounded border `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='mb-6'>
              <p>Quantity :</p>
              <div className='flex items-center gap-x-4 mt-2'>
                <button
                onClick={()=> setQuantity(quantity - 1)}
                className='px-2 bg-gray-400 rounded text-lg dark:bg-gray-700'>
                  -
                </button>
                <span className='text-lg'>{quantity}</span>
                <button
                onClick={()=> setQuantity(quantity + 1)}
                className='px-2 bg-gray-400 dark:bg-gray-700 rounded text-lg'>
                  +
                </button>
              </div>
            </div>

            <Button
            onClick={AddingToCart}
            className={`${disable === true ? "bg-violet-400" : ""}  py-2 px-6 w-full mb-4 rounded`}>
              Add to Cart
            </Button>
            <div className='mt-10'>
              <h3 className='text-xl font-bold mb-4'>Characteristics :</h3>
              <table className='w-full text-left text-sm '>
                <tbody>
                  <tr>
                    <td className='py-1'>Brand</td>
                    <td className='py-1'>{SelectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className='py-1'>Material</td>
                    <td className='py-1'>{SelectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
