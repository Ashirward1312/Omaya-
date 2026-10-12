// src/components/Contact.jsx  (OMAYA — Compact Single-Section Contact | Premium Form Fix)
import { useCallback } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const CONTACT = {
  emailPrimary: "Omayasuites11@gmail.com",
  emailInvest: "mventures011@gmail.com",

  phone1Text: "+91 77778 89762",
  phone2Text: "+91 87200 01111",
  phone1Href: "tel:+917777889762",
  phone2Href: "tel:+918720001111",

  whatsappHref:
    "https://wa.me/918720001111?text=Hi%2C%20I%20want%20details%20for%20Omaya%20Suites.",

  address:
    "L.K Corporate And Logistic Park, Kurru, 3rd Floor, Near Kamal Vihar, Raipur (C.G)",

  hours: "MON – SAT : 9:30 AM – 6:30 PM",

  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.6856654245576!2d81.693438!3d21.1961479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c34ae4f42f47%3A0x4fbb8df483243127!2sL.K.%20Corporate%20And%20Logistic%20Park!5e1!3m2!1sen!2sin!4v1791179503665!5m2!1sen!2sin",
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase text-[#F4F1E9]/75 backdrop-blur-md">
      {children}
    </span>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[10px] font-semibold uppercase text-[#111A24]/70"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* Premium inputs (no weird shadows, cleaner + more “luxury form” look) */
const inputBaseClass = [
  "w-full rounded-2xl border border-[#A87952]/18 bg-[#FFFBF3] px-5 py-4",
  "text-sm text-[#111A24] placeholder:text-zinc-500/80",
  "shadow-[0_14px_40px_-28px_rgba(0,0,0,0.25)] outline-none transition",
  "focus:border-[#A87952]/55 focus:ring-2 focus:ring-[#C9A45C]/18",
].join(" ");

function InputBase(props) {
  return <input {...props} className={inputBaseClass} />;
}
function SelectBase(props) {
  return (
    <select
      {...props}
      className={[
        inputBaseClass,
        "appearance-none pr-12", // space for arrow
      ].join(" ")}
    />
  );
}
function TextareaBase(props) {
  return <textarea {...props} className={[inputBaseClass, "resize-none"].join(" ")} />;
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-7 py-3.5 text-[11px] font-semibold uppercase   text-white shadow-[0_22px_60px_-40px_rgba(0,0,0,0.55)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1E9]"
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
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#111A24]/12 bg-white/75 px-7 py-3.5 text-[11px] font-semibold uppercase text-[#111A24] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1E9]"
    >
      {Icon ? <Icon size={16} className="text-[#A87952]" /> : null}
      {children}
    </a>
  );
}

/* Group Card: Email (2 boxes) + Phone (2 boxes) */
function GroupCard({ icon: Icon, label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition hover:border-[#C9A45C]/35 hover:bg-white/[0.06]">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#C9A45C]/30 bg-gradient-to-br from-[#C9A45C]/20 to-transparent text-[#C9A45C] shadow-sm">
          <Icon size={20} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-semibold uppercase  text-[#F4F1E9]/55">
            {label}
          </div>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MiniBox({ title, value, href }) {
  const box = (
    <div className="rounded-xl border border-white/10 bg-black/10 px-4 py-3 transition hover:border-[#C9A45C]/35 hover:bg-white/[0.06]">
      <div className="text-[10px] font-semibold uppercase  text-white/45">
        {title}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );

  if (!href) return box;

  return (
    <a
      href={href}
      className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/50"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {box}
    </a>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#C9A45C]/30 bg-gradient-to-br from-[#C9A45C]/20 to-transparent text-[#C9A45C] shadow-sm">
        <Icon size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase  text-[#F4F1E9]/55">
          {label}
        </div>
        <div className="mt-1 text-[14px] font-medium leading-relaxed text-[#F4F1E9]">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    // Hook your API / email service here
  }, []);

  return (
    <section
      id="contact"
      className="relative isolate bg-[#F4F1E9] text-[#111A24] pt-24 pb-16 sm:pt-28 sm:pb-20 scroll-mt-28"
    >
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(201,164,92,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-multiply [background-image:radial-gradient(#111A24_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (extra top padding already added in section) */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#A87952]/70" />
            <span className="text-xs font-extrabold  text-[#A87952]">
              CONTACT
            </span>
            <span className="h-px w-12 bg-[#A87952]/70" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Booking or{" "}
            <span className="bg-gradient-to-r from-[#B58D56] to-[#8F613B] bg-clip-text text-transparent">
              Investment Enquiry
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base">
            Availability, rent/purchase details, or general questions—share your
            requirement and our team will contact you.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* LEFT: DETAILS (same) */}
          <div className="relative overflow-hidden rounded-3xl bg-[#111A24] p-7 shadow-[0_34px_110px_-92px_rgba(0,0,0,0.65)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_20%_0%,rgba(201,164,92,0.18),transparent_60%)]" />

            <div className="relative">
              <Pill>Contact Omaya Suites</Pill>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#F4F1E9] sm:text-3xl">
                We’re here to help.
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#F4F1E9]/70">
                For bookings and investment enquiries, connect with our team for
                the next steps.
              </p>

              <div className="mt-6 grid gap-4">
                <GroupCard icon={Mail} label="Email">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <MiniBox
                      title="Omaya"
                      value={CONTACT.emailPrimary}
                      href={`mailto:${CONTACT.emailPrimary}`}
                    />
                    <MiniBox
                      title="Investment"
                      value={CONTACT.emailInvest}
                      href={`mailto:${CONTACT.emailInvest}`}
                    />
                  </div>
                </GroupCard>

                <GroupCard icon={Phone} label="Call Us">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <MiniBox
                      title="Primary"
                      value={CONTACT.phone1Text}
                      href={CONTACT.phone1Href}
                    />
                    <MiniBox
                      title="Alternate"
                      value={CONTACT.phone2Text}
                      href={CONTACT.phone2Href}
                    />
                  </div>
                </GroupCard>

                <InfoRow icon={MapPin} label="Office Address" value={CONTACT.address} />
                <InfoRow icon={Clock} label="Working Hours" value={CONTACT.hours} />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={CONTACT.whatsappHref}>WhatsApp</PrimaryButton>
                <SecondaryButton href={CONTACT.phone1Href} icon={Phone}>
                  Call Now
                </SecondaryButton>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM (FIXED: premium layout + removed extra note line) */}
          <div className="relative overflow-hidden rounded-3xl border border-[#A87952]/18 bg-white/90 p-7 shadow-[0_26px_70px_-55px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
            {/* top gold accent + subtle inner gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B58D56] to-[#8F613B]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_360px_at_80%_0%,rgba(201,164,92,0.18),transparent_60%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A87952]/20 bg-[#F4F1E9] px-4 py-2 text-[10px] font-extrabold text-[#A87952]">
                SEND AN ENQUIRY
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#111A24] sm:text-3xl">
                Tell us what you need
              </h3>

              <p className="mt-2 text-sm leading-7 text-zinc-700">
                Fill the form and we’ll get back with availability and next steps.
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#A87952]/20 to-transparent" />

              <form className="mt-7 grid gap-5" onSubmit={onSubmit}>
                <Field label="Full Name" htmlFor="name">
                  <InputBase id="name" name="name" type="text" placeholder="Your Name" />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email Address" htmlFor="email">
                    <InputBase
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </Field>

                  <Field label="Phone Number" htmlFor="phone">
                    <InputBase id="phone" name="phone" type="tel" placeholder="+91" />
                  </Field>
                </div>

                <Field label="Enquiry Type" htmlFor="enquiry">
                  <div className="relative">
                    <SelectBase id="enquiry" name="enquiry" defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="booking">Booking / Stay</option>
                      <option value="rent">Rent Enquiry</option>
                      <option value="purchase">Purchase Enquiry</option>
                      <option value="investment">Investment Enquiry</option>
                      <option value="general">General</option>
                    </SelectBase>
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500">
                      ▾
                    </span>
                  </div>
                </Field>

                <Field label="Message" htmlFor="message">
                  <TextareaBase
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us what you’re looking for..."
                  />
                </Field>

                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#111A24] to-[#0B0F14] px-8 py-4 text-[11px] font-semibold uppercase  text-white shadow-[0_24px_70px_-52px_rgba(0,0,0,0.45)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1E9]"
                >
                  <Send size={16} className="opacity-90" />
                  Submit Enquiry
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </button>

                {/* removed the extra “response time...” text as you asked */}
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#111A24]/10 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-white px-6 py-4">
            <div>
              <div className="text-[10px] font-semibold uppercase  text-[#A87952]">
                Office Location
              </div>
              <div className="mt-1 text-sm font-semibold text-[#111A24]">
                L.K Corporate And Logistic Park, Raipur
              </div>
            </div>

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#111A24]/10 bg-[#F4F1E9] px-4 py-2 text-[10px] font-semibold uppercase text-[#111A24] transition hover:bg-white"
            >
              Open in WhatsApp <ArrowRight size={14} />
            </a>
          </div>

          <iframe
            title="Google Map Location"
            src={CONTACT.mapEmbedSrc}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}