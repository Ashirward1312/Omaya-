// src/components/Footer.jsx (OMAYA — Dark + Gold | Simple + Compact | Logo + Explore 2-Column)
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Images//Omaya logo.png";

/* ── NAV (routes) ── */
const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Suites", href: "/suites" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* ── SOCIAL ── */
const SOCIALS = [
  {
    type: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/maheshventuresrpr/",
  },
  {
    type: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/Maheshventures/",
  },
  { type: "x", label: "X (Twitter)", href: "https://x.com/maheshwari95189" },
  { type: "whatsapp", label: "WhatsApp", href: "https://wa.me/918720001111" },
];

/* ── CONTACT ── */
const CONTACT = {
  emailPrimary: "Omayasuites11@gmail.com",
  emailMahesh: "mventures011@gmail.com",

  phone1: { label: "+91 77778 89762", href: "tel:+917777889762" },
  phone2: { label: "+91 8720-001111", href: "tel:+918720001111" },
  whatsapp: { label: "+91 8720-001111", href: "https://wa.me/918720001111" },

  address: "Omaya Square – Main Road, Kamal Vihar Entrance, Deopuri, Raipur",
};

/* ─────────────────────────────────────────────
   Small UI
───────────────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <div className="text-[10px] font-extrabold uppercase text-[#C9A45C]/85 ">
      {children}
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      to={href}
      onClick={() => window.scrollTo(0, 0)}
      className="w-fit text-sm text-white/70 transition hover:text-white"
    >
      {children}
    </Link>
  );
}

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition hover:-translate-y-0.5 hover:border-[#C9A45C]/55 hover:bg-[#C9A45C]/10 hover:text-white"
    >
      {children}
    </a>
  );
}

/* ── Social SVG Icons ── */
function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="0.8"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.67.33-1 1-1Z" />
      </svg>
    );
  }
  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.6L5.8 22H2.7l7.3-8.4L1 2h6.6l4.5 6L18.9 2Zm-1.1 18h1.7L6.7 3.9H4.9L17.8 20Z" />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 2.3 17.6L1 23l5.6-1.5A11 11 0 0 0 23 12a11 11 0 0 0-2.5-8.5ZM12 21a9 9 0 0 1-4.6-1.2l-.3-.2-3.3.9.9-3.2-.2-.3A9 9 0 1 1 12 21Zm5.2-6.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5 0 1.5 1.1 2.9 1.2 3.1.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.2-.2-.3-.5-.4Z" />
      </svg>
    );
  }
  return null;
}

function ContactLine({ Icon, children }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-[#C9A45C]">
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <div className="min-w-0 text-sm leading-6 text-white/70">{children}</div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white" id="footer">
      {/* Dark background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#111A24] via-[#0B0F14] to-[#070A0D]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[220px] w-[700px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[110px]" />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
        {/* TOP CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <Eyebrow>FOR BOOKINGS & ENQUIRIES</Eyebrow>
            <p className="mt-2 text-sm text-white/70">
              Call or WhatsApp for availability —{" "}
              <span className="font-semibold text-[#C9A45C]">Rent or Purchase</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-5 py-3 text-[11px] font-extrabold uppercase text-white transition hover:brightness-110"
            >
              Enquire
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-[11px] font-extrabold uppercase text-white/90 transition hover:border-[#C9A45C]/35 hover:bg-white/[0.06]"
            >
              <MessageCircle size={16} className="text-[#C9A45C]" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* MAIN GRID */}
        <div className="mt-6 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand (LOGO instead of text) */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/40"
              aria-label="Omaya Home"
              title="Omaya"
            >
              <img
                src={Logo}
                alt="Omaya"
                className="h-11 w-auto select-none object-contain sm:h-12"
                loading="lazy"
                draggable={false}
              />
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
              Calm, premium suite living — designed around comfort, privacy and
              thoughtful hospitality.
            </p>

            <div className="mt-5">
              <Eyebrow>FOLLOW US</Eyebrow>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                {SOCIALS.map((s) => (
                  <SocialButton key={s.type} href={s.href} label={s.label}>
                    <SocialIcon type={s.type} />
                  </SocialButton>
                ))}
              </div>
            </div>
          </div>

          {/* Explore (2-column compact) */}
          <div className="lg:col-span-3">
            <Eyebrow>EXPLORE</Eyebrow>
            <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {NAV.map((n) => (
                <FooterLink key={n.href} href={n.href}>
                  {n.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <Eyebrow>CONTACT</Eyebrow>

            <div className="mt-4 divide-y divide-white/10">
              <ContactLine Icon={Mail}>
                <div className="space-y-1">
                  <a
                    href={`mailto:${CONTACT.emailMahesh}`}
                    className="block font-semibold text-white hover:text-[#C9A45C]"
                  >
                    {CONTACT.emailMahesh}
                  </a>
                  <a
                    href={`mailto:${CONTACT.emailPrimary}`}
                    className="block text-white/70 hover:text-[#C9A45C]"
                  >
                    {CONTACT.emailPrimary}
                  </a>
                </div>
              </ContactLine>

              <ContactLine Icon={Phone}>
                <div className="space-y-1">
                  <a
                    href={CONTACT.phone1.href}
                    className="block font-semibold text-white hover:text-[#C9A45C]"
                  >
                    {CONTACT.phone1.label}
                  </a>
                  <a
                    href={CONTACT.phone2.href}
                    className="block text-white/70 hover:text-[#C9A45C]"
                  >
                    {CONTACT.phone2.label}
                  </a>
                </div>
              </ContactLine>

              <ContactLine Icon={MessageCircle}>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#C9A45C]"
                >
                  {CONTACT.whatsapp.label}
                </a>
              </ContactLine>

              <ContactLine Icon={MapPin}>
                <span className="text-white/70">{CONTACT.address}</span>
              </ContactLine>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-4 flex flex-col gap-3 text-center text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {year} OMAYA SQUARE. ALL RIGHTS RESERVED.</p>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
            <div className="flex items-center gap-5">
              <a href="#" className="transition hover:text-white/80">
                PRIVACY
              </a>
              <a href="#" className="transition hover:text-white/80">
                TERMS
              </a>
            </div>

            <span className="hidden h-3 w-px bg-white/15 sm:block" />

            <a
              href="https://spadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#F2E2C7]"
            >
              DESIGNED BY{" "}
              <span className="font-medium text-[#C9A45C]">SP ADVERTISING</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}