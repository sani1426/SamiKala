"use client"

type Image = {
    url: string;
    altText: string;
  };

export type SelectedProductProps ={
    name : string ,
    price : number ,
    orginalPrice: number ,
    description :string ,
    brand : string ,
    material : string ,
    size: string[] ,
    colors : string[],
    images : Image [],
    
}


const ProductDetailImages = ({SelectedProduct } : { SelectedProduct: SelectedProductProps}) => {
  return (
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
</div>
  )
}

export default ProductDetailImages