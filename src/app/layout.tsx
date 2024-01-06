import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Providers from '@/redux/redux-store/Providers'
import Footers from '@/components/common/header-footer/footer/Footers'
import Headers from '@/components/common/header-footer/header/Headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'create next app',
  description: 'Build using nextJs and typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en ">
      <body className={`${inter.className} bg-background text-gray-600 `  }>
     <Providers>
     <Headers />
       {children}
    <Footers />
      </Providers>
        
        </body>
    </html>
  )
}
