'use client'

import { CartContextProvider } from '@/context/CartContext'
import { ThemeProvider } from './theme-provider'

const Layoutcomponent = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        // disableTransitionOnChange
      >
        <CartContextProvider>{children}</CartContextProvider>
      </ThemeProvider>
    </>
  )
}

export default Layoutcomponent
