import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ── Smooth scroll helper ── */
function scrollTo(href) {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =========================
   LABEL
========================= */
function Label({ children }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F1E3D2]/70">
      {children}
    </p>
  );
}

/* =========================
   FOOTER LINK
========================= */
function FooterLink({ href, children }) {
  const isAnchor = href?.startsWith("#");

  const handleClick = (e) => {
    if (isAnchor) {
      e.preventDefault();
      scrollTo(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="
        w-fit
        text-sm
        text-white/70
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-white
      "
    >
      {children}
    </a>
  );
}

/* =========================
   SOCIAL BUTTON
========================= */
function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        text-white/70
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#E07B39]/50
        hover:bg-[#E07B39]/15
        hover:text-[#FFD7BC]
      "
    >
      {children}
    </a>
  );
}

/* =========================
   SOCIAL ICONS
   SVG — NO EXTRA PACKAGE
========================= */
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
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
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

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4 10h5v10H4V10Zm8 0h4.8v1.4h.1c.7-1.2 2.2-2.4 4.6-2.4 4.9 0 5.5 3.2 5.5 7.4V20h-5v-3.1c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V20h-5V10Z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }

  return null;
}

/* =========================
   CONTACT ROW
========================= */
function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="grid grid-cols-[30px_70px_minmax(0,1fr)] items-start gap-3">
      {/* Icon */}
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#E07B39]/20 bg-[#E07B39]/10">
        <Icon size={14} strokeWidth={1.7} className="text-[#E07B39]" />
      </span>

      {/* Label */}
      <span className="pt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
        {label}
      </span>

      {/* Value */}
      <span className="min-w-0 break-words text-sm leading-6 text-white/75">
        {value}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-lg py-1.5 transition-all duration-300 hover:bg-white/[0.03]"
      >
        {content}
      </a>
    );
  }

  return <div className="py-1.5">{content}</div>;
}

/* =========================
   FOOTER
========================= */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-[#FFF7EE]" id="footer">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1B120E] via-[#130C09] to-[#0B0908]" />

      {/* Warm Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-[#C65A1E]/10 blur-[100px]" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

        {/* ── Top CTA ── */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-center lg:justify-between">

          <div className="min-w-0">
            <Label>Need assistance?</Label>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Enquire for availability —{" "}
              <span className="text-[#FFD9C4]">rent or purchase</span>.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            {/* Enquire */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="
                group inline-flex items-center justify-center gap-2
                rounded-xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39]
                px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em]
                text-white transition-all duration-300 hover:brightness-110
              "
            >
              Enquire
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Call */}
            <a
              href="tel:+910000000000"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl border border-white/12 bg-white/[0.035]
                px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em]
                text-white/85 transition-all duration-300
                hover:border-[#E07B39]/35 hover:bg-white/[0.06]
              "
            >
              <Phone size={15} className="text-[#E07B39]" />
              Call
            </a>

          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="mt-9 grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-block text-2xl font-light tracking-[0.22em] text-white"
            >
              OMAYA
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Calm, premium suite living — designed around comfort,
              privacy and thoughtful hospitality.
            </p>

            {/* Social */}
            <div className="mt-6">
              <Label>Follow Us</Label>
              <div className="mt-3 flex items-center gap-2.5">
                <SocialButton href="https://www.instagram.com/" label="Instagram">
                  <SocialIcon type="instagram" />
                </SocialButton>
                <SocialButton href="https://www.facebook.com/" label="Facebook">
                  <SocialIcon type="facebook" />
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/" label="LinkedIn">
                  <SocialIcon type="linkedin" />
                </SocialButton>
                <SocialButton href="https://www.youtube.com/" label="YouTube">
                  <SocialIcon type="youtube" />
                </SocialButton>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-1 lg:col-span-3">
            <Label>Explore</Label>
            <div className="mt-4 grid gap-3">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#suites">Suites</FooterLink>
              <FooterLink href="#amenities">Amenities</FooterLink>
              <FooterLink href="#rent-sale">Rent &amp; Purchase</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-5">
            <Label>Contact</Label>
            <div className="mt-4 space-y-2">
              <ContactRow
                icon={Mail}
                label="Email"
                value="hello@omayasuites.com"
                href="mailto:hello@omayasuites.com"
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value="+91 00000 00000"
                href="tel:+910000000000"
              />
              <ContactRow
                icon={MapPin}
                label="Address"
                value="Omaya Suites, Your Property Address, India"
              />
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-9 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 text-center text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">

            <p>© {new Date().getFullYear()} Omaya Suites. All rights reserved.</p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
              <div className="flex items-center gap-5">
                <a href="#" className="transition hover:text-white/80">Privacy</a>
                <a href="#" className="transition hover:text-white/80">Terms</a>
              </div>

              <span className="hidden h-3 w-px bg-white/15 sm:block" />

              <a
                href="https://spadvertising.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#FFD1B4]"
              >
                Designed by{" "}
                <span className="font-medium text-[#E07B39]">SP Advertising</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}