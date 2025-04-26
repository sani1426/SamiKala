import { ProductType } from '@/types/type'
import Link from 'next/link'

const ProductGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cools-2 lg:grid-cols-4 gap-3 gap-y-4'>
      {products.map((product, index) => (
        <Link key={index} href={`/products/${product._id}`} className='block'>
          <div className=' p-4 rounded-lg shadow-lg shadow-slate-800  dark:shadow-slate-300'>
            <div className='w-full h-96 mb-4 relative'>
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className='w-full h-full object-cover rounded-lg  hover:opacity-0 transition-all duration-500'
              />
              <img
                src={product.images[1]?.url}
                alt={product.images[1]?.altText}
                className='absolute top-0 w-full h-full object-cover rounded-lg  opacity-0 hover:opacity-[1] transition-all duration-500'
              />
            </div>
            <h3 className='text-sm mb-2'>{product.name}</h3>
            <div className='flex items-center justify-between'> 
            <p className='text-gray-500 dark:text-gray-400 font-medium text-sm tracking-tighter'>
              $ {product.price}
            </p>
            <p className='text-gray-500 dark:text-gray-400 font-medium text-sm tracking-tighter'>
              $ {product.gender}
            </p>
            </div>
         
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid
