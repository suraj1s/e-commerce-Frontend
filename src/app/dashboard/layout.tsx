import Footers from "@/components/common/header-footer/footer/Footers";
import Headers from "@/components/common/header-footer/header/Headers";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Headers />
      <Toaster />
      {children}
      <Footers />
    </div>
  );
}
