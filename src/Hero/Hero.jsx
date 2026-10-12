
import { ArrowRight, TrendingUp, Building2 } from "lucide-react";
import heroImage from "../Images/hero.png";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Omaya Suites luxury property"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Premium Overlays */}
        <div className="absolute inset-0 bg-[#111A24]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_30%_20%,rgba(201,164,92,0.22),transparent_62%)]" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#0B0F14]/95 via-[#0B0F14]/65 to-[#0B0F14]/10" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#0B0F14]/90 via-[#0B0F14]/30 to-transparent" />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-28 sm:px-8 lg:px-10 lg:py-32">
            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="mb-7 inline-flex items-center gap-4 rounded-full border border-[#C9A45C]/30 bg-black/20 px-4 py-3 backdrop-blur-md">
                <span className="h-px w-8 bg-[#C9A45C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F4F1E9]/90 sm:text-xs sm:tracking-[0.4em]">
                  Luxury Suite Ownership · Investment Opportunity
                </p>
              </div>

              {/* Main Heading */}
              <h1 className="max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] text-[#F4F1E9] sm:text-6xl md:text-7xl lg:text-[88px]">
                Own a Suite.
                <span className="mt-2 block bg-gradient-to-r from-[#F4F1E9] via-[#F2E2C7] to-[#C9A45C] bg-clip-text font-semibold text-transparent">
                  Invest in Luxury.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-sm leading-7 text-[#F4F1E9]/80 sm:text-base sm:leading-8">
                Discover an exclusive opportunity to own a luxury suite at
                Omaya Suites. Explore premium spaces, refined design, and an
                ownership opportunity for those who value luxury and
                long-term potential.
              </p>

              {/* Ownership Highlights */}
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <div className="flex items-center gap-3 text-sm text-[#F4F1E9]/85">
                  <Building2 size={18} className="text-[#C9A45C]" />
                  <span>Explore Suite Ownership</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#F4F1E9]/85">
                  <TrendingUp size={18} className="text-[#C9A45C]" />
                  <span>Discuss Investment Potential</span>
                </div>
              </div>

              {/* Sales CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#suites"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_26px_90px_-50px_rgba(0,0,0,0.9)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                >
                  Explore Ownership
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#investment-enquiry"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#C9A45C]/50 bg-white/5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F4F1E9] backdrop-blur-md transition hover:border-[#C9A45C] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                >
                  Enquire About Investment
                  <ArrowRight size={16} className="text-[#C9A45C]" />
                </a>
              </div>

              {/* Trust Note */}
              <p className="mt-6 max-w-xl text-xs leading-6 text-[#F4F1E9]/55">
                Connect with our team to learn about ownership options,
                pricing, terms, and property details.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gold Line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/50 to-transparent" />
      </section>
    </main>
  );
}
