import Section from "@/components/Section"

const attributes = [
  ["STR","Strength"],
  ["SPD","Speed"],
  ["VRT","Vertical"],
  ["SHT","Shooting"],
  ["HND","Handles"],
  ["PAS","Passing"],
  ["DEF","Defense"],
  ["AGL","Agility"],
  ["DUR","Durability"],
  ["IQ","Game IQ"],
]

export default function Attributes() {
  return (
    <Section>
      <div className="w-full">

        <h2 className="text-5xl font-bold text-center mb-4">
          YOUR BUILD. YOUR ATTRIBUTES.
        </h2>

        <p className="text-center text-textSecondary mb-16">
          10 attributes. Infinite combinations.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="flex justify-center items-center">
            <div className="w-[420px] h-[420px] rounded-full border border-accentPrimary/30 shadow-glow" />
          </div>

          <div className="space-y-3">
            {attributes.map(([abbr,name])=>(
              <div key={abbr}
                className="bg-bgElevated border border-borderSubtle rounded-xl px-5 py-4 flex justify-between">
                <span className="font-bold text-accentPrimary">{abbr}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  )
}