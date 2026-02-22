"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ShotMoment() {
  const section = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const text = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {

    // fade in cinematic text
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: section.current,
        start: "top 70%"
      },
      opacity: 0,
      y: 60,
      duration: 1
    })

    // subtle zoom for drama
    gsap.to(video.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

  }, [])

  return (
    <section
      ref={section}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={video}
        src="/videos/shot.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <h1
          ref={text}
          className="text-white text-6xl md:text-7xl font-extrabold tracking-widest"
        >
          NOTHING BUT NET
        </h1>
      </div>
    </section>
  )
}