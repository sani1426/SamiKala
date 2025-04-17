'use client'

import { Button } from '@/components/ui/button'
import { CartContextType, useCartContext } from '@/context/CartContext'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { HiBars4 } from 'react-icons/hi2'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const NavIcon = () => {
  const { toggleDrawer, toggleSidebar } = useCartContext() as CartContextType

  return (
    <>
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

      <Button onClick={toggleSidebar} className='md:hidden text-xl'>
        <HiBars4 className='h-7 w-7 text-2xl' />
      </Button>
    </>
  )
}

export default NavIcon
