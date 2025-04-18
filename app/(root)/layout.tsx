import Header from '@/components/shared/Header/Header'
import Footer from '@/components/shared/footer'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <div>
    <Header />
  <main>{children}</main>
  <Footer />
  </div>
  )
}
