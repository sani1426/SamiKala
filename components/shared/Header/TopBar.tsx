import { TbBrandMeta } from "react-icons/tb";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";


const TopBar = () => {
  return (
    <div className="bg-primary-500 text-primary-50">
        <div className="container mx-auto flex-between py-3 px-4">
            <div className=" items-center space-x-4 hidden md:flex">
        <a href="/" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
        </a>
        <a href="/" className="hover:text-gray-300">
            <LuInstagram className="h-5 w-5" />
        </a>
        <a href="/" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
        </a>
        </div>

        <div className="text-sm text-center ">
        <span>ارسال به سراسر کشور - ارسال سریع و قابل اعتماد</span>
        </div>
        <div className="text-sm hidden md:block">
            <a href="tel:09914318174" className="hover:text-gray-300">09914318174</a>
        </div>
        </div>
    </div>
  )
}

export default TopBar