import LenisProvider from "@/components/smooth-scroll/LenisProvider"
import Hero from "@/sections/Hero"
// import ShotSwish from "@/components/cinematic/ShotSwish" // Complete version
import Pain from "@/sections/Pain"
import Attributes from "@/sections/Attributes"
import CTA from "@/sections/CTA"
import Footer from "@/sections/Footer"

// app/page.tsx
export default function Page() {
  return (
    <LenisProvider>
      <Hero />
      <Pain />
      {/* ONLY ONE OF THESE SHOULD BE HERE */}
      <Attributes /> 
      <CTA />
      <Footer />
    </LenisProvider>
  )
}