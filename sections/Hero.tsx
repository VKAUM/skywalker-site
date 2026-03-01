"use client"

import { useRef } from "react"
import Section from "@/components/Section"
import { heroEntrance } from "@/lib/animations"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // useGSAP is the recommended hook for Next.js/React to handle 
  // automatic cleanup and scoping
  useGSAP(() => {
    if (!containerRef.current) return
    
    // Trigger the initial entrance timeline defined in lib/animations
    heroEntrance(containerRef.current)

    // Breathing glow animation for the phone element
    gsap.to(".hero-phone", {
      boxShadow: "0 0 140px rgba(255,107,43,0.45)",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, { scope: containerRef }) // Scope limits selectors to this component only

  return (
    <Section>
      <div
        ref={containerRef}
        className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]"
      >

        {/* LEFT: Enhanced Typography and Spacing */}
        <div className="space-y-10">

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
            {/* Each line wrapped for the reveal animation */}
            <div className="overflow-hidden">
              <span className="reveal-line block">Train Like</span>
            </div>

            <div className="overflow-hidden">
              <span className="reveal-line block">It's A</span>
            </div>

            <div className="overflow-hidden">
              <span className="reveal-line block text-[#FF6B2B]">Video Game</span>
            </div>
          </h1>

          <p className="text-xl text-gray-400 max-w-md leading-relaxed">
            RPG-powered basketball training for hoopers who grind. 
            Level up your attributes in the real world.
          </p>

          <button className="hero-cta opacity-0 bg-[#FF6B2B] hover:bg-[#FF8F5A] transition-all duration-300 px-10 py-5 rounded-full font-bold text-xl uppercase tracking-widest shadow-[0_0_80px_rgba(255,107,43,0.25)] hover:scale-105">
            Join The Waitlist
          </button>

        </div>

        {/* RIGHT: High-Contrast Device Mockup */}
        <div className="flex justify-center relative">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-[#FF6B2B]/10 blur-[120px] rounded-full" />
          
          <div className="hero-phone relative z-10 w-[320px] h-[640px] rounded-[50px]
            bg-[#050505]
            border border-white/10
            shadow-[0_0_120px_rgba(255,107,43,0.35)]
            flex items-center justify-center"
          >
             {/* Inner screen detail */}
             <div className="w-[290px] h-[610px] rounded-[40px] border border-white/5 bg-gradient-to-b from-white/5 to-transparent" />
          </div>
        </div>

      </div>
    </Section>
  )
}