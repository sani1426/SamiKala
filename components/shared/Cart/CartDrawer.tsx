"use client"

import { CartContextType, useCartContext } from "@/context/CartContext"
import { IoMdClose } from "react-icons/io"


const CartDrawer = () => {

    const { drawerOpen , toggleDrawer } = useCartContext() as CartContextType



  return (
    <div className={`cart-drawer  ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
            <button onClick={toggleDrawer} >
                <IoMdClose className="h-6 w-6 text-gray-600 hover:text-red-600 dark:text-slate-100 dark:hover:text-red-600" />
            </button>
        </div>
    </div>
  )
}

export default CartDrawer