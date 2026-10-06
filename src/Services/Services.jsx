import React, { useEffect, useMemo, useState } from "react";
import {
  Wifi,
  ShieldCheck,
  Car,
  Sparkles,
  Waves,
  Headphones,
  ArrowRight,
  Check,
  Bell,
  X,
} from "lucide-react";

/**
 * Premium Palette (Chocolate • Cream • Burnt Orange)
 * Chocolate:    #2B1B14 / #3A241C
 * Cream:        #FFF7EE / #F6EFE6 / #F1E3D2
 * Burnt Orange: #C65A1E / #E07B39
 */

const services = [
  {
    icon: Wifi,
    title: "High‑Speed Wi‑Fi",
    tag: "Included",
    description: "Reliable connection across the property for calls and streaming.",
    points: ["Strong coverage", "Stable speeds", "Work‑ready"],
    details:
      "Enjoy stable, high‑speed Wi‑Fi throughout your suite and common areas—ideal for video calls, remote work, and uninterrupted entertainment.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    tag: "Daily",
    description: "Freshened spaces and restocked essentials—kept consistently tidy.",
    points: ["Fresh linens", "Clean bathrooms", "Essentials restock"],
    details:
      "Daily housekeeping keeps your suite crisp and comfortable, with refreshed linens and essentials—so you can focus on your stay, not chores.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    tag: "24/7",
    description: "Controlled access and attentive oversight for a calm stay.",
    points: ["Secure entry", "On‑site support", "Peace of mind"],
    details:
      "We maintain controlled access and active monitoring to support a safe, relaxed environment throughout your stay—day and night.",
  },
  {
    icon: Car,
    title: "Parking Support",
    tag: "On Request",
    description: "Assistance with smooth arrivals, parking guidance, and departures.",
    points: ["Guided parking", "Easy access", "Quick assistance"],
    details:
      "Need parking help? Our team can guide you to suitable parking options and assist with smooth check‑in and check‑out logistics.",
  },
  {
    icon: Waves,
    title: "Premium Amenities",
    tag: "Curated",
    description: "Thoughtful essentials that make everyday living feel elevated.",
    points: ["Quality toiletries", "Comfort bedding", "Well‑set suite"],
    details:
      "From comfort-first bedding to carefully chosen toiletries, our in‑suite amenities are selected to feel premium without being overdone.",
  },
  {
    icon: Headphones,
    title: "Guest Assistance",
    tag: "Anytime",
    description: "Responsive help for requests, guidance, and stay support.",
    points: ["Fast responses", "Friendly support", "Local guidance"],
    details:
      "Have a question or a request? Our team is available to support you with quick, professional assistance throughout your stay.",
  },
];

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39] px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] shadow-[0_22px_60px_-38px_rgba(43,27,20,0.95)] transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6]"
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
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#2B1B14]/16 bg-white/55 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#3A241C] backdrop-blur-md transition hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A1E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6]"
    >
      {children}
      <ArrowRight size={16} className="opacity-80" />
    </a>
  );
}

function ServiceModal({ open, onClose, service }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-[#2B1B14]/55 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2">
        <div className="relative overflow-hidden rounded-3xl border border-[#E07B39]/20 bg-gradient-to-b from-[#FFF7EE] to-[#F1E3D2] shadow-[0_42px_140px_-85px_rgba(0,0,0,0.9)]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E07B39]/18 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-[#2B1B14]/10 blur-3xl" />

          <div className="relative p-7 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#E07B39]/24 bg-white/60 text-[#C65A1E] shadow-sm">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C65A1E]">
                    {service.tag}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#2B1B14]">
                    {service.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2B1B14]/12 bg-white/55 text-[#3A241C] transition hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#5E4E43]">
              {service.details}
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.points.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 rounded-2xl border border-[#2B1B14]/10 bg-white/55 px-4 py-3 text-sm text-[#5E4E43]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-[#E07B39]/18 bg-white/70">
                    <Check size={14} className="text-[#C65A1E]" />
                  </span>
                  <span className="font-medium">{p}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <SecondaryButton href="tel:+910000000000">Call</SecondaryButton>
              <PrimaryButton href="/#book">Book now</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index, onLearnMore }) {
  const Icon = service.icon;

  return (
    <article className="group relative">
      {/* richer border + glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E07B39]/26 via-white/40 to-transparent opacity-90" />
      <div className="relative rounded-3xl bg-gradient-to-b from-white/70 to-white/35 p-px">
        <div className="relative overflow-hidden rounded-3xl border border-[#2B1B14]/10 bg-gradient-to-b from-[#FFF7EE]/86 to-[#F1E3D2]/86 p-7 shadow-[0_30px_95px_-72px_rgba(43,27,20,0.92)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#E07B39]/26 group-hover:shadow-[0_42px_130px_-88px_rgba(43,27,20,0.98)]">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#E07B39]/14 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute -left-36 -bottom-36 h-80 w-80 rounded-full bg-[#2B1B14]/10 blur-3xl opacity-80" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#E07B39]/14 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-[#E07B39]/22 bg-gradient-to-br from-[#FFF7EE] to-[#F1E3D2] text-[#C65A1E] shadow-sm transition-all duration-500 group-hover:border-[#E07B39]/42 group-hover:shadow-md">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-[#E07B39]/18 bg-[#E07B39]/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#3A241C]">
                {service.tag}
              </span>
            </div>

            <div className="text-[11px] font-semibold tracking-[0.32em] text-[#C65A1E]">
              {(index + 1).toString().padStart(2, "0")}
            </div>
          </div>

          <div className="relative mt-4">
            <h3 className="text-lg font-semibold tracking-tight text-[#2B1B14] transition-colors duration-300 group-hover:text-[#3A241C]">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#6B5A4E]">
              {service.description}
            </p>
          </div>

          <ul className="relative mt-5 space-y-2">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-[#5E4E43]">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#E07B39]/18 bg-white/60">
                  <Check size={14} className="text-[#C65A1E]" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {/* Better Learn More CTA */}
          <div className="relative mt-6 flex items-center justify-between">
            <div className="h-px w-14 bg-gradient-to-r from-[#E07B39]/65 to-transparent transition-all duration-500 group-hover:w-20" />

            <button
              type="button"
              onClick={() => onLearnMore(service)}
              className="inline-flex items-center gap-2 rounded-xl border border-[#2B1B14]/10 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#3A241C] backdrop-blur-md transition hover:bg-white/80 hover:border-[#E07B39]/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45"
            >
              Learn more <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const [active, setActive] = useState(null);

  const headline = useMemo(
    () => ({
      eyebrow: "Omaya Suites",
      title: "Suite services, done right.",
      subtitle:
        "Professional essentials with a warm, premium finish—so your stay feels seamless.",
    }),
    []
  );

  return (
    <main className="min-h-screen text-[#2B1B14]">
      {/* Background with more depth (less empty look) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(224,123,57,0.16),transparent_62%),linear-gradient(to_bottom,#FFF7EE,#F6EFE6,#F1E3D2)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.06] mix-blend-multiply [background-image:radial-gradient(#2B1B14_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* HERO (tighter, stronger) */}
      <section className="relative px-6 pt-16 pb-10 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#2B1B14]/10 bg-white/55 px-4 py-2 backdrop-blur-md">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E07B39]/12">
                <Bell size={16} className="text-[#C65A1E]" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#3A241C]">
                {headline.eyebrow} — Amenities
              </p>
            </div>

            <h1 className="mt-5 text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {headline.title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="bg-gradient-to-r from-[#C65A1E] to-[#E07B39] bg-clip-text text-transparent">
                {headline.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6B5A4E] sm:text-base">
              {headline.subtitle}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/#book">Check availability</PrimaryButton>
              <SecondaryButton href="#services">View Amenities</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 pb-14 lg:px-10 lg:pb-20" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-7 flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:mb-10">
            <h2 className="text-2xl font-light tracking-tight sm:text-3xl lg:text-4xl">
              Included with every stay.
            </h2>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#E07B39]/45 to-transparent" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                service={s}
                index={i}
                onLearnMore={setActive}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA (stronger contrast, more premium) */}
      <section className="relative px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#E07B39]/18 bg-gradient-to-br from-[#2B1B14] to-[#3A241C] p-9 text-center shadow-[0_48px_160px_-110px_rgba(0,0,0,0.95)] sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(880px_420px_at_50%_0%,rgba(224,123,57,0.24),transparent_62%)]" />
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#E07B39]/14 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#F1E3D2]/80">
                Quick confirmation • Professional support
              </p>

              <h3 className="mt-3 text-3xl font-light leading-tight tracking-tight text-[#FFF7EE] sm:text-4xl">
                Ready to reserve your suite?
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#F1E3D2]/80 sm:text-base">
                Share your dates and preferences—we’ll help you finalize the right
                option quickly.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/#book"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39] px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] shadow-[0_24px_70px_-45px_rgba(0,0,0,0.65)] transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B1B14]"
                >
                  Book now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="tel:+910000000000"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#FFF7EE]/18 bg-white/10 px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B1B14]"
                >
                  Call +91 00000 00000
                </a>
              </div>

              <p className="mt-4 text-xs text-[#F1E3D2]/70">
                Response time may vary outside business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn more modal */}
      <ServiceModal open={!!active} onClose={() => setActive(null)} service={active} />
    </main>
  );
}