import Link from 'next/link'
import { IoLogoAlipay } from 'react-icons/io5'
import {
  HiOutlineUserCircle,
} from 'react-icons/hi2'
import { Button } from '@/components/ui/button'

import NavItem from './NavItem'
import SearchBar from './SearchBar'
import { ModeToggle } from './ThemeToogle'
import CartDrawer from '../Cart/CartDrawer'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import NavIcon from '../Cart/navIcon'
import MobileSidebar from './mobileSidebar'


const Navbar = () => {
  return (
    <>
      <nav className='container mx-auto flex-between py-4 px-6  bg-slate-100 text-black dark:bg-slate-800 dark:text-slate-100'>
        <div>
          <Link className='text-2xl flex-center gap-2 text-primary' href='/'>
            <IoLogoAlipay />
            <span className='font-beirut text-3xl font-bold'>Sami Kala</span>
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-1'>
        <NavItem />
        </div>

        <div className='flex items-center gap-4'>
         <ModeToggle />

         <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button className='text-xl'>
            <Link
              href='/profile'
            >
              <HiOutlineUserCircle className='h-7 w-7 text-xl' />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>ثبت نام</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
       
         
          <div className="overflow-hidden">
          <SearchBar />
          </div>
          <NavIcon />
        
        </div>
      </nav>
      <CartDrawer />

      <MobileSidebar />
    </>
  )
}

export default Navbar
