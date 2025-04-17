'use client'

import { Button } from '@/components/ui/button'
import { CartContextType, useCartContext } from '@/context/CartContext'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import { HiOutlineShoppingBag } from 'react-icons/hi'

const CartIcon = () => {

    const {toggleDrawer} = useCartContext() as CartContextType
  
  return (
    <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
    <TooltipContent>سبد خرید</TooltipContent>
    <Button onClick={toggleDrawer} className='text-xl'>
      <HiOutlineShoppingBag className='text-xl h-7 w-7' />
    </Button>
    </TooltipTrigger>
  </Tooltip>
</TooltipProvider>
  )
}

export default CartIcon
