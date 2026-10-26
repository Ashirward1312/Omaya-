// src/components/Highlights.jsx (Omaya Suites - Tailwind, Premium Theme)
import { useState, useEffect } from "react";

import imgExecutive from "../Images/executive.jpg";
import imgDeluxe from "../Images/deluxe.jpg";
import imgRoyal from "../Images/Royal.jpg";

// ✅ Add/adjust these image imports as per your folder/file names
import imgOmayaBuilding from "../Images/omaya2.jpg";
import imgPool from "../Images/pool.jpg";
import imgReception from "../Images/reception.jpg";

import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  BriefcaseBusiness,
  BedDouble,
  Crown,
  ChevronLeft,
  ChevronRight,
  Waves,
  ConciergeBell,
  Building2,
  TrendingUp,
  Sparkles,
  Plane,
  Train,
  Navigation,
  ShoppingBag,
  Car,
  Building,
} from "lucide-react";

const ADDRESS =
  "Omaya Suites – Main Road, Kamal Vihar Entrance, Deopuri, Raipur";

const CONNECTIVITY_HUBS = [
  {
    title: "Atal Path Expressway",
    time: "2 Mins",
    detail: "Swift highway corridor access",
    icon: Car,
  },
  {
    title: "Swami Vivekananda Airport",
    time: "15 Mins",
    detail: "Seamless domestic air travel",
    icon: Plane,
  },
  {
    title: "Raipur Railway Station",
    time: "15 Mins",
    detail: "Central transit & junction hub",
    icon: Train,
  },
  {
    title: "Magneto The Mall",
    time: "15 Mins",
    detail: "Retail, dining & entertainment",
    icon: ShoppingBag,
  },
];

const SURROUNDING_ADVANTAGES = [
  "Main Road Entrance – Kamal Vihar & Deopuri Junction",
  "Direct Access to Key CBD & High-Growth Commercial Zones",
  "Close Proximity to Shubham K-Mart & Daily Retail Conveniences",
  "Established, High-Density Upscale Residential Catchment",
  "Wide Arterial Roads with Seamless City-Wide Access",
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

/* ========================================================
   ✅ WHY OWN OMAYA SUITES (Short & Simple Titles, 10s Auto-Slide)
======================================================== */
const WHY_OWN_SLIDES = [
  {
    id: "investment",
    tab: "Investment",
    category: "INVESTMENT PURPOSE",
    title: "Prime Investment & Ownership",
    subtitle: "High ROI Serviced Suites at Kamal Vihar",
    img: imgOmayaBuilding,
    Icon: TrendingUp,
    badge: "Investment Asset",
    desc: "Positioned at the Kamal Vihar entrance on Main Road, Deopuri. Invest in high-growth commercial hospitality with strong capital appreciation and managed rental returns.",
    bullets: [
      "Prime Main-Road Entrance (Kamal Vihar)",
      "High-Yield Serviced Suite Ownership",
      "Fast-Appreciating Commercial Corridor",
      "100% Transparent & Hands-Off Asset",
    ],
    cta: "EXPLORE INVESTMENT",
  },
  {
    id: "royal",
    tab: "Royal Suite",
    category: "SIGNATURE SUITE",
    title: "Royal Suite",
    subtitle: "Private In-Room Pool • 900 sq. ft.",
    img: imgRoyal,
    Icon: Crown,
    badge: "4 Exclusive Units",
    desc: "Designed for elite guests seeking absolute luxury. Features a private in-room swimming pool, private balcony, and king-size bed for top-tier rental tariffs.",
    bullets: [
      "900 sq. ft. Suite with Private Pool",
      "King-Size Bed for 2 Guests",
      "Private Balcony & Dining Area",
      "Signature Guest Experience & Highest Yield",
    ],
    cta: "ENQUIRE FOR ROYAL",
  },
  {
    id: "deluxe",
    tab: "Deluxe Suite",
    category: "PREMIUM COMFORT",
    title: "Deluxe Suite",
    subtitle: "In-Room Jacuzzi • 800 sq. ft.",
    img: imgDeluxe,
    Icon: BedDouble,
    badge: "3 Limited Units",
    desc: "Elevated comfort with personal wellness. A private in-room jacuzzi and refined finishes ensure high appeal for staycations and weekend getaways.",
    bullets: [
      "800 sq. ft. Spacious Master Suite",
      "Private In-Room Jacuzzi",
      "Separate Dining Area & King Bed",
      "High Demand for Leisure Stays",
    ],
    cta: "ENQUIRE FOR DELUXE",
  },
  {
    id: "executive",
    tab: "Executive Suite",
    category: "BUSINESS SUITE",
    title: "Executive Suite",
    subtitle: "Corporate Stays • 750 sq. ft.",
    img: imgExecutive,
    Icon: BriefcaseBusiness,
    badge: "16 Prime Units",
    desc: "Crafted for corporate executives and extended stays. Combines work-friendly design with premium comfort for reliable year-round occupancy.",
    bullets: [
      "750 sq. ft. with Private Balcony",
      "Ergonomic Business Layout",
      "King-Size Bed & Dining Area",
      "Consistent Year-Round Corporate Demand",
    ],
    cta: "ENQUIRE FOR EXECUTIVE",
  },
  {
    id: "pool",
    tab: "Swimming Pool",
    category: "LIFESTYLE AMENITY",
    title: "Swimming Pool",
    subtitle: "Resort Ambience & Guest Leisure",
    img: imgPool,
    Icon: Waves,
    badge: "Lifestyle Amenity",
    desc: "A crystal-clear recreational swimming pool creating a resort-like stay. Boosts guest satisfaction, 5-star ratings, and repeat bookings.",
    bullets: [
      "Resort-Grade Leisure Pool",
      "Key Driver for Weekend Bookings",
      "Higher Guest Reviews & Ratings",
      "Enhances Overall Property Appeal",
    ],
    cta: "EXPLORE AMENITIES",
  },
  {
    id: "reception",
    tab: "Reception",
    category: "MANAGED OPERATIONS",
    title: "Reception & Concierge",
    subtitle: "24/7 Front-Desk & Guest Services",
    img: imgReception,
    Icon: ConciergeBell,
    badge: "Managed Services",
    desc: "A double-height welcome lobby with 24/7 concierge. Suite owners enjoy effortless passive ownership with structured check-ins and housekeeping.",
    bullets: [
      "Grand Double-Height Welcome Lobby",
      "24/7 Front Desk & Concierge",
      "Housekeeping & Property Care",
      "100% Hands-Off Managed Hospitality",
    ],
    cta: "TALK TO OUR TEAM",
  },
];

const SUITES = [
  {
    title: "ROYAL SUITES",
    units: "4 Units",
    Icon: Crown,
    img: imgRoyal,
    kicker: "TOP-TIER LUXURY",
    desc:
      "Royal Suites represent the finest in luxury and exclusivity. Featuring a private in-room swimming pool, a separate dining area, and a private balcony, each suite is designed to deliver an exceptional stay with elevated comfort and an indulgent atmosphere.",
    bullets: [
      "900 sq. ft. luxury suite",
      "Luxury king-size bed for 2 guests",
      "Private in-room swimming pool",
      "Separate dining area",
      "Private balcony",
      "Exclusive premium guest experience",
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
      "Deluxe Suites elevate the guest experience with refined interiors, enhanced finishes, and a private in-room jacuzzi. Designed for guests seeking extra comfort and indulgence, these suites combine relaxation, privacy, and premium hospitality.",
    bullets: [
      "800 sq. ft. spacious suite",
      "Luxury king-size bed for 2 guests",
      "Private in-room jacuzzi",
      "Separate dining area",
      "Enhanced interiors and premium finishes",
    ],
    imageSide: "left",
  },
  {
    title: "EXECUTIVE SUITES",
    units: "16 Units",
    Icon: BriefcaseBusiness,
    img: imgExecutive,
    kicker: "BEST FOR BUSINESS STAYS",
    desc:
      "Executive Suites combine practical elegance with premium comfort. Featuring a spacious layout, a luxury king-size bed, and dedicated dining space, they are ideal for corporate travellers and extended stays, with attractive potential for managed hospitality operations.",
    bullets: [
      "750 sq. ft. spacious suite",
      "Luxury king-size bed for 2 guests",
      "Separate dining area",
      "Private balcony",
      "Efficient layout for business stays",
    ],
    imageSide: "right",
  },
];

export default function Highlights() {
  // ✅ Slider state (Why Own) with 5-second auto transition
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalSlides = WHY_OWN_SLIDES.length;
  const slide = WHY_OWN_SLIDES[activeSlide];

  // 10-second auto slide timer with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // tick every 50ms
    const totalTime = 10000; // 10 seconds
    const step = (intervalTime / totalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % totalSlides);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, activeSlide, totalSlides]);

  const handleSelectSlide = (idx) => {
    setActiveSlide(idx);
    setProgress(0);
  };

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  return (
    <section id="highlights" className="bg-[#F4F1E9] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            ✅ REDESIGNED: WHY OWN OMAYA SUITES (Ultra-Premium, 10s Auto-Slide, Full Uncropped Images)
           ======================================================== */}
        <div
          className="relative mb-12 overflow-hidden rounded-3xl border border-[#B58D56]/20 bg-white/90 p-5 shadow-[0_20px_50px_-20px_rgba(181,141,86,0.18)] backdrop-blur-md sm:p-8 lg:p-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle warm glow accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C9A45C]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#B58D56]/10 blur-3xl" />

          {/* Heading */}
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B58D56]/30 bg-[#B58D56]/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#A87952]">
              <Sparkles size={13} className="text-[#B58D56]" />
              <span>THE OWNERSHIP ADVANTAGE</span>
            </div>

            <h2 className="mt-3 text-2xl font-serif font-bold tracking-tight text-[#111A24] sm:text-3xl">
              Why Own at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58D56] via-[#C9A45C] to-[#8F613B]">
                Omaya Suites?
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-zinc-600 sm:text-sm">
              Explore Raipur’s flagship hospitality asset—crafted for high-yield returns, capital appreciation, and signature luxury living.
            </p>
          </div>

          {/* Slider Main Showcase (Image Dominant, Concise Content) */}
          <div className="relative mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Image Showcase (Big 16:10 ratio, uncropped view) */}
            <div className="relative lg:col-span-7 xl:col-span-7">
              <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-xl border border-[#B58D56]/20 sm:rounded-3xl">
                <img
                  key={slide.id}
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Left/Right Arrows */}
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/85 text-[#111A24] shadow-xl backdrop-blur-md transition-all duration-200 hover:bg-white hover:scale-110 active:scale-95 sm:h-11 sm:w-11 sm:left-4"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/85 text-[#111A24] shadow-xl backdrop-blur-md transition-all duration-200 hover:bg-white hover:scale-110 active:scale-95 sm:h-11 sm:w-11 sm:right-4"
                >
                  <ChevronRight size={20} />
                </button>

                {/* 10-Second Animated Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 h-1.5 bg-black/20 backdrop-blur-xs">
                  <div
                    className="h-full bg-gradient-to-r from-[#B58D56] via-[#C9A45C] to-[#E5C989] transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Concise Content Column (Clean, High-Impact, Less Clutter) */}
            <div className="flex flex-col justify-center lg:col-span-5 xl:col-span-5">
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#B58D56]/25 bg-[#B58D56]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#A87952]">
                <Building2 size={13} />
                <span>{slide.category}</span>
              </div>

              <h3 className="mt-2.5 text-xl font-bold leading-tight text-[#111A24] sm:text-2xl">
                {slide.title}
              </h3>

              <div className="mt-1 text-xs sm:text-sm font-semibold text-[#A87952]">
                {slide.subtitle}
              </div>

              <p className="mt-2.5 text-xs sm:text-sm leading-6 text-zinc-600">
                {slide.desc}
              </p>

              {/* 4 Concise Key Bullets */}
              <div className="mt-5 grid gap-2.5">
                {slide.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2.5 rounded-xl border border-[#B58D56]/15 bg-[#F4F1E9]/60 px-3.5 py-2 text-xs font-semibold text-zinc-800 transition hover:bg-[#F4F1E9]"
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-[#B58D56]"
                    />
                    <span className="leading-5">{b}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-6 py-3 text-xs font-extrabold tracking-wider text-white shadow-lg shadow-[#B58D56]/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
                >
                  {slide.cta}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Minimal Slide Dots Indicator */}
          <div className="mt-8 flex justify-center items-center gap-2">
            {WHY_OWN_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? "w-8 bg-[#B58D56]"
                    : "w-2 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

        </div>

        {/* ── Visual separator between dark block & light heading ── */}
        <div className="my-12 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A87952]/30 to-transparent" />
          <span className="rounded-full border border-[#A87952]/25 bg-white px-4 py-1.5 text-[10px] font-extrabold text-[#A87952] uppercase">
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/30 bg-white/5 px-4 py-2 text-[10px] font-extrabold text-[#C9A45C]">
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
                <div className="flex items-center gap-2 text-[10px] font-extrabold text-[#C9A45C]">
                  <MapPin size={14} />
                  PROPERTY LOCATION
                </div>

                <div className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">
                  {ADDRESS}
                </div>
              </div>

              {/* LOCATION HIGHLIGHTS */}
              <div className="mt-7">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C9A45C]">
                  KEY TRANSIT & CONNECTIVITY (TRAVEL TIME)
                </div>

                {/* 4 Quick Transit Cards */}
                <div className="mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {CONNECTIVITY_HUBS.map((hub) => {
                    const IconComponent = hub.icon;
                    return (
                      <div
                        key={hub.title}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-[#C9A45C]/40 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A45C]/15 text-[#C9A45C]">
                            <IconComponent size={16} strokeWidth={2} />
                          </div>
                          <span className="rounded-full bg-[#C9A45C]/20 px-2 py-0.5 text-[11px] font-bold text-[#E8C882]">
                            {hub.time}
                          </span>
                        </div>
                        <div className="mt-2.5 text-xs font-bold leading-tight text-white group-hover:text-[#E8C882]">
                          {hub.title}
                        </div>
                        <div className="mt-0.5 text-[10px] text-white/50 leading-tight">
                          {hub.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Surrounding Advantages Checklist */}
                <div className="mt-5">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/50">
                    STRATEGIC SURROUNDING ADVANTAGES
                  </div>

                  <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {SURROUNDING_ADVANTAGES.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-white/80"
                      >
                        <CheckCircle2
                          size={15}
                          strokeWidth={2}
                          className="mt-0.5 shrink-0 text-[#C9A45C]"
                        />
                        <span className="leading-5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-6 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
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

            {/* RIGHT: PROPERTY SNAPSHOT */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 sm:p-6">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#C9A45C]/[0.07]" />

                <div className="relative">
                  <div className="text-xs font-extrabold text-[#C9A45C]">
                    PROPERTY AT A GLANCE
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    An overview for prospective suite owners.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {[
                      { k: "Property Category", v: "Premium Serviced Suites" },
                      { k: "Total Suites", v: "23 Premium Units" },
                      { k: "Suite Collection", v: "16 Executive · 3 Deluxe · 4 Royal" },
                      { k: "Operating Model", v: "Hospitality Management" },
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
                            <div className="text-[10px] font-extrabold uppercase text-white/45">
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
              <div className="text-xs font-extrabold text-[#A87952]">
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
            Suites blocks (unchanged)
           ======================= */}
        <div className="mt-10 space-y-6">
          {SUITES.map(
            ({ title, units, Icon, img, kicker, desc, bullets, imageSide }, index) => {
              const imageFirst = imageSide === "left";
              const isDark = index % 2 !== 0;

              return (
                <div
                  key={title}
                  className={`overflow-hidden rounded-3xl border border-[#A87952]/15 shadow-sm ${
                    isDark ? "bg-[#111A24]" : "bg-white"
                  }`}
                >
                  <div className="grid gap-0 lg:grid-cols-12">
                    {/* Image */}
                    <div
                      className={`relative lg:col-span-5 ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
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

                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B58D56] to-[#8F613B] px-3 py-1 text-[10px] font-extrabold text-white shadow-md">
                          <Icon size={14} strokeWidth={1.8} />
                          <span className="uppercase">{units}</span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                          <div className="text-[10px] font-extrabold text-[#A87952] uppercase">
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
                      className={`p-7 sm:p-9 lg:col-span-7 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#A87952]/20 bg-[#A87952]/10 px-4 py-2 text-[10px] font-extrabold text-[#A87952]">
                        SUITE CATEGORY
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#B58D56] to-[#C9A45C] sm:text-3xl">
                        {title}
                      </h3>
                      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#B58D56] to-[#C9A45C]" />

                      <p
                        className={`mt-4 max-w-3xl text-sm leading-7 sm:text-base ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
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