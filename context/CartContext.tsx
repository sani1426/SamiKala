"use client"

import { createContext , useState , useContext} from "react"

export interface CartContextType {
    drawerOpen : boolean;
    toggleDrawer : () => void;

}

const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = ({children} : { children : React.ReactNode }) => {

    const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)


    return (
        <CartContext.Provider value={{drawerOpen , toggleDrawer}}>
            {children}
        </CartContext.Provider>

    )
}

export const useCartContext = () => useContext(CartContext)