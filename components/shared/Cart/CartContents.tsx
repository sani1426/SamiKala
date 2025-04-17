import { Button } from '@/components/ui/button'
import { cartItem } from '@/lib/constance';

import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {


  return (
    <div className='overflow-y-auto' dir='ltr'>
      {cartItem.map((item) => (
        <div
          key={item.productId}
          className='flex items-start justify-between py-4 border-b dark:border-b-slate-200 pl-2 pr-5'
        >
          <div className='flex  items-start'>
            <img
              alt='item.name'
              src={item.image}
              className='object-cover mr-4 rounded w-24 h-24'
            />
            <div>
              <h2 className='text-2xl'>{item.name}</h2>
              <p className='text-sm text-slate-700 dark:text-slate-400'>
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
          <div className='flex flex-col gap-6'>
            <p>$ {item.price.toLocaleString()}</p>
            <Button className='flex-center' variant={'destructive'} >
                <RiDeleteBin3Line className='w-6 h-6 mt-2' />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContents
