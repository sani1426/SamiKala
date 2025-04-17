"use client"

import { CartContextType, useCartContext } from "@/context/CartContext"
import {IoMdClose} from "react-icons/io"
import NavItem from "./NavItem"



const MobileSidebar = () => {

      const { sidebarOpen, toggleSidebar } = useCartContext() as CartContextType
  return (
    <div className={` sidebar-mobile ${sidebarOpen ? "translate-x-0" : "translate-x-full"}` }>
        <div className="flex justify-end p-4">
            <button onClick={toggleSidebar}>
                <IoMdClose className="h-6 w-6  hover:text-red-600 transition-all" />
            </button>
        </div>
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 font-beirut">منو</h2>

            <nav>
                <NavItem />
            </nav>
        </div>
    </div>
  )
}

export default MobileSidebar