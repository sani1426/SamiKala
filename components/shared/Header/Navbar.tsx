import Link from 'next/link'
import { IoLogoAlipay } from 'react-icons/io5'
import { HiOutlineUserCircle , HiOutlineShoppingBag , HiBars4 } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ThemeToogle'


const Navbar = () => {
  return (
    <>
      <nav className='container mx-auto flex-between py-4 px-6  bg-slate-100 text-black dark:bg-slate-800 dark:text-slate-100'>
        <div>
          <Link className='text-2xl flex-center gap-2 text-primary' href='/'>
            <IoLogoAlipay />
            <span className='font-beirut text-3xl font-bold'>سامی کالا</span>
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <Link
            className='text-sm rounded-lg text-gray-700 hover:bg-primary px-4 py-2 dark:text-slate-100 transition-all duration-500'
            href='/wear'
          >
            پوشاک
          </Link>
          <Link
            className='text-sm rounded-lg text-gray-700 hover:bg-primary px-4 py-2  dark:text-slate-100 transition-all duration-500'
            href='/laptop'
          >
            لپتاپ
          </Link>
          <Link
            className='text-sm rounded-lg text-gray-700 hover:bg-primary px-4 py-2  dark:text-slate-100 transition-all duration-500'
            href='/tools'
          >
            ابزار
          </Link>
          <Link
            className='text-sm rounded-lg text-gray-700 hover:bg-primary px-4 py-2  dark:text-slate-100 transition-all duration-500'
            href='/mobile'
          >
            موبایل
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <Button>
          <ModeToggle />
          </Button>
          <Button>
          <Link
            href='/profile'
            className='hover:text-primary transition-all duration-500'
          >
            <HiOutlineUserCircle className='h-7 w-7' />
          </Link>
          </Button>
          <Button>
            <HiOutlineShoppingBag className='h-7 w-7' />
          </Button>
          <Button className='md:hidden'>
            <HiBars4 className='h-7 w-7' />
          </Button>

        </div>
      </nav>
    </>
  )
}

export default Navbar
