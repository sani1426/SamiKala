'use client'

import { Button } from '@/components/ui/button'
import { CartContextType, useCartContext } from '@/context/CartContext'

import { HiOutlineShoppingBag } from 'react-icons/hi'

const CartIcon = () => {

    const {toggleDrawer} = useCartContext() as CartContextType
  
  return (
    <Button onClick={toggleDrawer} className='text-xl'>
      <HiOutlineShoppingBag className='text-xl h-7 w-7' />
    </Button>
  )
}

export default CartIcon
