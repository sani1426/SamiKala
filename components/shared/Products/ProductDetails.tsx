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
          <div className='hidden md:flex flex-col gap-4 mr-6'>
            {SelectedProduct.images.map((_, index) => {
              return (
                <img
                  key={index}
                  src={_.url}
                  alt={_.altText}
                  className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                />
              )
            })}
          </div>
          <div className='md:w-1/2'>
            <div className='mb-4'>
              <img
                src={SelectedProduct.images[0]?.url}
                alt='main product'
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
          {/*  mobile version */}

          <div className='md:hidden flex overscroll-x-scroll gap-4'>
            {SelectedProduct.images.map((_, index) => {
              return (
                <img
                  key={index}
                  src={_.url}
                  alt={_.altText}
                  className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                />
              )
            })}
          </div>

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
                  ></button>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
