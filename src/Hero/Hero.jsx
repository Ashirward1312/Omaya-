import { ArrowRight } from "lucide-react";
import heroImage from "../Images/hero.png";

/**
 * HERO — Theme applied (Chocolate • Cream • Burnt Orange)
 * Chocolate:    #2B1B14
 * Cream:        #FFF7EE
 * Burnt Orange: #C65A1E / #E07B39
 */

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#120C09]">
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Omaya Suites luxury suite"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Premium Theme Overlays (Chocolate + warm accent) */}
        <div className="absolute inset-0 bg-[#2B1B14]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_30%_20%,rgba(224,123,57,0.22),transparent_62%)]" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#120C09]/85 via-[#120C09]/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#120C09]/80 via-[#120C09]/35 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-28 sm:px-8 lg:px-10 lg:py-32">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="mb-7 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <span className="h-px w-10 bg-[#E07B39]/80" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#FFF7EE]/80 sm:text-xs">
                  Omaya Suites
                </p>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-5xl font-light leading-[0.98] tracking-[-0.03em] text-[#FFF7EE] sm:text-6xl md:text-7xl lg:text-[92px]">
                Stay{" "}
                <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7EE] via-[#FFD9C4] to-[#E07B39]">
                  beautifully.
                </span>
              </h1>

              {/* Description (short + premium) */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-[#FFF7EE]/75 sm:text-base sm:leading-8">
                A calm, refined suite experience with reliable essentials and warm,
                professional hospitality—designed for effortless stays.
              </p>

              {/* Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#C65A1E] to-[#E07B39] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] shadow-[0_26px_90px_-60px_rgba(0,0,0,0.9)] transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120C09]"
                >
                  Reserve your stay
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#suites"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/16 bg-white/5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FFF7EE] backdrop-blur-md transition hover:bg-white/10 hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120C09]"
                >
                  Explore suites
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom fade line (premium) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#E07B39]/35 to-transparent" />
      </section>
    </main>
  );
}