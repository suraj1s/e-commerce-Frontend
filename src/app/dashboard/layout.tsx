import Footers from '@/components/common/header-footer/footer/Footers'
import Headers from '@/components/common/header-footer/header/Headers'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'NextGen E-commerce',
  description: 'Build using nextJs and typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <div>
    <Headers />
       {children}
    <Footers />
   </div>
  )
}
