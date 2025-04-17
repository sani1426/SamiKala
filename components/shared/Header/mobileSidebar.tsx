"use client"

import { CartContextType, useCartContext } from "@/context/CartContext"
import {IoMdClose} from "react-icons/io"



const MobileSidebar = () => {

      const { sidebarOpen, toggleSidebar } = useCartContext() as CartContextType
  return (
    <div className={` sidebar-mobile ${sidebarOpen ? "translate-x-0" : "translate-x-full"}` }>
        <div className="flex justify-end p-4">
            <button>
                <IoMdClose className="h-6 w-6  hover:text-red-600 transition-all" />
            </button>
        </div>
    </div>
  )
}

export default MobileSidebar