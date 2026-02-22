"use client"

import { ReactNode, useLayoutEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: ReactNode }) {

  useLayoutEffect(() => {

    const lenis = new Lenis({
      lerp: 0.08
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