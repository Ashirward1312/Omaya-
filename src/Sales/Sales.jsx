// src/components/Highlights.jsx (Omaya Suites - Tailwind, Premium Theme)
import imgExecutive from "../Images/executive.jpg";
import imgDeluxe from "../Images/deluxe.jpg";
import imgRoyal from "../Images/Royal.jpg";

import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  BriefcaseBusiness,
  BedDouble,
  Crown,
  TrendingUp,
  ShieldCheck,
  Map,
  Sparkles,
  KeyRound,
  Building2,
} from "lucide-react";

const ADDRESS =
  "Omaya Suites – Main Road, Kamal Vihar Entrance, Deopuri, Raipur";

const LOCATION_POINTS = [
  "Kamal Vihar",
  "Deopuri",
  "Main Road connectivity",
  "Shubham K Mart",
  "CBD/Commercial zones",
  "Residential catchment",
  "Easy access to major roads",
];

const SERVICES = [
  "Premium furnished suites",
  "Professional hospitality management",
  "Housekeeping",
  "Reception/front-desk services",
  "Maintenance support",
  "Guest services",
  "Business-friendly environment",
  "Convenient location",
  "Hospitality-driven rental management",
];


const OWNERSHIP_BENEFITS = [
  {
    title: "Strategic Main-Road Connectivity",
    desc: "A prominent main-road location at the Kamal Vihar entrance offers convenient access and strong visibility. Connectivity can be an important factor for both personal convenience and potential guest demand.",
    Icon: Map,
  },
  {
    title: "Long-Term Growth Potential",
    desc: "As Raipur's infrastructure and surrounding areas evolve, well-connected properties may benefit from future demand and value appreciation. Actual growth depends on market conditions and the purchase price.",
    Icon: TrendingUp,
  },
  {
    title: "Professionally Managed Hospitality",
    desc: "Explore a hospitality-led ownership model with operational support and services as defined in the management agreement. Understand the included services, fees and responsibilities before purchasing.",
    Icon: ShieldCheck,
  },
  {
    title: "Potential Rental Income",
    desc: "A premium serviced suite may appeal to corporate travellers and leisure guests. Rental performance depends on occupancy, pricing, operating expenses and the applicable revenue-sharing terms.",
    Icon: KeyRound,
  },
  {
    title: "A Premium Space of Your Own",
    desc: "Own a dedicated suite for personal stays, family visits or hosting guests. Enjoy the convenience of having your own premium space, subject to the property's ownership and usage terms.",
    Icon: Sparkles,
  },
  
{
  title: "A Distinctive Premium Asset",
  desc: "Own a premium serviced suite in a hospitality-focused property. Its location, suite category and management model are important factors to evaluate when considering long-term ownership and resale potential.",
  Icon: Building2,
},

];

const SUITES = [
  {
    title: "EXECUTIVE SUITES",
    units: "16 Units",
    Icon: BriefcaseBusiness,
    img: imgExecutive,
    kicker: "BEST FOR BUSINESS STAYS",
    desc:
      "Executive Suites are designed for smart, comfortable stays with an efficient layout and premium furnishings. Ideal for corporate travel and long-stay occupancy, these suites support consistent demand and strong rental potential through managed hospitality operations.",
    bullets: [
      "Optimized for long-stay guests",
      "Premium furniture & efficient layout",
      "Business-friendly environment",
    ],
    imageSide: "right",
  },
  {
    title: "DELUXE SUITES",
    units: "3 Units",
    Icon: BedDouble,
    img: imgDeluxe,
    kicker: "UPGRADED COMFORT",
    desc:
      "Deluxe Suites offer upgraded comfort with enhanced interiors and a richer in-room experience. Built for guests who prefer premium finishes, this category supports higher nightly value and an elevated brand perception.",
    bullets: [
      "Enhanced interiors & finishes",
      "Ideal for premium short stays",
      "Higher value positioning",
    ],
    imageSide: "left",
  },
  {
    title: "ROYAL SUITES",
    units: "4 Units",
    Icon: Crown,
    img: imgRoyal,
    kicker: "TOP-TIER LUXURY",
    desc:
      "Royal Suites are the signature premium category—crafted for guests who expect a high-end experience. This segment is positioned for maximum upsell, premium stays, and strong hospitality-led rental performance.",
    bullets: [
      "Luxury feel for premium guests",
      "High upsell potential",
      "Designed for standout experiences",
    ],
    imageSide: "right",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-[#F4F1E9] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =======================
            NEW: OWNERSHIP BENEFITS (Premium + Image cards)
           ======================= */}
        

{/* OWNERSHIP BENEFITS — Compact Single Section */}
<div className="relative mb-8 overflow-hidden rounded-3xl bg-[#0F1822] shadow-[0_20px_50px_-35px_rgba(0,0,0,0.85)]">
  <div className="relative p-4 sm:p-6 lg:p-7">
    {/* Background accents */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C9A45C]/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl" />

    {/* Heading */}
    <div className="relative text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#C9A45C]/70" />
        <span className="text-[9px] font-extrabold tracking-[0.18em] text-[#C9A45C] sm:text-[10px]">
          THE OWNERSHIP ADVANTAGE
        </span>
        <span className="h-px w-8 bg-[#C9A45C]/70" />
      </div>

      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
        Why Own a Suite at{" "}
        <span className="text-[#C9A45C]">Omaya Suites?</span>
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-white/65 sm:text-sm">
        Explore premium suite ownership with a focus on location,
        hospitality-led operations, personal use and potential rental income.
      </p>
    </div>

    {/* Compact Benefit Cards */}
    <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {OWNERSHIP_BENEFITS.map(({ title, desc, Icon }, index) => (
        <div
          key={title}
          className="group flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-[#C9A45C]/35 hover:bg-white/[0.06] sm:p-5"
        >
          {/* Icon and number */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#C9A45C]/25 bg-[#C9A45C]/[0.09]">
              <Icon
                size={20}
                strokeWidth={1.7}
                className="text-[#C9A45C]"
              />
            </div>

            <span className="text-[10px] font-semibold tracking-[0.14em] text-white/25">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-4 text-sm font-extrabold leading-5 sm:text-base" style={{ background: 'linear-gradient(135deg, #F0C97A, #C9A45C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {title}
          </h3>

          <p className="mt-2 flex-1 text-xs leading-6 text-white/65 sm:text-sm">
            {desc}
          </p>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-[#C9A45C]/40 via-white/10 to-transparent" />

          {/* CTA */}
          <a
            href="#contact"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-[#C9A45C]/40 bg-[#C9A45C]/12 px-4 py-2 text-[10px] font-extrabold tracking-[0.12em] text-[#C9A45C] transition hover:border-[#C9A45C]/70 hover:bg-[#C9A45C]/20 hover:text-white group"
          >
            DISCUSS OWNERSHIP
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      ))}
    </div>

    {/* Compact disclaimer */}
    <p className="relative mx-auto mt-5 max-w-3xl text-center text-[10px] leading-5 text-white/40 sm:text-xs">
      Property appreciation and rental income are not guaranteed. Review
      purchase terms, management fees, ownership rights and expected expenses
      before making an investment decision.
    </p>
  </div>
</div>



        {/* ── Visual separator between dark block & light heading ── */}
        <div className="my-12 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A87952]/30 to-transparent" />
          <span className="rounded-full border border-[#A87952]/25 bg-white px-4 py-1.5 text-[10px] font-extrabold tracking-[0.18em] text-[#A87952] uppercase">
            The Omaya Ownership Advantage
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A87952]/30 to-transparent" />
        </div>

        {/* =======================
    SECTION HEADING
======================= */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#111A24] sm:text-4xl lg:text-5xl">
            More Than a Suite.
            <span className="block mt-1 text-[#A87952]">
              An Opportunity to Own.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
            Discover the advantages of owning a premium serviced suite at Omaya Suites,
            where strategic connectivity, hospitality-led operations and personal
            flexibility come together in one distinctive property.
          </p>
        </div>

        {/* =======================
    LOCATION & OWNERSHIP ADVANTAGE
======================= */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#111A24] shadow-[0_22px_60px_-35px_rgba(0,0,0,0.65)]">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:items-center">

            {/* LEFT: LOCATION STORY */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/30 bg-white/5 px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#C9A45C]">
                <MapPin size={14} strokeWidth={1.7} />
                <span>LOCATION. ACCESS. OPPORTUNITY.</span>
              </div>

              <h3 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                A Connected Address.
                <span className="block mt-1 text-[#C9A45C]">
                  A Considered Ownership Decision.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Located on the main road at the entrance of Kamal Vihar, Omaya Suites
                offers convenient connectivity and a clearly identifiable destination.
                For prospective owners, location is an important factor to evaluate
                when considering long-term property value, guest accessibility and
                potential hospitality demand.
              </p>

              {/* ADDRESS */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.18em] text-[#C9A45C]">
                  <MapPin size={14} />
                  PROPERTY LOCATION
                </div>

                <div className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">
                  {ADDRESS}
                </div>
              </div>

              {/* LOCATION HIGHLIGHTS */}
              <div className="mt-6">
                <div className="text-[10px] font-extrabold tracking-[0.18em] text-white/50">
                  CONNECTIVITY & SURROUNDING ADVANTAGES
                </div>

                <ul className="mt-4 grid gap-x-7 gap-y-3 sm:grid-cols-2">
                  {LOCATION_POINTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0 text-[#C9A45C]"
                      />
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-6 py-3.5 text-xs font-extrabold tracking-[0.12em] text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  DISCUSS OWNERSHIP
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <p className="mt-3 text-xs leading-5 text-white/45">
                Connect with our team for purchase details, pricing and ownership terms.
              </p>
            </div>

            {/* RIGHT: PROPERTY SNAPSHOT — SAME CARD STRUCTURE */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 sm:p-6">
                {/* Subtle gold accent */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#C9A45C]/[0.07]" />

                <div className="relative">
                  <div className="text-xs font-extrabold tracking-[0.2em] text-[#C9A45C]">
                    PROPERTY AT A GLANCE
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    An overview for prospective suite owners.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {[
                      {
                        k: "Property Category",
                        v: "Premium Serviced Suites",
                      },
                      {
                        k: "Total Suites",
                        v: "23 Premium Units",
                      },
                      {
                        k: "Suite Collection",
                        v: "16 Executive · 3 Deluxe · 4 Royal",
                      },
                      {
                        k: "Operating Model",
                        v: "Hospitality Management",
                      },
                    ].map((x, index) => (
                      <div
                        key={x.k}
                        className="group rounded-xl border border-white/[0.08] bg-black/10 p-4 transition duration-300 hover:border-[#C9A45C]/30 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#C9A45C]/20 bg-[#C9A45C]/[0.08] text-[10px] font-bold text-[#C9A45C]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="min-w-0">
                            <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/45">
                              {x.k}
                            </div>

                            <div className="mt-1.5 text-sm font-semibold leading-6 text-white">
                              {x.v}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Investment consideration note */}
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs leading-6 text-white/50">
                      Evaluate the purchase price, ownership structure, operating
                      expenses and applicable management terms before investing.
                      Future appreciation and rental income are not guaranteed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* =======================
            ORIGINAL: Services (kept)
           ======================= */}
        <div className="mt-10 rounded-3xl border border-[#A87952]/15 bg-white/70 p-7 shadow-sm backdrop-blur sm:p-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-extrabold tracking-[0.18em] text-[#A87952]">
                SERVICES & OPERATIONS
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-[#111A24]">
                Hospitality-led services designed to protect guest experience
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base">
                Omaya Suites is structured for smooth day-to-day operations—supporting
                guest satisfaction and professional rental management.
              </p>
            </div>
          </div>

          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-zinc-800">
                <CheckCircle2
                  size={16}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#A87952]"
                />
                <span className="leading-6">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* =======================
            Suites blocks (same content; suite title looks more like heading)
           ======================= */}
        <div className="mt-10 space-y-6">
          {SUITES.map(
            ({ title, units, Icon, img, kicker, desc, bullets, imageSide }, index) => {
              const imageFirst = imageSide === "left";
              const isDark = index % 2 !== 0;

              return (
                <div
                  key={title}
                  className={`overflow-hidden rounded-3xl border border-[#A87952]/15 shadow-sm ${isDark ? "bg-[#111A24]" : "bg-white"
                    }`}
                >
                  <div className="grid gap-0 lg:grid-cols-12">
                    {/* Image */}
                    <div
                      className={`relative lg:col-span-5 ${imageFirst ? "lg:order-1" : "lg:order-2"
                        }`}
                    >
                      <div className="relative h-64 w-full sm:h-80 lg:h-full">
                        <img
                          src={img}
                          alt={title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-3 py-1 text-[10px] font-extrabold tracking-[0.14em] text-white shadow-md">
                          <Icon size={14} strokeWidth={1.8} />
                          <span className="uppercase">{units}</span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                          <div className="text-[10px] font-extrabold tracking-[0.16em] text-[#A87952] uppercase">
                            {kicker}
                          </div>
                          <div className="mt-1 text-sm font-semibold text-[#111A24]">
                            {title}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`p-7 sm:p-9 lg:col-span-7 ${imageFirst ? "lg:order-2" : "lg:order-1"
                        }`}
                    >
                      {/* Better “Heading feel” without changing the suite content */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#A87952]/20 bg-[#A87952]/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em] text-[#A87952]">
                        SUITE CATEGORY
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#B58D56] to-[#C9A45C] sm:text-3xl">
                        {title}
                      </h3>
                      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#B58D56] to-[#C9A45C]" />

                      <p
                        className={`mt-4 max-w-3xl text-sm leading-7 sm:text-base ${isDark ? "text-zinc-300" : "text-zinc-700"
                          }`}
                      >
                        {desc}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm font-semibold text-[#B58D56]"
                          >
                            <CheckCircle2
                              size={16}
                              strokeWidth={1.8}
                              className="mt-0.5 shrink-0 text-[#B58D56]"
                            />
                            <span className="leading-6">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-5 py-3 text-xs font-extrabold text-white transition hover:brightness-110"
                        >
                          ENQUIRE FOR {title.split(" ")[0].toUpperCase()}{" "}
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}