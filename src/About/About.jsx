import omayaImage from "../Images/omaya.jpeg";
import { ArrowRight, Check, Phone } from "lucide-react";

/**
 * About (Scoped) — Chocolate / Cream / Burnt Orange
 * This component uses ONLY absolute background layers (not fixed),
 * so it will NOT affect Services page colors.
 */

function ValueCard({ number, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[#E07B39]/15 bg-white/5 p-7 shadow-[0_28px_90px_-72px_rgba(0,0,0,0.9)] backdrop-blur-md transition hover:bg-white/7">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E07B39]/10 blur-3xl opacity-70 transition group-hover:opacity-100" />
      <div className="text-[11px] font-semibold tracking-[0.34em] text-[#F1E3D2]/55">
        {number}
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#FFF7EE]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#F1E3D2]/75">{description}</p>
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] shadow-[0_26px_80px_-55px_rgba(0,0,0,0.78)] transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120C09]"
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#FFF7EE]/16 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120C09]"
    >
      {children}
    </a>
  );
}

export default function About() {
  return (
    <main className="relative isolate overflow-hidden bg-[#120C09] text-[#FFF7EE]">
      {/* Scoped background (does NOT affect other pages) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_-10%,rgba(224,123,57,0.18),transparent_60%),linear-gradient(to_bottom,#2B1B14,#1B120E,#120C09)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay [background-image:radial-gradient(#FFF7EE_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* =========================
          HERO (short + tight)
      ========================== */}
      <section className="relative px-6 pt-18 pb-12 sm:px-10 lg:px-16 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#FFF7EE]/12 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-px w-10 bg-[#E07B39]/70" />
              <p className="text-[10px] uppercase tracking-[0.42em] text-[#F1E3D2]/70">
                About Omaya Suites
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Calm, refined stays—
              <span className="block bg-gradient-to-r from-[#E07B39] to-[#C65A1E] bg-clip-text text-transparent">
                made simple.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#F1E3D2]/78 sm:text-base">
              Modern suite living with reliable essentials, quiet comfort, and
              professional support—without the noise.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href="#booking">Reserve</PrimaryButton>
              <SecondaryButton href="tel:+910000000000">
                <Phone size={16} className="opacity-90" />
                Call
              </SecondaryButton>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Housekeeping", value: "Daily" },
                { label: "Assistance", value: "Responsive" },
                { label: "Style", value: "Quiet luxury" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[#FFF7EE]/10 bg-white/5 px-5 py-4 backdrop-blur-md"
                >
                  <div className="text-sm font-semibold text-[#FFF7EE]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F1E3D2]/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#E07B39]/35 to-transparent" />
          </div>
        </div>
      </section>

      {/* =========================
          IMAGE + SUMMARY (reduced content)
      ========================== */}
      <section className="px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl border border-[#FFF7EE]/10 shadow-[0_36px_120px_-95px_rgba(0,0,0,0.95)]">
            <img
              src={omayaImage}
              alt="Omaya Suites interior"
              className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120C09]/55 via-transparent to-transparent" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#F1E3D2]/55">
              What to expect
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              A stay that feels
              <span className="block text-[#F1E3D2]/75">private, clean, and considered.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#F1E3D2]/78 sm:text-base">
              Omaya is designed for short visits and longer stays—comfortable for
              rest, practical for work, and easy to settle into.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Well‑set suites with premium essentials",
                "Consistent cleanliness and simple processes",
                "Support available when you need it",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#F1E3D2]/80"
                >
                  <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-full border border-[#E07B39]/18 bg-white/5">
                    <Check size={14} className="text-[#E07B39]" />
                  </span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
          VALUES (tight + premium)
      ========================== */}
      <section className="border-y border-[#FFF7EE]/10 px-6 py-16 sm:px-10 lg:px-16 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#F1E3D2]/55">
              Our approach
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Less clutter.
              <span className="block text-[#F1E3D2]/75">More comfort.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              number="01"
              title="Thoughtful Design"
              description="Clean layouts and calm interiors that feel easy to live in."
            />
            <ValueCard
              number="02"
              title="Comfort First"
              description="Quiet, restful suites with practical details that matter."
            />
            <ValueCard
              number="03"
              title="Quiet Luxury"
              description="Premium finishes—refined, not excessive."
            />
            <ValueCard
              number="04"
              title="Attentive Service"
              description="Professional, responsive support with a warm tone."
            />
          </div>
        </div>
      </section>

      {/* =========================
          CTA (short + strong)
      ========================== */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-22" id="booking">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#E07B39]/18 bg-gradient-to-br from-[#2B1B14] to-[#3A241C] px-8 py-12 text-center shadow-[0_52px_170px_-125px_rgba(0,0,0,0.95)] sm:px-12 lg:px-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(224,123,57,0.22),transparent_62%)]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#F1E3D2]/65">
                Ready to book
              </p>

              <h3 className="mt-5 text-3xl font-light leading-tight tracking-tight text-[#FFF7EE] sm:text-4xl">
                Reserve your suite in minutes.
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#F1E3D2]/82 sm:text-base">
                Share your dates—we’ll help you confirm quickly and smoothly.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton href="/#book">Book now</PrimaryButton>
                <a
                  href="tel:+910000000000"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#FFF7EE]/18 bg-white/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B1B14]"
                >
                  Call +91 00000 00000
                </a>
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