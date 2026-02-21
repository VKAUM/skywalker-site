import gsap from "./gsap"

export function revealOnScroll(elements: NodeListOf<Element>) {
  elements.forEach((el) => {
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    })
  })
}