

import { Button } from "@/components/ui/button"
import ProductDetailImages from "./ProductDetailImages"


const SelectedProduct = {
  name: 'Stylish Jacket',
  price: 120,
  orginalPrice: 150,
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
  return (
    <div dir='ltr' className='p-6'>
      <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
        <div className='flex flex-col md:flex-row'>
            <ProductDetailImages SelectedProduct ={SelectedProduct} />
          <div className='md:w-1/2 md:ml-10'>
            <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
              {SelectedProduct.name}
            </h1>
            <p className='text-lg mb-1 line-through'>
              {SelectedProduct.orginalPrice &&
                `${SelectedProduct.orginalPrice}`}
            </p>
            <p className='text-xl mb-2'>$ {SelectedProduct.price}</p>
            <p className='mb-4'>{SelectedProduct.description}</p>
            <div className='mb-4'>
              <p>Color :</p>
              <div className='flex gap-2 mt-2'>
                {SelectedProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className='w-8 h-8 rounded-full border'
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
                    key={size}
                    className='px-4 py-2 rounded border'
                  >{size}</button>
                ))}
              </div>
            </div>

            <div className='mb-6'>
              <p>Quantity :</p>
              <div className='flex items-center gap-x-4 mt-2'>
                <button className='px-2 bg-gray-200 rounded text-lg'>-</button>
                <span className='text-lg'>1</span>
                <button className='px-2 bg-gray-200 rounded text-lg'>+</button>
              </div>
            </div>

            <Button className="py-2 px-6 w-full mb-4 rounded">Add to Cart</Button>
            <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Characteristics :</h3>
                <table className="w-full text-left text-sm ">
                    <tbody>
                        <tr>
                        <td className="py-1">
                            Brand</td>
                        <td className="py-1">
                            {SelectedProduct.brand}</td>
                            
                            </tr>
                        <tr>
                        <td className="py-1">
                            Material</td>
                        <td className="py-1">
                            {SelectedProduct.material}</td>
                            
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
