"use client"

import { ProductType } from "@/types/type";
import { createContext , useState , useContext} from "react"

export interface CartContextType {
    drawerOpen : boolean;
    toggleDrawer : () => void;
    sidebarOpen : boolean;
    toggleSidebar : () => void;
    setSidebarOpen: (property : boolean) => void;
    selected : ProductType;
    settingSelectedHandler : (property : ProductType) => void;
}

const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = ({children} : { children : React.ReactNode }) => {

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [sidebarOpen , setSidebarOpen] = useState(false)
    const [selected , setSelected] = useState({})
 

  

    
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const toggleDrawer = () => setDrawerOpen(!drawerOpen)
  const settingSelectedHandler = (product : ProductType) => setSelected(product)


    return (
        <CartContext.Provider value={{drawerOpen , toggleDrawer , sidebarOpen , toggleSidebar , setSidebarOpen , selected , settingSelectedHandler}}>
            {children}
        </CartContext.Provider>

    )
}

export const useCartContext = () => useContext(CartContext)