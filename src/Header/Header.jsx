import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/* ── Nav links (Home + sections) ── */
const NAV_LINKS = [
  { label: "Home",      href: "#home",      isHome: true  },
  { label: "About",     href: "#about",     isHome: false },
  { label: "Suites",    href: "#suites",    isHome: false },
  { label: "Amenities", href: "#amenities", isHome: false },
  { label: "Contact",   href: "#contact",   isHome: false },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  /* ── Scroll detection (background + active section) ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      /* Determine active section */
      const sections = NAV_LINKS.map(({ href }) => href).filter((h) => h !== "#home");
      let current = "#home";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Smooth-scroll helper ── */
  const handleNavClick = (e, href, isHome) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("#home");
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveLink(href);
  };

  return (
    <>
      {/* ======================== HEADER ======================== */}
      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-500
          ${scrolled
            ? "bg-[#120C09]/92 shadow-[0_2px_40px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#home", true)}
            className="text-2xl font-light tracking-[0.35em] text-white transition duration-300 hover:opacity-80"
          >
            OMAYA
          </a>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href, isHome }) => {
              const isActive = activeLink === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href, isHome)}
                  className={`
                    relative flex items-center gap-1.5
                    px-4 py-2 text-sm tracking-wide
                    transition-all duration-300
                    rounded-lg
                    ${isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {/* Home icon on Home link */}
                  {label}

                  {/* Active underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-px rounded-full bg-gradient-to-r from-[#C65A1E] to-[#E07B39]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop Enquire CTA ── */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact", false)}
            className="
              hidden md:inline-flex
              items-center gap-2
              border border-white/50 px-5 py-2.5
              text-xs uppercase tracking-[0.2em] text-white
              transition-all duration-300
              hover:bg-white hover:text-[#120C09] hover:border-white
            "
          >
            Enquire
          </a>

          {/* ── Mobile Hamburger ── */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="
              relative flex h-9 w-9 items-center justify-center
              rounded-lg border border-white/15
              text-white transition-all duration-300
              hover:bg-white/10 hover:border-white/30
              md:hidden
            "
          >
            <span
              className={`
                absolute transition-all duration-300
                ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
              `}
            >
              <X size={18} />
            </span>
            <span
              className={`
                absolute transition-all duration-300
                ${menuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}
              `}
            >
              <Menu size={18} />
            </span>
          </button>

        </div>
      </header>

      {/* ======================== MOBILE MENU OVERLAY ======================== */}
      <div
        className={`
          fixed inset-0 z-40 flex flex-col
          bg-[#0D0805]/98 backdrop-blur-xl
          transition-all duration-500
          md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Warm glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C65A1E]/10 blur-[120px]" />

        {/* Brand in overlay */}
        <div className="flex items-center justify-between px-6 pt-5">
          <span className="text-xl font-light tracking-[0.35em] text-white/60">OMAYA</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Nav items */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
          {NAV_LINKS.map(({ label, href, isHome }, i) => {
            const isActive = activeLink === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href, isHome)}
                style={{ transitionDelay: menuOpen ? `${i * 55 + 60}ms` : "0ms" }}
                className={`
                  w-full flex items-center justify-center gap-3
                  py-4 rounded-xl
                  text-2xl font-light tracking-[0.2em]
                  transition-all duration-500
                  ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  ${isActive
                    ? "text-white bg-white/5 border border-white/8"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {label}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E07B39]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom CTA in mobile overlay */}
        <div
          className="px-6 pb-10"
          style={{ transitionDelay: menuOpen ? "360ms" : "0ms" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact", false)}
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39]
              py-4 text-xs font-semibold uppercase tracking-[0.22em]
              text-white transition-all duration-300 hover:brightness-110
            "
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
}