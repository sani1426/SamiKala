import Header from '@/components/shared/Header/Header'


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
