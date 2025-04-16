import Link from 'next/link'
import { IoLogoAlipay } from 'react-icons/io5'
import {
  HiOutlineUserCircle,
  HiOutlineShoppingBag,
  HiBars4,
} from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ThemeToogle'
import NavItem from './NavItem'


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

        <div className='hidden md:flex items-center gap-1'>
        <NavItem />
        </div>

        <div className='flex items-center gap-4'>
          <ModeToggle />

          <Button>
            <Link
              href='/profile'
              className='hover:text-primary transition-all duration-500'
            >
              <HiOutlineUserCircle className='h-7 w-7 text-xl' />
            </Link>
          </Button>
          <Button>
            <HiOutlineShoppingBag className='text-xl h-7 w-7' />
          </Button>
          <Button className='md:hidden'>
            <HiBars4 className='h-7 w-7 text-2xl' />
          </Button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
