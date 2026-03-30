"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ShootingIcon = () => {
  const root = useRef(null);
  useGSAP(() => {
    gsap.to(".ch-line", { scale: 1.3, duration: 0.8, repeat: -1, yoyo: true, stagger: 0.1, transformOrigin: "center" });
    gsap.to(".ch-center", { opacity: 0.4, duration: 0.5, repeat: -1, yoyo: true });
  }, { scope: root });
  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 stroke-[#FF6B2B] fill-none stroke-2">
      <circle cx="50" cy="50" r="35" strokeOpacity="0.2" />
      <line className="ch-line" x1="50" y1="10" x2="50" y2="30" />
      <line className="ch-line" x1="50" y1="70" x2="50" y2="90" />
      <line className="ch-line" x1="10" y1="50" x2="30" y2="50" />
      <line className="ch-line" x1="70" y1="50" x2="90" y2="50" />
      <circle className="ch-center" cx="50" cy="50" r="3" fill="#FF6B2B" />
    </svg>
  );
};

export const DefenseIcon = () => {
  const root = useRef(null);
  useGSAP(() => {
    gsap.to(".sh-glint", { x: 120, duration: 2, repeat: -1, ease: "power2.inOut" });
  }, { scope: root });
  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 stroke-[#FF6B2B] fill-none stroke-2">
      <defs>
        <clipPath id="shieldClip"><path d="M50 15 L80 25 L80 55 C80 75 50 85 50 85 C50 85 20 75 20 55 L20 25 Z" /></clipPath>
      </defs>
      <path d="M50 15 L80 25 L80 55 C80 75 50 85 50 85 C50 85 20 75 20 55 L20 25 Z" />
      <rect className="sh-glint" x="-60" y="0" width="40" height="100" fill="white" fillOpacity="0.4" transform="rotate(25)" clipPath="url(#shieldClip)" />
    </svg>
  );
};

export const DurabilityIcon = () => {
  const root = useRef(null);
  useGSAP(() => {
    gsap.fromTo(".bt-level", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 1.2, repeat: -1, stagger: 0.3, transformOrigin: "left" });
  }, { scope: root });
  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 stroke-[#FF6B2B] fill-none stroke-2">
      <rect x="20" y="35" width="55" height="30" rx="4" />
      <path d="M75 42 L75 58" strokeWidth="4" strokeLinecap="round" />
      <rect className="bt-level" x="25" y="40" width="12" height="20" fill="#FF6B2B" />
      <rect className="bt-level" x="42" y="40" width="12" height="20" fill="#FF6B2B" />
      <rect className="bt-level" x="59" y="40" width="12" height="20" fill="#FF6B2B" />
    </svg>
  );
};

export const IQIcon = () => {
  const root = useRef(null);
  useGSAP(() => {
    gsap.to(".player-o", { x: 12, y: -12, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".pass-arrow", { strokeDashoffset: 0, duration: 1.5, repeat: -1, ease: "none" });
  }, { scope: root });
  return (
    <svg ref={root} viewBox="0 0 100 100" className="w-16 h-16 stroke-[#FF6B2B] fill-none stroke-2">
      <rect x="15" y="25" width="70" height="50" rx="2" strokeOpacity="0.3" />
      <circle cx="50" cy="50" r="12" strokeOpacity="0.3" />
      <circle className="player-o" cx="30" cy="65" r="4" fill="#FF6B2B" />
      <path className="pass-arrow" d="M35 60 Q 50 35 65 60" strokeDasharray="6,4" strokeDashoffset="20" />
      <circle cx="70" cy="65" r="4" stroke="#FF6B2B" />
    </svg>
  );
};