"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

export default function ShotSwish() {

  const section = useRef<HTMLDivElement>(null)
  const ball = useRef<HTMLDivElement>(null)
  const hoop = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLHeadingElement>(null)
  const celebration = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {

    const sectionRect = section.current!.getBoundingClientRect()
    const ballRect = ball.current!.getBoundingClientRect()
    const hoopRect = hoop.current!.getBoundingClientRect()
    const textRect = text.current!.getBoundingClientRect()

    // convert everything to SECTION coordinate space
    const startX = ballRect.left - sectionRect.left + ballRect.width / 2
    const startY = textRect.top - sectionRect.top + textRect.height / 2

    const hoopX = hoopRect.left - sectionRect.left + hoopRect.width / 2
    const hoopY = hoopRect.top - sectionRect.top + hoopRect.height / 2

    // move ball vertically to align with text center
    gsap.set(ball.current, {
      top: startY - ballRect.height / 2
    })

    // arc peak height
    const peakX = (startX + hoopX) / 2
    const peakY = startY - 220

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top 85%",   // starts when text appears
        end: "top -85%",     // finishes while still visible
        scrub: true
      }
    })

    // text reveal
    tl.from(text.current, {
      opacity: 0,
      y: 40,
      duration: 0.2
    })

    // ball parabolic shot
    tl.to(ball.current, {
      duration: 0.45,
      ease: "none",
      motionPath: {
        path: [
          { x: startX - startX, y: 0 },
          { x: peakX - startX, y: peakY - startY },
          { x: hoopX - startX, y: hoopY - startY }
        ],
        curviness: 1.5
      }
    })

    // rim shake
    tl.to(hoop.current, {
      scale: 1.2,
      duration: 0.08,
      yoyo: true,
      repeat: 2
    })

    // celebration burst
    tl.fromTo(celebration.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1.3,
        opacity: 1,
        duration: 0.15,
        ease: "back.out(4)"
      },
      "-=0.2"
    )

    // fade celebration quickly
    tl.to(celebration.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2
    })

  }, [])

  return (
    <section
      ref={section}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden text-white"
    >

      {/* TEXT */}
      <h1
        ref={text}
        className="text-6xl md:text-7xl font-extrabold tracking-widest"
      >
        NOTHING BUT NET
      </h1>

      {/* BALL */}
      <div
        ref={ball}
        className="absolute w-[60px] h-[60px] rounded-full bg-orange-500 shadow-xl"
        style={{ left: "15%", top: "50%" }}
      />

      {/* HOOP */}
      <div
        ref={hoop}
        className="absolute right-[14%] top-[50%] w-[90px] h-[12px] bg-red-600 rounded"
      />

      {/* CELEBRATION FLASH */}
      <div
        ref={celebration}
        className="absolute right-[14%] top-[48%] w-[140px] h-[140px] rounded-full bg-yellow-400 blur-2xl opacity-0"
      />

    </section>
  )
}