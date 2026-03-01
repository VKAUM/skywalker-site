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

export default function ShotSwish() {
  const section = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // 1. PERSISTENT BACKGROUND BEHAVIOR
    // This ensures the background feels connected to the rest of the site
    gsap.to(".global-arena-bg", {
      scale: 1.2,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })

    // 2. ENTRANCE TIMELINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top 60%", // Earlier trigger for seamless flow
        toggleActions: "play none none reverse",
      }
    })

    gsap.set(titleRef.current, { opacity: 0, scale: 0.8, filter: "blur(10px)" })
    gsap.set(".attr-word", { opacity: 0, x: -20, filter: "blur(5px)" })

    tl.to(titleRef.current, { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)", 
      duration: 1, 
      ease: "expo.out" 
    })
    .to(".attr-word", {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")

  }, { scope: section })

  return (
    <section 
      ref={section} 
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 overflow-hidden"
    >
      {/* GLOBAL BACKGROUND - Persistent Atmosphere */}
      <div 
        className="global-arena-bg absolute inset-0 z-0 bg-cover bg-center grayscale opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069')" }} 
      />
      
      {/* PERSISTENT GRID - Connects this section to others */}
      <div className="absolute inset-0 z-10 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_95%)]" />

      <div className="relative z-30 w-full max-w-6xl px-6">
        
        {/* CINEMATIC TITLE */}
        <h2 
          ref={titleRef}
          className="text-white text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-20 text-center leading-tight"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          Master Your <span className="text-[#FF6B2B]">Attributes</span>
        </h2>

        {/* FULL-WORD ATTRIBUTE SHOWCASE */}
        <div ref={gridRef} className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-16">
          {attributes.map((word) => (
            <div key={word} className="attr-word group cursor-pointer relative">
              {/* Technical framing lines */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[1px] h-0 group-hover:h-full bg-[#FF6B2B] transition-all duration-500" />
              
              <span 
                className="text-white/20 group-hover:text-white font-black text-4xl md:text-7xl italic tracking-tighter uppercase transition-all duration-500 block"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {word}
              </span>
              
              {/* Secondary label for tech feel */}
              <span className="text-[10px] font-mono tracking-[0.5em] text-[#FF6B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -bottom-4 left-0">
                DATA_POINT_{word.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}