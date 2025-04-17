import { TbBrandMeta } from "react-icons/tb";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";




const TopBar = () => {
  return (
    <div className="primary">
        <div className="container mx-auto text-center md:flex-between py-3 px-4">
            <div className="hidden md:flex-center gap-4">
        <a href="/" className="hover:text-gray-300 transition-all duration-300">
            <TbBrandMeta className="h-6 w-6" />
        </a>
        <a href="/" className="hover:text-gray-300 transition-all duration-300">
            <LuInstagram className="h-6 w-6" />
        </a>
        <a href="/" className="hover:text-gray-300 transition-all duration-300">
            <RiTwitterXLine className="h-5 w-5" />
        </a>
        
        </div>

        <div className="text-sm text-center ">
        <span className="font-beirut text-xl" >ارسال به سراسر کشور - ارسال سریع و قابل اعتماد</span>
        </div>
        
        <div className="text-sm hidden md:block">
            <a href="tel:09914318174" className="hover:text-gray-300 transition-all duration-300">09914318174</a>
        </div>
        </div>
    </div>
  )
}

export default TopBar