import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyWalker | Elite Performance",
  description: "Master your basketball attributes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden antialiased">
        {/* GLOBAL PERSISTENT BACKGROUND */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center grayscale opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2022')" }} 
        />
        
        {/* GLOBAL TECH GRID */}
        <div className="fixed inset-0 z-10 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* VIGNETTE TO BLEND SECTIONS */}
        <div className="fixed inset-0 z-15 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_90%)] pointer-events-none" />

        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  );
}