"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ShootingIcon, DefenseIcon, DurabilityIcon, IQIcon } from "@/components/Icons/AttributeIcons"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const attributesData = [
  { name: "Shooting", icon: <ShootingIcon /> },
  { name: "Defense", icon: <DefenseIcon /> },
  { name: "Durability", icon: <DurabilityIcon /> },
  { name: "Game IQ", icon: <IQIcon /> },
  { name: "Vertical", icon: <ShootingIcon /> }, // Placeholder for now
]

export default function Attributes() {
  const section = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    gsap.set(titleRef.current, { y: -30, opacity: 0, filter: "blur(10px)" });
    gsap.set(".attr-card", { y: 50, opacity: 0, scale: 0.9 });

    tl.to(titleRef.current, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 })
      .to(".attr-card", { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.8, ease: "expo.out" }, "-=0.4");
  }, { scope: section });

  return (
    <section ref={section} className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 bg-transparent z-30">
      <div className="w-full max-w-7xl px-6">
        <h2 ref={titleRef} className="text-white text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-24 text-center leading-none">
          Master Your <span className="text-[#FF6B2B]">Attributes</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {attributesData.map((attr) => (
            <div key={attr.name} className="attr-card group flex flex-col items-center bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-[#FF6B2B]/50 transition-all duration-300">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {attr.icon}
              </div>
              <span className="text-white font-black italic text-2xl uppercase tracking-tighter text-center">
                {attr.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}