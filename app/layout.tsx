import "./globals.css"
import Navbar from "@/components/Navbar"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"

export const metadata = {
  title: "Sky Walker",
  description: "Train like it's a video game"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SmoothScrollProvider>
        <Navbar />
         {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}