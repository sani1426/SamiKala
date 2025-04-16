import Header from '@/components/shared/Header/Header'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <div>
    <Header />
  <main>{children}</main>
  </div>
  )
}
