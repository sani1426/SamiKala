"use client"

import { Button } from "@/components/ui/button"
import { CartContextType, useCartContext } from "@/context/CartContext"
import { IoMdClose } from "react-icons/io"
import CartContents from "./CartContents"


const CartDrawer = () => {

    const { drawerOpen , toggleDrawer } = useCartContext() as CartContextType



  return (
    <div className={`cart-drawer  ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">

         { /* {close button} */}
            <button onClick={toggleDrawer} >
                <IoMdClose className="h-6 w-6 text-gray-600 hover:text-red-600 dark:text-slate-100 dark:hover:text-red-600" />
            </button>
        </div>
        <div className="flex-grow pt-2  ">
          <h2 className=" font-semibold mb-1 text-center font-beirut text-2xl">سبد خرید</h2>
        </div>
        <CartContents />
        <div className="p-4 sticky bottom-0">
          <Button  className="w-full py-3 rounded-lg font-semibold">پرداخت</Button>
        </div>
    </div>
  )
}

export default CartDrawer