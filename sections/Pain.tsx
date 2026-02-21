"use client"

import Section from "@/components/Section"
import { useEffect, useRef } from "react"
import { revealOnScroll } from "@/lib/scrollReveal"

export default function Pain() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll(".reveal")
    revealOnScroll(items)
  }, [])

  return (
    <Section>
      <div ref={containerRef} className="max-w-3xl mx-auto space-y-24">

        <Quote text="HomeCourt counts my makes. But it never told me WHY I was missing." />
        <Quote text="I don’t need another badge. I need a program that actually makes me better." />
        <Quote text="Every training app feels like it was built for someone who plays twice a month." />

        <p className="reveal text-3xl font-semibold text-center mt-32">
          Built for hoopers who grind. Not fans who watch.
        </p>

      </div>
    </Section>
  )
}

function Quote({ text }: { text: string }) {
  return (
    <div className="reveal border-l-2 border-[#FF6B2B] pl-6">
      <p className="italic text-2xl">{text}</p>
    </div>
  )
}