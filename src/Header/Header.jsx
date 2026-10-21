// src/components/Header.jsx (OMAYA — Logo working, remove OMAYA text)
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../Images/Omaya_Logo.png";

/* ── Nav links ── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Suites", href: "/suites" },
  { label: "Gallery", href: "/gallery-events" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ── Mobile Nav Helper ── */
  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHome = location.pathname === "/";
  const shouldShowBg = scrolled || !isHome;

  return (
    <>
      {/* ======================== HEADER ======================== */}
      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-500
          ${
            shouldShowBg
              ? "bg-[#0B0F14]/92 shadow-[0_2px_40px_rgba(0,0,0,0.55)] backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* ── Logo (working) ── */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="inline-flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/40"
            aria-label="Omaya Home"
            title="Omaya"
          >
            <img
              src={Logo}
              alt="Omaya"
              className="h-10 w-auto select-none object-contain sm:h-11"
              loading="eager"
              draggable={false}
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === href;
              return (
                <Link
                  key={href}
                  to={href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`
                    relative flex items-center gap-1.5
                    px-4 py-2 text-sm tracking-wide
                    transition-all duration-300
                    rounded-lg
                    ${
                      isActive
                        ? "text-[#F4F1E9]"
                        : "text-[#F4F1E9]/70 hover:text-[#F4F1E9] hover:bg-white/5"
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-px rounded-full bg-gradient-to-r from-[#B58D56] to-[#8F613B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop Enquire CTA ── */}
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="
              hidden md:inline-flex
              items-center gap-2
              rounded-xl
              border border-[#F4F1E9]/45 px-5 py-2.5
              text-xs uppercase  text-[#F4F1E9]
              transition-all duration-300
              hover:bg-[#F4F1E9] hover:text-[#0B0F14] hover:border-[#F4F1E9]
            "
          >
            Enquire
          </Link>

          {/* ── Mobile Hamburger ── */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="
              relative flex h-9 w-9 items-center justify-center
              rounded-lg border border-white/15
              text-[#F4F1E9] transition-all duration-300
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
          bg-[#0B0F14]/98 backdrop-blur-xl
          transition-all duration-500
          md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Gold glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-[120px]" />

        {/* Top row in overlay (logo + close) */}
        <div className="flex items-center justify-between px-6 pt-5">
          <Link
            to="/"
            onClick={handleNavClick}
            className="inline-flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/40"
            aria-label="Omaya Home"
            title="Omaya"
          >
            <img
              src={Logo}
              alt="Omaya"
              className="h-9 w-auto object-contain opacity-80"
              loading="eager"
              draggable={false}
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#F4F1E9]/70 transition hover:bg-white/10 hover:text-[#F4F1E9]"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Nav items */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
          {NAV_LINKS.map(({ label, href }, i) => {
            const isActive = activeLink === href;
            return (
              <Link
                key={href}
                to={href}
                onClick={handleNavClick}
                style={{ transitionDelay: menuOpen ? `${i * 55 + 60}ms` : "0ms" }}
                className={`
                  w-full flex items-center justify-center gap-3
                  py-4 rounded-xl
                  text-2xl font-light tracking-[0.2em]
                  transition-all duration-500
                  ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  ${
                    isActive
                      ? "text-[#F4F1E9] bg-white/5 border border-white/10"
                      : "text-[#F4F1E9]/60 hover:text-[#F4F1E9] hover:bg-white/5"
                  }
                `}
              >
                {label}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA in mobile overlay */}
        <div
          className="px-6 pb-10"
          style={{ transitionDelay: menuOpen ? "360ms" : "0ms" }}
        >
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl bg-gradient-to-r from-[#B58D56] to-[#8F613B]
              py-4 text-xs font-semibold uppercase 
              text-white transition-all duration-300 hover:brightness-110
            "
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}