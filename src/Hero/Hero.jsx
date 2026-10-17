import { ArrowRight } from "lucide-react";
import heroImage from "../Images/hero.png";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#0B0F14] font-sans">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0B0F14]">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Omaya Suites luxury property"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-center"
        />

        {/* OVERLAYS (slightly stronger center contrast + softer overall) */}
        <div className="absolute inset-0 bg-black/22" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/42" />
        {/* center focus vignette (tiny boost for readability) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.32),transparent_60%)]" />
        {/* warm gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,92,0.09),transparent_64%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_170px_rgba(0,0,0,0.38)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
          <div className="w-full max-w-5xl">
            {/* TOP BRAND */}
            <div className="mx-auto mb-7 flex w-fit max-w-full items-center justify-center sm:mb-9">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#C9A45C]/70 to-[#E8D4AD] sm:w-16" />

              <div className="relative mx-3 overflow-hidden rounded-full border border-[#C9A45C]/30 bg-[#0B0F14]/30 px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:mx-4 sm:px-7 sm:py-3">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C9A45C]/[0.04] via-[#E8D4AD]/[0.12] to-[#C9A45C]/[0.04]" />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#E8D4AD]/70 to-transparent" />

                <p
                  className="relative whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.42em] text-[#E8D4AD] sm:text-xs"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
                >
                  OMAYA SUITES
                </p>
              </div>

              <span className="h-px w-10 bg-gradient-to-l from-transparent via-[#C9A45C]/70 to-[#E8D4AD] sm:w-16" />
            </div>

            {/* HEADINGS */}
            <h1 className="mx-auto max-w-5xl leading-[1.03]">
              {/* Own a Suite */}
              <span className="relative inline-block">
                <span className="font-display bg-gradient-to-r from-[#E8D4AD] via-[#FFF1CC] to-[#C9A45C] bg-clip-text text-5xl font-black tracking-[-0.02em] text-transparent drop-shadow-[0_18px_44px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-8xl">
                  Own a Suite
                </span>

                <span className="absolute -bottom-2 left-1/2 h-[1.5px] w-[54%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#C9A45C]/95 to-transparent sm:-bottom-3" />
                <span className="absolute -bottom-[10px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#C9A45C]/95 sm:-bottom-[13px]" />
              </span>

              {/* Not Just... (softened stroke/shadow) */}
              <span
                className="font-display mt-6 block text-4xl font-semibold tracking-[-0.01em] text-[#F2E7D6] sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  WebkitTextStroke: "0.45px rgba(11,15,20,0.18)",
                  textShadow:
                    "0 20px 48px rgba(0,0,0,0.42), 0 3px 10px rgba(0,0,0,0.18)",
                }}
              >
                Not Just a Square Foot.
              </span>
            </h1>

            {/* TAGLINE */}
            <div className="mx-auto mt-8 flex w-fit max-w-full items-center justify-center sm:mt-9">
              <div className="relative overflow-hidden rounded-full border border-[#C9A45C]/25 bg-[#0B0F14]/35 px-5 py-3 backdrop-blur-md sm:px-8 sm:py-3.5">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#C9A45C]/[0.03] via-[#E8D4AD]/[0.10] to-[#C9A45C]/[0.03]" />
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E8D4AD]/60 to-transparent" />

                <div className="relative flex items-center gap-3 sm:gap-5">
                  <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#C9A45C] sm:w-10" />

                  <p
                    className="whitespace-nowrap text-center text-[10px] font-medium tracking-[0.14em] text-[#D8C7AA] sm:text-xs md:text-sm md:tracking-[0.18em]"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
                  >
                    Where Capital Meets Class.
                  </p>

                  <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#C9A45C] sm:w-10" />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:mt-11">
              <a
                href="#investment-enquiry"
                className="group relative inline-flex items-center justify-center gap-4 rounded-xl px-10 py-[18px] text-xs font-semibold uppercase tracking-[0.18em] text-[#0B0F14] shadow-[0_26px_78px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D4AD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14] sm:px-11 sm:text-sm"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B58D56] via-[#E8D4AD] to-[#C9A45C] opacity-[0.98] transition-all duration-300 group-hover:brightness-110" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-black/12" />
                <span className="absolute inset-[1px] rounded-[11px] ring-1 ring-white/18" />
                <span className="absolute inset-0 rounded-xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.26),transparent_58%)] opacity-60" />

                <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/22 blur-[1px] transition-all duration-700 group-hover:left-[125%]" />
                </span>

                <span className="relative">Explore Ownership</span>
                <ArrowRight
                  size={18}
                  strokeWidth={1.9}
                  className="relative -translate-y-[0.5px] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              
            </div>
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/55 to-transparent" />
      </section>
    </main>
  );
}