export default function Section({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}