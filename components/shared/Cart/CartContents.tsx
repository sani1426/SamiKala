import { Button } from '@/components/ui/button'

import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartItem = [
    {
      productId: 1,
      name: 'laptop',
      screen: 15 / 6,
      color: 'black',
      quantity: 1,
      price: 1500,
      image: 'https://picsum.photos/200?random=1',
    },
    {
      productId: 2,
      name: 'mobile',
      screen: 6,
      color: 'gold',
      quantity: 3,
      price: 2100,
      image: 'https://picsum.photos/200?random=1',
    },
    {
      productId: 3,
      name: 'monitor',
      screen: 21,
      color: 'silver',
      quantity: 2,
      price: 1900,
      image: 'https://picsum.photos/200?random=1',
    },
  ]

  return (
    <div>
      {cartItem.map((item) => (
        <div
          key={item.productId}
          className='flex items-start justify-between py-4 border-b'
        >
          <div className='flex  items-start'>
            <img
              alt='item.name'
              src={item.image}
              className='object-cover mr-4 rounded w-24 h-24'
            />
            <div>
              <h3>{item.name}</h3>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                screen : {item.screen} | color : {item.color}
              </p>
              <div className='flex items-center mt-2'>
                <Button variant={'destructive'} className='border rounded px-2 py-1 text-xl font-medium'>
                  -
                </Button>
                <span className='mx-4'>{item.quantity}</span>
                <Button className='border rounded px-2 py-1 text-xl font-medium'>
                  +
                </Button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {item.price.toLocaleString()}</p>
            <Button variant={'destructive'} >
                <RiDeleteBin3Line className='w-6 h-6 mt-2' />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContents
