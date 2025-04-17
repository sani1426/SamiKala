"use client"

import { Button } from "@/components/ui/button"
import { CartContextType, useCartContext } from "@/context/CartContext"
import { IoMdClose } from "react-icons/io"


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
        <div className="flex-grow p-4 overflow-y-auto ">
          <h2 className="text-xl font-semibold mb-4 text-center">سبد خرید</h2>
        </div>
        <div className="p-4 sticky bottom-0">
          <Button  className="w-full py-3 rounded-lg font-semibold">پرداخت</Button>
        </div>
    </div>
  )
}

export default CartDrawer