import gsap from "gsap"

export function heroEntrance(container: HTMLElement) {
  const lines = container.querySelectorAll(".reveal-line")
  const cta = container.querySelector(".hero-cta")
  const phone = container.querySelector(".hero-phone")

  // 👇 ensure visible initial states
  gsap.set(lines, { y: 120, opacity: 0 })
  gsap.set(cta, { y: 40, opacity: 0 })
  gsap.set(phone, { scale: 0.9, opacity: 0 })

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

  tl.to(lines, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.18,
  })

  tl.to(cta, {
    y: 0,
    opacity: 1,
    duration: 0.8,
  }, "-=0.6")

  tl.to(phone, {
    scale: 1,
    opacity: 1,
    duration: 1.2,
  }, "-=1")

  return tl
}