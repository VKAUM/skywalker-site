import LenisProvider from "@/components/smooth-scroll/LenisProvider";
import Hero from "@/sections/Hero";
import Pain from "@/sections/Pain";
import Attributes from "@/sections/Attributes";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Page() {
  return (
    <LenisProvider>
      <Hero />
      <Pain />
      <Attributes />
      <CTA />
      <Footer />
    </LenisProvider>
  );
}