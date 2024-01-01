import Footers from '@/components/common/header-footer/footer/Footers'
import Headers from '@/components/common/header-footer/header/Headers'


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
