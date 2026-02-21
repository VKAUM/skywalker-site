export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50 bg-black/70 backdrop-blur-md border-b border-borderSubtle">

      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20">

        <div className="text-xl font-bold tracking-wide">
          SKY WALKER
        </div>

        <nav className="flex items-center gap-8 text-sm text-textSecondary">
          <a href="#">Features</a>
          <a href="#">Archetypes</a>
          <a href="#">The Grind</a>

          <button className="bg-accentPrimary hover:bg-accentGlow transition px-5 py-2 rounded-lg text-white font-semibold shadow-glow">
            Join Waitlist
          </button>
        </nav>

      </div>

    </header>
  )
}