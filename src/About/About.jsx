// src/components/About.jsx
import img1 from "../Images/luxury.jpg";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Premium Deluxe & Royal Suites",
  "Entrance location: Kamal Vihar, Deopuri (Raipur)",
  "Strong rental-income potential for investors",
  "Professionally managed suite operations",
  "Premium interiors with hotel-like experience",
  "Ideal for business & long-stay guests",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F5F1EA] pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        {/* Kicker */}
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#B98A5A]" />

          <span className="text-xs font-semibold tracking-[0.22em] text-[#B98A5A] uppercase">
            About Omaya Suites
          </span>
        </div>

        {/* Grid */}
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              <span className="block uppercase">
                Premium Suites
              </span>

              <span className="mt-3 block text-2xl font-semibold leading-tight text-[#B98A5A] sm:text-3xl lg:text-4xl">
                Built for Lifestyle.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-700 sm:text-base">
              Omaya Suites is a premium suite property strategically
              located at the entrance of{" "}
              <span className="font-semibold text-zinc-900">
                Kamal Vihar, Deopuri, Raipur
              </span>
              , offering convenient access to surrounding residential,
              commercial and business zones.
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-700 sm:text-base">
              Designed for buyers/investors seeking{" "}
              <span className="font-semibold text-zinc-900">
                rental-income potential
              </span>{" "}
              with professionally managed suite operations.
            </p>

            {/* Features */}
            <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-zinc-800"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#B98A5A]"
                    strokeWidth={1.8}
                  />

                  <span className="leading-6">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-none bg-zinc-950 px-6 py-3 text-xs font-semibold tracking-[0.22em] uppercase text-white shadow-sm transition hover:bg-zinc-900"
              >
                Know More
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_22px_60px_-35px_rgba(0,0,0,0.55)]">
              <img
                src={img1}
                alt="Omaya Suites Luxury Interior"
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                loading="lazy"
              />
            </div>

            {/* Image Tint */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/10" />

            {/* Image Badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <div className="text-[10px] font-semibold tracking-[0.15em] text-zinc-900 uppercase">
                ✦ Premium Suites — Deluxe & Royal
              </div>

              <div className="mt-1 text-[12px] text-zinc-600">
                Kamal Vihar, Deopuri, Raipur, Chhattisgarh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
