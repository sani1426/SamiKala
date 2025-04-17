"use client"

import { ThemeProvider } from "./theme-provider";






const Layoutcomponent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
     <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
    {children}
    </ThemeProvider>
    </>
  )
}

export default Layoutcomponent