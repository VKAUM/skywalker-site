import LenisProvider from "@/components/smooth-scroll/LenisProvider"

import Hero from "@/sections/Hero"
import Pain from "@/sections/Pain"
import Attributes from "@/sections/Attributes"
import CTA from "@/sections/CTA"
import Footer from "@/sections/Footer"

import ShotSwish from "@/components/cinematic/ShotSwish"

export default function Page() {
  return (
    <LenisProvider>

      <Hero />

      {/* Signature basketball moment */}
      <ShotSwish />

      <Pain />
      <Attributes />
      <CTA />
      <Footer />

    </LenisProvider>
  )
}