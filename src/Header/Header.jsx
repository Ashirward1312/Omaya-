function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-light tracking-[0.35em] text-white"
        >
          OMAYA
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#about"
            className="text-sm tracking-wide text-white/80 transition duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#suites"
            className="text-sm tracking-wide text-white/80 transition duration-300 hover:text-white"
          >
            Suites
          </a>

          <a
            href="#amenities"
            className="text-sm tracking-wide text-white/80 transition duration-300 hover:text-white"
          >
            Amenities
          </a>

          <a
            href="#contact"
            className="text-sm tracking-wide text-white/80 transition duration-300 hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Contact / Enquiry Button */}
        <a
          href="#contact"
          className="border border-white/60 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-black"
        >
          Enquire
        </a>

      </div>
    </header>
  );
}

export default Header;