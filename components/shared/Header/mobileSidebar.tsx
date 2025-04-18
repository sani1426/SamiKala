'use client'

import { CartContextType, useCartContext } from '@/context/CartContext'
import { IoMdClose } from 'react-icons/io'
import NavItem from './NavItem'
import Link from 'next/link'
import { IoLogoAlipay } from 'react-icons/io5'

const MobileSidebar = () => {
  const { sidebarOpen, toggleSidebar } = useCartContext() as CartContextType
  return (
    <div
      className={` sidebar-mobile ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex-between  p-4 mb-5'>
         <Link className='text-2xl flex-center gap-2 text-primary' href='/'>
          <IoLogoAlipay />
          <span className='font-beirut text-3xl font-bold'>سامی کالا</span>
        </Link>

        <button onClick={toggleSidebar}>
          <IoMdClose className='h-6 w-6  hover:text-red-600 transition-all' />
        </button>
       
      </div>
      <div>
        <nav className='flex flex-col justify-start gap-3'>
          <NavItem />
        </nav>
      </div>
    </div>
  )
}

export default MobileSidebar
