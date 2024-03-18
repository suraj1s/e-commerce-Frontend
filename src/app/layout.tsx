import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Providers from "@/redux/redux-store/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "create next app",
  description: "Build using nextJs and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en ">
      <body className={`${inter.className} bg-primary-950 text-primary-200 `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
