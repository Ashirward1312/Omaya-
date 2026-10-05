import { useCallback } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

/**
 * Contact — Ultra Premium (Light Theme)
 * Palette: Chocolate (#2B1B14) • Cream • Burnt Orange (#C65A1E / #E07B39)
 * - Clean centered hero
 * - Premium two-column layout (Details + Form)
 * - Better spacing/typography + consistent UI
 * - Strong CTA at bottom
 */

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#2B1B14]/10 bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#6B5A4E] backdrop-blur-md">
      {children}
    </span>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7A6558]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function InputBase(props) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-[#2B1B14]/12 bg-white/70 px-5 py-4",
        "text-sm text-[#2B1B14] placeholder:text-[#7A6558]/70",
        "shadow-[0_18px_55px_-45px_rgba(43,27,20,0.45)]",
        "outline-none transition",
        "focus:border-[#E07B39]/45 focus:ring-2 focus:ring-[#E07B39]/25",
      ].join(" ")}
    />
  );
}

function SelectBase(props) {
  return (
    <select
      {...props}
      className={[
        "w-full appearance-none rounded-2xl border border-[#2B1B14]/12 bg-white/70 px-5 py-4",
        "text-sm text-[#2B1B14]",
        "shadow-[0_18px_55px_-45px_rgba(43,27,20,0.45)]",
        "outline-none transition",
        "focus:border-[#E07B39]/45 focus:ring-2 focus:ring-[#E07B39]/25",
      ].join(" ")}
    />
  );
}

function TextareaBase(props) {
  return (
    <textarea
      {...props}
      className={[
        "w-full resize-none rounded-2xl border border-[#2B1B14]/12 bg-white/70 px-5 py-4",
        "text-sm text-[#2B1B14] placeholder:text-[#7A6558]/70",
        "shadow-[0_18px_55px_-45px_rgba(43,27,20,0.45)]",
        "outline-none transition",
        "focus:border-[#E07B39]/45 focus:ring-2 focus:ring-[#E07B39]/25",
      ].join(" ")}
    />
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FFF7EE] shadow-[0_24px_70px_-52px_rgba(43,27,20,0.55)] transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6]"
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}

function SecondaryButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#2B1B14]/12 bg-white/70 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#3A241C] shadow-[0_18px_55px_-45px_rgba(43,27,20,0.40)] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6]"
    >
      {Icon ? <Icon size={16} className="text-[#C65A1E]" /> : null}
      {children}
    </a>
  );
}

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3 rounded-2xl border border-[#2B1B14]/10 bg-white/55 px-5 py-4 backdrop-blur-md">
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#E07B39]/18 bg-[#E07B39]/10">
        <Icon size={18} className="text-[#C65A1E]" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7A6558]">
          {label}
        </div>
        <div className="mt-1 text-sm font-medium leading-6 text-[#2B1B14]">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition hover:brightness-[0.99]">
        {content}
      </a>
    );
  }

  return content;
}

export default function Contact() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    // Hook your API / email service here
    // e.g. fetch("/api/enquiry", { method: "POST", body: new FormData(e.currentTarget) })
  }, []);

  return (
    <main className="relative isolate min-h-screen bg-gradient-to-b from-[#FFF7EE] via-[#F6EFE6] to-[#F1E3D2] text-[#2B1B14]">
      {/* subtle background depth (scoped) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(224,123,57,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-multiply [background-image:radial-gradient(#2B1B14_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* =========================
          HERO (Centered + Bold)
      ========================== */}
      <section className="px-6 pb-10 pt-20 sm:px-10 lg:px-16 lg:pb-14 lg:pt-24">
        <div className="mx-auto max-w-7xl text-center">
          <Pill>Contact Omaya</Pill>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Let’s plan your{" "}
            <span className="bg-gradient-to-r from-[#C65A1E] to-[#E07B39] bg-clip-text text-transparent">
              next stay
            </span>
            .
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6B5A4E] sm:text-base">
            Reach out for reservations, rent or purchase enquiries, availability,
            and any questions about Omaya Suites.
          </p>

          <div className="mx-auto mt-8 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#E07B39]/35 to-transparent" />
        </div>
      </section>

      {/* =========================
          CONTENT (Details + Form)
      ========================== */}
      <section className="px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {/* LEFT: DETAILS */}
            <div className="relative overflow-hidden rounded-3xl border border-[#2B1B14]/10 bg-white/60 p-7 shadow-[0_34px_110px_-92px_rgba(43,27,20,0.55)] backdrop-blur-md sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_20%_0%,rgba(224,123,57,0.14),transparent_60%)]" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7A6558]">
                  Get in touch
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  We’re here to help.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#6B5A4E] sm:text-base">
                  Prefer a quick call? Need availability for specific dates? Contact
                  our team and we’ll guide you.
                </p>

                <div className="mt-8 grid gap-3">
                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value="hello@omayasuites.com"
                    href="mailto:hello@omayasuites.com"
                  />
                  <InfoRow
                    icon={Phone}
                    label="Phone"
                    value="+91 00000 00000"
                    href="tel:+910000000000"
                  />
                  <InfoRow
                    icon={MapPin}
                    label="Location"
                    value="Omaya Suites, Your Address, India"
                  />
                  <InfoRow
                    icon={Clock}
                    label="Enquiries"
                    value="Mon — Sun • 9:00 AM — 8:00 PM"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="tel:+910000000000">
                    Call now
                  </PrimaryButton>
                  <SecondaryButton href="mailto:hello@omayasuites.com" icon={Mail}>
                    Email
                  </SecondaryButton>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="relative overflow-hidden rounded-3xl border border-[#2B1B14]/10 bg-white/60 p-7 shadow-[0_34px_110px_-92px_rgba(43,27,20,0.55)] backdrop-blur-md sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_80%_0%,rgba(224,123,57,0.12),transparent_60%)]" />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7A6558]">
                  Send an enquiry
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Tell us what you need.
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#6B5A4E] sm:text-base">
                  Share your dates, preference (rent/purchase), and any special requests.
                </p>

                <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
                  <Field label="Full name" htmlFor="name">
                    <InputBase id="name" name="name" type="text" placeholder="Your name" />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" htmlFor="email">
                      <InputBase
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </Field>

                    <Field label="Phone" htmlFor="phone">
                      <InputBase id="phone" name="phone" type="tel" placeholder="+91" />
                    </Field>
                  </div>

                  <Field label="Enquiry type" htmlFor="enquiry">
                    <div className="relative">
                      <SelectBase id="enquiry" name="enquiry" defaultValue="">
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="stay">Stay / Reservation</option>
                        <option value="rent">Property Rental</option>
                        <option value="purchase">Property Purchase</option>
                        <option value="general">General Enquiry</option>
                      </SelectBase>

                      {/* caret */}
                      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#7A6558]">
                        ▾
                      </span>
                    </div>
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <TextareaBase
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us your dates and what you’re looking for..."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2B1B14] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FFF7EE] shadow-[0_24px_70px_-52px_rgba(43,27,20,0.65)] transition hover:bg-[#3A241C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6]"
                  >
                    <Send size={16} className="opacity-90" />
                    Send enquiry
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>

                  <p className="text-xs text-[#7A6558]">
                    We typically respond as quickly as possible during enquiry hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM CTA (Premium Contrast)
      ========================== */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#E07B39]/18 bg-gradient-to-br from-[#2B1B14] to-[#3A241C] p-10 text-center shadow-[0_48px_160px_-115px_rgba(0,0,0,0.55)] sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(224,123,57,0.22),transparent_62%)]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#F1E3D2]/70">
                Omaya Suites
              </p>

              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#FFF7EE] sm:text-4xl">
                Ready to reserve your suite?
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#F1E3D2]/80 sm:text-base">
                Share your dates and we’ll confirm availability with clear next steps.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton href="/#book">Check availability</PrimaryButton>
                <SecondaryButton href="tel:+910000000000" icon={Phone}>
                  Call
                </SecondaryButton>
              </div>

              <p className="mt-4 text-xs text-[#F1E3D2]/65">
                Response times may vary outside business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}