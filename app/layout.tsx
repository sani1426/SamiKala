import type { Metadata } from 'next'

import './globals.css'
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constance'
import localFont from 'next/font/local'
import Layoutcomponent from '@/components/layout/layoutcomp'
import { Toaster } from 'sonner'

const myFont = localFont({ src: '../public/poppins/Poppins-Medium.ttf' })

export const metadata: Metadata = {
  title: {
    template: `${APP_NAME}  | %s`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa' dir='rtl' className='page-transition'>
      <body className={myFont.className}>
        <Layoutcomponent>{children}
        <Toaster  position="top-right" />
        </Layoutcomponent>
      </body>
    </html>
  )
}
