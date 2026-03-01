"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const attributes = [
  "Strength", "Speed", "Vertical", "Shooting", "Handles", 
  "Passing", "Defense", "Agility", "Durability", "Game IQ"
]

export default function Attributes() {
  const section = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top 80%", // Triggers early to prevent a "gap" in the flow
        toggleActions: "play none none reverse",
      }
    })

    // Kinetic Reveal: Scale, Blur, and Snap
    gsap.set(titleRef.current, { y: -30, opacity: 0, filter: "blur(10px)" })
    gsap.set(".attr-word", { x: 50, opacity: 0, filter: "blur(15px)", scale: 1.1 })

    tl.to(titleRef.current, { 
      y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power4.out" 
    })
    .to(".attr-word", {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      stagger: 0.05,
      duration: 0.6,
      ease: "expo.out"
    }, "-=0.5")

  }, { scope: section })

  return (
    // Removed all background layers to fix the overlap issue
    <section 
      ref={section} 
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 bg-transparent"
    >
      <div className="relative z-30 w-full max-w-7xl px-6">
        
        {/* TITLE: Master Your Attributes */}
        <h2 
          ref={titleRef}
          className="text-white text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-24 text-center leading-none"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          Master Your <span className="text-[#FF6B2B]">Attributes</span>
        </h2>

        {/* FULL-WORD KINETIC LIST */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 md:gap-x-20 md:gap-y-16">
          {attributes.map((word) => (
            <div key={word} className="attr-word group cursor-pointer relative">
              <span 
                className="text-white/10 group-hover:text-white font-black text-4xl md:text-8xl italic tracking-tighter uppercase transition-all duration-300 block"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {word}
              </span>
              {/* Minimalist technical accent */}
              <div className="w-0 h-[3px] bg-[#FF6B2B] group-hover:w-full transition-all duration-500 mt-2 shadow-[0_0_15px_#FF6B2B]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}   