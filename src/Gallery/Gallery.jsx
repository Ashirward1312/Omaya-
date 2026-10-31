// src/components/Gallery.jsx (OMAYA — Suite Filters + Image-First + Gold Theme + Autoplay Video)
import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  PlayCircle,
  X,
  Crown,
  Star,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* Videos (LAST section) */
import vidRoyal from "../Images/Royal 6.mp4";
import vidDeluxe from "../Images/Deluxe 6.mp4";
import vidExecutive from "../Images/Executive 6.mp4";

/* Royal Images */
import royal1 from "../Images/Royal 1.webp";
import royal2 from "../Images/Royal 2.webp";
import royal3 from "../Images/Royal 3.webp";
import royal4 from "../Images/Royal 4.webp";
import royal5 from "../Images/Royal 5.webp";

/* Deluxe Images */
import deluxe1 from "../Images/Deluxe 1.webp";
import deluxe2 from "../Images/Deluxe 2.webp";
import deluxe3 from "../Images/Deluxe 3.webp";
import deluxe4 from "../Images/Deluxe 4.webp";
import deluxe5 from "../Images/Deluxe 5.webp";

/* Executive Images (your folder has "Exceutive") */
import exec1 from "../Images/Exceutive 1.webp";
import exec2 from "../Images/Exceutive 2.webp";
import exec3 from "../Images/Exceutive 3.webp";
import exec4 from "../Images/Exceutive 4.webp";
import exec5 from "../Images/Exceutive 5.webp";

/* ─────────────────────────────────────────────
   Single Gold Accent (NO green/purple)
───────────────────────────────────────────── */
const ACCENT = { from: "#C9A45C", to: "#8F613B" };

const FILTERS = [
  { id: "royal", label: "Royal", Icon: Crown },
  { id: "deluxe", label: "Deluxe", Icon: Star },
  { id: "executive", label: "Executive", Icon: BriefcaseBusiness },
];

/* Images first, Video last */
const MEDIA = [
  // Royal
  { type: "image", category: "royal", src: royal1, title: "Royal Suite" },
  { type: "image", category: "royal", src: royal2, title: "Royal Suite" },
  { type: "image", category: "royal", src: royal3, title: "Royal Suite" },
  { type: "image", category: "royal", src: royal4, title: "Royal Suite" },
  { type: "image", category: "royal", src: royal5, title: "Royal Suite" },
  { type: "video", category: "royal", src: vidRoyal, title: "Royal Suite — Video Tour" },

  // Deluxe
  { type: "image", category: "deluxe", src: deluxe1, title: "Deluxe Suite" },
  { type: "image", category: "deluxe", src: deluxe2, title: "Deluxe Suite" },
  { type: "image", category: "deluxe", src: deluxe3, title: "Deluxe Suite" },
  { type: "image", category: "deluxe", src: deluxe4, title: "Deluxe Suite" },
  { type: "image", category: "deluxe", src: deluxe5, title: "Deluxe Suite" },
  { type: "video", category: "deluxe", src: vidDeluxe, title: "Deluxe Suite — Video Tour" },

  // Executive
  { type: "image", category: "executive", src: exec1, title: "Executive Suite" },
  { type: "image", category: "executive", src: exec2, title: "Executive Suite" },
  { type: "image", category: "executive", src: exec3, title: "Executive Suite" },
  { type: "image", category: "executive", src: exec4, title: "Executive Suite" },
  { type: "image", category: "executive", src: exec5, title: "Executive Suite" },
  { type: "video", category: "executive", src: vidExecutive, title: "Executive Suite — Video Tour" },
];

function prettyCategory(cat) {
  if (cat === "royal") return "ROYAL SUITE";
  if (cat === "deluxe") return "DELUXE SUITE";
  return "EXECUTIVE SUITE";
}

/* Bigger premium layout spans */
function getImageSpan(i) {
  // for 5 images: 1 hero + 4 supporting
  const pattern = [
    "md:col-span-7 md:row-span-2", // hero
    "md:col-span-5 md:row-span-1",
    "md:col-span-5 md:row-span-1",
    "md:col-span-4 md:row-span-1",
    "md:col-span-8 md:row-span-1",
  ];
  return pattern[i] || "md:col-span-4 md:row-span-1";
}

/* ─────────────────────────────────────────────
   Lightbox (Images only): Prev/Next + Close
───────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!images?.length || index == null) return null;
  const item = images[index];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-[91] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F14] shadow-[0_50px_160px_-110px_rgba(0,0,0,0.95)]">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <div className="text-[10px] font-extrabold  uppercase text-[#C9A45C]">
              {prettyCategory(item.category)}
            </div>
            <div className="mt-1 truncate text-sm font-semibold text-white">
              {item.title || "Preview"}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block text-xs font-semibold text-white/55">
              {index + 1} / {images.length}
            </div>

            <button
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
              aria-label="Close"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="relative bg-black">
          <img
            src={item.src}
            alt={item.title || "Suite image"}
            className="h-[260px] w-full select-none object-contain sm:h-[540px]"
            loading="lazy"
            draggable={false}
          />

          {/* Prev/Next */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white/90 backdrop-blur transition hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            aria-label="Previous"
            title="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white/90 backdrop-blur transition hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            aria-label="Next"
            title="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />
        </div>

        <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <div className="text-xs text-white/55">
            Use ← → keys • ESC to close
          </div>
          <div
            className="h-1.5 w-28 rounded-full"
            style={{ background: `linear-gradient(90deg, ${ACCENT.from}, ${ACCENT.to})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("royal");
  const [lbIndex, setLbIndex] = useState(null);

  const { images, video } = useMemo(() => {
    const suiteItems = MEDIA.filter((m) => m.category === active);
    const imgs = suiteItems.filter((m) => m.type === "image");
    const vid = suiteItems.find((m) => m.type === "video") || null;
    return { images: imgs, video: vid };
  }, [active]);

  const close = useCallback(() => setLbIndex(null), []);
  const openAt = useCallback((idx) => setLbIndex(idx), []);

  const prev = useCallback(() => {
    setLbIndex((i) => {
      if (i == null) return i;
      return (i - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const next = useCallback(() => {
    setLbIndex((i) => {
      if (i == null) return i;
      return (i + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => setLbIndex(null), [active]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#111A24] pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#B58D56]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (no "Gallery" word) */}
        <div className="text-center">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#C9A45C]" />
            <span className="text-xs font-extrabold  text-[#C9A45C] uppercase">
              SUITE EXPERIENCE
            </span>
            <span className="h-px w-12 bg-[#C9A45C]" />
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#F4F1E9] sm:text-4xl">
            Explore <span className="text-[#C9A45C]">Omaya Square</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Select a suite category to view curated images first—then a walkthrough video at the end.
          </p>
        </div>

        {/* Filters (NO All) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist">
          {FILTERS.map(({ id, label, Icon }) => {
            const on = active === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setActive(id)}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold  transition",
                  "border",
                  on
                    ? "text-white shadow-[0_18px_50px_-38px_rgba(201,164,92,0.75)]"
                    : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/15 hover:bg-white/[0.06]",
                ].join(" ")}
                style={
                  on
                    ? {
                        background: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})`,
                        borderColor: `${ACCENT.from}66`,
                      }
                    : undefined
                }
              >
                <Icon size={16} className={on ? "text-white" : "text-white/70"} />
                {label}
              </button>
            );
          })}
        </div>

        {/* IMAGES (BIGGER) */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:auto-rows-[260px] md:grid-cols-12">
          {images.map((item, idx) => (
            <button
              key={`${item.category}-img-${idx}`}
              type="button"
              onClick={() => openAt(idx)}
              className={[
                "group relative overflow-hidden rounded-3xl bg-black/40 shadow-[0_22px_80px_-60px_rgba(0,0,0,0.75)]",
                "outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]/40",
                getImageSpan(idx),
              ].join(" ")}
              title="Open"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

              <img
                src={item.src}
                alt={item.title || "Suite image"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />

              <div className="absolute bottom-4 left-4 z-20 text-left">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-extrabold  text-white/90 backdrop-blur-md">
                  {prettyCategory(active)}
                </div>
                <div className="mt-2 text-xs font-semibold text-white/85">
                  Click to view
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1 opacity-80"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT.from}, ${ACCENT.to})`,
                }}
              />
            </button>
          ))}
        </div>

        {/* VIDEO LAST (AUTOPLAY) */}
        {video ? (
          <div className="mt-10">
            <div className="mx-auto flex max-w-3xl items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/10" />
              <div className="text-[10px] font-extrabold text-white/55 uppercase">
                Video Tour
              </div>
              <span className="h-px w-10 bg-white/10" />
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_22px_80px_-60px_rgba(0,0,0,0.75)]">
              <div className="relative">
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="h-[240px] w-full bg-black object-cover sm:h-[420px]"
                />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] font-extrabold  text-white/90 backdrop-blur">
                  <PlayCircle size={14} className="text-[#C9A45C]" />
                  {prettyCategory(active)}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Lightbox (images only) */}
      <Lightbox
        images={images}
        index={lbIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}