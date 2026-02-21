"use client"

import { useEffect, useRef } from "react"
import Section from "@/components/Section"
import { heroEntrance } from "@/lib/animations"
import gsap from "gsap"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    heroEntrance(containerRef.current)

    // subtle glow breathing animation
    gsap.to(".hero-phone", {
      boxShadow: "0 0 140px rgba(255,107,43,0.45)",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  return (
    <Section>
      <div
        ref={containerRef}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT */}
        <div className="space-y-8">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight overflow-hidden">

            <div className="overflow-hidden">
              <span className="reveal-line block">Train Like</span>
            </div>

            <div className="overflow-hidden">
              <span className="reveal-line block">It's A</span>
            </div>

            <div className="overflow-hidden">
              <span className="reveal-line block">Video Game</span>
            </div>

          </h1>

          <p className="text-lg text-gray-400 max-w-md">
            RPG-powered basketball training for hoopers who grind.
          </p>

          <button className="hero-cta opacity-100 bg-[#FF6B2B] hover:bg-[#FF8F5A] transition px-8 py-4 rounded-xl font-semibold text-lg shadow-[0_0_80px_rgba(255,107,43,0.25)]">
            Join The Waitlist
          </button>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="hero-phone w-[320px] h-[640px] rounded-[50px]
          bg-[#111111]
          border border-orange-500/30
          shadow-[0_0_120px_rgba(255,107,43,0.35)]" />
        </div>

      </div>
    </Section>
  )
}