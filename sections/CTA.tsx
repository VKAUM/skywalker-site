import Section from "@/components/Section"

export default function CTA() {
  return (
    <Section>
      <div className="text-center max-w-xl mx-auto">

        <h2 className="text-6xl font-bold">
          STOP TRAINING BLIND.
        </h2>

        <h2 className="text-6xl font-bold text-accentPrimary mb-12">
          START BUILDING YOUR LEGACY.
        </h2>

        <input
          placeholder="Enter your email"
          className="w-full h-14 bg-bgElevated border border-borderSubtle rounded-xl px-6 mb-4"
        />

        <button className="w-full h-14 bg-accentPrimary hover:bg-accentGlow transition rounded-xl font-semibold shadow-glowStrong">
          JOIN THE WAITLIST
        </button>

      </div>
    </Section>
  )
}