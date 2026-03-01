import "./globals.css";

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden font-sans">
        {/* FIXED GLOBAL BACKGROUND: Prevents overlaps or resets */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center grayscale opacity-10 pointer-events-none transition-opacity duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069')" }} 
        />
        
        {/* PERSISTENT TECH GRID */}
        <div className="fixed inset-0 z-10 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* This vignette smooths the transition between all sections */}
        <div className="fixed inset-0 z-15 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_90%)] pointer-events-none" />

        <main className="relative z-20">
          {children}
        </main>
      </body>
    </html>
  )
}