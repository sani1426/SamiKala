"use client"

import { createContext , useState , useContext} from "react"

export interface CartContextType {
    drawerOpen : boolean;
    toggleDrawer : () => void;
    sidebarOpen : boolean;
    toggleSidebar : () => void;
    setSidebarOpen: (property : boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = ({children} : { children : React.ReactNode }) => {

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [sidebarOpen , setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleDrawer = () => setDrawerOpen(!drawerOpen)


    return (
        <CartContext.Provider value={{drawerOpen , toggleDrawer , sidebarOpen , toggleSidebar , setSidebarOpen}}>
            {children}
        </CartContext.Provider>

    )
}

export const useCartContext = () => useContext(CartContext)