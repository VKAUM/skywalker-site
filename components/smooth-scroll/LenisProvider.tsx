// components/smooth-scroll/LenisProvider.tsx
"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: ReactNode }) {

  useEffect(() => {
    // Magic5-style heavy smooth scrolling
    const lenis = new Lenis({
      lerp: 0.05,        // Lowered from 0.08 for a smoother, weightier feel
      duration: 1.5,     // Slightly longer scroll duration
      smoothWheel: true,
      wheelMultiplier: 1.0,
    })

    function raf(time: number) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}